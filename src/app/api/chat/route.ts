import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { rateLimit } from '@/lib/rateLimit';
import { sanitizeInput } from '@/lib/security';

export async function POST(req: Request) {
  try {
    // 1. IP-based Rate Limiting (DDoS / Spam Protection)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '127.0.0.1';
    const limitResult = rateLimit(ip, 15, 60000); // 15 requests per minute

    if (!limitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((limitResult.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }

    // 2. Parse & Validate Payload
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Sanitize and limit request size to prevent resource consumption
    const sanitizedMessage = sanitizeInput(message, 1000); // Max 1000 chars

    if (!sanitizedMessage) {
      return NextResponse.json({ error: 'Invalid message payload' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Gemini API key is not configured.' }, { status: 500 });
    }

    // Validate history length and sanitize elements
    const safeHistory = Array.isArray(history) 
      ? history.slice(-20).map((h: any) => ({
          role: h.role === 'user' || h.role === 'model' ? h.role : 'user',
          parts: Array.isArray(h.parts) && typeof h.parts[0]?.text === 'string'
            ? [{ text: sanitizeInput(h.parts[0].text, 1000) }]
            : [{ text: '' }]
        }))
      : [];

    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Read the Knowledge Base
    const kbPath = path.join(process.cwd(), 'src', 'data', 'codepeaknepal_rag_knowledge_base.md');
    let knowledgeBase = '';
    try {
      knowledgeBase = fs.readFileSync(kbPath, 'utf8');
    } catch (e) {
      console.warn("Could not read knowledge base file, falling back to default.", e);
      knowledgeBase = "You are the CodePeak Nepal AI Assistant. Help the user with their queries.";
    }

    // Construct the System Instruction
    const systemInstruction = `You are the official "Code Peak Nepal AI Assistant", a friendly, professional, and highly knowledgeable chatbot representing the digital agency CodePeak Nepal.
Your primary goal is to help users learn about CodePeak Nepal's services, pricing, team, and processes.
You MUST base ALL your answers on the following Knowledge Base. If a user asks something not in the knowledge base, politely inform them that you don't have that information and recommend they contact the team via the contact page or info@codepeaknepal.com.
Do NOT make up any prices, services, or facts. Be concise, polite, and helpful. Use markdown formatting like bullet points or bold text when appropriate.

KNOWLEDGE BASE:
${knowledgeBase}
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction
    });

    const chat = model.startChat({
      history: safeHistory,
    });

    const result = await chat.sendMessage(sanitizedMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Gemini API key is not configured.' }, { status: 500 });
    }

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
      model: "gemini-1.5-flash",
      systemInstruction: systemInstruction
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}

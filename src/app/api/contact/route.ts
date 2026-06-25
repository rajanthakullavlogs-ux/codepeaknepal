import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rateLimit';
import { sanitizeInput, validateEmail } from '@/lib/security';

export async function POST(req: Request) {
  try {
    // 1. IP-based Rate Limiting (Spam / DDoS Protection)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '127.0.0.1';
    const limitResult = rateLimit(ip, 5, 60000); // Max 5 submissions per minute

    if (!limitResult.success) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a minute before trying again.' },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((limitResult.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }

    // 2. Parse payload
    const { name, email, phone, subject, message } = await req.json();

    // Basic Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // 3. Email Format Validation
    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // 4. Sanitize and Limit Lengths to prevent database/payload bloat
    const safeName = sanitizeInput(name, 100);
    const safeEmail = sanitizeInput(email, 100);
    const safePhone = sanitizeInput(phone, 30);
    const safeSubject = sanitizeInput(subject, 200);
    const safeMessage = sanitizeInput(message, 5000);

    // 5. Send Email via Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // sending to yourself (or an admin email)
        replyTo: safeEmail,
        subject: `New Contact: ${safeSubject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safeMessage}</p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

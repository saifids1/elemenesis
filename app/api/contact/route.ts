import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.HOSTINGER_EMAIL || !process.env.HOSTINGER_EMAIL_PASSWORD) {
      console.error('Missing email environment variables');
      return NextResponse.json(
        { error: 'Email configuration error. Please check server settings.' },
        { status: 500 }
      );
    }

    // ✅ FIXED: Use createTransport (not createTransporter)
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.HOSTINGER_SMTP_PORT || '465'),
      secure: true, // SSL
      auth: {
        user: process.env.HOSTINGER_EMAIL,
        pass: process.env.HOSTINGER_EMAIL_PASSWORD,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email server connection failed. Please check your credentials.' },
        { status: 500 }
      );
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.HOSTINGER_EMAIL,
      to: process.env.CONTACT_EMAIL || process.env.HOSTINGER_EMAIL,
      subject: `New Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0D231D; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0D231D; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #00cba9; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p style="color: #00cba9; margin: 0;">Elemensis</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    // Auto-reply to user
    const userMailOptions = {
      from: process.env.HOSTINGER_EMAIL,
      to: email,
      subject: 'Thank you for contacting Elemensis',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #00cba9; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Thank You for Contacting Elemensis!</h2>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to Elemensis. We have received your message and will get back to you within 24 hours.</p>
                // <p><strong>Your Message Summary:</strong></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <br>
                <p>Best regards,</p>
                <p><strong>Elemensis Team</strong></p>
              </div>
              <div class="footer">
                <p>This is an automated response. Please do not reply to this email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        Thank You for Contacting Elemensis!
        
        Dear ${name},
        
        Thank you for reaching out to Elemensis. We have received your message and will get back to you within 24 hours.
        
        Your Message Summary:
        Subject: ${subject}
        Message: ${message}
        
        Best regards,
        Elemensis Team
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
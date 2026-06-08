import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 2. Server-side Validation Check
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required form fields." },
        { status: 422 }
      );
    }

    // 3. Node.js processing ("Seen")
    // This logs the message directly into your Node.js server console terminal.
    console.log("=== NEW MESSAGE RECEIVED (NODE.JS) ===");
    console.log(`From: ${name} (${email})`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("=======================================");

    /* 💡 OPTIONAL: You can easily add an email sender engine here later!
      Example using a standard node library or API fetch:
      await fetch('https://api.resend.com/emails', { ... })
    */

    // 4. Send successful response back to your React form
    return NextResponse.json(
      { 
        success: true, 
        message: "Message processed successfully by Node.js backend layer." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server runtime configuration error." },
      { status: 500 }
    );
  }
}
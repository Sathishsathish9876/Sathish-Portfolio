import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "sathishsanthosh7155@gmail.com";

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is not set in environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact Form",
          email: toEmail, // Using your own email as sender (must be verified in Brevo)
        },
        to: [
          {
            email: toEmail,
            name: "Sathish M",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `New Portfolio Message from ${name}`,
        htmlContent: `
          <html>
            <body>
              <h2 style="color: #e50914;">New Message from your Portfolio</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #e50914; background-color: #f9f9f9;">
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

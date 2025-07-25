import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";

const sesClient = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    const params = {
      Destination: {
        ToAddresses: [process.env.AWS_SES_FROM_EMAIL!], // Your business inbox
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
          },
          Text: {
            Charset: "UTF-8",
            Data: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `New Contact Form Message from ${name}`,
        },
      },
      Source: process.env.AWS_SES_FROM_EMAIL!, // Verified SES sender
      ReplyToAddresses: [email],
    };

    console.log("Sending email with params:", params);

    const command = new SendEmailCommand(params);
    await sesClient.send(command);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}

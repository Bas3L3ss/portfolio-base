import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "phamthen.hun060907@gmail.com",
      subject: "New message from your portfolio",
      text: `From: ${email}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: { email: string; message: string }) {
  try {
    const { email, message } = data;
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your@email.com", // Replace with your email address
      subject: "New message from your portfolio",
      text: `From: ${email}\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
}

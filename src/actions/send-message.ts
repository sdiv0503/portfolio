"use server";

import prisma from "@/lib/db";
import { contactFormSchema } from "@/lib/validations/contact";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(data: z.infer<typeof contactFormSchema>) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  try {
    // 1. Save to Database (Backup)
    await prisma.message.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        message: result.data.message,
      },
    });

    // 2. Send Email Notification via Resend
    // NOTE: If you don't have a domain, use 'onboarding@resend.dev' as the 'from' address
    // and send it TO your personal email.
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: 'sdivyansh0503@gmail.com', 
      subject: `New Message from ${result.data.name}`,
      replyTo: result.data.email,
      text: `
        Name: ${result.data.name}
        Email: ${result.data.email}
        Message: ${result.data.message}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
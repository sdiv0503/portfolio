import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim() // Removes leading/trailing whitespace
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    // Regex: Allows only letters, spaces, hyphens, dots, and apostrophes.
    // This blocks numbers and symbols like <, >, /, which are common in XSS attacks.
    .regex(/^[a-zA-Z\u00C0-\u00FF\s'.\-]+$/, { 
      message: "Name contains invalid characters (letters only)." 
    }),

  email: z
    .string()
    .trim()
    .toLowerCase() // Normalizes email to lowercase
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email is too long." }), // Standard DB limit for emails

  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot exceed 1000 characters." })
    // Security Refine: Reject messages containing dangerous HTML tags
    .refine((val) => !/<script|onload|onclick|onerror/i.test(val), {
      message: "Message contains invalid content.",
    })
    // Security Refine: Reject messages that are JUST URLs (common spam)
    .refine((val) => {
      // If the message is purely a URL, reject it. (Real messages have context)
      const isUrl = z.string().url().safeParse(val).success;
      return !isUrl;
    }, {
      message: "Message cannot be just a link. Please add context.",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
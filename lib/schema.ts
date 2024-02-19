import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be atleast 3 characters")
    .max(30, "Name must be less than 30 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(5, "Message must be atleast 5 characters"),
});

export type ContactProps = z.infer<typeof contactFormSchema>;

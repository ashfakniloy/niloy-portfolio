import { z } from "zod";

// export const contactFormSchema = z.object({
//   name: z
//     .string()
//     .nonempty({ message: "Name is required" })
//     .min(3, { message: "Name must be atleast 3 characters" })
//     .max(30, { message: "Name must be less than 30 characters" }),
//   email: z.string().nonempty({ message: "Email is required" }).email(),
//   message: z.string().nonempty({ message: "Message is required" }),
// });

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "Name must be atleast 3 characters")
    .max(30, "Name must be less than 30 characters"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Enter a valid email address"),
  message: z
    .string()
    .nonempty("Message is required")
    .min(5, "Message must be atleast 5 characters"),
});

export type ContactProps = z.infer<typeof contactFormSchema>;

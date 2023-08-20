"use server";

import { contactFormSchema } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export const contactAction = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const { name, email, message } = Object.fromEntries(formData.entries());
  // const name = formData.get("name")?.toString();
  // const email = formData.get("email")?.toString();

  // if (!name || !email) return;

  // const formvalues = {
  //   name,
  //   email,
  // };

  const data = {
    name,
    email,
    message,
  };

  if (!data) return;

  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    // handle error then return
    return { error: result.error.format() };
  } else {
    // do something
    console.log("data", result.data);
  }

  // revalidatePath("/");
};

"use server";

import { z } from "zod";

const checkPasswords = ({ password, confirmPassword }: { password: string; confirmPassword: string }) =>
  password === confirmPassword;

const formSchema = z
  .object({
    username: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
  })
  .refine(checkPasswords, { message: "Both Passwords should be the Same!", path: ["confirmPassword"] });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  }
}

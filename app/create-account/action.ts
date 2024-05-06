"use server";

import { z } from "zod";

const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/);

const checkPasswords = ({ password, confirmPassword }: { password: string; confirmPassword: string }) =>
  password === confirmPassword;

const formSchema = z
  .object({
    username: z.string().min(4).max(10).toLowerCase().trim(),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(5)
      .regex(passwordRegex, "A password must have lowercase, UPPERCASE, a number and special characters."),
    confirmPassword: z.string().min(5),
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
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}

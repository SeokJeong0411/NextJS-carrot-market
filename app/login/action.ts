"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is Required",
    })
    .email()
    .toLowerCase(),
  password: z.string({
    required_error: "Password is Required",
  }),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));
  // console.log(data.get("password"), data.get("email"));
}

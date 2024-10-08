"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./action";

export default function Login() {
  const [state, action] = useFormState(login, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password!</h2>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          required
          errorMessage={
            state?.fieldErrors.email ? state?.fieldErrors.email[0] : undefined
          }
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errorMessage={
            state?.fieldErrors.password
              ? state?.fieldErrors.password[0]
              : undefined
          }
        />
        <Button text="Log In" />
      </form>
      <div className="w-full h-px bg-neutral-500" />

      <SocialLogin />
    </div>
  );
}

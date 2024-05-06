"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          errorMessage={state?.fieldErrors.username ? state?.fieldErrors.username[0] : undefined}
          minLength={4}
          maxLength={10}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          errorMessage={state?.fieldErrors.email ? state?.fieldErrors.email[0] : undefined}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          errorMessage={state?.fieldErrors.password ? state?.fieldErrors.password[0] : undefined}
          minLength={5}
          required
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          errorMessage={state?.fieldErrors.confirmPassword ? state?.fieldErrors.confirmPassword[0] : undefined}
          required
        />
        <Button text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin />
    </div>
  );
}

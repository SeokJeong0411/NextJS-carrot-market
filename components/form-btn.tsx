"use client";

import { useFormStatus } from "react-dom";

interface IFormButton {
  text: string;
}

export default function FormButton({ text }: IFormButton) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-default"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}

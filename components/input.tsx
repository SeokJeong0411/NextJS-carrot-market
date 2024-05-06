import { InputHTMLAttributes } from "react";

interface IInput {
  errorMessage?: string;
  name: string;
}

export default function Input({
  errorMessage = "",
  name,
  ...extraProps
}: IInput & InputHTMLAttributes<HTMLInputElement>) {
  console.log(extraProps);
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 transition-shadow border-none placeholder:text-neutral-400"
        name={name}
        {...extraProps}
      />
      <span className="text-red-500 font-medium">{errorMessage}</span>
    </div>
  );
}

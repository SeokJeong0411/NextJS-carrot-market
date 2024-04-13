interface IFormInput {
  type: string;
  placeholder: string;
  required: boolean;
  errorMessage: string;
  name: string;
}

export default function FormInput({ type, placeholder, required, errorMessage, name }: IFormInput) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 transition-shadow border-none placeholder:text-neutral-400"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <span className="text-red-500 font-medium">{errorMessage}</span>
    </div>
  );
}

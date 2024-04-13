import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function Login() {
  const onClick = async (data: FormData) => {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data.get("password"), data.get("email"));
  };
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password!</h2>
      </div>
      <form className="flex flex-col gap-3" action={onClick}>
        <FormInput type="email" placeholder="E-mail" required errorMessage="E-mail is too short" name="email" />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errorMessage="Password is too short"
          name="password"
        />
        <FormButton text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />

      <SocialLogin />
    </div>
  );
}

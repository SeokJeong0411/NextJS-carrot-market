import FormInput from "@/components/input";
import FormButton from "@/components/button";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login!</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="number" placeholder="Phone number" required errorMessage="E-mail is too short" />
        <FormInput type="number" placeholder="Verification Code" required errorMessage="Password is too short" />
        <FormButton loading={false} text="Verify phone number" />
      </form>
    </div>
  );
}

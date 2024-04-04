interface IFormButton {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: IFormButton) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-default"
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
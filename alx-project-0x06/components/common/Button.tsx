import { ButtonProps } from "@/interface";

export default function Button({
  action,
  buttonLabel,
  buttonBackgroundColor,
}: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`px-4 py-2 rounded-md text-white bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 transition`}
    >
      {buttonLabel}
    </button>
  );
}

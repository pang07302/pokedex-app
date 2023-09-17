interface PrimaryButtonProps {
  label: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PrimaryButton({
  label,
  clickHandler,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={clickHandler}
      className="bg-dark-purple rounded-lg p-2 text-center w-[5rem] text-white"
    >
      {label}
    </button>
  );
}

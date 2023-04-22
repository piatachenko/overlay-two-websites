import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant: string;
}

export default function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={`rounded-lg px-5 py-2 text-xl border-[1.5px] outline-none transition-all ${
          variant === "primary"
            ? "bg-[#435cfa] border-[#435cfa] text-slate-100 focus:ring-2"
            : ""
        } ${
          variant === "outline"
            ? "border-zinc-600 bg-zinc-100 text-zinc-600"
            : ""
        }`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

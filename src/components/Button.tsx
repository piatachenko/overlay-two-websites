import type { ReactNode } from "react";

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
        className={`rounded-lg border-[1.5px] px-5 py-2 text-xl outline-none transition-all ${
          variant === "primary"
            ? "border-[#435cfa] bg-[#435cfa] text-slate-100 focus:ring-2"
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

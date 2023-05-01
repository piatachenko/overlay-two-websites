import type { ChangeEvent, CSSProperties } from "react";

interface TextInputProps {
  icon?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ icon, ...props }: TextInputProps) {
  return (
    <>
      <input
        type="text"
        {...props}
        className={`w-full rounded-lg border-2 border-zinc-200 bg-transparent py-2 pr-2 text-xl outline-none transition-all placeholder:italic focus:border-zinc-300 ${
          icon ? "bg-[image:--bg-image] bg-[.6rem] bg-no-repeat pl-11" : "pl-2"
        }`}
        style={{ "--bg-image": `url(${icon ?? ""})` } as CSSProperties}
      />
    </>
  );
}

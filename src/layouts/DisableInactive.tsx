import { ReactNode } from "react";

interface DisableInactiveProps {
  children: ReactNode;
}

export default function DisableInactive({ children }: DisableInactiveProps) {
  return (
    <div className="opacity-30 transition-all hover:delay-0 [&(:hover)]:delay-[1s] hover:duration-500 [&(:hover)]:duration-1000 hover:opacity-100">
      {children}
    </div>
  );
}

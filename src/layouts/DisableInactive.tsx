import type { ReactNode } from "react";

interface DisableInactiveProps {
  children: ReactNode;
}

export default function DisableInactive({ children }: DisableInactiveProps) {
  return (
    <div className="opacity-30 transition-all hover:opacity-100 hover:delay-0 hover:duration-500 [&(:hover)]:delay-[1s] [&(:hover)]:duration-1000">
      {children}
    </div>
  );
}

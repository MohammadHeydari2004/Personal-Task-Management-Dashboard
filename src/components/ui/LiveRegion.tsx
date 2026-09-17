import type { ReactNode } from "react";

interface LiveRegionProps {
  children: ReactNode;
  politeness?: "polite" | "assertive";
}

export function LiveRegion({
  children,
  politeness = "polite",
}: LiveRegionProps) {
  return (
    <div aria-live={politeness} aria-atomic="true" className="sr-only">
      {children}
    </div>
  );
}

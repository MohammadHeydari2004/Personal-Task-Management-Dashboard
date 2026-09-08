import type { ReactNode } from "react";

interface BackButtonProps {
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

function Button({
  className,
  onClick,
  children,
  type = "button",
}: BackButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;

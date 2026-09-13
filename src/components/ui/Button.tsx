import type { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500/20",
  secondary:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500/20",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/20",
  ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500/20",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus:outline-none focus:ring-2",
        variantClasses[variant],
        sizeClasses[size],
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

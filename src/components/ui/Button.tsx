import type { ReactNode, Ref } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500/40 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
  secondary:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-400/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500/40 dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700",
  ghost:
    "text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-400/40 dark:text-gray-400 dark:hover:bg-gray-800 dark:active:bg-gray-700",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "min-h-8 px-2.5 py-1.5 text-xs gap-1",
  md: "min-h-10 px-4 py-2 text-sm gap-1.5",
  lg: "min-h-12 px-6 py-3 text-base gap-2",
};

export function Button({
  ref,
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
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-lg font-medium",
        "transition-all duration-150",
        "focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-gray-900",
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

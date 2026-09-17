import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant: "blue" | "green" | "red" | "yellow" | "gray" | "purple";
  className?: string;
}

const variantClasses: Record<BadgeProps["variant"], string> = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  red: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  yellow:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  gray: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  purple:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
};

export function Badge({ children, variant, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2 py-0.5 text-[0.7rem] font-medium leading-tight sm:px-2.5 sm:py-1 sm:text-xs",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

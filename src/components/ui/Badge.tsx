import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant: "blue" | "green" | "red" | "yellow" | "gray" | "purple";
  className?: string;
}

const variantClasses: Record<BadgeProps["variant"], string> = {
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
  yellow: "bg-yellow-100 text-yellow-800",
  gray: "bg-gray-100 text-gray-800",
  purple: "bg-purple-100 text-purple-800",
};

export function Badge({ children, variant, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

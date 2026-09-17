import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export function Field({
  children,
  id,
  label,
  error,
  hint,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium text-gray-700 sm:text-sm dark:text-gray-300"
      >
        {label}
        {required && (
          <span
            className="mr-0.5 text-red-500 dark:text-red-400"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="text-[0.7rem] text-gray-500 sm:text-xs dark:text-gray-500">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          className="text-[0.7rem] font-medium text-red-600 sm:text-xs dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

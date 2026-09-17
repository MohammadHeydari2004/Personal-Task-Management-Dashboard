interface InputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "date" | "number";
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export function Input({
  id,
  onChange,
  value,
  className = "",
  disabled = false,
  error,
  placeholder,
  required = false,
  type = "text",
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? `${id}-error` : undefined}
      className={[
        "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-gray-900 sm:py-2.5",
        "placeholder:text-gray-400 dark:placeholder:text-gray-500",
        "transition-colors duration-150",
        "focus:outline-none focus:ring-2",
        "dark:bg-gray-800 dark:text-gray-100",
        error
          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-700 dark:focus:border-blue-500",
        disabled ? "cursor-not-allowed opacity-50 dark:bg-gray-800" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

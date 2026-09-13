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
        "w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-2",
        error
          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/20",
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

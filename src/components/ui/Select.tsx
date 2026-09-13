interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string> {
  id: string;
  value: T;
  onChange: (value: T) => void;
  options: SelectOption<T>[];
  disabled?: boolean;
  error?: string;
  name?: string;
  className?: string;
}

export function Select<T extends string>({
  id,
  value,
  onChange,
  options,
  disabled = false,
  error,
  name,
  className = "",
}: SelectProps<T>) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      disabled={disabled}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? `${id}-error` : undefined}
      className={[
        "w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900",
        "focus:outline-none focus:ring-2",
        error
          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/20",
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

interface TaskSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function TaskSearchBar({ value, onChange }: TaskSearchBarProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="task-search"
        className="text-sm font-medium text-gray-700"
      >
        جست‌وجو
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 inset-s-3 flex items-center text-gray-400"
          aria-hidden="true"
        >
          🔍
        </span>
        <input
          id="task-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="جست‌وجو در عنوان و توضیحات..."
          className="w-full rounded-md border border-gray-300 bg-white py-2 pe-3 ps-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
      </div>
    </div>
  );
}

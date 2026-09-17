interface TaskSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function TaskSearchBar({ value, onChange }: TaskSearchBarProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor="task-search"
        className="text-xs font-medium text-gray-700 sm:text-sm dark:text-gray-300"
      >
        جست‌وجو
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 inset-s-3 flex items-center text-sm text-gray-400 dark:text-gray-500"
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
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pe-3 ps-10 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
}

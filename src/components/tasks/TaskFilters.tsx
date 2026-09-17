import {
  PRIORITY_FILTER_OPTIONS,
  STATUS_FILTER_OPTIONS,
} from "../../constants/task";
import type { PriorityFilter, StatusFilter } from "../../types/task";

interface TaskFiltersProps {
  statusFilter: StatusFilter;
  priorityFilter: PriorityFilter;
  onStatusChange: (status: StatusFilter) => void;
  onPriorityChange: (priority: PriorityFilter) => void;
  onReset?: () => void;
  hasActiveFilters: boolean;
}

export function TaskFilters({
  hasActiveFilters,
  onPriorityChange,
  onStatusChange,
  priorityFilter,
  statusFilter,
  onReset,
}: TaskFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
      <div className="flex flex-1 flex-col gap-1.5">
        <label
          htmlFor="status-filter"
          className="text-xs font-medium text-gray-700 sm:text-sm dark:text-gray-300"
        >
          وضعیت
        </label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value as StatusFilter)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-500"
        >
          {STATUS_FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <label
          htmlFor="priority-filter"
          className="text-xs font-medium text-gray-700 sm:text-sm dark:text-gray-300"
        >
          اولویت
        </label>
        <select
          id="priority-filter"
          value={priorityFilter}
          onChange={(e) => onPriorityChange(e.target.value as PriorityFilter)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-500"
        >
          {PRIORITY_FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {hasActiveFilters && onReset && (
        <button
          type="button"
          onClick={onReset}
          className="shrink-0 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          پاک کردن فیلترها
        </button>
      )}
    </div>
  );
}

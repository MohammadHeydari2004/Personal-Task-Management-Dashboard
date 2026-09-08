import { SORT_FIELD_OPTIONS, SORT_ORDER_OPTIONS } from "../../constants/task";
import type { SortField, SortOrder } from "../../types/task";

interface TaskSortControlProps {
  sortField: SortField;
  sortOrder: SortOrder;
  onFieldChange: (field: SortField) => void;
  onOrderChange: (order: SortOrder) => void;
}

export function TaskSortControl({
  onFieldChange,
  onOrderChange,
  sortField,
  sortOrder,
}: TaskSortControlProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="sort-field"
          className="text-sm font-medium text-gray-700"
        >
          مرتب‌سازی بر اساس
        </label>
        <select
          id="sort-field"
          value={sortField}
          onChange={(e) => onFieldChange(e.target.value as SortField)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:w-44"
        >
          {SORT_FIELD_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="sort-order"
          className="text-sm font-medium text-gray-700"
        >
          جهت مرتب‌سازی
        </label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(e) => onOrderChange(e.target.value as SortOrder)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:w-32"
        >
          {SORT_ORDER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

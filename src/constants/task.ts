import type {
  Priority,
  PriorityFilter,
  SortField,
  SortOrder,
  StatusFilter,
  TaskStatus,
} from "../types/task";

export const STATUS_LABELS: Record<TaskStatus, string> = {
  planned: "برنامه‌ریزی‌شده",
  "in-progress": "در حال انجام",
  completed: "تکمیل‌شده",
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: "کم",
  medium: "متوسط",
  high: "زیاد",
};

export const SORT_FIELD_LABELS: Record<SortField, string> = {
  dueDate: "تاریخ سررسید",
  priority: "اولویت",
};

export const SORT_ORDER_LABELS: Record<SortOrder, string> = {
  asc: "صعودی",
  desc: "نزولی",
};

export const PRIORITY_ORDER: Record<Priority, number> = {
  high: 1,
  medium: 2,
  low: 3,
};

export const STATUS_FILTER_OPTIONS: Array<{
  value: StatusFilter;
  label: string;
}> = [
  { value: "all", label: "همه وضعیت‌ها" },
  { value: "planned", label: STATUS_LABELS.planned },
  { value: "in-progress", label: STATUS_LABELS["in-progress"] },
  { value: "completed", label: STATUS_LABELS.completed },
];

export const PRIORITY_FILTER_OPTIONS: Array<{
  value: PriorityFilter;
  label: string;
}> = [
  { value: "all", label: "همه اولویت‌ها" },
  { value: "low", label: PRIORITY_LABELS.low },
  { value: "medium", label: PRIORITY_LABELS.medium },
  { value: "high", label: PRIORITY_LABELS.high },
];

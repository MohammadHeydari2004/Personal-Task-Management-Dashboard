import { Link } from "react-router-dom";
import { PRIORITY_LABELS, STATUS_LABELS } from "../../constants/task";
import type { Priority, Task, TaskId, TaskStatus } from "../../types/task";
import { isOverdue, shortFormatDate } from "../../utils/date";
import { Badge, type BadgeProps } from "../ui/Badge";

const priorityVariant: Record<Priority, BadgeProps["variant"]> = {
  low: "gray",
  medium: "yellow",
  high: "red",
};

const statusVariant: Record<TaskStatus, BadgeProps["variant"]> = {
  planned: "blue",
  "in-progress": "yellow",
  completed: "green",
};

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: TaskId, newStatus: TaskStatus) => void;
  onDelete: (id: TaskId) => void;
  onEdit: (id: TaskId) => void;
}

export function TaskCard({
  onDelete,
  onEdit,
  onStatusChange,
  task,
}: TaskCardProps) {
  const overdue = isOverdue(task);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-5">
      {/* عنوان */}
      <Link
        to={`/tasks/${task.id}`}
        className="block text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:p-1 focus:ring-blue-500/40 sm:text-base dark:text-blue-400 dark:hover:text-blue-300 dark:focus:ring-offset-gray-900"
      >
        <h3 className="truncate">{task.title}</h3>
      </Link>

      {/* توضیحات */}
      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm dark:text-gray-400">
        {task.description}
      </p>

      {/* بج‌ها */}
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2">
        <Badge variant={priorityVariant[task.priority]}>
          {PRIORITY_LABELS[task.priority]}
        </Badge>
        <Badge variant={statusVariant[task.status]}>
          {STATUS_LABELS[task.status]}
        </Badge>
        {overdue && <Badge variant="red">⚠️ عقب‌افتاده</Badge>}
      </div>

      {/* تاریخ سررسید */}
      <p
        className={`mt-2.5 text-[0.7rem] sm:mt-3 sm:text-xs ${overdue ? "font-semibold text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-500"}`}
      >
        سررسید: {shortFormatDate(task.dueDate)}
      </p>

      {/* عملیات */}
      <div className="mt-3 flex items-center justify-between gap-2 border-t border-gray-100 pt-3 sm:mt-4 sm:pt-3.5 dark:border-gray-800">
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
          aria-label={`تغییر وضعیت وظیفه: ${task.title}`}
          className="rounded-lg border border-gray-300 bg-white px-2 py-2 text-[0.7rem] text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 sm:text-xs"
        >
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <div className="flex gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => onEdit(task.id)}
            className="rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-[0.7rem] font-medium text-blue-700 transition-colors hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-400 dark:hover:bg-blue-950 sm:px-3 sm:text-xs"
          >
            ویرایش
          </button>
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-[0.7rem] font-medium text-red-700 transition-colors hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500/40 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400 dark:hover:bg-red-950 sm:px-3 sm:text-xs"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

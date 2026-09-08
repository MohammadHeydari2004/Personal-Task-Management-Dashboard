import { Link } from "react-router-dom";
import { PRIORITY_LABELS, STATUS_LABELS } from "../../constants/task";
import type { Priority, Task, TaskId, TaskStatus } from "../../types/task";
import { isOverdue, shortFormatDate } from "../../utils/date";
import { Badge, type BadgeProps } from "../ui/Badge";

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: TaskId, newStatus: TaskStatus) => void;
  onDelete: (id: TaskId) => void;
}

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

export function TaskCard({ onDelete, onStatusChange, task }: TaskCardProps) {
  const overdue = isOverdue(task);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <Link
        to={`/tasks/${task.id}`}
        className="block text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline"
      >
        <h3>{task.title}</h3>
      </Link>

      <p className="mt-2 line-clamp-2 text-sm text-gray-600">
        {task.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge variant={priorityVariant[task.priority]}>
          {PRIORITY_LABELS[task.priority]}
        </Badge>
        <Badge variant={statusVariant[task.status]}>
          {STATUS_LABELS[task.status]}
        </Badge>
        {overdue && <Badge variant="red">⚠️ عقب‌افتاده</Badge>}
      </div>

      <p className="mt-3 text-xs text-gray-500">
        سررسید: {shortFormatDate(task.dueDate)}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
          aria-label={`تغییر وضعیت وظیفه: ${task.title}`}
          className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 transition-colors hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500/20"
        >
          حذف
        </button>
      </div>
    </div>
  );
}

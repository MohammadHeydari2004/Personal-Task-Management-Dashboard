import type { ReactNode } from "react";
import type { Task, TaskId, TaskStatus } from "../../types/task";
import { EmptyState } from "../ui/EmptyState";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: TaskId, newStatus: TaskStatus) => void;
  onDelete: (id: TaskId) => void;
  onEdit: (id: TaskId) => void;
  emptyMessage: {
    title: string;
    description: string;
    action?: ReactNode;
  };
}

export function TaskList({
  emptyMessage,
  onDelete,
  onEdit,
  onStatusChange,
  tasks,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyState {...emptyMessage} />;
  }

  return (
    <div>
      <ul
        aria-label="لیست وظایف"
        className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-2 2xl:grid-cols-3"
      >
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center mt-6 mb-2 py-4">
        {/* لینک پرش به محتوا - فقط در حالت فوکوس نمایش داده می‌شود */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          پرش به محتوای اصلی
        </a>
      </div>
    </div>
  );
}

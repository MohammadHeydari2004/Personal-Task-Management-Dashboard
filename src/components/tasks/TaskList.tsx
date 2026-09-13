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
    <ul
      aria-label="لیست وظایف"
      className="grid grid-cols-1 gap-4 lg:grid-cols-2"
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
  );
}

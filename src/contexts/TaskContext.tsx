import { createContext } from "react";
import type { Task, TaskFormData, TaskId, TaskStatus } from "../types/task";

interface TaskContextValue {
  tasks: Task[];
  getTaskById: (id: TaskId) => Task | undefined;

  createTask: (formData: TaskFormData) => void;
  updateTask: (id: TaskId, formData: TaskFormData) => void;
  deleteTask: (id: TaskId) => void;
  changeTaskStatus: (id: TaskId, newStatus: TaskStatus) => void;
}

export type { TaskContextValue };
export const TaskContext = createContext<TaskContextValue | null>(null);

import type { ReactNode } from "react";
import { tasklist } from "../data/seedTasks";
import { useTaskManager } from "../hooks/useTaskManager";
import { TaskContext } from "./TaskContext";

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const taskManager = useTaskManager(tasklist);

  return (
    <TaskContext.Provider value={taskManager}>{children}</TaskContext.Provider>
  );
}

import { useContext } from "react";
import { TaskContext, type TaskContextValue } from "./TaskContext";

export function useTask(): TaskContextValue {
  const context = useContext(TaskContext);

  if (context === null) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
}

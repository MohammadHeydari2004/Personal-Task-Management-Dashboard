import { useMemo } from "react";
import type { Task } from "../types/task";
import { isOverdue } from "../utils/date";

interface TaskStats {
  total: number;
  inProgress: number;
  completed: number;
  overdue: number;
}

export function useTaskStats(tasks: Task[]): TaskStats {
  return useMemo(() => {
    return {
      total: tasks.length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      completed: tasks.filter((t) => t.status === "completed").length,
      overdue: tasks.filter((t) => isOverdue(t)).length,
    };
  }, [tasks]);
}

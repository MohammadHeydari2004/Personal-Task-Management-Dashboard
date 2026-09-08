import type { Priority, Task, TaskStatus } from "../types/task";

const VALID_PRIORITIES: Priority[] = ["low", "medium", "high"];
const VALID_STATUSES: TaskStatus[] = ["planned", "in-progress", "completed"];

export function taskGuard(task: unknown): task is Task {
  if (task === null || typeof task !== "object" || Array.isArray(task)) {
    return false;
  }

  if (
    !("id" in task) ||
    !("title" in task) ||
    !("description" in task) ||
    !("priority" in task) ||
    !("status" in task) ||
    !("dueDate" in task) ||
    !("creationDate" in task)
  ) {
    return false;
  }

  if (
    typeof task.id !== "string" ||
    typeof task.title !== "string" ||
    typeof task.description !== "string"
  ) {
    return false;
  }

  if (
    !VALID_PRIORITIES.includes(task.priority as Priority) ||
    !VALID_STATUSES.includes(task.status as TaskStatus)
  ) {
    return false;
  }

  if (!(task.dueDate instanceof Date) || !(task.creationDate instanceof Date)) {
    return false;
  }

  return true;
}

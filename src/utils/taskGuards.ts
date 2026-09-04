import type { Priority, Task, TaskStatus } from "../types/task";

const VALID_PRIORITIES: Priority[] = ["low", "medium", "high"];
const VALID_STATUSES: TaskStatus[] = ["planned", "in-progress", "completed"];

export function taskGuard(task: unknown): task is Task {
  // لایه اول: بررسی شیء بودن (نه null، نه آرایه)
  if (task === null || typeof task !== "object" || Array.isArray(task)) {
    return false;
  }

  // لایه دوم: بررسی وجود تمام کلیدهای ضروری
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

  // لایه سوم: بررسی نوع فیلدهای رشته‌ای
  if (
    typeof task.id !== "string" ||
    typeof task.title !== "string" ||
    typeof task.description !== "string"
  ) {
    return false;
  }

  // لایه چهارم: بررسی مقادیر مجاز برای اولویت و وضعیت
  if (
    !VALID_PRIORITIES.includes(task.priority as Priority) ||
    !VALID_STATUSES.includes(task.status as TaskStatus)
  ) {
    return false;
  }

  // لایه پنجم: بررسی فیلدهای تاریخ
  if (!(task.dueDate instanceof Date) || !(task.creationDate instanceof Date)) {
    return false;
  }

  // تمام بررسی‌ها موفقیت‌آمیز بود
  return true;
}

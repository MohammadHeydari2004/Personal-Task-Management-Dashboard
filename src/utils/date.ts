import type { Task } from "../types/task";

const computeTodayMidnightUTC = (): number => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return today.getTime();
};
const TODAY_TIMESTAMP = computeTodayMidnightUTC();

export function isOverdue(task: Task): boolean {
  if (task.status === "completed") return false;
  const taskDueDate = new Date(task.dueDate);
  taskDueDate.setUTCHours(0, 0, 0, 0);
  return TODAY_TIMESTAMP > taskDueDate.getTime();
}

export function compareDates(firstDate: Date, secondDate: Date): number {
  const difference = firstDate.getTime() - secondDate.getTime();
  return Math.sign(difference);
}

const persianDateFormatter = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  calendar: "persian",
}); // خروجی: «یکشنبه ۱۵ تیر ۱۴۰۴»
export function formatDate(date: Date): string {
  return persianDateFormatter.format(date);
}

const persianShortDateFormatter = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  calendar: "persian",
}); // خروجی: «۱۴۰۴/۰۴/۱۵»
export function shortFormatDate(date: Date): string {
  return persianShortDateFormatter.format(date);
}

import { PRIORITY_ORDER } from "../constants/task";
import type { SortOrder, Task } from "../types/task";
import { compareDates } from "../utils/date";

export function sortByDueDate(tasks: Task[], sortOrder: SortOrder): Task[] {
  const direction = sortOrder === "asc" ? 1 : -1;
  return tasks.toSorted(
    (a, b) => direction * compareDates(a.dueDate, b.dueDate),
  );
}

export function sortByPriority(tasks: Task[], sortOrder: SortOrder): Task[] {
  const direction = sortOrder === "asc" ? 1 : -1;

  return tasks.toSorted((a, b) => {
    const priorityA = PRIORITY_ORDER[a.priority];
    const priorityB = PRIORITY_ORDER[b.priority];
    const priorityDiff = priorityA - priorityB;

    if (priorityDiff !== 0) {
      return direction * priorityDiff;
    }

    return direction * compareDates(a.dueDate, b.dueDate);
  });
}

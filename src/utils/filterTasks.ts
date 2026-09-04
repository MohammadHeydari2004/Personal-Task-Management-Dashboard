import type {
  PriorityFilter,
  StatusFilter,
  Task,
  TaskFilters,
} from "../types/task";

export function searchTask(task: Task, searchQuery: string): boolean {
  const target = searchQuery.trim().toLowerCase();

  // جست‌وجوی خالی به معنای نمایش تمام وظایف است
  if (target === "") return true;

  const title = task.title.toLowerCase();
  const description = task.description.toLowerCase();
  return title.includes(target) || description.includes(target);
}

export function filterByStatus(task: Task, filter: StatusFilter): boolean {
  if (filter === "all") return true;
  return task.status === filter;
}

export function filterByPriority(task: Task, filter: PriorityFilter): boolean {
  if (filter === "all") return true;
  return task.priority === filter;
}

export function applyFilters(tasks: Task[], filters: TaskFilters): Task[] {
  return tasks
    .filter((task) => searchTask(task, filters.searchQuery))
    .filter((task) => filterByStatus(task, filters.status))
    .filter((task) => filterByPriority(task, filters.priority));
}

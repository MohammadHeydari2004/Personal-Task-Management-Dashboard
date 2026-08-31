export type TaskId = string;

export type Priority = "low" | "medium" | "high";

export type TaskStatus = "planned" | "in-progress" | "completed";

export type SortOrder = "asc" | "desc";

export type SortField = "dueDate" | "priority";

export interface Task {
  readonly id: TaskId;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  readonly dueDate: Date;
  readonly creationDate: Date;
}

export type TaskFormData = Omit<Task, "id" | "creationDate" | "dueDate"> & {
  dueDate: string;
};

export type StatusFilter = TaskStatus | "all";
export type PriorityFilter = Priority | "all";

export interface TaskFilters {
  status: StatusFilter;
  priority: PriorityFilter;
  searchQuery: string;
}

export interface TaskSort {
  field: SortField;
  order: SortOrder;
}

export type ModalState =
  | { mode: "closed" }
  | { mode: "create" }
  | { mode: "edit"; taskId: TaskId };

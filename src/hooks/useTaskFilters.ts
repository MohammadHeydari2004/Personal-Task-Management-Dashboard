import { useMemo, useState } from "react";
import type {
  PriorityFilter,
  SortField,
  SortOrder,
  StatusFilter,
  Task,
} from "../types/task";
import { applyFilters } from "../utils/filterTasks";
import { sortByDueDate, sortByPriority } from "../utils/sortTasks";

export function useTaskFilters(tasks: Task[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("all");
  const [sortField, setSortField] = useState<SortField>("dueDate");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const filteredTasks = useMemo(() => {
    const filtered = applyFilters(tasks, {
      searchQuery,
      status: statusFilter,
      priority: priorityFilter,
    });

    if (sortField === "dueDate") {
      return sortByDueDate(filtered, sortOrder);
    }
    return sortByPriority(filtered, sortOrder);
  }, [tasks, searchQuery, statusFilter, priorityFilter, sortField, sortOrder]);

  const hasActiveFilters =
    searchQuery !== "" || statusFilter !== "all" || priorityFilter !== "all";

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setPriorityFilter("all");
  };

  return {
    searchQuery,
    statusFilter,
    priorityFilter,
    sortField,
    sortOrder,
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    setSortField,
    setSortOrder,
    filteredTasks,
    hasActiveFilters,
    resetFilters,
  };
}

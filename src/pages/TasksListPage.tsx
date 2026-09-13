import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import { TaskFilters } from "../components/tasks/TaskFilters";
import { TaskList } from "../components/tasks/TaskList";
import { TaskModal } from "../components/tasks/TaskModal"; 
import { TaskSearchBar } from "../components/tasks/TaskSearchBar";
import { TaskSortControl } from "../components/tasks/TaskSortControl";
import { TaskStats } from "../components/tasks/TaskStats";
import { Button } from "../components/ui/Button"; 
import { useTask } from "../contexts/useTask";
import { useTaskFilters } from "../hooks/useTaskFilters";
import { useTaskStats } from "../hooks/useTaskStats";
import type { ModalState, TaskId } from "../types/task";

function TasksListPage() {
  const { tasks, changeTaskStatus, deleteTask } = useTask();

  const [modalState, setModalState] = useState<ModalState>({ mode: "closed" });
  const openCreate = () => setModalState({ mode: "create" });
  const openEdit = (taskId: TaskId) => setModalState({ mode: "edit", taskId });
  const closeModal = () => setModalState({ mode: "closed" });

  const stats = useTaskStats(tasks);

  const {
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    filteredTasks,
    hasActiveFilters,
    resetFilters,
  } = useTaskFilters(tasks);

  const handleDelete = (id: TaskId) => {
    if (window.confirm("آیا از حذف این وظیفه مطمئن هستید؟")) {
      deleteTask(id);
    }
  };

  const isEmpty = tasks.length === 0;

  const emptyMessage = isEmpty
    ? {
        title: "هنوز وظیفه‌ای ایجاد نکرده‌اید",
        description: "برای شروع، اولین وظیفه خود را ایجاد کنید.",
        action: (
          <Button onClick={openCreate} variant="primary">
            + ایجاد وظیفه جدید
          </Button>
        ),
      }
    : {
        title: "نتیجه‌ای یافت نشد",
        description: "هیچ وظیفه‌ای با فیلترهای انتخابی مطابقت ندارد.",
        action: (
          <Button onClick={resetFilters} variant="secondary">
            پاک کردن فیلترها
          </Button>
        ),
      };

  return (
    <PageContainer>
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">لیست وظایف</h1>
        <Button onClick={openCreate} variant="primary">
          + ایجاد وظیفه جدید
        </Button>
      </header>

      <TaskStats stats={stats} />

      <section className="mb-6 grid grid-cols-1 gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-3">
        <TaskSearchBar value={searchQuery} onChange={setSearchQuery} />
        <TaskSortControl
          sortField={sortField}
          sortOrder={sortOrder}
          onFieldChange={setSortField}
          onOrderChange={setSortOrder}
        />
        <TaskFilters
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          onStatusChange={setStatusFilter}
          onPriorityChange={setPriorityFilter}
          hasActiveFilters={hasActiveFilters}
          onReset={resetFilters}
        />
      </section>

      <TaskList
        tasks={filteredTasks}
        onStatusChange={changeTaskStatus}
        onDelete={handleDelete}
        onEdit={openEdit}
        emptyMessage={emptyMessage}
      />

      {modalState.mode !== "closed" && (
        <TaskModal state={modalState} onClose={closeModal} />
      )}
    </PageContainer>
  );
}

export default TasksListPage;

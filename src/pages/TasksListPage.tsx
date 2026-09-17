import { useRef, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import { TaskFilters } from "../components/tasks/TaskFilters";
import { TaskList } from "../components/tasks/TaskList";
import { TaskModal } from "../components/tasks/TaskModal";
import { TaskSearchBar } from "../components/tasks/TaskSearchBar";
import { TaskSortControl } from "../components/tasks/TaskSortControl";
import { TaskStats } from "../components/tasks/TaskStats";
import { Button } from "../components/ui/Button";
import { LiveRegion } from "../components/ui/LiveRegion";
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
  const [announcement, setAnnouncement] = useState("");
  const stats = useTaskStats(tasks);
  const createButtonRef = useRef<HTMLButtonElement>(null);

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

  const isEmpty = tasks.length === 0;

  const emptyMessage = isEmpty
    ? {
        title: "هنوز وظیفه‌ای ایجاد نکرده‌اید",
        description: "برای شروع، اولین وظیفه خود را ایجاد کنید.",
        action: (
          <Button onClick={openCreate} variant="primary" size="md">
            + ایجاد وظیفه جدید
          </Button>
        ),
      }
    : {
        title: "نتیجه‌ای یافت نشد",
        description: "هیچ وظیفه‌ای با فیلترهای انتخابی مطابقت ندارد.",
        action: (
          <Button onClick={resetFilters} variant="secondary" size="md">
            پاک کردن فیلترها
          </Button>
        ),
      };

  const handleDelete = (id: TaskId) => {
    if (window.confirm("آیا از حذف این وظیفه مطمئن هستید؟")) {
      deleteTask(id);
      // بازگرداندن فوکوس به دکمه ایجاد
      createButtonRef.current?.focus();
      setAnnouncement("وظیفه با موفقیت حذف شد");
      // پاک کردن اعلان بعد از ۳ ثانیه
      setTimeout(() => setAnnouncement(""), 3000);
    }
  };

  return (
    <PageContainer>
      {/* سربرگ صفحه */}
      <header className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between md:mb-8">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl dark:text-gray-100">
          لیست وظایف
        </h1>
        <Button
          ref={createButtonRef}
          onClick={openCreate}
          variant="primary"
          size="md"
          className="sm:w-auto w-full"
        >
          + ایجاد وظیفه جدید
        </Button>

        <LiveRegion>{announcement}</LiveRegion>
      </header>

      {/* آمار */}
      <TaskStats stats={stats} />

      {/* نوار جست‌وجو، مرتب‌سازی و فیلترها */}
      <section
        aria-label="ابزارهای جست‌وجو و فیلتر"
        className="mb-5 space-y-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:mb-6 sm:p-5 md:space-y-4 lg:p-6 dark:border-gray-800 dark:bg-gray-900"
      >
        <TaskSearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
        </div>
      </section>

      {/* لیست وظایف */}
      <TaskList
        tasks={filteredTasks}
        onStatusChange={changeTaskStatus}
        onDelete={handleDelete}
        onEdit={openEdit}
        emptyMessage={emptyMessage}
      />

      {/* مودال */}
      {modalState.mode !== "closed" && (
        <TaskModal state={modalState} onClose={closeModal} />
      )}
    </PageContainer>
  );
}

export default TasksListPage;

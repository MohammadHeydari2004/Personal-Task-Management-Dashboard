import PageContainer from "../components/layout/PageContainer";
import { TaskFilters } from "../components/tasks/TaskFilters";
import { TaskList } from "../components/tasks/TaskList";
import { TaskSearchBar } from "../components/tasks/TaskSearchBar";
import { TaskSortControl } from "../components/tasks/TaskSortControl";
import { TaskStats } from "../components/tasks/TaskStats";
import { useTask } from "../contexts/useTask";
import { useTaskFilters } from "../hooks/useTaskFilters";
import { useTaskStats } from "../hooks/useTaskStats";
import type { TaskId } from "../types/task";

function TasksListPage() {
  const { tasks, changeTaskStatus, deleteTask } = useTask();

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

  const handleCreateTask = () => {
    window.alert("مودال ایجاد وظیفه در فاز بعدی پیاده‌سازی می‌شود.");
  };

  const isEmpty = tasks.length === 0;

  const emptyMessage = isEmpty
    ? {
        title: "هنوز وظیفه‌ای ایجاد نکرده‌اید",
        description: "برای شروع، اولین وظیفه خود را ایجاد کنید.",
        action: (
          <button
            type="button"
            onClick={handleCreateTask}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            + ایجاد وظیفه جدید
          </button>
        ),
      }
    : {
        title: "نتیجه‌ای یافت نشد",
        description: "هیچ وظیفه‌ای با فیلترهای انتخابی مطابقت ندارد.",
        action: (
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            پاک کردن فیلترها
          </button>
        ),
      };

  return (
    <PageContainer>
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">لیست وظایف</h1>
        <button
          type="button"
          onClick={handleCreateTask}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          + ایجاد وظیفه جدید
        </button>
      </header>

      <TaskStats stats={stats} />

      <section className="mb-6 flex justify-evenly gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm ">
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
        emptyMessage={emptyMessage}
        onStatusChange={changeTaskStatus}
        onDelete={handleDelete}
      />
    </PageContainer>
  );
}

export default TasksListPage;

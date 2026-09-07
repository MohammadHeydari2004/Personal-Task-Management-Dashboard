import PageContainer from "../components/layout/PageContainer";
import { useTask } from "../contexts/useTask";
import type { TaskId } from "../types/task";

function TasksListPage() {
  const { tasks, deleteTask } = useTask();

  function handleDelete(id: TaskId) {
    const confirmed = window.confirm("آیا از حذف این وظیفه مطمئن هستید؟");
    if (confirmed) {
      deleteTask(id);
    }
  }

  return (
    <PageContainer>
      <section>
        <h2 className="mb-4 text-2xl font-bold">لیست وظایف</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold">{task.title}</h3>
              <p className="mb-1 text-sm text-gray-600">{task.description}</p>
              <div className="mb-3 flex gap-2 text-xs">
                <span className="rounded bg-blue-100 px-2 py-1 text-blue-800">
                  {task.priority}
                </span>
                <span className="rounded bg-green-100 px-2 py-1 text-green-800">
                  {task.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleDelete(task.id)}
                  className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                >
                  حذف وظیفه
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

export default TasksListPage;

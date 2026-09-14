import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import { TaskModal } from "../components/tasks/TaskModal";
import { Badge, type BadgeProps } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { EmptyState } from "../components/ui/EmptyState";
import { Select } from "../components/ui/Select";
import {
  PRIORITY_LABELS,
  STATUS_LABELS,
  STATUS_OPTIONS,
} from "../constants/task";
import { useTask } from "../contexts/useTask";
import type { Priority, TaskStatus } from "../types/task";
import { formatDate, isOverdue } from "../utils/date";

const priorityVariant: Record<Priority, BadgeProps["variant"]> = {
  low: "gray",
  medium: "yellow",
  high: "red",
};

const statusVariant: Record<TaskStatus, BadgeProps["variant"]> = {
  planned: "blue",
  "in-progress": "yellow",
  completed: "green",
};

function TaskDetailsPage() {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const { getTaskById, changeTaskStatus, deleteTask } = useTask();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const task = taskId ? getTaskById(taskId) : undefined;
  const overdue = task ? isOverdue(task) : false;

  // حالت NotFound
  if (!task) {
    return (
      <PageContainer>
        <EmptyState
          icon="🔍"
          title="وظیفه‌ای یافت نشد"
          description="وظیفه‌ای با این شناسه وجود ندارد یا حذف شده است."
          action={
            <Button onClick={() => navigate("/")} variant="primary">
              بازگشت به لیست وظایف
            </Button>
          }
        />
      </PageContainer>
    );
  }

  const handleStatusChange = (newStatus: TaskStatus) => {
    changeTaskStatus(task.id, newStatus);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      "آیا از حذف این وظیفه مطمئن هستید؟ این عمل قابل بازگشت نیست.",
    );
    if (confirmed) {
      deleteTask(task.id);
      navigate("/");
    }
  };

  return (
    <PageContainer>
      <article className="space-y-6">
        {/* دکمه بازگشت */}
        <Button onClick={() => navigate("/")} variant="ghost" size="sm">
          → بازگشت به لیست
        </Button>

        {/* عنوان */}
        <header>
          <h1 className="text-3xl font-bold text-gray-900">{task.title}</h1>
        </header>

        {/* Badge ها */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={priorityVariant[task.priority]}>
            اولویت: {PRIORITY_LABELS[task.priority]}
          </Badge>
          <Badge variant={statusVariant[task.status]}>
            وضعیت: {STATUS_LABELS[task.status]}
          </Badge>
          {overdue && <Badge variant="red">⚠️ عقب‌افتاده</Badge>}
        </div>

        {/* تاریخ‌ها */}
        <dl className="grid grid-cols-1 gap-3 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium text-gray-500">تاریخ ایجاد</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {formatDate(task.creationDate)}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-gray-500">تاریخ سررسید</dt>
            <dd
              className={`mt-1 text-sm ${
                overdue ? "font-semibold text-red-600" : "text-gray-900"
              }`}
            >
              {formatDate(task.dueDate)}
            </dd>
          </div>
        </dl>

        {/* توضیحات */}
        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">توضیحات</h2>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
            {task.description || "توضیحاتی برای این وظیفه ثبت نشده است."}
          </p>
        </section>

        {/* عملیات */}
        <section className="space-y-4 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="status-change"
              className="text-sm font-medium text-gray-700"
            >
              تغییر وضعیت
            </label>
            <Select<TaskStatus>
              id="status-change"
              value={task.status}
              onChange={handleStatusChange}
              options={STATUS_OPTIONS}
              className="sm:max-w-xs"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setIsEditOpen(true)} variant="primary">
              ویرایش وظیفه
            </Button>
            <Button onClick={handleDelete} variant="danger">
              حذف وظیفه
            </Button>
          </div>
        </section>
      </article>

      {isEditOpen && (
        <TaskModal
          state={{ mode: "edit", taskId: task.id }}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </PageContainer>
  );
}

export default TaskDetailsPage;

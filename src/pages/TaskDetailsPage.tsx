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
      <article className="mx-auto max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {/* دکمه بازگشت */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="sm"
          className="mb-4 sm:mb-6"
        >
          → بازگشت به لیست
        </Button>

        {/* عنوان */}
        <header className="mb-4 sm:mb-6">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl dark:text-gray-100">
            {task.title}
          </h1>
        </header>

        {/* بج‌ها */}
        <div className="mb-4 flex flex-wrap items-center gap-1.5 sm:mb-5 sm:gap-2">
          <Badge variant={priorityVariant[task.priority]}>
            اولویت: {PRIORITY_LABELS[task.priority]}
          </Badge>
          <Badge variant={statusVariant[task.status]}>
            وضعیت: {STATUS_LABELS[task.status]}
          </Badge>
          {overdue && <Badge variant="red">⚠️ عقب‌افتاده</Badge>}
        </div>

        {/* تاریخ‌ها */}
        <dl className="mb-4 grid grid-cols-1 gap-3 rounded-xl bg-gray-50 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5 dark:bg-gray-900 dark:border dark:border-gray-800">
          <div>
            <dt className="text-[0.7rem] font-medium text-gray-500 sm:text-xs dark:text-gray-400">
              تاریخ ایجاد
            </dt>
            <dd className="mt-0.5 text-xs text-gray-900 sm:mt-1 sm:text-sm dark:text-gray-100">
              {formatDate(task.creationDate)}
            </dd>
          </div>
          <div>
            <dt className="text-[0.7rem] font-medium text-gray-500 sm:text-xs dark:text-gray-400">
              تاریخ سررسید
            </dt>
            <dd
              className={`mt-0.5 text-xs sm:mt-1 sm:text-sm dark:text-gray-100 ${
                overdue
                  ? "font-semibold text-red-600 dark:text-red-400"
                  : "text-gray-900"
              }`}
            >
              {formatDate(task.dueDate)}
            </dd>
          </div>
        </dl>

        {/* توضیحات */}
        <section className="mb-5 sm:mb-6">
          <h2 className="mb-2 text-sm font-semibold text-gray-900 sm:text-base dark:text-gray-100">
            توضیحات
          </h2>
          <p className="whitespace-pre-wrap text-xs leading-relaxed text-gray-700 sm:text-sm dark:text-gray-300">
            {task.description || "توضیحاتی برای این وظیفه ثبت نشده است."}
          </p>
        </section>

        {/* عملیات */}
        <section className="space-y-4 border-t border-gray-200 pt-5 dark:border-gray-800 sm:pt-6">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="status-change"
              className="text-xs font-medium text-gray-700 sm:text-sm dark:text-gray-300"
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

          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <Button
              onClick={() => setIsEditOpen(true)}
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            >
              ویرایش وظیفه
            </Button>
            <Button
              onClick={handleDelete}
              variant="danger"
              size="md"
              className="w-full sm:w-auto"
            >
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

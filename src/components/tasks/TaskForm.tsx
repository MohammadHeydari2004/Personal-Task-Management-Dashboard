import { useState } from "react";
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "../../constants/task";
import type { Priority, TaskFormData, TaskStatus } from "../../types/task";
import { Button } from "../ui/Button";
import { Field } from "../ui/Field";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { TextArea } from "../ui/TextArea";

interface TaskFormProps {
  initialData?: TaskFormData;
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
  onDelete?: () => void;
  isSubmitting?: boolean;
}

export function TaskForm({
  onCancel,
  onSubmit,
  initialData,
  isSubmitting,
  onDelete,
}: TaskFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [priority, setPriority] = useState<Priority>(
    initialData?.priority ?? "medium",
  );
  const [status, setStatus] = useState<TaskStatus>(
    initialData?.status ?? "planned",
  );
  const [dueDate, setDueDate] = useState(initialData?.dueDate ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = "عنوان وظیفه الزامی است";
    } else if (title.length < 3) {
      newErrors.title = "عنوان باید حداقل ۳ کاراکتر باشد";
    }

    if (!dueDate) {
      newErrors.dueDate = "تاریخ سررسید الزامی است";
    } else {
      const date = new Date(dueDate);
      if (isNaN(date.getTime())) {
        newErrors.dueDate = "تاریخ نامعتبر است";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      priority,
      status,
      dueDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
      <Field id="title" label="عنوان" required error={errors.title}>
        <Input
          id="title"
          value={title}
          onChange={setTitle}
          placeholder="عنوان وظیفه را وارد کنید"
          required
          error={errors.title}
        />
      </Field>

      <Field id="description" label="توضیحات">
        <TextArea
          id="description"
          value={description}
          onChange={setDescription}
          placeholder="توضیحات وظیفه را وارد کنید..."
          rows={3}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
        <Field id="priority" label="اولویت" required>
          <Select<Priority>
            id="priority"
            value={priority}
            onChange={setPriority}
            options={PRIORITY_OPTIONS}
          />
        </Field>

        <Field id="status" label="وضعیت" required>
          <Select<TaskStatus>
            id="status"
            value={status}
            onChange={setStatus}
            options={STATUS_OPTIONS}
          />
        </Field>
      </div>

      <Field id="dueDate" label="تاریخ سررسید" required error={errors.dueDate}>
        <Input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={setDueDate}
          required
          error={errors.dueDate}
        />
      </Field>

      <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
        {onDelete ? (
          <Button type="button" variant="danger" size="sm" onClick={onDelete}>
            حذف
          </Button>
        ) : (
          <div />
        )}
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:gap-3">
          <Button type="button" variant="secondary" onClick={onCancel}>
            لغو
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
          </Button>
        </div>
      </div>
    </form>
  );
}

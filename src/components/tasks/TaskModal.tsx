import { useTask } from "../../contexts/useTask";
import { useModalFocus } from "../../hooks/useModalFocus";
import type { ModalState, TaskFormData } from "../../types/task";
import { Modal } from "../ui/Modal";
import { TaskForm } from "./TaskForm";

interface TaskModalProps {
  state: ModalState;
  onClose: () => void;
}

export function TaskModal({ state, onClose }: TaskModalProps) {
  const { getTaskById, createTask, updateTask, deleteTask } = useTask();
  const isEdit = state.mode === "edit";
  const isCreate = state.mode === "create";
  const isOpen = state.mode !== "closed";

  const { dialogRef, titleId } = useModalFocus({ isOpen, onClose });

  const existingTask = isEdit ? getTaskById(state.taskId) : undefined;

  if (state.mode === "closed") return null;

  const initialData: TaskFormData | undefined = existingTask
    ? {
        title: existingTask.title,
        description: existingTask.description,
        priority: existingTask.priority,
        status: existingTask.status,
        dueDate: existingTask.dueDate.toISOString().split("T")[0],
      }
    : undefined;

  const handleSubmit = (data: TaskFormData) => {
    if (isCreate) {
      createTask(data);
    } else if (isEdit) {
      updateTask(state.taskId, data);
    }
    onClose();
  };

  const handleDelete = isEdit
    ? () => {
        if (window.confirm("آیا از حذف مطمئن هستید؟")) {
          deleteTask(state.taskId);
          onClose();
        }
      }
    : undefined;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      dialogRef={dialogRef}
      titleId={titleId}
      title={isEdit ? "ویرایش وظیفه" : "ایجاد وظیفه جدید"}
    >
      <TaskForm
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={onClose}
        onDelete={handleDelete}
      />
    </Modal>
  );
}

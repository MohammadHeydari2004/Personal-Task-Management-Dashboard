import { useState } from "react";
import { getTodayUTC } from "../data/seedTasks";
import type { Task, TaskFormData, TaskId, TaskStatus } from "../types/task";

interface TaskManager {
  // داده‌ها
  tasks: Task[];
  getTaskById: (id: TaskId) => Task | undefined;

  // عملیات‌ها
  createTask: (formData: TaskFormData) => void;
  updateTask: (id: TaskId, formData: TaskFormData) => void;
  deleteTask: (id: TaskId) => void;
  changeTaskStatus: (id: TaskId, newStatus: TaskStatus) => void;
}

export function useTaskManager(tasklist: Task[]): TaskManager {
  const [tasks, setTasks] = useState<Task[]>(tasklist);

  function getTaskById(targetId: TaskId): Task | undefined {
    return tasks.find((task) => task.id === targetId);
  }

  function createTask(formData: TaskFormData): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      creationDate: getTodayUTC(),
      dueDate: new Date(formData.dueDate),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function updateTask(id: TaskId, formData: TaskFormData): void {
    const targetTask = getTaskById(id);

    if (!targetTask) {
      throw new Error(`Task with ID "${id}" not found`);
    }

    const updatedTask: Task = {
      id: targetTask.id,
      title: formData.title,
      description: formData.description,
      creationDate: targetTask.creationDate,
      dueDate: new Date(formData.dueDate),
      priority: formData.priority,
      status: formData.status,
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task)),
    );
  }

  function deleteTask(id: TaskId): void {
    const targetTask = getTaskById(id);

    if (!targetTask) {
      throw new Error(`Task with ID "${id}" not found`);
    }

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function changeTaskStatus(id: TaskId, newStatus: TaskStatus): void {
    const targetTask = getTaskById(id);

    if (!targetTask) {
      throw new Error(`Task with ID "${id}" not found`);
    }

    const updatedTask: Task = {
      ...targetTask,
      status: newStatus,
    };

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task)),
    );
  }

  return {
    tasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    changeTaskStatus,
  };
}

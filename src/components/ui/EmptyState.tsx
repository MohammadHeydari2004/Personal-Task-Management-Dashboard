import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white px-4 py-10 text-center sm:px-6 sm:py-14 lg:py-16 dark:border-gray-700 dark:bg-gray-900">
      {icon && (
        <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="mb-1.5 text-base font-semibold text-gray-900 sm:mb-2 sm:text-lg dark:text-gray-100">
        {title}
      </h3>
      {description && (
        <p className="mb-4 max-w-xs text-xs text-gray-500 sm:mb-6 sm:max-w-sm sm:text-sm dark:text-gray-400">
          {description}
        </p>
      )}
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}

import type { ReactNode, RefObject } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleId: string;
  dialogRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  titleId,
  dialogRef,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-4 dark:bg-black/70"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[92dvh] w-full overflow-y-auto rounded-t-2xl bg-white p-4 shadow-2xl sm:max-h-[85dvh] sm:max-w-lg sm:rounded-xl sm:p-6 md:max-w-xl lg:max-w-2xl dark:bg-gray-900"
      >
        <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
          <h2
            id={titleId}
            className="text-base font-bold text-gray-900 sm:text-lg dark:text-gray-100"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="بستن"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

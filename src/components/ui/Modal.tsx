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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id={titleId} className="text-lg font-semibold">
            {title}
          </h2>
          <button onClick={onClose} aria-label="بستن">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

import { useEffect, useId, useRef } from "react";

interface UseModalFocusOptions {
  isOpen: boolean;
  onClose: () => void;
}

export function useModalFocus({ isOpen, onClose }: UseModalFocusOptions) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const previousActiveElement = useRef<Element | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const focusableElements = dialogRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    firstFocusable?.focus();

    return () => {
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return { dialogRef, titleId };
}

import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  // -------------------------
  // Refs
  // -------------------------

  const modalRef = useRef<HTMLDivElement>(null);

  // -------------------------
  // Effects
  // -------------------------

  useEffect(() => {
    // No need to attach listeners if modal is closed
    if (!isOpen) return;

    // Prevent body scrolling
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", handleKeyDown);

      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isOpen, onClose]);

  // -------------------------
  // Early Return
  // -------------------------

  if (!isOpen) return null;

  // -------------------------
  // JSX
  // -------------------------

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={modalRef}
        style={{
          background: "white",
          width: "400px",
          padding: "20px",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <h2>User Modal</h2>

        <p>This is a reusable modal component.</p>
      </div>
    </div>
  );
}

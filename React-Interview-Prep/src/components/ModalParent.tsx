import { useState } from "react";
import Modal from "./Modal";

export default function ModalParent() {
  // -------------------------
  // State
  // -------------------------

  const [isOpen, setIsOpen] = useState(false);

  // -------------------------
  // Event Handlers
  // -------------------------

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // -------------------------
  // JSX
  // -------------------------

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={handleOpen}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}

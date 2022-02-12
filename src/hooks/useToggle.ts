import { useState } from "react";

const useToggle = (status: boolean) => {
  const [isOpen, setIsOpen] = useState(status);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useToggle;

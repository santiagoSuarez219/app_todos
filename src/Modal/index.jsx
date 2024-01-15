import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="w-full flex flex-col items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-[rgba(32,35,41,.8)]">
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;

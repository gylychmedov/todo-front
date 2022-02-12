import { AnimatePresence, motion } from "framer-motion";

export interface IModal {
  ok: () => void;
  cancel: () => void;
  isOpen: boolean;
  title: string;
  text: string;
  okText: string;
}

const Modal = ({ ok, okText = "Ok", isOpen, text, title, cancel }: IModal) => {
  console.log(isOpen);
  const init = { scale: 0.5, opacity: 0, y: -140, x: "-50%" };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={init}
          exit={init}
          animate={{ scale: 1, opacity: 1, y: 0, x: "-50%" }}
          className="fixed left-2/4  top-0 bg-white mt-5 py-3 px-4 md:py-4 md:px-6 2xl:p-6 w-10/12 md:w-8/12 lg:w-5/12 2xl:w-3/12 rounded-xl shadow-lg z-10 shadow-red-50"
        >
          <div className="font-medium">{title}</div>
          <div className="mt-2 text-gray-600">{text}</div>
          <aside className="flex justify-center items-center space-x-4 mt-5 py-2">
            <div className="button-red px-4 py-2" onClick={cancel}>
              Cancel
            </div>
            <div className="button-green px-4 py-2" onClick={ok}>
              {okText}
            </div>
          </aside>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Modal;

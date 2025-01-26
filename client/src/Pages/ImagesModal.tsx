import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  setPreview: (path: string) => void;
}

function Modal({ isOpen, onClose, title, setPreview }: ModalProps) {
  if (!isOpen) return null;
  const imageSrc = ["boy", "chicken", "girl", "man", "profile", "woman"];
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="w-full max-w-md rounded-2xl shadow-lg p-6 relative bg-mainBlack/80 backdrop-blur-lg flex flex-col gap-5"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>

        <div className="grid grid-cols-3 gap-x-2 gap-y-4 ">
          {imageSrc.map((src) => (
            <button
              onClick={() => {
                setPreview(`./Img/Avatar/${src}.png`);
                onClose();
              }}
            >
              <img
                src={`./Img/Avatar/${src}.png`}
                alt="Profile"
                className="size-24"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Modal;

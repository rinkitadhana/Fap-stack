import React from "react";
import { motion } from "framer-motion";

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-20 bg-borderColor/80 text-white p-2 rounded-md shadow-md max-w-fit"
    >
      {message}
    </motion.div>
  );
};

export default Notification;

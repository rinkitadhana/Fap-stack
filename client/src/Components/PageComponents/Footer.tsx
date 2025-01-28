import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Notification from "./Notification";
interface FooterProps {
  clicksCounted: number;
  setClicksCounted: (count: number) => void;
}

function Footer({ clicksCounted, setClicksCounted }: FooterProps) {
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setClicksCounted(clicksCounted > 0 ? clicksCounted - 1 : 0);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // Hide notification after 2 seconds
  };

  return (
    <footer className="border border-zinc-700 rounded-md select-none">
      <div className="flex flex-col gap-2 items-center py-2">
        <div className="flex gap-2 items-center">
          <img
            onClick={handleClick}
            className="size-6"
            src="https://img.icons8.com/m_sharp/200/FA5252/arch-linux.png"
          />
          <span className="text-xl font-semibold">Fap-stack</span>
        </div>
        <p className="text-sm">© 2025 Fap-stack. All rights reserved.</p>
      </div>
      <AnimatePresence>
        {showNotification && (
          <Notification
            message={
              clicksCounted > 0
                ? `Yo, youre like ${clicksCounted} gyatt clicks away from being a sigma-certified W fr`
                : `You are already a sigma`
            }
          />
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;

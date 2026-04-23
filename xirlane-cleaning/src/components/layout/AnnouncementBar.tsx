"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0, opacity: 1, height: "auto" }}
          animate={{ y: 0, opacity: 1, height: "auto" }}
          exit={{ y: -24, opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-text-primary"
        >
          <div className="site-container relative flex h-9 items-center justify-center">
            <p className="text-center text-[12px] text-button-primary-text">
              ✨ Now Serving the Greater Philadelphia Area - Get a Free Quote Today!
            </p>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-button-primary-text"
            >
              <HiXMark size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

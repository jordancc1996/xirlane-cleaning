"use client";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-section-alt-bg">
      <div className="site-container relative flex h-9 items-center justify-center px-10">
        <p className="text-center text-[11px] uppercase tracking-wide text-text-body">
          Serving Philadelphia, Montgomery County, Delaware County, Chester County &amp; Bucks County
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-text-body transition-colors hover:text-accent lg:right-6"
        >
          <HiXMark size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

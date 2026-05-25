"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { useSitePopupEligibility } from "@/hooks/useSitePopupEligibility";
import { getPrefersReducedMotion } from "@/lib/motion";
import { claimSitePopup, releaseSitePopup } from "@/lib/site-popups";

const STORAGE_KEY = "xirlane-scroll-quote-dismissed-at";
const DISMISS_DAYS = 7;
const SCROLL_THRESHOLD = 0.4;
const DISMISS_MS = DISMISS_DAYS * 24 * 60 * 60 * 1000;

function isDismissedRecently(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const dismissedAt = Number(raw);
    if (!Number.isFinite(dismissedAt)) return false;
    return Date.now() - dismissedAt < DISMISS_MS;
  } catch {
    return false;
  }
}

function persistDismissal(): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* storage unavailable */
  }
}

export default function ScrollQuotePopup() {
  const { eligible, blockedByOtherPopup } = useSitePopupEligibility("scroll");
  const [shouldRender, setShouldRender] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  const dismiss = useCallback((persist = true) => {
    if (persist) persistDismissal();
    releaseSitePopup("scroll");
    setShouldRender(false);
    setIsEntered(false);
  }, []);

  const show = useCallback(() => {
    if (!claimSitePopup("scroll")) return false;

    setShouldRender(true);
    if (getPrefersReducedMotion()) {
      setIsEntered(true);
    } else {
      requestAnimationFrame(() => setIsEntered(true));
    }

    return true;
  }, []);

  useEffect(() => {
    if (!eligible || blockedByOtherPopup || isDismissedRecently()) {
      if (shouldRender) dismiss(false);
      return;
    }

    let triggered = false;

    const evaluateScroll = () => {
      if (triggered || !eligible || blockedByOtherPopup) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      if (progress >= SCROLL_THRESHOLD && show()) {
        triggered = true;
      }
    };

    evaluateScroll();
    window.addEventListener("scroll", evaluateScroll, { passive: true });

    return () => window.removeEventListener("scroll", evaluateScroll);
  }, [eligible, blockedByOtherPopup, dismiss, shouldRender, show]);

  if (!shouldRender || !eligible) return null;

  return (
    <aside
      role="region"
      aria-label="Free quote offer"
      className={`quote-scroll-popup fixed bottom-6 right-6 z-40 w-[18.5rem] ${
        isEntered ? "is-entered" : ""
      }`}
    >
      <div className="relative border border-border-light bg-white p-5 shadow-[0_12px_40px_rgba(26,26,26,0.12)]">
        <button
          type="button"
          onClick={() => dismiss()}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center text-text-body transition-colors hover:text-text-primary"
          aria-label="Dismiss offer"
        >
          <HiXMark size={18} aria-hidden="true" />
        </button>

        <p className="pr-8 font-heading text-[18px] leading-snug text-text-primary">
          Get a Free Quote Today
        </p>
        <p className="mt-1.5 font-body text-[13px] leading-snug text-text-body">
          No commitment. Just a clean home.
        </p>

        <Link
          href="/contact"
          onClick={() => dismiss()}
          className="mt-4 inline-flex min-h-10 w-full items-center justify-center bg-button-primary-bg px-5 font-body text-[11px] uppercase tracking-widest text-button-primary-text transition-colors hover:bg-accent"
        >
          Request a Free Quote &rarr;
        </Link>
      </div>
    </aside>
  );
}

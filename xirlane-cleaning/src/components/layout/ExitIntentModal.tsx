"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSitePopupEligibility } from "@/hooks/useSitePopupEligibility";
import { getPrefersReducedMotion } from "@/lib/motion";
import { forceClaimSitePopup, releaseSitePopup } from "@/lib/site-popups";

const FADE_MS = 400;
/** Below the 40% corner popup — early, light nudge only. */
const SCROLL_THRESHOLD = 0.25;
/** Brief pause past threshold so a quick flick does not open the modal. */
const SCROLL_DWELL_MS = 900;

function sessionKeyForPath(pathname: string): string {
  return `xirlane-exit-intent-shown:${pathname}`;
}

function hasShownOnPage(pathname: string): boolean {
  try {
    return sessionStorage.getItem(sessionKeyForPath(pathname)) === "1";
  } catch {
    return false;
  }
}

function markShownOnPage(pathname: string): void {
  try {
    sessionStorage.setItem(sessionKeyForPath(pathname), "1");
  } catch {
    /* storage unavailable */
  }
}

export default function ExitIntentModal() {
  const pathname = usePathname();
  const { eligible } = useSitePopupEligibility("exit-intent");
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const triggeredRef = useRef(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const dismiss = useCallback(() => {
    releaseSitePopup("exit-intent");

    if (getPrefersReducedMotion()) {
      setVisible(false);
      setOpen(false);
      return;
    }

    setVisible(false);
    window.setTimeout(() => setOpen(false), FADE_MS);
  }, []);

  const trigger = useCallback(() => {
    if (triggeredRef.current || !eligible || hasShownOnPage(pathname)) return;

    triggeredRef.current = true;
    markShownOnPage(pathname);
    forceClaimSitePopup("exit-intent");
    setOpen(true);

    if (getPrefersReducedMotion()) {
      setVisible(true);
    } else {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [eligible, pathname]);

  useEffect(() => {
    triggeredRef.current = false;
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!eligible || hasShownOnPage(pathname)) return;

    let dwellTimer: ReturnType<typeof setTimeout> | null = null;

    const clearDwell = () => {
      if (dwellTimer) {
        clearTimeout(dwellTimer);
        dwellTimer = null;
      }
    };

    const evaluateScroll = () => {
      if (triggeredRef.current || hasShownOnPage(pathname)) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      if (progress >= SCROLL_THRESHOLD) {
        if (!dwellTimer) {
          dwellTimer = setTimeout(() => {
            dwellTimer = null;
            trigger();
          }, SCROLL_DWELL_MS);
        }
      } else {
        clearDwell();
      }
    };

    evaluateScroll();
    window.addEventListener("scroll", evaluateScroll, { passive: true });

    return () => {
      clearDwell();
      window.removeEventListener("scroll", evaluateScroll);
    };
  }, [eligible, pathname, trigger]);

  useEffect(() => {
    if (!eligible && open) dismiss();
  }, [eligible, open, dismiss]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", onKeyDown);
    ctaRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, dismiss]);

  if (!mounted || !open || !eligible) return null;

  return createPortal(
    <div
      className={`exit-intent-overlay fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 ${
        visible ? "is-visible" : ""
      }`}
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 bg-black/25"
        aria-label="Close dialog"
        onClick={dismiss}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-heading"
        className={`exit-intent-modal relative z-10 w-full max-w-sm border border-border-light bg-white p-7 text-center shadow-[0_16px_48px_rgba(26,26,26,0.1)] md:p-8 ${
          visible ? "is-visible" : ""
        }`}
      >
        <h2
          id="exit-intent-heading"
          className="font-heading text-[24px] font-light leading-tight text-text-primary md:text-[28px]"
        >
          Before You Go —
        </h2>
        <p className="mt-2.5 font-body text-[14px] leading-relaxed text-text-body">
          Get a free cleaning quote in under 2 minutes.
        </p>

        <Link
          ref={ctaRef}
          href="/contact"
          onClick={dismiss}
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center bg-button-primary-bg px-6 font-body text-[11px] uppercase tracking-widest text-button-primary-text transition-colors hover:bg-accent"
        >
          Request a Free Quote &rarr;
        </Link>

        <button
          type="button"
          onClick={dismiss}
          className="mt-4 font-body text-[12px] text-text-body/80 underline decoration-border-light underline-offset-4 transition-colors hover:text-text-primary hover:decoration-text-body"
        >
          No thanks, I&apos;ll pass
        </button>
      </div>
    </div>,
    document.body,
  );
}

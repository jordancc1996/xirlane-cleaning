"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSitePopupEligibility } from "@/hooks/useSitePopupEligibility";
import { getPrefersReducedMotion } from "@/lib/motion";
import { forceClaimSitePopup, releaseSitePopup } from "@/lib/site-popups";

const FADE_MS = 350;
const TOP_EXIT_THRESHOLD_PX = 20;

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

    const canUseExitIntent = window.matchMedia("(pointer: fine)").matches;
    if (!canUseExitIntent) return;

    const tryTrigger = () => {
      if (triggeredRef.current || hasShownOnPage(pathname)) return;
      trigger();
    };

    const onMouseOut = (event: MouseEvent) => {
      const related = event.relatedTarget;
      const leftDocument =
        related === null ||
        (related instanceof Node && !document.documentElement.contains(related));

      if (leftDocument && event.clientY <= TOP_EXIT_THRESHOLD_PX) {
        tryTrigger();
      }
    };

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= TOP_EXIT_THRESHOLD_PX) {
        tryTrigger();
      }
    };

    document.addEventListener("mouseout", onMouseOut);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
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
      className={`exit-intent-overlay fixed inset-0 z-[60] flex items-center justify-center px-4 ${
        visible ? "is-visible" : ""
      }`}
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 bg-black/40"
        aria-label="Close dialog"
        onClick={dismiss}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-heading"
        className={`exit-intent-modal relative z-10 w-full max-w-md border border-border-light bg-white p-8 text-center shadow-[0_20px_60px_rgba(26,26,26,0.18)] md:p-10 ${
          visible ? "is-visible" : ""
        }`}
      >
        <h2
          id="exit-intent-heading"
          className="font-heading text-[28px] font-light leading-tight text-text-primary md:text-[32px]"
        >
          Before You Go —
        </h2>
        <p className="mt-3 font-body text-[15px] leading-relaxed text-text-body">
          Get a free cleaning quote in under 2 minutes.
        </p>

        <Link
          ref={ctaRef}
          href="/contact"
          onClick={dismiss}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-button-primary-bg px-8 font-body text-[12px] uppercase tracking-widest text-button-primary-text transition-colors hover:bg-accent md:w-auto"
        >
          Request a Free Quote &rarr;
        </Link>

        <button
          type="button"
          onClick={dismiss}
          className="mt-5 font-body text-[13px] text-text-body underline decoration-border-light underline-offset-4 transition-colors hover:text-text-primary hover:decoration-text-body"
        >
          No thanks, I&apos;ll pass
        </button>
      </div>
    </div>,
    document.body,
  );
}

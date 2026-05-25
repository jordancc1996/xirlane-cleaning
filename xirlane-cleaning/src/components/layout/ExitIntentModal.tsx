"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSitePopupEligibility } from "@/hooks/useSitePopupEligibility";
import { getPrefersReducedMotion } from "@/lib/motion";
import { claimSitePopup, releaseSitePopup } from "@/lib/site-popups";

const SESSION_KEY = "xirlane-exit-intent-shown";
const FADE_MS = 350;
const TOP_EXIT_THRESHOLD_PX = 12;

function hasShownThisSession(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markShownThisSession(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* storage unavailable */
  }
}

export default function ExitIntentModal() {
  const { eligible, blockedByOtherPopup } = useSitePopupEligibility("exit-intent");
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
    if (triggeredRef.current || hasShownThisSession() || !eligible || blockedByOtherPopup) {
      return;
    }

    if (!claimSitePopup("exit-intent")) return;

    triggeredRef.current = true;
    markShownThisSession();
    setOpen(true);

    if (getPrefersReducedMotion()) {
      setVisible(true);
    } else {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [eligible, blockedByOtherPopup]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!eligible || blockedByOtherPopup || hasShownThisSession()) return;

    const canUseExitIntent = window.matchMedia("(pointer: fine)").matches;
    if (!canUseExitIntent) return;

    const onMouseLeave = (event: MouseEvent) => {
      if (triggeredRef.current) return;
      if (event.clientY > TOP_EXIT_THRESHOLD_PX) return;
      trigger();
    };

    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => document.documentElement.removeEventListener("mouseleave", onMouseLeave);
  }, [eligible, blockedByOtherPopup, trigger]);

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

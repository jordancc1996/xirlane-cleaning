"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { getPrefersReducedMotion } from "@/lib/motion";

const PARALLAX_RATE = 0.3;

type HeroParallaxImageProps = {
  children: ReactNode;
};

export default function HeroParallaxImage({ children }: HeroParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncReducedMotion = () => {
      const reduced = getPrefersReducedMotion();
      setReducedMotion(reduced);
      if (reduced) {
        setOffsetY(0);
      }
    };

    syncReducedMotion();
    mediaQuery.addEventListener("change", syncReducedMotion);

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", syncReducedMotion);
    }

    let frameId = 0;

    const updateOffset = () => {
      frameId = 0;
      const container = containerRef.current;
      if (!container) return;

      const scrollY = window.scrollY;
      const rect = container.getBoundingClientRect();
      const sectionBottom = scrollY + rect.top + rect.height;

      if (scrollY > sectionBottom) return;

      setOffsetY(scrollY * PARALLAX_RATE);
    };

    const onScroll = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(updateOffset);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateOffset();

    return () => {
      mediaQuery.removeEventListener("change", syncReducedMotion);
      window.removeEventListener("scroll", onScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-x-0 top-[-8%] h-[116%] will-change-transform"
        style={{
          transform: reducedMotion ? undefined : `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

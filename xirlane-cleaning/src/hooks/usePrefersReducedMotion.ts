import { useEffect, useState } from "react";
import { getPrefersReducedMotion } from "@/lib/motion";

export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setPrefersReducedMotion(mediaQuery.matches);
    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return prefersReducedMotion;
}

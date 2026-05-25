import { useEffect, useRef, useState } from "react";

type UseScrollFadeInOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useScrollFadeIn<T extends HTMLElement>({
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
}: UseScrollFadeInOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const showImmediately = () => setIsVisible(true);

    if (mediaQuery.matches) {
      showImmediately();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showImmediately();
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    const onMotionPreferenceChange = () => {
      if (mediaQuery.matches) {
        showImmediately();
        observer.disconnect();
      }
    };

    mediaQuery.addEventListener("change", onMotionPreferenceChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", onMotionPreferenceChange);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

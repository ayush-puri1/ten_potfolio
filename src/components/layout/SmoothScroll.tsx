"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function scrollToTarget(targetId: string) {
  if (typeof window === "undefined") return;

  const selector = targetId.startsWith("#") ? targetId : `#${targetId}`;
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;

  if (lenis) {
    lenis.scrollTo(selector, { offset: -40, duration: 1.2 });
    return;
  }

  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}

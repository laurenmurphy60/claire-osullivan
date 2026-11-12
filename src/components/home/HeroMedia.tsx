"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle vertical parallax for the hero image. The image itself runs the
 * `motion-hero-image` settle animation; this wrapper only translates.
 * Disabled for prefers-reduced-motion.
 */
export function HeroMedia({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const strength =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--parallax-strength")) || 0.18;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, window.innerHeight);
      el.style.transform = `translate3d(0, ${y * strength}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform">
      {children}
    </div>
  );
}

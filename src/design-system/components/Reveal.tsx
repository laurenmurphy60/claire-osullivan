"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  /** Stagger position; multiplies --stagger. */
  index?: number;
  /** "fade" rises the content in; "image" lifts a curtain off it. */
  variant?: "fade" | "image";
  className?: string;
};

/**
 * Reveals children when they scroll into view. Content stays visible with
 * JS disabled and under prefers-reduced-motion (see motion.css).
 */
export function Reveal({ children, as: Tag = "div", index = 0, variant = "fade", className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const attr = variant === "image" ? "data-reveal-image" : "data-reveal";

  useEffect(() => {
    // Tell the fail-safe in layout.tsx that reveals are running, so it
    // doesn't unhide content. If this script never loads, content shows after 2s.
    document.documentElement.classList.add("reveal-ready");
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.setAttribute(attr, "in");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute(attr, "in");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [attr]);

  return (
    <Tag ref={ref} {...{ [attr]: "" }} className={className} style={{ "--i": index } as CSSProperties}>
      {children}
    </Tag>
  );
}

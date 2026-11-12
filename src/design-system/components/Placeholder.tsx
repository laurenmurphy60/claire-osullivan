import type { ReactNode } from "react";

/** Marks unverified content so it can't be mistaken for fact. */
export function PlaceholderTag({ children = "Placeholder" }: { children?: ReactNode }) {
  return (
    <span className="type-label inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-dashed border-line/30 px-2.5 py-1 text-[0.625rem] text-muted">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}

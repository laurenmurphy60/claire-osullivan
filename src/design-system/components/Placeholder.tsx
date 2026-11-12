import type { ReactNode } from "react";

/** Marks unverified content so it can't be mistaken for fact. */
export function PlaceholderTag({ children = "Placeholder" }: { children?: ReactNode }) {
  return (
    <span className="type-label inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-dashed border-ice-300/40 px-2.5 py-1 text-[0.625rem] text-ice-300/80">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ice-300/80" />
      {children}
    </span>
  );
}

/** Empty media frame for images still to be supplied. */
export function MediaPlaceholder({
  label = "Image placeholder",
  caption,
  className = "",
}: {
  label?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={caption ? `${label}: ${caption}` : label}
      className={`media-placeholder relative flex items-end overflow-hidden ${className}`}
    >
      <span className="type-label absolute left-4 top-4 text-[0.625rem] text-ice-300/60">{label}</span>
      {caption && (
        <span className="type-heading relative z-10 p-4 text-h4 text-white/90">{caption}</span>
      )}
    </div>
  );
}

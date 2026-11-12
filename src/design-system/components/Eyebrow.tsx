import type { ReactNode } from "react";

/** Small uppercase label, optionally numbered. Quiet by design. */
export function Eyebrow({
  children,
  index,
  className = "",
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <p className={`type-label flex items-center gap-3 text-muted ${className}`}>
      {index && <span className="text-accent">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-6 bg-line/30" />}
      <span>{children}</span>
    </p>
  );
}

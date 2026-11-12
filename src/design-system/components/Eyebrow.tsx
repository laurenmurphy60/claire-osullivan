import type { ReactNode } from "react";

/** Small uppercase label with a leading fine rule, optionally numbered. */
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
    <p className={`type-label flex items-center gap-3 text-ice-300 ${className}`}>
      {index && <span className="text-blue-400">{index}</span>}
      <span aria-hidden="true" className="h-px w-8 bg-blue-500" />
      <span>{children}</span>
    </p>
  );
}

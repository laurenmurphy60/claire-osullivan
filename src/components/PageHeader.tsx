import type { ReactNode } from "react";
import { BaseballMark, Eyebrow, PlaceholderTag, StitchRule } from "@/design-system";

/** Shared header for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  placeholder = true,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  placeholder?: boolean;
}) {
  return (
    <header className="relative overflow-hidden bg-navy-950 pb-16 pt-[calc(var(--header-h)+5rem)] md:pb-20">
      <BaseballMark className="pointer-events-none absolute -right-20 -top-10 h-96 w-96 text-blue-500/10" />
      <div className="container-page relative">
        <div className="motion-rise" style={{ ["--i" as string]: -2 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="motion-rise type-display mt-6 max-w-5xl text-h1 text-white" style={{ ["--i" as string]: -1 }}>
          {title}
        </h1>
        {intro && (
          <p className="motion-rise mt-8 max-w-2xl text-lg text-white/75" style={{ ["--i" as string]: 0 }}>
            {intro}
          </p>
        )}
        {placeholder && (
          <div className="mt-8">
            <PlaceholderTag>Page in progress: dummy content</PlaceholderTag>
          </div>
        )}
      </div>
      <div className="container-page absolute inset-x-0 bottom-0">
        <StitchRule />
      </div>
    </header>
  );
}

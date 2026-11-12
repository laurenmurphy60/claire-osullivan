import type { ReactNode } from "react";
import { Eyebrow, PlaceholderTag, Reveal } from "@/design-system";
import { Photo } from "@/design-system/components/Photo";

type Image = { src: string; alt: string; label: string };

/** Shared header for inner pages: oversized title band and a lead photograph. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  placeholder = true,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: Image;
  placeholder?: boolean;
}) {
  return (
    <header className="tone-dark tone-deep relative overflow-hidden pt-[calc(var(--header-h)+5rem)] md:pt-[calc(var(--header-h)+7rem)]">
      <div className="container-page">
        <div className="motion-rise" style={{ ["--i" as string]: -2 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="motion-rise type-display mt-6 max-w-[14ch] text-h1 text-strong" style={{ ["--i" as string]: -1 }}>
          {title}
        </h1>
        <div
          className="motion-rise mt-10 grid gap-6 border-t border-line/15 pt-8 md:grid-cols-12 md:gap-grid"
          style={{ ["--i" as string]: 0 }}
        >
          {intro && <p className="type-lead text-fg/80 md:col-span-6 md:col-start-7">{intro}</p>}
          {placeholder && (
            <div className="md:col-span-4 md:row-start-1">
              <PlaceholderTag>Page in progress: dummy content</PlaceholderTag>
            </div>
          )}
        </div>
      </div>

      {image ? (
        <Reveal variant="image" className="mt-16 md:mt-24">
          <Photo {...image} priority className="aspect-[4/3] w-full md:aspect-[21/9]" />
        </Reveal>
      ) : (
        <div className="pb-16 md:pb-24" />
      )}
    </header>
  );
}

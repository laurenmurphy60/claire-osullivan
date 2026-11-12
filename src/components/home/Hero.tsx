import type { CSSProperties } from "react";
import { hero, site } from "@/content/site";
import { Button } from "@/design-system";
import { Photo } from "@/design-system/components/Photo";
import { HeroMedia } from "./HeroMedia";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="tone-dark tone-deep relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Photograph: full bleed, the hero of the page */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* On large screens the photo sits right so Claire clears the name */}
        <div className="absolute inset-0 lg:left-[18%]">
        <HeroMedia>
          <Photo
            src={hero.image.src}
            alt={hero.image.alt}
            label="Hero photograph: the supplied pitching image"
            priority
            className="h-full w-full"
            imgClassName={`motion-hero-image ${hero.image.objectPositionClass}`}
            placeholderClassName="items-end pt-[calc(var(--header-h)+1rem)] md:p-10 md:pt-[calc(var(--header-h)+1.5rem)]"
          />
        </HeroMedia>
        </div>
        <div className="absolute inset-y-0 left-0 hidden w-[45%] bg-gradient-to-r from-ink-950 via-ink-950/70 to-transparent lg:block" />
        {/* Cinematic grade: dark floor for the name, clear upper frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-ink-950/0" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink-950/60 to-transparent" />
      </div>

      <div className="container-page relative pb-10 pt-[calc(var(--header-h)+6rem)] md:pb-14">
        <div className="motion-rise flex items-center justify-between" style={stagger(0)}>
          <p className="type-label text-white/70">{hero.eyebrow}</p>
          <p className="type-script hidden text-white/80 md:block" aria-hidden="true">
            No. {site.number}
          </p>
        </div>

        {/* Oversized name */}
        <h1 id="hero-title" className="type-display mt-6 text-display text-white">
          <span className="block overflow-hidden pb-[0.02em]">
            <span className="motion-mask block" style={stagger(1)}>
              {hero.firstName}
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.02em]">
            <span className="motion-mask block" style={stagger(2)}>
              {hero.lastName}
              <span aria-hidden="true" className="text-blue-500">.</span>
            </span>
          </span>
        </h1>

        {/* Bottom band: statement, copy, actions */}
        <div
          className="motion-rise mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-12 md:items-end md:gap-grid"
          style={stagger(4)}
        >
          <p className="type-heading text-h3 text-white md:col-span-4">{hero.tagline}</p>
          <p className="max-w-[28rem] text-base text-white/70 md:col-span-4">{hero.copy}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:col-span-4 md:justify-end">
            <Button href={hero.primaryCta.href} size="lg" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost" arrow>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

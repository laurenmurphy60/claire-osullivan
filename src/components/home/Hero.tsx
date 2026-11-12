import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { CSSProperties } from "react";
import { hero, site } from "@/content/site";
import { Brushstroke, Button, Eyebrow } from "@/design-system";
import { HeroMedia } from "./HeroMedia";

// Checked at build time. Until the supplied photograph is added at
// public/images/claire-osullivan-hero.jpg, a labelled placeholder renders
// instead, so no stock or generated image is ever substituted.
const heroImageExists = fs.existsSync(path.join(process.cwd(), "public", hero.image.src));

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-950">
      {/* Photograph */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <HeroMedia>
          {heroImageExists ? (
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              quality={85}
              sizes="100vw"
              className="motion-hero-image object-cover"
              style={{ objectPosition: hero.image.objectPosition }}
            />
          ) : (
            <div
              role="img"
              aria-label="Hero photograph to be added"
              className="media-placeholder motion-hero-image flex h-full w-full items-start justify-end p-6 pt-[calc(var(--header-h)+1.5rem)] md:items-center md:p-10"
            >
              <p className="type-label max-w-[16rem] border border-dashed border-ice-300/40 p-4 text-right text-ice-300/80">
                Hero photograph missing. Add the supplied pitching image at
                <br />
                <code className="normal-case tracking-normal">public{hero.image.src}</code>
              </p>
            </div>
          )}
        </HeroMedia>
        {/* Navy grade: keeps copy legible bottom-left, leaves Claire clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/25 to-transparent md:via-transparent" />
      </div>

      <div className="container-page relative pb-16 pt-[calc(var(--header-h)+4rem)] md:pb-20">
        <div className="max-w-[56rem]">
          <div className="motion-rise" style={stagger(0)}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>

          <h1 id="hero-title" className="type-display mt-6 text-h1 text-white">
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="motion-mask block" style={stagger(1)}>
                {hero.firstName}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="motion-mask block text-ice-300" style={stagger(2)}>
                {hero.lastName}
              </span>
            </span>
          </h1>

          <p className="motion-rise relative mt-4 inline-block" style={stagger(3)}>
            <span className="type-heading relative z-10 text-h3 text-white">{hero.tagline}</span>
            <Brushstroke className="motion-draw absolute -bottom-2 left-0 -z-0 h-4 w-full text-blue-500" />
          </p>

          <p className="motion-rise mt-8 max-w-[30rem] text-lg text-white/80" style={stagger(4)}>
            {hero.copy}
          </p>

          <div className="motion-rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4" style={stagger(5)}>
            <Button href={hero.primaryCta.href} size="lg" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Side detail: number + scroll cue */}
        <div
          className="motion-rise absolute bottom-16 right-[var(--gutter)] hidden flex-col items-center gap-5 md:bottom-20 md:flex"
          style={stagger(6)}
          aria-hidden="true"
        >
          <span className="type-script -rotate-6">No. {site.number}</span>
          <span className="type-label [writing-mode:vertical-rl] text-white/60">Scroll</span>
          <span className="relative h-16 w-px overflow-hidden bg-white/15">
            <span className="motion-scroll-cue absolute inset-0 bg-ice-300" />
          </span>
        </div>
      </div>
    </section>
  );
}

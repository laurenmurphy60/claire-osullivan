import Link from "next/link";
import { coaching, images } from "@/content/site";
import { ArrowIcon, Button, Eyebrow, Reveal } from "@/design-system";
import { Photo } from "@/design-system/components/Photo";

export function Coaching() {
  const words = coaching.heading.split(". ");

  return (
    <section aria-labelledby="coaching-title" className="tone-dark section-y relative overflow-hidden">
      <div className="container-page">
        {/* Asymmetric: statement left, tall photograph right */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-grid">
          <div className="flex flex-col justify-between gap-12 lg:col-span-7">
            <Reveal>
              <Eyebrow index="02">{coaching.eyebrow}</Eyebrow>
              <h2 id="coaching-title" className="type-display mt-6 text-h2 text-strong">
                {words.map((word, i) => (
                  <span key={word} className={`block ${i === words.length - 1 ? "text-accent" : ""}`}>
                    {word}
                    {i < words.length - 1 ? "." : ""}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal index={1} className="max-w-[30rem]">
              <p className="type-lead text-fg/80">{coaching.copy}</p>
            </Reveal>
          </div>

          <Reveal variant="image" className="lg:col-span-5">
            <Photo {...images.coaching} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5]" />
          </Reveal>
        </div>

        {/* Disciplines: numbered editorial rows */}
        <ol className="mt-24 border-t border-line/15 md:mt-32">
          {coaching.disciplines.map((d, i) => (
            <Reveal as="li" key={d.name} index={i}>
              <Link
                href="/coaching"
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-2 border-b border-line/15 py-8 md:grid-cols-[5rem_1fr_1fr_auto] md:gap-x-10 md:py-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-slow ease-out group-hover:scale-x-100"
                />
                <span className="type-label text-accent">{d.number}</span>
                <span className="type-display text-h2 text-strong transition-transform duration-slow ease-out group-hover:translate-x-3">
                  {d.name}
                </span>
                <span className="col-span-full col-start-2 max-w-md text-base text-muted md:col-span-1 md:col-start-3 md:text-lg">
                  {d.copy}
                </span>
                <ArrowIcon className="col-start-3 row-start-1 h-6 w-6 text-fg/40 transition-[color,transform] duration-base ease-out group-hover:-rotate-45 group-hover:text-accent md:col-start-4" />
              </Link>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Coaching focus">
            {coaching.pillars.map((p) => (
              <li key={p} className="type-label text-muted">
                {p}
              </li>
            ))}
          </ul>
          <Button href={coaching.cta.href} size="lg" arrow>
            {coaching.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

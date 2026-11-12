import Link from "next/link";
import { coaching } from "@/content/site";
import { ArrowIcon, Brushstroke, Button, Eyebrow, Reveal } from "@/design-system";

export function Coaching() {
  return (
    <section aria-labelledby="coaching-title" className="section-y relative overflow-hidden bg-navy-950">
      {/* Blue field glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-1/4 top-0 h-[60rem] w-[60rem] rounded-full bg-blue-600/15 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow index="02">{coaching.eyebrow}</Eyebrow>
            <h2 id="coaching-title" className="type-display mt-5 text-h2 text-white">
              {coaching.heading.split(". ").map((word, i, arr) => (
                <span key={word} className={`block ${i === arr.length - 1 ? "text-ice-300" : ""}`}>
                  {word}
                  {i < arr.length - 1 ? "." : ""}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal index={1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg text-white/75">{coaching.copy}</p>
            <p className="type-script relative mt-6 inline-block -rotate-2">
              One player at a time.
              <Brushstroke className="absolute -bottom-3 left-0 h-3 w-full text-blue-500/70" />
            </p>
          </Reveal>
        </div>

        {/* Disciplines: numbered editorial rows */}
        <ol className="mt-20 border-t border-rule">
          {coaching.disciplines.map((d, i) => (
            <Reveal as="li" key={d.name} index={i}>
              <Link
                href="/coaching"
                className="group relative grid grid-cols-[3rem_1fr_auto] items-center gap-x-4 gap-y-2 border-b border-rule py-8 transition-colors duration-base md:grid-cols-[6rem_1fr_1.1fr_auto] md:gap-x-10 md:py-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-slow ease-out group-hover:scale-x-100"
                />
                <span className="type-heading text-h4 text-blue-400">{d.number}</span>
                <span className="type-display text-h2 text-white transition-[color,transform] duration-base ease-out group-hover:translate-x-2 group-hover:text-ice-300">
                  {d.name}
                </span>
                <span className="col-span-full col-start-2 text-base text-neutral-400 md:col-span-1 md:col-start-3 md:text-lg">
                  {d.copy}
                </span>
                <ArrowIcon className="col-start-3 row-start-1 h-6 w-6 text-white/40 transition-[color,transform] duration-base ease-out group-hover:-rotate-45 group-hover:text-ice-300 md:col-start-4" />
              </Link>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Coaching focus">
            {coaching.pillars.map((p) => (
              <li key={p} className="type-label flex items-center gap-2 text-white/70">
                <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-blue-500" />
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

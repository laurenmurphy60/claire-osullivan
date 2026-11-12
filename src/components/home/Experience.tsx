import { experience } from "@/content/site";
import { Eyebrow, PlaceholderTag, Reveal } from "@/design-system";

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="tone-light section-y relative overflow-hidden">
      <div className="container-page">
        {/* Statement: heading left, copy offset right */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-grid">
          <Reveal className="lg:col-span-8">
            <Eyebrow index="01">{experience.eyebrow}</Eyebrow>
            <h2 id="experience-title" className="type-display mt-8 text-h2 text-strong">
              {experience.heading}
            </h2>
          </Reveal>
          <Reveal index={1} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="type-lead text-muted">{experience.copy}</p>
          </Reveal>
        </div>

        {/* Regions: oversized solid type */}
        <ul className="mt-24 border-t border-line/15 md:mt-36">
          {experience.regions.map((region, i) => (
            <Reveal as="li" key={region.name} index={i} className="group border-b border-line/15">
              <div className="flex flex-col gap-2 py-8 md:flex-row md:items-end md:justify-between md:gap-10 md:py-12">
                <p className="type-display text-[clamp(3rem,5vw,5.5rem)] text-strong transition-colors duration-slow ease-out group-hover:text-accent">
                  {region.name}
                </p>
                <p className="type-label pb-2 text-muted md:pb-4">{region.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Numbers */}
        <Reveal className="mt-24 md:mt-36">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="type-label text-muted">Career numbers</p>
            <PlaceholderTag>Unverified, to be confirmed</PlaceholderTag>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-grid">
            {experience.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end border-t border-line/15 pt-6">
                <dt className="type-label mt-3 text-muted">{stat.label}</dt>
                <dd className="type-display text-h3 text-strong">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

import { experience } from "@/content/site";
import { BaseballMark, PlaceholderTag, Reveal, SectionHeading } from "@/design-system";

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="section-y relative overflow-hidden">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-grid">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow={experience.eyebrow}
            index="01"
            title={<span id="experience-title">{experience.heading}</span>}
            intro={experience.copy}
          />
        </Reveal>

        {/* Oversized region type */}
        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="border-t border-rule">
            {experience.regions.map((region, i) => (
              <Reveal as="li" key={region.name} index={i} className="group border-b border-rule">
                <div className="flex items-center justify-between gap-6 py-6">
                  <div>
                    <p className="type-display type-outline text-[clamp(4.5rem,11vw,9rem)] transition-colors duration-slow ease-out group-hover:text-ice-300">
                      {region.name}
                    </p>
                    <p className="mt-1 text-sm text-neutral-400">{region.detail}</p>
                  </div>
                  <BaseballMark className="h-14 w-14 shrink-0 text-blue-500 transition-transform duration-slow ease-out group-hover:rotate-[60deg] md:h-20 md:w-20" />
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal index={2} className="mt-10">
            <div className="flex items-center justify-between">
              <p className="type-label text-neutral-400">Career numbers</p>
              <PlaceholderTag>Unverified, to be confirmed</PlaceholderTag>
            </div>
            <dl className="mt-6 grid grid-cols-3 gap-grid">
              {experience.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse border-l border-blue-500 pl-4">
                  <dt className="type-label text-neutral-400">{stat.label}</dt>
                  <dd className="type-display mb-2 text-h2 text-ice-300">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

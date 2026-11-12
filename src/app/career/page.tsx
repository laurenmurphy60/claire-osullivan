import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Experience } from "@/components/home/Experience";
import { NextUp } from "@/components/home/NextUp";
import { PlaceholderTag, Reveal, SectionHeading } from "@/design-system";

export const metadata: Metadata = { title: "Career" };

// PLACEHOLDER timeline: replace with verified seasons, teams and leagues.
const timeline = [
  { period: "[Year]", place: "[Country]", title: "[Team / league]", copy: "[Placeholder: role, highlights, what the season meant.]" },
  { period: "[Year]", place: "United States", title: "[Team / league]", copy: "[Placeholder: professional experience in America.]" },
  { period: "[Year]", place: "Japan", title: "[Team / league]", copy: "[Placeholder: professional experience in Japan.]" },
];

export default function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title={
          <>
            Built for the <span className="text-ice-300">big moments.</span>
          </>
        }
        intro="From the United States to Japan, the professional journey so far."
      />

      <Experience />

      <section className="section-y border-t border-rule bg-navy-950">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Timeline" title="The journey" size="h3" />
            <PlaceholderTag>All entries to be confirmed</PlaceholderTag>
          </div>
          <ol className="mt-12 border-t border-rule">
            {timeline.map((t, i) => (
              <Reveal
                as="li"
                key={i}
                index={i}
                className="grid gap-3 border-b border-rule py-8 md:grid-cols-[10rem_12rem_1fr] md:gap-10"
              >
                <span className="type-display text-h3 text-blue-400">{t.period}</span>
                <span className="type-label self-center text-ice-300">{t.place}</span>
                <div>
                  <h3 className="type-heading text-h4 text-white">{t.title}</h3>
                  <p className="mt-2 text-neutral-400">{t.copy}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <NextUp />
    </>
  );
}

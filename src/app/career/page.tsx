import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Experience } from "@/components/home/Experience";
import { NextUp } from "@/components/home/NextUp";
import { images } from "@/content/site";
import { Eyebrow, PlaceholderTag, Reveal } from "@/design-system";

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
            Built for the <span className="text-accent">big moments.</span>
          </>
        }
        intro="From the United States to Japan, the professional journey so far."
        image={images.careerLead}
      />

      <Experience />

      <section className="tone-dark section-y">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Timeline</Eyebrow>
              <h2 className="type-display mt-6 text-h2 text-strong">The journey</h2>
            </div>
            <PlaceholderTag>All entries to be confirmed</PlaceholderTag>
          </Reveal>
          <ol className="mt-16 border-t border-line/15">
            {timeline.map((t, i) => (
              <Reveal
                as="li"
                key={i}
                index={i}
                className="grid gap-4 border-b border-line/15 py-10 md:grid-cols-[12rem_12rem_1fr] md:items-baseline md:gap-10"
              >
                <span className="type-display text-h2 text-strong">{t.period}</span>
                <span className="type-label text-accent">{t.place}</span>
                <div>
                  <h3 className="type-heading text-h4 text-strong">{t.title}</h3>
                  <p className="mt-3 text-muted">{t.copy}</p>
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

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Coaching } from "@/components/home/Coaching";
import { Button, PlaceholderTag, Reveal, SectionHeading } from "@/design-system";

export const metadata: Metadata = { title: "Coaching" };

// PLACEHOLDER formats: confirm with Claire before launch.
const formats = [
  { title: "One-on-one", copy: "[Placeholder: session length, location and what's covered.]" },
  { title: "Small group", copy: "[Placeholder: group size and focus.]" },
  { title: "Development block", copy: "[Placeholder: multi-week programme details.]" },
];

export default function CoachingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coaching"
        title={
          <>
            Private baseball <span className="text-ice-300">coaching.</span>
          </>
        }
        intro="Pitching, hitting and fielding: technique, performance and the mental side of the game, coached by a professional player."
      />

      <Coaching />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Sessions" title="How it works" size="h3" />
            <PlaceholderTag>Formats and pricing to be confirmed</PlaceholderTag>
          </div>
          <ul className="mt-12 grid gap-grid md:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal as="li" key={f.title} index={i} className="border-t border-blue-500 bg-navy-800/40 p-8">
                <h3 className="type-display text-h3 text-white">{f.title}</h3>
                <p className="mt-3 text-neutral-400">{f.copy}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12">
            <Button href="/contact#coaching" size="lg" arrow>
              Coaching enquiries
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

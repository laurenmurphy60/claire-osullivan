import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Coaching } from "@/components/home/Coaching";
import { images } from "@/content/site";
import { Button, Eyebrow, PlaceholderTag, Reveal } from "@/design-system";

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
            Private baseball <span className="text-accent">coaching.</span>
          </>
        }
        intro="Pitching, hitting and fielding: technique, performance and the mental side of the game, coached by a professional player."
        image={images.coachingLead}
      />

      <Coaching />

      <section className="tone-light section-y">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Sessions</Eyebrow>
              <h2 className="type-display mt-8 text-h2 text-strong">How it works</h2>
            </div>
            <PlaceholderTag>Formats and pricing to be confirmed</PlaceholderTag>
          </Reveal>
          <ol className="mt-16 grid border-t border-line/15 md:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal
                as="li"
                key={f.title}
                index={i}
                className="border-b border-line/15 py-10 md:border-b-0 md:border-l md:px-8 md:py-12 md:first:border-l-0 md:first:pl-0"
              >
                <span className="type-label text-accent">0{i + 1}</span>
                <h3 className="type-display mt-6 text-h3 text-strong">{f.title}</h3>
                <p className="mt-4 text-muted">{f.copy}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14">
            <Button href="/contact#coaching" size="lg" arrow>
              Coaching enquiries
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

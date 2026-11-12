import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Social } from "@/components/home/Social";
import { images } from "@/content/site";
import { Button, Eyebrow, Reveal } from "@/design-system";
import { Photo } from "@/design-system/components/Photo";

export const metadata: Metadata = { title: "About" };

const values = [
  { title: "Compete", copy: "[Placeholder: what competing means to Claire.]" },
  { title: "Prepare", copy: "[Placeholder: how she trains and gets ready.]" },
  { title: "Pass it on", copy: "[Placeholder: why coaching matters to her.]" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Different game. <span className="text-accent">Same drive.</span>
          </>
        }
        intro="Professional baseball player. Competitor. Coach. Always working towards the next level."
        image={images.aboutLead}
      />

      <section className="tone-light section-y">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-grid">
          <Reveal variant="image" className="lg:col-span-5">
            <Photo {...images.aboutPortrait} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5]" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <Eyebrow>The story</Eyebrow>
            <h2 className="type-display mt-8 text-h2 text-strong">Where it started</h2>
            <div className="mt-10 space-y-6 text-lg text-muted">
              <p className="type-lead text-fg">
                [Placeholder biography: where Claire grew up, how she found baseball and the path that led her to the professional game.]
              </p>
              <p>[Placeholder: her experience playing professionally in the United States and Japan, and what each taught her.]</p>
              <p>[Placeholder: what drives her now, on the field and as a coach.]</p>
            </div>
            <div className="mt-12">
              <Button href="/career" arrow>
                See the career
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tone-dark section-y">
        <div className="container-page">
          <Reveal>
            <Eyebrow>What matters</Eyebrow>
            <h2 className="type-display mt-8 text-h2 text-strong">On and off the field</h2>
          </Reveal>
          <ol className="mt-20 border-t md:mt-28 border-line/15">
            {values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                index={i}
                className="grid gap-4 border-b border-line/15 py-12 md:py-14 md:grid-cols-[5rem_1fr_1fr] md:items-baseline md:gap-10"
              >
                <span className="type-label text-accent">0{i + 1}</span>
                <h3 className="type-display text-h3 text-strong">{v.title}</h3>
                <p className="text-lg text-muted">{v.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Social tone="light" />
    </>
  );
}

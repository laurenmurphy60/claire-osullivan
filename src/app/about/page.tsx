import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Social } from "@/components/home/Social";
import { Button, MediaPlaceholder, Reveal, SectionHeading } from "@/design-system";

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
            Different game. <span className="text-ice-300">Same drive.</span>
          </>
        }
        intro="Professional baseball player. Competitor. Coach. Always working towards the next level."
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal variant="image" className="lg:col-span-5">
            <MediaPlaceholder caption="Portrait" className="aspect-[4/5]" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow="The story" title="Where it started" size="h3" />
            <div className="mt-8 space-y-5 text-lg text-white/75">
              <p>[Placeholder biography: where Claire grew up, how she found baseball and the path that led her to the professional game.]</p>
              <p>[Placeholder: her experience playing professionally in the United States and Japan, and what each taught her.]</p>
              <p>[Placeholder: what drives her now, on the field and as a coach.]</p>
            </div>
            <div className="mt-10">
              <Button href="/career" arrow>
                See the career
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-rule bg-navy-950">
        <div className="container-page">
          <SectionHeading eyebrow="What matters" title="On and off the field" size="h3" />
          <ol className="mt-12 grid gap-grid md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} index={i} className="border-t border-blue-500 pt-6">
                <span className="type-heading text-h4 text-blue-400">0{i + 1}</span>
                <h3 className="type-display mt-3 text-h3 text-white">{v.title}</h3>
                <p className="mt-3 text-neutral-400">{v.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Social />
    </>
  );
}

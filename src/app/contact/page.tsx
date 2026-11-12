import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { enquiries, site } from "@/content/site";
import { InstagramIcon, PlaceholderTag, Reveal } from "@/design-system";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Get in <span className="text-ice-300">touch.</span>
          </>
        }
        intro="Coaching, partnerships or media. Pick the right lane and Claire will come back to you."
      />

      <section className="section-y">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <ol className="lg:col-span-7">
            {enquiries.map((e, i) => (
              <Reveal
                as="li"
                key={e.id}
                index={i}
                className="scroll-mt-[calc(var(--header-h)+2rem)] border-t border-rule py-10"
              >
                <div id={e.id} className="grid gap-4 md:grid-cols-[4rem_1fr]">
                  <span className="type-heading text-h4 text-blue-400">0{i + 1}</span>
                  <div>
                    <h2 className="type-display text-h3 text-white">{e.title}</h2>
                    <p className="mt-3 max-w-lg text-neutral-400">{e.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-blue-500 bg-navy-800/50 p-8">
              <p className="type-label text-blue-400">Enquiries</p>
              <p className="type-heading mt-4 break-words text-h4 text-white">{site.contactEmail}</p>
              <div className="mt-4">
                <PlaceholderTag>Contact details to be confirmed</PlaceholderTag>
              </div>
              <p className="mt-6 text-sm text-neutral-400">
                A contact form can be added here once an email or form service is chosen.
              </p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="type-label mt-8 inline-flex items-center gap-3 text-ice-300 hover:text-white"
              >
                <InstagramIcon /> {site.instagram.handle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

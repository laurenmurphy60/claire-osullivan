import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { enquiries, images, site } from "@/content/site";
import { InstagramIcon, PlaceholderTag, Reveal } from "@/design-system";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Get in <span className="text-accent">touch.</span>
          </>
        }
        intro="Coaching, partnerships or media. Pick the right lane and Claire will come back to you."
        image={images.contactLead}
      />

      <section className="tone-light section-y">
        <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-grid">
          <ol className="border-t border-line/15 lg:col-span-7">
            {enquiries.map((e, i) => (
              <Reveal
                as="li"
                key={e.id}
                index={i}
                className="scroll-mt-[calc(var(--header-h)+2rem)] border-b border-line/15 py-10 md:py-12"
              >
                <div id={e.id} className="grid gap-4 md:grid-cols-[4rem_1fr]">
                  <span className="type-label pt-3 text-accent">0{i + 1}</span>
                  <div>
                    <h2 className="type-display text-h2 text-strong">{e.title}</h2>
                    <p className="mt-4 max-w-lg text-lg text-muted">{e.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="lg:col-span-4 lg:col-start-9">
            <div className="border-t-2 border-blue-500 pt-8">
              <p className="type-label text-muted">Enquiries</p>
              <p className="type-display mt-5 break-words text-h3 text-strong">{site.contactEmail}</p>
              <div className="mt-5">
                <PlaceholderTag>Contact details to be confirmed</PlaceholderTag>
              </div>
              <p className="mt-8 text-sm text-muted">
                A contact form can be added here once an email or form service is chosen.
              </p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="type-label mt-10 inline-flex items-center gap-3 text-fg transition-colors hover:text-accent"
              >
                <InstagramIcon /> <span className="link-draw">{site.instagram.handle}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

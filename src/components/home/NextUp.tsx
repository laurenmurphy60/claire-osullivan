import Link from "next/link";
import { images, nextUp } from "@/content/site";
import { ArrowIcon, Eyebrow, PlaceholderTag, Reveal } from "@/design-system";
import { Photo } from "@/design-system/components/Photo";

export function NextUp() {
  const [feature, ...rest] = nextUp.items;
  const [featureImage, ...restImages] = images.nextUp;

  return (
    <section aria-labelledby="nextup-title" className="tone-light section-y">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow index="03">{nextUp.eyebrow}</Eyebrow>
            <h2 id="nextup-title" className="type-display mt-6 text-h2 text-strong">
              {nextUp.heading}
            </h2>
          </div>
          <PlaceholderTag>Dummy content</PlaceholderTag>
        </Reveal>

        <div className="mt-16 grid gap-x-grid gap-y-16 lg:grid-cols-12">
          {/* Feature: large image */}
          <Reveal className="lg:col-span-8">
            <Link href={feature.href} className="group block">
              <Reveal variant="image">
                <Photo
                  {...featureImage}
                  zoom
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className="aspect-[4/3] lg:aspect-[16/10]"
                />
              </Reveal>
              <div className="mt-8 flex items-start justify-between gap-6">
                <div>
                  <p className="type-label text-accent">{feature.kind}</p>
                  <h3 className="type-display mt-4 text-h3 text-strong">
                    <span className="link-draw">{feature.title}</span>
                  </h3>
                  <p className="type-label mt-4 text-muted">{feature.meta}</p>
                  <p className="mt-4 max-w-md text-muted">{feature.copy}</p>
                </div>
                <ArrowIcon className="mt-2 h-6 w-6 shrink-0 text-fg/40 transition-[color,transform] duration-base group-hover:-rotate-45 group-hover:text-accent" />
              </div>
            </Link>
          </Reveal>

          {/* Secondary items, offset down */}
          <div className="flex flex-col gap-14 lg:col-span-4 lg:pt-32">
            {rest.map((item, i) => (
              <Reveal key={item.kind} index={i + 1}>
                <Link href={item.href} className="group block">
                  <Photo {...restImages[i]} zoom sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[3/2]" />
                  <p className="type-label mt-6 text-accent">{item.kind}</p>
                  <h3 className="type-heading mt-3 text-h4 text-strong">
                    <span className="link-draw">{item.title}</span>
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.copy}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

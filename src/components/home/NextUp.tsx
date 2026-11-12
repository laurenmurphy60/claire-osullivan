import Link from "next/link";
import { nextUp } from "@/content/site";
import { ArrowIcon, Eyebrow, MediaPlaceholder, PlaceholderTag, Reveal } from "@/design-system";

export function NextUp() {
  const [feature, ...rest] = nextUp.items;

  return (
    <section aria-labelledby="nextup-title" className="section-y">
      <div className="container-page">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow index="03">{nextUp.eyebrow}</Eyebrow>
            <h2 id="nextup-title" className="type-display mt-5 text-h2 text-white">
              {nextUp.heading}
            </h2>
          </div>
          <PlaceholderTag>Dummy content</PlaceholderTag>
        </Reveal>

        <div className="mt-12 grid gap-grid lg:grid-cols-12">
          {/* Feature */}
          <Reveal className="lg:col-span-7">
            <Link href={feature.href} className="group block">
              <Reveal variant="image">
                <MediaPlaceholder
                  caption={feature.kind}
                  className="aspect-[4/3] transition-transform duration-slow ease-out group-hover:scale-[1.01] lg:aspect-[16/11]"
                />
              </Reveal>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="type-label text-blue-400">{feature.meta}</p>
                  <h3 className="type-heading mt-3 text-h3 text-white transition-colors duration-base group-hover:text-ice-300">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-md text-neutral-400">{feature.copy}</p>
                </div>
                <ArrowIcon className="mt-2 h-6 w-6 shrink-0 text-white/40 transition-[color,transform] duration-base group-hover:-rotate-45 group-hover:text-ice-300" />
              </div>
            </Link>
          </Reveal>

          {/* Stacked secondary items */}
          <div className="flex flex-col lg:col-span-5">
            {rest.map((item, i) => (
              <Reveal key={item.kind} index={i + 1} className="border-t border-rule first:border-t-0 lg:first:border-t">
                <Link href={item.href} className="group grid grid-cols-[7rem_1fr] gap-5 py-6 sm:grid-cols-[10rem_1fr]">
                  <MediaPlaceholder className="aspect-square" label="Image" />
                  <div className="flex flex-col">
                    <p className="type-label text-blue-400">{item.kind}</p>
                    <h3 className="type-heading mt-2 text-h4 text-white transition-colors duration-base group-hover:text-ice-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-400">{item.copy}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { images, site, social } from "@/content/site";
import { Button, Eyebrow, InstagramIcon, Reveal } from "@/design-system";
import { Photo } from "@/design-system/components/Photo";

// Editorial mosaic: tile 0 is tall, tiles 3 and 5 are wide.
const tileLayout = [
  "col-span-2 row-span-2",
  "",
  "",
  "col-span-2",
  "",
  "md:col-span-3",
];

export function Social({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <section
      aria-labelledby="social-title"
      className={`${tone === "light" ? "tone-light" : "tone-dark tone-deep"} section-y relative overflow-hidden`}
    >
      <div className="container-page relative grid gap-14 lg:grid-cols-12 lg:gap-grid">
        <Reveal className="flex flex-col lg:col-span-4">
          <Eyebrow index="04">Instagram</Eyebrow>
          <h2 id="social-title" className="type-display mt-6 text-h2 text-strong">
            {social.heading.replace(".", "")}
            <span aria-hidden="true" className="text-blue-500">.</span>
          </h2>
          <p className="type-lead mt-8 text-muted">{social.copy}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={site.instagram.url} size="lg">
              <span className="inline-flex items-center gap-3">
                <InstagramIcon className="h-5 w-5" />
                {social.cta}
              </span>
            </Button>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="type-script link-draw text-fg"
            >
              {site.instagram.handle}
            </a>
          </div>
        </Reveal>

        <ul className="grid auto-rows-[minmax(9rem,1fr)] grid-cols-2 gap-1.5 md:auto-rows-[14rem] md:grid-cols-4 lg:col-span-8">
          {social.tiles.map((tile, i) => (
            <li key={tile.caption} className={tileLayout[i]}>
              <Reveal variant="image" index={i} className="h-full">
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full overflow-hidden"
                  aria-label={`${tile.caption}, view on Instagram`}
                >
                  <Photo
                    src={images.instagram[i].src}
                    alt=""
                    label={tile.caption}
                    zoom
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="h-full"
                  />
                  <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink-950/70 to-transparent p-4 opacity-0 transition-opacity duration-base group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="type-label text-white">{tile.caption}</span>
                    <InstagramIcon className="h-5 w-5 text-white" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

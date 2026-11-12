import { site, social } from "@/content/site";
import { BaseballMark, Button, Eyebrow, InstagramIcon, MediaPlaceholder, Reveal } from "@/design-system";

// Editorial mosaic: tile 0 is tall, tile 3 is wide.
const tileLayout = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "",
  "",
  "col-span-2 md:col-span-2",
  "",
  "",
];

export function Social() {
  return (
    <section aria-labelledby="social-title" className="section-y relative overflow-hidden border-t border-rule">
      <BaseballMark className="pointer-events-none absolute -left-24 top-24 h-80 w-80 text-blue-500/10" />

      <div className="container-page relative grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow index="04">Instagram</Eyebrow>
          <h2 id="social-title" className="type-display mt-5 text-h2 text-white">
            {social.heading.replace(".", "")}
            <span className="text-blue-500">.</span>
          </h2>
          <p className="mt-6 text-lg text-white/75">{social.copy}</p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="type-script mt-8 inline-block text-ice-300 hover:text-white"
          >
            {site.instagram.handle}
          </a>
          <div className="mt-8">
            <Button href={site.instagram.url} size="lg">
              <span className="inline-flex items-center gap-3">
                <InstagramIcon className="h-5 w-5" />
                {social.cta}
              </span>
            </Button>
          </div>
        </Reveal>

        <ul className="grid auto-rows-[minmax(9rem,1fr)] grid-cols-2 gap-2 md:grid-cols-4 md:auto-rows-[12rem] md:gap-3 lg:col-span-8">
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
                  <MediaPlaceholder
                    caption={tile.caption}
                    className="h-full transition-transform duration-slow ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-blue-600/0 opacity-0 transition-[opacity,background-color] duration-base group-hover:bg-blue-600/50 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <InstagramIcon className="h-8 w-8 text-white" />
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

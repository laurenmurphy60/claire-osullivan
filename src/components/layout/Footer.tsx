import Link from "next/link";
import { nav, site } from "@/content/site";
import { BaseballMark, InstagramIcon, StitchRule } from "@/design-system";
import { Wordmark } from "./Wordmark";

const enquiryLinks = [
  { href: "/contact#coaching", label: "Coaching enquiries" },
  { href: "/contact#sponsorship", label: "Sponsorship enquiries" },
  { href: "/contact#media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

const linkClass = "text-sm text-white/70 transition-colors duration-fast hover:text-ice-300";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-rule bg-navy-950">
      <div className="container-page pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm text-neutral-400">
              Professional baseball player. Competitor. Coach.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="type-label text-blue-400">Explore</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="type-label text-blue-400">Enquiries</h2>
            <ul className="mt-5 space-y-3">
              {enquiryLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="type-label text-blue-400">Social</h2>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} mt-5 inline-flex items-center gap-2`}
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="container-page relative mt-20" aria-hidden="true">
        <BaseballMark className="absolute right-[var(--gutter)] top-0 hidden h-28 w-28 text-blue-500/40 md:block" />
        <p className="type-display type-outline select-none whitespace-nowrap text-[clamp(3rem,16vw,15rem)]">
          O&rsquo;Sullivan <span className="text-blue-500/30 [-webkit-text-stroke:0]">{site.number}</span>
        </p>
      </div>

      <div className="container-page pb-8">
        <StitchRule className="mb-6" />
        <div className="flex flex-col gap-2 text-xs text-neutral-400 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Built to compete.</p>
        </div>
      </div>
    </footer>
  );
}

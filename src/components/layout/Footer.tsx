import Link from "next/link";
import { hero, nav, site } from "@/content/site";
import { InstagramIcon } from "@/design-system";
import { Wordmark } from "./Wordmark";

const enquiryLinks = [
  { href: "/contact#coaching", label: "Coaching enquiries" },
  { href: "/contact#sponsorship", label: "Sponsorship enquiries" },
  { href: "/contact#media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

const linkClass = "link-draw text-sm text-white/70 transition-colors duration-fast hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tone-dark tone-deep relative overflow-hidden border-t border-white/10">
      <div className="container-page pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm text-muted">Professional baseball player. Competitor. Coach.</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="type-label text-muted">Explore</h2>
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
            <h2 className="type-label text-muted">Enquiries</h2>
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
            <h2 className="type-label text-muted">Social</h2>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-fast hover:text-blue-400"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container-page pb-8">
        <div className="mt-20 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{hero.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { Button, CloseIcon, InstagramIcon, MenuIcon } from "@/design-system";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Mobile menu: lock scroll, move focus in, close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-slow ease-out ${
        scrolled || open
          ? "border-b border-white/10 bg-ink-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="type-label sr-only z-50 bg-blue-500 px-4 py-3 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <div className="container-page flex h-header items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="type-label relative py-2 text-white/65 transition-colors duration-fast hover:text-white aria-[current=page]:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-base after:ease-out hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/65 transition-colors duration-fast hover:text-blue-400"
          >
            <InstagramIcon title={`${site.name} on Instagram`} />
          </a>
          <Button href="/contact" size="md">
            Get in touch
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon title="Close menu" /> : <MenuIcon title="Open menu" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="container-page flex h-[calc(100svh-var(--header-h))] flex-col justify-between overflow-y-auto bg-ink-950 pb-10 pt-6 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="border-t border-white/10">
              {nav.map((item, i) => (
                <li key={item.href} className="motion-rise border-b border-white/10" style={{ ["--i" as string]: i - 3 }}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="type-display flex items-baseline justify-between py-4 text-h2 text-white aria-[current=page]:text-blue-400"
                  >
                    {item.label}
                    <span className="type-label text-white/40">0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-10 flex flex-col gap-4">
            <Button href="/contact" size="lg" arrow>
              Get in touch
            </Button>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label flex items-center justify-center gap-3 py-3 text-white/70"
            >
              <InstagramIcon /> {site.instagram.handle}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

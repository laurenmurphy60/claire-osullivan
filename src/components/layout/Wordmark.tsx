import Link from "next/link";
import { site } from "@/content/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      className={`type-display group flex items-baseline gap-2 text-[1.75rem] leading-none text-white ${className}`}
    >
      <span>Claire</span>
      <span className="text-ice-300 transition-colors duration-base group-hover:text-blue-400">
        O&rsquo;Sullivan
      </span>
    </Link>
  );
}

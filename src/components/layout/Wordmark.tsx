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
      <span className="text-white/55 transition-colors duration-base group-hover:text-white">O&rsquo;Sullivan</span>
      <span aria-hidden="true" className="h-1.5 w-1.5 self-center rounded-full bg-blue-500" />
    </Link>
  );
}

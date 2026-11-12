import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-3 rounded-[var(--radius-sm)] font-body font-medium uppercase tracking-[var(--tracking-button)] transition-[background-color,color,border-color,transform] duration-base ease-out active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-blue-500 text-white hover:bg-ice-300 hover:text-navy-900",
  secondary:
    "border border-white/40 text-white hover:border-ice-300 hover:bg-ice-300/10 hover:text-ice-300",
  ghost: "px-0 text-ice-300 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-xs",
  lg: "h-14 px-7 text-sm",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const external = /^https?:\/\//.test(href);
  const classes = `${base} ${variants[variant]} ${variant === "ghost" ? "h-auto text-xs" : sizes[size]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowIcon className="h-4 w-4 transition-transform duration-base ease-out group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

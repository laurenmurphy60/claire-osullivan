import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-3 rounded-none font-body font-medium uppercase tracking-[var(--tracking-button)] transition-[background-color,color,border-color,transform] duration-base ease-out active:scale-[0.98]";

const variants: Record<Variant, string> = {
  // Electric blue is reserved for the primary action
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  // Outline that fills with the section's text colour on hover
  secondary: "border border-line/35 text-strong hover:border-strong hover:bg-strong hover:text-canvas",
  // Plain text link with a drawn underline
  ghost: "px-0 text-strong",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-xs",
  lg: "h-14 px-8 text-sm",
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
      <span className={variant === "ghost" ? "link-draw pb-1" : ""}>{children}</span>
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

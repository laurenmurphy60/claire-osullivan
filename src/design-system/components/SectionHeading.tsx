import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "h1" | "h2" | "h3";
  intro?: ReactNode;
  className?: string;
};

const sizes = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  as: Tag = "h2",
  size = "h2",
  intro,
  className = "",
}: Props) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
      <Tag className={`type-display mt-5 text-white ${sizes[size]}`}>{title}</Tag>
      {intro && (
        <p className="mt-6 max-w-[38rem] text-lg leading-[var(--leading-body)] text-neutral-400">
          {intro}
        </p>
      )}
    </div>
  );
}

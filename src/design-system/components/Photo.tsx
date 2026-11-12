import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type Props = {
  /** Path under /public, e.g. "/images/about-portrait.jpg". */
  src: string;
  alt: string;
  /** Shown on the placeholder until the photo is added. */
  label: string;
  /** Sizing / aspect classes for the frame. */
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  /** Slow zoom when a parent `.group` is hovered. */
  zoom?: boolean;
  imgClassName?: string;
  /** Extra classes for the placeholder (e.g. to clear a fixed header). */
  placeholderClassName?: string;
};

// Checked at build time. Until a photograph is added at its path, a labelled
// placeholder renders instead, so no stock or generated image is substituted.
const exists = (src: string) => fs.existsSync(path.join(process.cwd(), "public", src));

/** Photo frame: Claire's photography, or a labelled slot waiting for it. */
export function Photo({
  src,
  alt,
  label,
  className = "",
  sizes = "100vw",
  priority = false,
  objectPosition,
  zoom = false,
  imgClassName = "",
  placeholderClassName = "",
}: Props) {
  const motion = `${zoom ? "hover-zoom" : ""} ${imgClassName}`;
  return (
    <div className={`photo-grade relative overflow-hidden bg-ink-800 ${className}`}>
      {exists(src) ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={85}
          sizes={sizes}
          className={`object-cover ${motion}`}
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <div
          role="img"
          aria-label={`${label}: photograph to be added`}
          className={`media-placeholder absolute inset-0 flex flex-col justify-between p-4 md:p-6 ${motion} ${placeholderClassName}`}
        >
          <span className="type-label text-white/55">{label}</span>
          <code className="self-start text-[0.6875rem] text-white/35">public{src}</code>
        </div>
      )}
    </div>
  );
}

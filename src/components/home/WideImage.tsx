import { Reveal } from "@/design-system";
import { Photo } from "@/design-system/components/Photo";

type Props = { src: string; alt: string; label: string; caption?: string };

/** Full-bleed cinematic photograph used as a break between sections. */
export function WideImage({ src, alt, label, caption }: Props) {
  return (
    <section aria-label={caption ?? alt} className="tone-dark tone-deep">
      <Reveal variant="image">
        <Photo
          src={src}
          alt={alt}
          label={label}
          className="aspect-[4/5] w-full sm:aspect-[16/9]"
        />
      </Reveal>
    </section>
  );
}

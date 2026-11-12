/*
 * Baseball graphic language: seams, stitching, brushstrokes.
 * All decorative — hidden from assistive tech.
 */

type MotifProps = { className?: string };

/** Circular baseball mark: ball outline, two seams with stitch ticks. */
export function BaseballMark({ className = "h-16 w-16" }: MotifProps) {
  const stitches = (side: 1 | -1) =>
    Array.from({ length: 9 }, (_, i) => {
      const t = (i + 1) / 10;
      const angle = (-70 + t * 140) * (Math.PI / 180);
      const cx = 50 + side * (50 - 34 * Math.cos(angle));
      const cy = 50 + 42 * Math.sin(angle);
      const dx = side * 4;
      return (
        <path
          key={`${side}-${i}`}
          d={`M${cx - dx} ${cy - 2.5} L${cx} ${cy} L${cx - dx} ${cy + 2.5}`}
        />
      );
    });

  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="48" strokeWidth="1.2" />
      <path d="M22 12 C38 32 38 68 22 88" strokeWidth="1.2" />
      <path d="M78 12 C62 32 62 68 78 88" strokeWidth="1.2" />
      <g strokeWidth="1.1" strokeLinecap="round" opacity="0.8">
        {stitches(-1)}
        {stitches(1)}
      </g>
    </svg>
  );
}

/** Horizontal stitched seam, used as a section divider. */
export function StitchRule({ className = "" }: MotifProps) {
  return (
    <div className={`relative h-3 w-full ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-rule" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(60deg, transparent 45%, rgb(var(--c-blue-400)) 45% 55%, transparent 55%), linear-gradient(-60deg, transparent 45%, rgb(var(--c-blue-400)) 45% 55%, transparent 55%)",
          backgroundSize: "14px 6px",
          backgroundPosition: "0 0, 0 6px",
          backgroundRepeat: "repeat-x",
        }}
      />
    </div>
  );
}

/** Dry-brush underline. Add `motion-draw` to animate on. */
export function Brushstroke({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        pathLength={1}
        d="M4 16 C70 7 150 6 230 9 S360 14 396 7"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        pathLength={1}
        d="M30 19 C110 13 210 13 300 15 S370 15 388 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

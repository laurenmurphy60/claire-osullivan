type IconProps = { className?: string; title?: string };

function a11y(title?: string) {
  return title ? { role: "img", "aria-label": title } : { "aria-hidden": true as const };
}

export function InstagramIcon({ className = "h-5 w-5", title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} {...a11y(title)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4", title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} {...a11y(title)}>
      <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6", title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} {...a11y(title)}>
      <path d="M3 8h18M3 16h18" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6", title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} {...a11y(title)}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

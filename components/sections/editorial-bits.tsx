/** Small shared graphic-language pieces for the editorial system. */

export const Hatch = ({ className = "" }: { className?: string }) => (
  <span
    className={`block h-4 w-24 ${className}`}
    style={{ background: "repeating-linear-gradient(-45deg,#800080 0 6px,transparent 6px 12px)" }}
  />
);

export const Globe = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#800080" strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <path d="M3 12h18M4 7h16M4 17h16" />
  </svg>
);

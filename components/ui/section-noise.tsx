"use client";

/**
 * ui-layouts noise overlay — a fixed grain layer over the whole page.
 * Uses an inline animated SVG so there is no /noise.gif dependency.
 */
export function SectionNoise({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "180px 180px",
        animation: "noise-shift 0.6s steps(2) infinite",
      }}
    />
  );
}

export default SectionNoise;

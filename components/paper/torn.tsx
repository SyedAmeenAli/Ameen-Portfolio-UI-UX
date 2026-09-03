import type { CSSProperties, ReactNode } from "react";

type Coarseness = "fine" | "normal" | "coarse";

const FILTER: Record<Coarseness, string> = {
  fine: "url(#tear-fine)",
  normal: "url(#tear-lift)",
  coarse: "url(#tear-coarse)",
};

/**
 * A sheet of paper.
 *
 * The torn edge lives on a backing sheet that sits *behind* the content and is
 * pushed through the displacement filter. The content itself is never
 * filtered, so artwork and type stay razor sharp while the paper around them
 * is genuinely ragged — the way a real collage works.
 */
export function Torn({
  children,
  coarseness = "normal",
  tilt = 0,
  className = "",
  style,
  tone = "pure",
  bleed = 6,
}: {
  children?: ReactNode;
  coarseness?: Coarseness;
  /** degrees — paper is never perfectly square to the grid */
  tilt?: number;
  className?: string;
  style?: CSSProperties;
  tone?: "pure" | "paper" | "ink";
  /** how far the sheet extends past the content, in px */
  bleed?: number;
}) {
  const bg =
    tone === "ink" ? "var(--color-ink)" : tone === "paper" ? "var(--color-paper)" : "var(--color-pure)";

  return (
    <div
      className="relative isolate"
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined, ...style }}
    >
      {/* the sheet — this is the only thing the filter touches */}
      <div
        aria-hidden
        className="absolute -z-10"
        style={{
          inset: -bleed,
          background: bg,
          filter: FILTER[coarseness],
        }}
      />
      {/* fibre and a faint fold, multiplied over the sheet */}
      <span
        aria-hidden
        className="pointer-events-none absolute -z-10 opacity-40 mix-blend-multiply"
        style={{
          inset: -bleed,
          background:
            "linear-gradient(103deg, rgba(11,11,12,0.06) 0%, rgba(11,11,12,0) 24%, rgba(11,11,12,0.04) 49%, rgba(11,11,12,0) 73%, rgba(11,11,12,0.07) 100%)",
        }}
      />
      <div className={`relative ${className}`}>{children}</div>
    </div>
  );
}

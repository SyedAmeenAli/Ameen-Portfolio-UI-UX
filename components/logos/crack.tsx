"use client";

import { useRef, useState } from "react";
import { play } from "@/lib/sound";

/** Jagged torn-band silhouettes, in objectBoundingBox units so they stretch
 *  to whatever box they clip. Rendered once, near the top of <body>. */
const H_PATH =
  "M0,.46 L.06,.12 L.12,.52 L.19,.08 L.27,.5 L.34,.14 L.42,.46 L.5,.04 L.58,.44 L.66,.16 L.74,.48 L.82,.1 L.9,.46 L1,.18 L1,.62 L.9,.92 L.82,.5 L.74,.94 L.66,.56 L.58,.96 L.5,.52 L.42,.92 L.34,.54 L.27,.95 L.19,.56 L.12,.9 L.06,.5 L0,.86 Z";
const V_PATH =
  "M.46,0 L.12,.06 L.52,.12 L.08,.19 L.5,.27 L.14,.34 L.46,.42 L.04,.5 L.44,.58 L.16,.66 L.48,.74 L.1,.82 L.46,.9 L.18,1 L.62,1 L.92,.9 L.5,.82 L.94,.74 L.56,.66 L.96,.58 L.52,.5 L.92,.42 L.54,.34 L.95,.27 L.56,.19 L.9,.12 L.5,.06 L.86,0 Z";

export function CrackDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <clipPath id="crack-h" clipPathUnits="objectBoundingBox">
          <path d={H_PATH} />
        </clipPath>
        <clipPath id="crack-v" clipPathUnits="objectBoundingBox">
          <path d={V_PATH} />
        </clipPath>
      </defs>
    </svg>
  );
}

/**
 * A torn crack in the paper. Purple depth by default; hovering sets it alight
 * with the flame clip, masked to the same jagged shape.
 */
export function Crack({
  className = "",
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) {
  const v = useRef<HTMLVideoElement>(null);
  const [hot, setHot] = useState(false);

  return (
    <span
      onPointerEnter={() => {
        setHot(true);
        play("flame");
        v.current?.play().catch(() => {});
      }}
      onPointerLeave={() => {
        setHot(false);
        v.current?.pause();
      }}
      className={`pointer-events-auto absolute block ${className}`}
      style={{ clipPath: `url(#crack-${vertical ? "v" : "h"})` }}
    >
      {/* purple depth inside the tear */}
      <span
        className="absolute inset-0"
        style={{
          background: vertical
            ? "linear-gradient(180deg,var(--color-purple-deep),var(--color-purple-glow) 45%,var(--color-purple-deep))"
            : "linear-gradient(90deg,var(--color-purple-deep),var(--color-purple-glow) 45%,var(--color-purple-deep))",
        }}
      />
      {/* flames screened over the purple: the clip's black drops out */}
      <video
        ref={v}
        src="/media/flames.mp4"
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover mix-blend-screen transition-opacity duration-300"
        style={{ opacity: hot ? 1 : 0, filter: "saturate(1.5) brightness(1.35)" }}
      />
    </span>
  );
}

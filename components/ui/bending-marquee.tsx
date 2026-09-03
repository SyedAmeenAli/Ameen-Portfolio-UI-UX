"use client";

import { useId } from "react";

/**
 * ui-layouts bending marquee — text runs along a curved SVG path and loops.
 */
export function BendingMarquee({
  text,
  className = "",
  height = 220,
  flip = false,
  duration = 18,
}: {
  text: string;
  className?: string;
  height?: number;
  flip?: boolean;
  duration?: number;
}) {
  const id = useId().replace(/:/g, "");
  const d = flip
    ? `M -200 ${height * 0.35} Q 400 ${height * 0.95} 1000 ${height * 0.35} T 2200 ${height * 0.35}`
    : `M -200 ${height * 0.65} Q 400 ${height * 0.05} 1000 ${height * 0.65} T 2200 ${height * 0.65}`;

  return (
    <svg viewBox={`0 0 2000 ${height}`} className={`w-full ${className}`} preserveAspectRatio="none">
      <defs>
        <path id={`bend-${id}`} d={d} fill="none" />
      </defs>
      <text className="fill-current font-display uppercase" style={{ fontSize: height * 0.42, letterSpacing: "-0.03em" }}>
        <textPath href={`#bend-${id}`} startOffset="0%">
          {`${text}  ·  ${text}  ·  ${text}  ·  `}
          <animate attributeName="startOffset" from="0%" to="-50%" dur={`${duration}s`} repeatCount="indefinite" />
        </textPath>
      </text>
    </svg>
  );
}

export default BendingMarquee;

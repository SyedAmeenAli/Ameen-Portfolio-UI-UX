"use client";

import type { BrandVis } from "@/lib/brands";

/**
 * Abstract "identity design laboratory" composition — not a brand board, not a UI
 * mockup. Colour fields, construction lines, a wireframe globe, hex swatches and
 * discipline labels. Accent shifts to whichever brand is hovered/focused in the
 * list beside it; everything else stays put.
 */
export function IdentitySystemVisual({ active }: { active: BrandVis | null }) {
  const accent = active?.accent ?? "#b000ff";
  const palette = active?.palette ?? ["#b000ff", "#ffd900", "#f1ebdd", "#2a2a2e", "#67d4e8"];

  return (
    <svg viewBox="0 0 900 620" className="h-full w-full" role="img" aria-label="Abstract identity-system composition">
      <defs>
        <pattern id="isv-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" stroke="#f1ebdd" strokeOpacity="0.06" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="900" height="620" fill="#0b0a10" />
      <rect x="0" y="0" width="900" height="620" fill="url(#isv-grid)" />

      {/* 5 vertical colour fields — one per brand, transition on hover */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={40 + i * 12}
          y={40}
          width="7"
          height="540"
          fill={palette[i % palette.length]}
          opacity={active ? 0.85 : 0.35}
          style={{ transition: "opacity 0.35s ease, fill 0.35s ease" }}
        />
      ))}

      {/* construction lines */}
      <g stroke={accent} strokeOpacity="0.35" strokeWidth="1" style={{ transition: "stroke 0.35s ease" }}>
        <line x1="130" y1="60" x2="860" y2="60" />
        <line x1="130" y1="560" x2="860" y2="560" />
        <line x1="495" y1="60" x2="495" y2="560" strokeDasharray="2 6" />
        <circle cx="495" cy="310" r="180" fill="none" strokeDasharray="3 5" />
      </g>

      {/* wireframe globe motif, upper right */}
      <g transform="translate(760,120)" stroke={accent} strokeOpacity="0.55" strokeWidth="1" fill="none" style={{ transition: "stroke 0.35s ease" }}>
        <circle r="46" />
        <ellipse rx="18" ry="46" />
        <path d="M-46 0H46M-40 -24H40M-40 24H40" />
      </g>

      {/* huge abstract geometric symbol, centre */}
      <g transform="translate(495,300)" style={{ transition: "stroke 0.35s ease, fill 0.35s ease" }}>
        <polygon points="0,-150 95,90 -95,90" fill="none" stroke={accent} strokeWidth="2" />
        <circle r="60" fill="none" stroke="#f1ebdd" strokeOpacity="0.5" strokeWidth="1" />
        <line x1="-140" y1="0" x2="140" y2="0" stroke="#ffd900" strokeOpacity="0.6" strokeWidth="1" />
        <circle r="5" fill={accent} />
      </g>

      {/* typography specimen */}
      <text x="150" y="200" fontFamily="Anton, sans-serif" fontSize="76" fill="#f1ebdd" opacity="0.9">Aa</text>
      <text x="150" y="240" fontFamily="Space Grotesk, sans-serif" fontSize="11" letterSpacing="2" fill="#f1ebdd" opacity="0.4">CONDENSED / DISPLAY</text>

      {/* discipline labels */}
      {[
        ["MARK", 150, 320],
        ["TYPE", 150, 350],
        ["COLOUR", 150, 380],
        ["FORM", 150, 410],
        ["APPLICATION", 150, 440],
      ].map(([label, x, y]) => (
        <text key={label as string} x={x as number} y={y as number} fontFamily="Space Grotesk, sans-serif" fontSize="11" letterSpacing="2" fill="#f1ebdd" opacity="0.45">
          {label}
        </text>
      ))}

      {/* hex swatches */}
      {palette.slice(0, 4).map((c, i) => (
        <g key={c + i} transform={`translate(${640 + i * 55},480)`} style={{ transition: "transform 0.35s ease" }}>
          <rect width="42" height="42" fill={c} stroke="#f1ebdd" strokeOpacity="0.15" />
          <text x="0" y="58" fontFamily="Space Grotesk, sans-serif" fontSize="8" letterSpacing="0.5" fill="#f1ebdd" opacity="0.4">{c.toUpperCase()}</text>
        </g>
      ))}

      {/* technical coordinates */}
      <text x="150" y="580" fontFamily="Space Grotesk, sans-serif" fontSize="9" letterSpacing="2" fill="#f1ebdd" opacity="0.3">
        LOGO → SYSTEM → LANGUAGE → APPLICATION
      </text>
      <text x="700" y="580" fontFamily="Space Grotesk, sans-serif" fontSize="9" letterSpacing="2" fill="#f1ebdd" opacity="0.3">
        {active ? active.name.toUpperCase() : "IDENTITY SYSTEM"}
      </text>
    </svg>
  );
}

export default IdentitySystemVisual;

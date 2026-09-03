/**
 * Minimal monoline tool glyphs — distinct geometric marks, not the real
 * trademarked logos. Brand-ish colours, drawn in currentColor by default.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = (p: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 22,
  height: 22,
  ...p,
});

export const ToolIcon = {
  figma: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M8.8 5.2h3.2v3.6H8.8a1.8 1.8 0 1 1 0-3.6ZM12 5.2h3.2a1.8 1.8 0 1 1 0 3.6H12ZM8.8 8.8h3.2v3.6H8.8a1.8 1.8 0 1 1 0-3.6ZM8.8 12.4h3.2v2a1.8 1.8 0 1 1-3.2 1.6" />
    </svg>
  ),
  photoshop: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8.5 16V8.5h2.6a2.2 2.2 0 0 1 0 4.4H8.5M13.5 15.4c.6.4 1.3.6 2 .6 1 0 1.6-.4 1.6-1s-.5-.8-1.5-1.1c-1.2-.3-1.9-.8-1.9-1.8 0-1 .9-1.7 2.1-1.7.7 0 1.3.2 1.8.5" />
    </svg>
  ),
  illustrator: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M7.5 16 10 8.5h1.4L14 16M8.3 13.5h4.4M16.5 10v6M16.5 8.2v.1" />
    </svg>
  ),
  framer: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M7 4h10v6H12l5 5v5h-5v-5H7z" />
    </svg>
  ),
  aftereffects: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M7 16 9.5 8.5H11L13.5 16M7.9 13.6h4.2M15.4 16v-4.4a1.6 1.6 0 0 1 3.2 0V16M15.4 13.6h3.2" />
    </svg>
  ),
  blender: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="13" cy="13" r="5" />
      <path d="M13 13 4.5 9.5M9 11.5l-4 1.2" />
      <circle cx="13" cy="13" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  spline: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 16c3-6 5-8 8-8s5 2 8 8" />
      <circle cx="4" cy="16" r="1.6" />
      <circle cx="20" cy="16" r="1.6" />
      <circle cx="12" cy="8" r="1.6" />
    </svg>
  ),
  canva: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M15 9.5c-.7-.9-1.7-1.4-2.8-1.4-2.3 0-3.9 1.9-3.9 4.2s1.6 3.9 3.7 3.9c1.3 0 2.4-.7 3-1.7" />
    </svg>
  ),
} as const;

export const TOOL_HEX: Record<string, string> = {
  figma: "#a259ff",
  photoshop: "#31a8ff",
  illustrator: "#ff9a00",
  framer: "#00b4ff",
  aftereffects: "#9999ff",
  blender: "#ea7600",
  spline: "#f0b323",
  canva: "#00c4cc",
};

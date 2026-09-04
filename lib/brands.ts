/** Brand-visualisation dataset. Swap `board`/`sketch` and copy when real work lands. */
import { BRANDS as BASE } from "./work";

export type BrandVis = {
  slug: string;
  name: string;
  tagline: string;
  sector: string;
  color: string;
  palette: string[];
  board: string;
  sketch: string;
  blurb: string;
  deliverables: string[];
  applications: string[];
};

const DELIVERABLES = ["Logo Design", "Visual Identity", "Brand Guidelines", "Digital Applications"];

const APP_IMAGES = [
  "/social/auren-brand-logo-design.png",
  "/social/koro-brand-logo-display.png",
  "/social/orbital-house-brand-logo.png",
  "/social/velora-brand-logo-design.png",
];

export const BRAND_VIS: BrandVis[] = BASE.map((b) => ({
  slug: b.slug,
  name: b.name,
  tagline: b.tagline,
  sector: b.sector,
  color: b.color,
  palette: b.palette,
  board: b.board,
  sketch: b.sketch,
  blurb: b.blurb,
  deliverables: DELIVERABLES,
  applications: APP_IMAGES,
}));

/** small "more brands" strip — real five + labelled placeholders from the concept. */
export const MORE_BRANDS = [
  ...BRAND_VIS.map((b) => ({ name: b.name, tagline: b.tagline, slug: b.slug, color: b.color })),
  { name: "Bluemeter", tagline: "Clean water, brighter tomorrow", slug: null, color: "#2c93d8" },
  { name: "Solara", tagline: "Energy for a cleaner tomorrow", slug: null, color: "#ffb000" },
  { name: "Kairo", tagline: "Culture meets modernity", slug: null, color: "#b000ff" },
  { name: "Orion", tagline: "Explore without limits", slug: null, color: "#67d4e8" },
];

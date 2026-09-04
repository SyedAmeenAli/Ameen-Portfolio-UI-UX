/** Brand-identity dataset — EXACTLY five brands. Swap board/sketch + copy when real work lands. */

export type BrandVis = {
  slug: string;
  name: string;
  order: string;
  tagline: string;
  sectorLine: string;
  concept: string;
  blurb: string;
  accent: string;      // brand accent for headings
  palette: string[];   // this brand's own colour system
  board: string;       // full identity board (show contained, never cropped)
  sketch: string;      // exploration sheet
};

export const BRAND_VIS: BrandVis[] = [
  {
    slug: "nexora", name: "Nexora", order: "01",
    tagline: "Beyond the ordinary",
    sectorLine: "Technology / AI infrastructure",
    concept: "An arch and a rising stair — climb, threshold, the ordinary left behind. A four-point star of forward motion.",
    blurb: "A futuristic identity system built around innovation, structure and visual experimentation. Metallic on near-black with restrained purple energy.",
    accent: "#b46bff",
    palette: ["#050505", "#1a1a1a", "#6b6b6b", "#b46bff", "#f1ebdd"],
    board: "/brands/nexora-brand-visualisation.jpg",
    sketch: "/brands/nexora-sketch.jpg",
  },
  {
    slug: "verdant", name: "Verdant", order: "02",
    tagline: "Technology that grows a better world",
    sectorLine: "Plant technology",
    concept: "Two leaves resolve into a V. Nature and technology drawn with a single weight.",
    blurb: "A plant-tech identity exploring nature, technology and a more sustainable visual language. Green-forward, applied across dashboards and environment graphics.",
    accent: "#2ec27e",
    palette: ["#12211a", "#1c7a4f", "#2ec27e", "#a7e3c4", "#eef6f1"],
    board: "/brands/verdant-brand-visulaisation.jpg",
    sketch: "/brands/verdant-sketch.jpg",
  },
  {
    slug: "terralis", name: "Terralis", order: "03",
    tagline: "Earth. Craft. Home.",
    sectorLine: "Earthy lifestyle / home",
    concept: "A leaf inside an arched doorway, one weight, so it stamps clean on a candle jar or a shipping box.",
    blurb: "Homeware made by hand — tactile materials, natural forms and contemporary design. Packaging that looks made, not printed.",
    accent: "#c79a5c",
    palette: ["#171411", "#574438", "#a66a4c", "#d7b89c", "#ede4d7"],
    board: "/brands/terralis-brand-visualisation.jpg",
    sketch: "/brands/terralis-sketch.jpg",
  },
  {
    slug: "auria", name: "Auria", order: "04",
    tagline: "Feel every frequency",
    sectorLine: "Immersive audio",
    concept: "The mark is a live equaliser frozen mid-beat — it reads as sound before it reads as a letter.",
    blurb: "A studio identity for immersive audio. A dark atmospheric environment with a luminous violet aura, carried from app UI to retail signage.",
    accent: "#9a7bff",
    palette: ["#0b0a14", "#3b1e8f", "#7c4dff", "#b39cff", "#ececea"],
    board: "/brands/auria-brand-visualization.jpg",
    sketch: "/brands/auria-sketch.jpg",
  },
  {
    slug: "vayora", name: "Vayora", order: "05",
    tagline: "Quicken forward",
    sectorLine: "Experimental / distinctive identity",
    concept: "A hidden V and a star of forward motion — geometric, minimal, one accent colour, built for a favicon and a billboard.",
    blurb: "An experimental brand identity developed around a distinctive visual language and unconventional form.",
    accent: "#67d4e8",
    palette: ["#07131f", "#0b3a53", "#087ea4", "#67d4e8", "#e4ecef"],
    board: "/brands/vayora-brand-visualisation.jpg",
    sketch: "/brands/vayora-sketch.jpg",
  },
];

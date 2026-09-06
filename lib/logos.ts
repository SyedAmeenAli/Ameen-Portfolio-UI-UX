export type Logo = {
  n: number;
  /** file basename in /public/logos */
  slug: string;
  name: string;
  /** the classification Ameen gave each mark */
  type: string;
  /** "video" -> <slug>.mp4 + .jpg poster · "image" -> <slug>.webp · "todo" -> not delivered yet */
  kind: "video" | "image" | "todo";
  /** tagline lettered into the mark itself, where there is one */
  line?: string;
  /** explicit file path override (used when the extension isn't the default) */
  file?: string;
};

/**
 * Ameen's 20 marks. Numbering and names are his; the animated loops were
 * generated from his static artwork. Two are still to come.
 */
export const LOGOS: Logo[] = [
  { n: 1, slug: "altivia", name: "Altivia", type: "Emblem", kind: "video" },
  { n: 2, slug: "vyrnox", name: "Vyrnox", type: "Logotype", kind: "todo" },
  { n: 3, slug: "heron", name: "Herone", type: "Imagotype", kind: "video", line: "Wild by design" },
  { n: 4, slug: "interlock", name: "Drevo", type: "Monogram", kind: "video" },
  { n: 5, slug: "octopus", name: "Pelagos", type: "Illustrative Mark", kind: "video", line: "Sea beyond limits" },
  { n: 6, slug: "oculis", name: "Oculis", type: "Isotype", kind: "video" },
  { n: 7, slug: "lion-shield", name: "Veridian", type: "Heraldic Mark", kind: "video", line: "Secure every path" },
  { n: 8, slug: "hexagon", name: "Hexora", type: "Geometric Isotype", kind: "video" },
  { n: 9, slug: "mark-09", name: "Nexora", type: "Negative Space", kind: "image", line: "Beyond the ordinary" },
  { n: 10, slug: "stencil", name: "Quadra", type: "Experimental Type", kind: "video", line: "Creative studio" },
  { n: 11, slug: "castle-flag", name: "Ironhold", type: "Vintage Badge", kind: "video", line: "Built to endure" },
  { n: 12, slug: "fluidra", name: "Fluidra", type: "Liquid Lettering", kind: "video", line: "Drink different" },
  { n: 13, slug: "assemble", name: "Aurvia", type: "Hidden Letter", kind: "video" },
  { n: 14, slug: "geo-fox", name: "Wilora", type: "Mascot Mark", kind: "video" },
  { n: 15, slug: "penrose", name: "Parallax", type: "Optical Illusion", kind: "video" },
  { n: 16, slug: "vyrncx", name: "Kynora", type: "Continuous Line", kind: "video" },
  { n: 17, slug: "star-icon", name: "Lumora", type: "Retro Lettering", kind: "video" },
  { n: 18, slug: "modulis", name: "Modulis", type: "Modular Symbol", kind: "todo" },
  { n: 19, slug: "mark-19", name: "Raven & Co.", type: "Heritage Emblem", kind: "image", line: "Crafted goods · est. 1991" },
  { n: 20, slug: "leaf-l", name: "Levaré", type: "Minimal Luxury", kind: "video" },
  { n: 21, slug: "zayka", name: "Zayka", type: "Monogram", kind: "image", file: "/logos/zayka.svg", line: "Taste, set in type" },
];

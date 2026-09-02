export type Logo = {
  n: number;
  slug: string;
  name: string;
  /** "video" -> /logos/<slug>.mp4 + .jpg poster ; "image" -> /logos/<slug>.webp ; "todo" -> placeholder */
  kind: "video" | "image" | "todo";
  client?: string;
  year?: string;
  tag?: string;
  blurb?: string;
};

// 18 delivered from Flow + 2 slots pending from Ameen.
export const LOGOS: Logo[] = [
  // names read off the generated art — replace with real client data when Ameen sends it
  { n: 1, slug: "altivia", name: "Altivia", kind: "video", tag: "Wordmark + Mark", blurb: "Mountain trail enclosed in a rising star." },
  { n: 2, slug: "vyrncx", name: "Kynora", kind: "video", tag: "Monogram" },
  { n: 3, slug: "castle-flag", name: "Ironhold", kind: "video", tag: "Emblem", blurb: "Built to endure — tower seal." },
  { n: 4, slug: "fluidra", name: "Fluidra", kind: "video", tag: "Wordmark", blurb: "Drink different." },
  { n: 5, slug: "geo-fox", name: "Wilora", kind: "video", tag: "Animal Mark" },
  { n: 6, slug: "heron", name: "Herone", kind: "video", tag: "Animal Mark", blurb: "Wild by design." },
  { n: 7, slug: "hexagon", name: "Hexad", kind: "video", tag: "Abstract" },
  { n: 8, slug: "penrose", name: "Parallax", kind: "video", tag: "Abstract" },
  { n: 9, slug: "interlock", name: "Drevo", kind: "video", tag: "Monogram" },
  { n: 10, slug: "leaf-l", name: "Levaré", kind: "video", tag: "Letter Mark" },
  { n: 11, slug: "assemble", name: "Aurvia", kind: "video", tag: "Letter Mark" },
  { n: 12, slug: "lion-shield", name: "Veridian", kind: "video", tag: "Emblem", blurb: "Secure every path." },
  { n: 13, slug: "octopus", name: "Pelagos", kind: "video", tag: "Animal Mark", blurb: "Sea beyond limits." },
  { n: 14, slug: "oculis", name: "Oculis", kind: "video", tag: "Abstract" },
  { n: 15, slug: "star-icon", name: "Lumora", kind: "video", tag: "Wordmark" },
  { n: 16, slug: "stencil", name: "Stencil", kind: "video", tag: "Letter Mark" },
  { n: 17, slug: "mark-09", name: "Mark 09", kind: "image", tag: "Minimal Mark" },
  { n: 18, slug: "mark-19", name: "Mark 19", kind: "image", tag: "Minimal Mark" },
  { n: 19, slug: "slot-19", name: "Pending", kind: "todo", tag: "—" },
  { n: 20, slug: "slot-20", name: "Pending", kind: "todo", tag: "—" },
];

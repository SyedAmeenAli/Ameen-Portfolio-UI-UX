/** Poster series + brand systems (art from Ameen, animated/rendered via Gemini). */

export type Poster = { slug: string; title: string; line: string };

export const POSTERS: Poster[] = [
  { slug: "collage-showing-404-error-doorway", title: "404 / Between", line: "A study of places that cannot exist" },
  { slug: "brutalist-architecture-poster-vo", title: "City", line: "Brutalist form study" },
  { slug: "electronic-music-poster-afterlight", title: "Afterlight", line: "Electronic music" },
  { slug: "retro-radio-concert-poster", title: "On Air", line: "Retro concert" },
  { slug: "film-camera-photography-exhibiti", title: "Exposure", line: "A photography exhibition" },
  { slug: "giant-eye-floating-above-city", title: "The Watch", line: "Night cycle 03" },
  { slug: "astronaut-viewing-planet-poster", title: "Distant", line: "Viewing the planet" },
  { slug: "surreal-desert-landscape-art-poster", title: "High Frequency", line: "Surreal landscape" },
  { slug: "synesthesia-visual-music-poster", title: "Synesthesia", line: "Visual music" },
  { slug: "glass-flower-botanical-poster", title: "Fili-Verless", line: "Glass botanical" },
  { slug: "impossible-flower-growing-from-s", title: "Impossible Bloom", line: "Growing from stone" },
  { slug: "marble-sculpture-fragmenting-int", title: "Fragment", line: "Marble into pixels" },
  { slug: "sculpted-hand-floating-paper-fra", title: "The Maker", line: "Sculpted hand, floating paper" },
  { slug: "human-hand-touching-artificial-hand", title: "Contact", line: "Human meets artificial" },
  { slug: "statue-standing-in-flood-water", title: "Flood", line: "Statue in the water" },
  { slug: "monolith-on-prehistoric-earth", title: "Monolith", line: "Prehistoric Earth" },
  { slug: "futuristic-archaeology-poster-sh", title: "Dig", line: "Futuristic archaeology" },
  { slug: "floating-futuristic-city-above-o", title: "Above", line: "Floating city" },
  { slug: "parallel-city-architectural-post", title: "Parallel City", line: "Architectural poster" },
  { slug: "parallel-city-design-festival-po", title: "Design Festival", line: "Parallel City" },
  { slug: "architectural-hallway-between-de", title: "Corridor", line: "Between departments" },
  { slug: "glass-archival-drawer-with-dream", title: "Of Dreams", line: "Glass archival drawer" },
  { slug: "light-bending-stone-platform", title: "Bend", line: "Light-bending platform" },
  { slug: "abstract-wave-floating-in-void", title: "Wave", line: "Floating in void" },
  { slug: "minimalist-art-poster-the-unseen", title: "The Unseen", line: "Minimalist" },
];

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  sector: string;
  color: string;
  board: string;
  sketch: string;
};

export const BRANDS: Brand[] = [
  {
    slug: "auria",
    name: "Auria",
    tagline: "Feel every frequency",
    sector: "Sound experiences",
    color: "#7c4dff",
    board: "/brands/auria-brand-visualization.jpg",
    sketch: "/brands/auria-sketch.jpg",
  },
  {
    slug: "nexora",
    name: "Nexora",
    tagline: "Beyond the ordinary",
    sector: "Property / architecture",
    color: "#f0b323",
    board: "/brands/nexora-brand-visualisation.jpg",
    sketch: "/brands/nexora-sketch.jpg",
  },
  {
    slug: "terralis",
    name: "Terralis",
    tagline: "Earth. Craft. Home.",
    sector: "Homeware",
    color: "#b98a4b",
    board: "/brands/terralis-brand-visualisation.jpg",
    sketch: "/brands/terralis-sketch.jpg",
  },
  {
    slug: "vayora",
    name: "Vayora",
    tagline: "Quicken forward",
    sector: "Technology",
    color: "#2c93d8",
    board: "/brands/vayora-brand-visualisation.jpg",
    sketch: "/brands/vayora-sketch.jpg",
  },
  {
    slug: "verdant",
    name: "Verdant",
    tagline: "Technology that grows a better world",
    sector: "Plant-tech",
    color: "#2ec27e",
    board: "/brands/verdant-brand-visulaisation.jpg",
    sketch: "/brands/verdant-sketch.jpg",
  },
];

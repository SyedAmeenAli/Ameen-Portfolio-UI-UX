export const SITE = {
  name: "Ameen Ali",
  role: "UI/UX Designer",
  kicker: "Designer / Illustrator",
  year: "2026",
  coords: `31°25'33.1" N  75°42'19.4" E`,
  signature: "Ameen Ali",

  thesis: "I just want my design to live out there instead of only in my head.",

  manifesto: [
    "I design because, to me, design is a form of art — something I feel before I explain.",
    "Bad design gets in the way. Good design makes things feel effortless.",
    "I'm always looking beyond the obvious, searching for the idea neither of us has seen yet.",
    "Creativity isn't something you buy. It's something you discover, build, and protect.",
  ],
  against: ["Generic design", "Sloppy work", "No thinking"],

  bio: [
    "Hi, I'm Ameen Ali.",
    "Design has never felt like a job to me — it's just how I read the world. I've always been pulled toward the version of a thing that's a little different, the detail that makes you stop for a second and look twice.",
    "Right now I'm studying Graphic Design in India while working with people and brands who trust me to bring their ideas to life.",
  ],

  disciplines: ["UI/UX", "Branding", "Visual Design", "Illustration", "Motion", "Type"],

  polaroid: { line1: "Ameen Ali", line2: "UI/UX Designer", info: "The face stays off the page. The work doesn't." },

  education: {
    title: "Bachelor of Design in Graphic Design",
    school: "Lovely Professional University",
    when: "2024 — 2028",
  },
  experience: [
    { when: "2023 — Present", what: "Graphic Designer", where: "Freelance" },
    { when: "2024 — 2026", what: "Graphic Designer & Illustrator", where: "Mixdeas Inc" },
  ],
} as const;

export const SKILLS = [
  { key: "figma", name: "Figma", desc: "Interfaces, prototypes & design systems." },
  { key: "photoshop", name: "Photoshop", desc: "Compositing, photo manipulation & visual art." },
  { key: "illustrator", name: "Illustrator", desc: "Logos, vectors & visual identities." },
  { key: "framer", name: "Framer", desc: "Interactive websites & responsive experiences." },
  { key: "aftereffects", name: "After Effects", desc: "Motion graphics, animation & visual effects." },
  { key: "blender", name: "Blender", desc: "3D modelling, rendering & creative experiments." },
  { key: "spline", name: "Spline", desc: "Interactive 3D experiences for the web." },
  { key: "canva", name: "Canva", desc: "Rapid visual content & presentation design." },
] as const;

/** Every work category. `kind` picks the page layout. */
export type Category = {
  key: string;
  label: string;
  href: string;
  tag: string;      // marquee word
  count: string;
  accent: "red" | "yellow" | "purple";
  kind: "grid" | "dome" | "sketch" | "motion" | "type" | "colour";
  blurb: string;
};

export const CATEGORIES: Category[] = [
  { key: "logos", label: "Logos & Marks", href: "/work/logos", tag: "LOGOS & MARKS", count: "21", accent: "red", kind: "dome",
    blurb: "Marks built from an idea first — emblem, monogram, negative space, heritage. A few were handed to Gemini for motion; the design is mine." },
  { key: "branding", label: "Branding", href: "/work/branding", tag: "BRANDING", count: "05", accent: "purple", kind: "sketch",
    blurb: "Full identity systems. The exploration sketch first, then the finished world with the reasoning." },
  { key: "posters", label: "Posters", href: "/work/posters", tag: "POSTER", count: "25", accent: "red", kind: "grid",
    blurb: "Surreal, brutalist, editorial. Concept-led image-making with type doing half the work." },
  { key: "social", label: "Social Media", href: "/work/social", tag: "SOCIAL", count: "28", accent: "yellow", kind: "grid",
    blurb: "Campaign frames and concept ads — AUREN, KORO, Orbital House, VELORA. One idea stretched across a feed." },
  { key: "thumbnails", label: "YouTube Thumbnails", href: "/work/thumbnails", tag: "THUMBNAIL", count: "05", accent: "red", kind: "grid",
    blurb: "Stop-the-scroll thumbnails — contrast, one face, one promise." },
  { key: "illustration", label: "Illustration", href: "/work/illustration", tag: "ILLUSTRATION", count: "25", accent: "yellow", kind: "grid",
    blurb: "Character work — food people, fashion figures, the odd bird man. Drawn to have a point of view." },
  { key: "motion", label: "2D / 3D Motion", href: "/work/motion", tag: "2D MOTION", count: "07", accent: "purple", kind: "motion",
    blurb: "Motion studies in 2D and 3D — type in space, objects that behave wrong on purpose." },
  { key: "typography", label: "Typography", href: "/work/typography", tag: "TYPE", count: "12", accent: "purple", kind: "type",
    blurb: "Not a list of fonts. Font choice → personality → pairing → hierarchy → spacing → application. Type has a voice." },
  { key: "colours", label: "Colour", href: "/work/colours", tag: "COLOUR", count: "06", accent: "yellow", kind: "colour",
    blurb: "Not a colour picker. Six palettes, live-switched through a real interface — every colour has a role." },
];

export const MINDMAP = CATEGORIES.map((c) => ({ key: c.key, label: c.label, href: c.href }));

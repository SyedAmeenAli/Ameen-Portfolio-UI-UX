export const SITE = {
  name: "Ameen Ali",
  role: "UI/UX Designer",
  kicker: "Designer / Illustrator",
  year: "2026",

  /** the line the whole site is built to deliver — Ameen's own words */
  thesis: "I just want my design to live out there instead of only in my head.",

  manifesto: [
    "Design because it's art. It speaks to me.",
    "Bad design frustrates me. Good design makes me happy.",
    "I'm after the thing beyond the obvious — a touch neither of us knows yet.",
    "Creativity can't be bought.",
  ],

  /** what he refuses to make */
  against: ["Generic design", "Sloppy work", "No thinking"],

  disciplines: ["UI/UX", "Branding", "Visual Design", "Illustration", "Motion"],

  polaroid: {
    line1: "Ameen Ali",
    line2: "UI/UX Designer",
    info: "The face stays off the page. The work doesn't.",
  },

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

// Skills ring — 8 tools. Hover reveals name + one-liner.
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

// Mind-map nodes -> routes (only /work/logos is filled in so far).
export const MINDMAP = [
  { key: "logos", label: "Logos", href: "/work/logos" },
  { key: "branding", label: "Branding / Visual Identity", href: "/work/branding" },
  { key: "posters", label: "Posters", href: "/work/posters" },
  { key: "social", label: "Social Media", href: "/work/social" },
  { key: "thumbnails", label: "YouTube Thumbnails", href: "/work/thumbnails" },
  { key: "illustration", label: "Illustration", href: "/work/illustration" },
  { key: "typography", label: "Typography", href: "/work/typography" },
  { key: "motion", label: "2D / 3D Motion", href: "/work/motion" },
  { key: "colours", label: "Colours", href: "/work/colours" },
] as const;

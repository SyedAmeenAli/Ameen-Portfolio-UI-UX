export const SITE = {
  name: "Ameen Ali",
  role: "UI/UX Designer",
  kicker: "Designer / Illustrator",
  year: "2026",

  hero: "I turn ideas into experiences that feel as good as they look.",
  heroSub:
    "UI/UX designer driven by curiosity, creativity, and a little controlled chaos. I design digital experiences, visual identities, and interfaces that turn ideas into something people can see, feel, and use.",
  disciplines: ["UI/UX", "Branding", "Visual Design", "Illustration", "Motion"],

  creativity: {
    label: "02 — My Creativity",
    body: "I'm driven by curiosity, experimentation, and a little controlled chaos — mixing bold visuals with thoughtful design to create work that feels different.",
    tagline: "Think different. Design louder. Create endlessly.",
  },

  polaroid: {
    line1: "Ameen Ali",
    line2: "UI/UX Designer",
    info: "Think different. Design louder. Create endlessly.",
  },

  education: {
    title: "Bachelor of Design in Graphic Design",
    school: "Lovely Professional University · 2024 — 2028",
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

// Mind-map nodes -> routes (only /work/logos built in phase 2).
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

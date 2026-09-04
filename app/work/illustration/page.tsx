"use client";

import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hatch, Globe } from "@/components/sections/editorial-bits";
import { useArtLightbox, type Art } from "@/components/sections/art-lightbox";

const P = "/illustration/";

type Piece = Art & {
  n: string; type: string; tags: string; blurb: string;
  bg: string; ink: string; span: string; textPos: "over" | "side";
};

const bgs = {
  cream: "#e8e2d2", grey: "#2a2a2e", purple: "#5a1a7a", charcoal: "#141318", magenta: "#8a0f9e",
};

const PIECES: Piece[] = [
  { n: "01", title: "The Apple Princess", type: "Character study", tags: "Fashion / Identity / Expression", blurb: "A study of character, gesture and visual personality.", src: P + "apple-princess-in-fashion-pose.png", bg: bgs.cream, ink: "#111", span: "md:col-span-2 md:row-span-2", textPos: "over" },
  { n: "02", title: "The Baker", type: "Character exploration", tags: "Observation / Daily life", blurb: "A quiet moment inside an ordinary world.", src: P + "baker-holding-large-rolling-pin.png", bg: bgs.cream, ink: "#111", span: "md:row-span-2", textPos: "over" },
  { n: "03", title: "The Bird Man", type: "Concept", tags: "Myth / Mask / Reality", blurb: "Between reality and imagination.", src: P + "bird-man-leaning-forward.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "04", title: "Fashion Girl", type: "Figure study", tags: "Line / Pose", blurb: "Confidence, drawn in a single gesture.", src: P + "fashion-girl-standing-confidently.png", bg: bgs.grey, ink: "#eee", span: "", textPos: "side" },
  { n: "05", title: "Woman in Mask Coat", type: "Editorial", tags: "Silhouette / Texture", blurb: "Editorial figure, restrained ink.", src: P + "woman-wearing-mask-coat.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "06", title: "Motorcycle Helmet", type: "Character work", tags: "Attitude / Contrast", blurb: "A character with somewhere to be.", src: P + "woman-holding-motorcycle-helmet.png", bg: bgs.magenta, ink: "#fff", span: "md:col-span-2 md:row-span-2", textPos: "over" },
  { n: "07", title: "The Chaotic Artist", type: "Expression", tags: "Energy / Movement", blurb: "Expression, stories, worlds.", src: P + "chaotic-artist-girl-holding-pain.png", bg: bgs.purple, ink: "#fff", span: "", textPos: "side" },
  { n: "08", title: "Citrus Woman", type: "Fashion figure", tags: "Concept / Couture", blurb: "Form, drawn from an idea.", src: P + "citrus-woman-fashion-illustration.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "09", title: "Woman in Red", type: "Selected work", tags: "Accent / Restraint", blurb: "Beauty in the small things.", src: P + "woman-in-red-dress-illustration.png", bg: bgs.charcoal, ink: "#eee", span: "md:col-span-2", textPos: "side" },
  { n: "10", title: "The Butcher", type: "Character study", tags: "Weight / Presence", blurb: "Presence, held in the shoulders.", src: P + "muscular-butcher-holding-cleaver.png", bg: bgs.grey, ink: "#eee", span: "", textPos: "over" },
  { n: "11", title: "Elderly Monk", type: "Concept", tags: "Stillness / Line", blurb: "Stillness, drawn slowly.", src: P + "elderly-monk-holding-cake-server.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "12", title: "Architectural Coat", type: "Figure", tags: "Structure / Fashion", blurb: "Where a coat becomes a building.", src: P + "man-wearing-architectural-coat.png", bg: bgs.charcoal, ink: "#eee", span: "", textPos: "side" },
  { n: "13", title: "Pasta Woman", type: "Fashion figure", tags: "Play / Couture", blurb: "A little absurd, entirely committed.", src: P + "pasta-woman-fashion-illustration.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "14", title: "Retired Boxer", type: "Character study", tags: "History / Weight", blurb: "A body that remembers every round.", src: P + "retired-boxer-in-relaxed-stance.png", bg: bgs.cream, ink: "#111", span: "md:col-span-2", textPos: "side" },
  { n: "15", title: "Fish Chef", type: "Concept", tags: "Anthropomorphic / Humour", blurb: "The chef, and the catch.", src: P + "anthropomorphic-fish-chef-holdin.png", bg: bgs.purple, ink: "#fff", span: "", textPos: "over" },
  { n: "16", title: "Cake Lady", type: "Fashion figure", tags: "Couture / Play", blurb: "Dressed for an occasion that doesn't exist yet.", src: P + "elegant-cake-lady-posing.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "17", title: "The Fisherman", type: "Character study", tags: "Work / Texture", blurb: "Hands that know the rope.", src: P + "fisherman-carrying-net-drawing.png", bg: bgs.grey, ink: "#eee", span: "", textPos: "over" },
  { n: "18", title: "Lemon Woman", type: "Fashion figure", tags: "Concept / Couture", blurb: "Sharp, bright, a little sour.", src: P + "lemon-woman-posing-in-couture.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "19", title: "Bag Strap", type: "Figure", tags: "Gesture / Line", blurb: "The whole pose lives in one shoulder.", src: P + "man-holding-bag-strap.png", bg: bgs.charcoal, ink: "#eee", span: "", textPos: "over" },
  { n: "20", title: "Document Folder", type: "Figure", tags: "Everyday / Character", blurb: "Somewhere to be, papers in hand.", src: P + "man-holding-document-folder.png", bg: bgs.grey, ink: "#eee", span: "", textPos: "over" },
  { n: "21", title: "The Fork", type: "Concept", tags: "Object / Character", blurb: "A man and his single utensil.", src: P + "man-holding-fork-illustration.png", bg: bgs.magenta, ink: "#fff", span: "md:col-span-2", textPos: "side" },
  { n: "22", title: "Spoon & Newspaper", type: "Concept", tags: "Ritual / Morning", blurb: "Breakfast as a still life.", src: P + "man-holding-spoon-and-newspaper.png", bg: bgs.cream, ink: "#111", span: "", textPos: "over" },
  { n: "23", title: "Pizza Slice", type: "Character", tags: "Humour / Form", blurb: "Confident, folded, ready.", src: P + "pizza-slice-standing-confidently.png", bg: bgs.purple, ink: "#fff", span: "", textPos: "over" },
  { n: "24", title: "Black Suit", type: "Figure study", tags: "Silhouette / Restraint", blurb: "Ink at its most economical.", src: P + "stylish-man-in-black-suit.png", bg: bgs.grey, ink: "#eee", span: "", textPos: "over" },
  { n: "25", title: "Walking Forward", type: "Figure study", tags: "Motion / Line", blurb: "A step, drawn mid-stride.", src: P + "young-woman-walking-forward-illu.png", bg: bgs.cream, ink: "#111", span: "md:col-span-2", textPos: "side" },
];

function Meta({ p, cls = "" }: { p: Piece; cls?: string }) {
  return (
    <span className={`block font-grotesk ${cls}`}>
      <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-purple">{p.type}</span>
      <span className="mt-1 block font-condensed text-lg uppercase leading-none text-bone">{p.n} — {p.title}</span>
      <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.14em] text-bone/45">{p.tags}</span>
      <span className="mt-1 block text-[11px] leading-snug text-bone/60">{p.blurb}</span>
    </span>
  );
}

export default function IllustrationPage() {
  const arts = PIECES.map((p): Art => ({ src: p.src, title: `${p.n} — ${p.title}`, meta: p.type, bg: p.bg }));
  const { open, view } = useArtLightbox(arts);

  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="illustration" label="Illustrations" />

      {/* HEADER */}
      <section className="border-b border-purple/40 px-[3vw] pb-[5vh] pt-[13vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 04 ]</p>
        <div className="mt-2 grid gap-x-[3vw] gap-y-[3vh] lg:grid-cols-[2fr_0.8fr_0.7fr] lg:items-start">
          <h1 className="font-condensed text-[clamp(3rem,15vw,12rem)] uppercase leading-[0.72] text-bone">
            Drawn<br />by hand. <span className="align-top text-[0.16em] text-purple">↘</span>
          </h1>
          <div className="border-l border-purple/25 pl-4">
            <p className="font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
              Characters /<br />Concepts /<br />Visual explorations.
            </p>
            <p className="mt-5 max-w-[26ch] font-grotesk text-[10px] font-medium uppercase leading-relaxed tracking-[0.12em] text-bone/45">
              Lines, characters and expressions built from gesture rather than templates.
            </p>
            <Hatch className="mt-4" />
          </div>
          <div className="border-l border-purple/25 pl-4">
            <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-bone/45">
              Drawing<br />different<br />perspectives.
            </p>
            <Globe className="mt-4 h-8 w-8" />
          </div>
        </div>
      </section>

      {/* EDITORIAL GRID — designed backgrounds, uneven text */}
      <section className="grid auto-rows-[40vw] grid-cols-2 gap-2 border-b border-purple/40 p-[1vw] sm:auto-rows-[26vw] md:auto-rows-[14vw] md:grid-cols-4">
        {PIECES.map((p, i) => (
          <div key={p.n} className={`relative flex flex-col ${p.span}`}>
            <button
              onClick={() => open(i)}
              className="group relative flex-1 cursor-zoom-in overflow-hidden border border-purple/25 transition-colors hover:border-yellow"
              style={{ background: p.bg }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute left-2 top-2 bg-bone px-1.5 py-0.5 font-grotesk text-[9px] font-bold text-black">{p.n}</span>
              {p.textPos === "over" && (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent p-3 pt-10 text-left">
                  <Meta p={p} />
                </span>
              )}
              {p.textPos === "side" && (
                <span className="absolute right-2 top-8 max-w-[46%] bg-void/85 p-2 text-left backdrop-blur-sm">
                  <Meta p={p} />
                </span>
              )}
            </button>
          </div>
        ))}
      </section>

      {view}
      <WorkBand quote={"Art lives · in details."} />
      <SiteFooter />
    </main>
  );
}

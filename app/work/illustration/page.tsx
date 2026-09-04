"use client";

import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hatch, Globe } from "@/components/sections/editorial-bits";
import { useArtLightbox, type Art } from "@/components/sections/art-lightbox";

const P = "/illustration/";

type Item = Art & { n: string; span?: string; tint?: boolean; feature?: boolean };

const ITEMS: Item[] = [
  { n: "01", title: "The Apple Princess", meta: "Character / Fashion", src: P + "apple-princess-in-fashion-pose.png", span: "md:col-span-2 md:row-span-2", feature: true },
  { n: "02", title: "The Baker", meta: "Character study", src: P + "baker-holding-large-rolling-pin.png", span: "md:row-span-2" },
  { n: "03", title: "The Bird Man", meta: "Concept", src: P + "bird-man-leaning-forward.png" },
  { n: "04", title: "Fashion Girl", meta: "Figure study", src: P + "fashion-girl-standing-confidently.png" },
  { n: "05", title: "Woman in Mask Coat", meta: "Editorial", src: P + "woman-wearing-mask-coat.png" },
  { n: "06", title: "Motorcycle Helmet", meta: "Character work", src: P + "woman-holding-motorcycle-helmet.png", span: "md:col-span-2 md:row-span-2", tint: true },
  { n: "07", title: "The Chaotic Artist", meta: "Expression", src: P + "chaotic-artist-girl-holding-pain.png", tint: true },
  { n: "08", title: "Citrus Woman", meta: "Fashion figure", src: P + "citrus-woman-fashion-illustration.png" },
  { n: "09", title: "Woman in Red", meta: "Selected work", src: P + "woman-in-red-dress-illustration.png", span: "md:col-span-2" },
  { n: "10", title: "The Butcher", meta: "Character study", src: P + "muscular-butcher-holding-cleaver.png" },
  { n: "11", title: "Elderly Monk", meta: "Concept", src: P + "elderly-monk-holding-cake-server.png" },
  { n: "12", title: "Architectural Coat", meta: "Figure", src: P + "man-wearing-architectural-coat.png" },
  { n: "13", title: "Pasta Woman", meta: "Fashion figure", src: P + "pasta-woman-fashion-illustration.png" },
  { n: "14", title: "Retired Boxer", meta: "Character study", src: P + "retired-boxer-in-relaxed-stance.png", span: "md:col-span-2" },
  { n: "15", title: "Fish Chef", meta: "Concept", src: P + "anthropomorphic-fish-chef-holdin.png" },
];

export default function IllustrationPage() {
  const { open, view } = useArtLightbox(ITEMS);
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="illustration" label="Illustration" />

      {/* ============ HEADER ============ */}
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
              Art<br />lives<br />in<br />details.
            </p>
            <Globe className="mt-4 h-8 w-8" />
          </div>
        </div>
      </section>

      {/* ============ EDITORIAL MASONRY ============ */}
      <section className="grid auto-rows-[58vw] grid-cols-2 gap-2 border-b border-purple/40 p-[1vw] sm:auto-rows-[40vw] md:auto-rows-[22vw] md:grid-cols-4">
        {ITEMS.map((it, idx) => (
          <button
            key={it.n}
            onClick={() => open(idx)}
            className={`group relative flex cursor-zoom-in flex-col justify-between overflow-hidden border border-purple/25 ${it.tint ? "bg-purple/20" : "bg-iron"} ${it.span ?? ""} text-left transition-colors hover:border-yellow`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={it.src}
              alt={it.title}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04] ${it.tint ? "opacity-90 mix-blend-luminosity" : ""}`}
            />
            <span className="relative z-10 m-2 w-fit bg-bone px-1.5 py-0.5 font-grotesk text-[9px] font-bold text-black">{it.n}</span>
            <span className="relative z-10 translate-y-1 bg-gradient-to-t from-black/95 to-transparent p-3 pt-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block font-condensed text-sm uppercase leading-none text-bone">{it.title}</span>
              <span className="mt-1 block font-grotesk text-[9px] font-medium uppercase tracking-[0.12em] text-yellow">{it.meta}</span>
            </span>
          </button>
        ))}
      </section>

      {view}
      <WorkBand />
      <SiteFooter />
    </main>
  );
}

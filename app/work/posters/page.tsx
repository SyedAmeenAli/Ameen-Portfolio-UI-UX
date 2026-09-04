import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Globe, Hatch } from "@/components/sections/editorial-bits";
import { PosterRail, type Poster } from "@/components/sections/poster-rail";

export const metadata: Metadata = { title: "Posters" };

const P = "/posters/";
const H = ["58vh", "44vh", "66vh", "50vh", "72vh", "46vh"];

const NAMED: Record<string, { title: string; meta: string }> = {
  "panther-full": { title: "Beauty in Chaos", meta: "Screen-print / panther" },
  "panther-half": { title: "Reality Is a Distortion", meta: "Half-tone collage / panther" },
  "electronic-music-poster-afterlight": { title: "Afterlight", meta: "Electronic music" },
  "human-hand-touching-artificial-hand": { title: "Human / Machine", meta: "AI concept" },
  "brutalist-architecture-poster-vo": { title: "Void / Form", meta: "Brutalist architecture" },
  "retro-radio-concert-poster": { title: "Phantom Radio", meta: "Retro-futurist" },
  "synesthesia-visual-music-poster": { title: "Synesthesia", meta: "Visual music" },
  "astronaut-viewing-planet-poster": { title: "Echoes of Tomorrow", meta: "Science fiction" },
  "collage-showing-404-error-doorway": { title: "404: Reality Not Found", meta: "Glitch / digital culture" },
  "glass-archival-drawer-with-dream": { title: "Orbital Memory", meta: "Archival memory" },
  "marble-sculpture-fragmenting-int": { title: "Fragments", meta: "Contemporary art" },
  "glass-flower-botanical-poster": { title: "Neon Botanica", meta: "Bio-futurist" },
  "statue-standing-in-flood-water": { title: "After the Flood", meta: "Climate / editorial" },
  "parallel-city-architectural-post": { title: "Parallel City", meta: "Experimental architecture" },
  "surreal-desert-landscape-art-poster": { title: "Dream State", meta: "Psychedelic" },
  "film-camera-photography-exhibiti": { title: "The Last Analogue", meta: "Analogue culture" },
  "minimalist-art-poster-the-unseen": { title: "The Unseen", meta: "Luxury conceptual" },
  "abstract-wave-floating-in-void": { title: "Standing Wave", meta: "Abstract / void" },
  "architectural-hallway-between-de": { title: "Corridor", meta: "Space between" },
  "floating-futuristic-city-above-o": { title: "Above", meta: "Floating city" },
  "futuristic-archaeology-poster-sh": { title: "The Dig", meta: "Future archaeology" },
  "giant-eye-floating-above-city": { title: "The Watch", meta: "Surveillance / scale" },
  "impossible-flower-growing-from-s": { title: "Impossible Bloom", meta: "Growth study" },
  "light-bending-stone-platform": { title: "Refraction", meta: "Light / stone" },
  "monolith-on-prehistoric-earth": { title: "Monolith", meta: "Prehistoric Earth" },
  "parallel-city-design-festival-po": { title: "Design Festival", meta: "Event poster" },
  "sculpted-hand-floating-paper-fra": { title: "The Maker", meta: "Hand + paper" },
};

const cap = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// every file in /public/posters, ordered so named/strong pieces lead
const ORDER = Object.keys(NAMED);
const POSTERS: Poster[] = ORDER.map((slug, i) => {
  const ext = slug.startsWith("panther-") ? ".webp" : ".jpg";
  const n = NAMED[slug] ?? { title: cap(slug), meta: "Poster" };
  return { title: n.title, meta: n.meta, src: P + slug + ext, h: H[i % H.length] };
});

export default function PostersPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="posters" label="Posters" />

      {/* DRAMATIC HERO — type + poster fragments */}
      <section className="relative overflow-hidden border-b border-purple/40 px-[4vw] pb-[5vh] pt-[13vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ]</p>
        <div className="mt-1 grid gap-x-[2vw] gap-y-[3vh] lg:grid-cols-[1.7fr_1fr_1fr] lg:items-end">
          <h1 className="font-condensed text-[clamp(3.4rem,19vw,16rem)] uppercase leading-[0.7] text-bone">
            Poster<br /><span className="text-yellow">Archive</span>
          </h1>
          <div className="flex gap-2">
            {[POSTERS[0], POSTERS[4], POSTERS[8]].map((p, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img key={i} src={p.src} alt="" className="h-[30vh] w-full border border-purple/30 object-cover" style={{ marginTop: `${i * 3}vh` }} />
            ))}
          </div>
          <div className="border-l border-purple/25 pl-4">
            <p className="font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
              Surreal /<br />Brutalist /<br />Editorial /<br />Experimental.
            </p>
            <div className="mt-4 flex items-center gap-3"><Globe /><Hatch /></div>
            <p className="mt-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-yellow">{POSTERS.length} pieces · scroll sideways →</p>
          </div>
        </div>
      </section>

      <PosterRail posters={POSTERS} />

      <WorkBand quote={"Beauty exists · in distortion."} />
      <SiteFooter />
    </main>
  );
}

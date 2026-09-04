import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Globe, Hatch } from "@/components/sections/editorial-bits";
import { PosterRail, type Poster } from "@/components/sections/poster-rail";

export const metadata: Metadata = { title: "Posters" };

const P = "/posters/";
const H = ["58vh", "44vh", "66vh", "50vh", "72vh", "46vh"];

const POSTERS: Poster[] = [
  { title: "Afterlight", meta: "Electronic music", src: P + "electronic-music-poster-afterlight.jpg" },
  { title: "Human / Machine", meta: "AI concept", src: P + "human-hand-touching-artificial-hand.jpg" },
  { title: "Void / Form", meta: "Brutalist architecture", src: P + "brutalist-architecture-poster-vo.jpg" },
  { title: "Phantom Radio", meta: "Retro-futurist", src: P + "retro-radio-concert-poster.jpg" },
  { title: "Synesthesia", meta: "Visual music", src: P + "synesthesia-visual-music-poster.jpg" },
  { title: "Echoes of Tomorrow", meta: "Science fiction", src: P + "astronaut-viewing-planet-poster.jpg" },
  { title: "404: Reality Not Found", meta: "Glitch / digital culture", src: P + "collage-showing-404-error-doorway.jpg" },
  { title: "Orbital Memory", meta: "Archival memory", src: P + "glass-archival-drawer-with-dream.jpg" },
  { title: "Fragments", meta: "Contemporary art", src: P + "marble-sculpture-fragmenting-int.jpg" },
  { title: "Neon Botanica", meta: "Bio-futurist", src: P + "glass-flower-botanical-poster.jpg" },
  { title: "After the Flood", meta: "Climate / editorial", src: P + "statue-standing-in-flood-water.jpg" },
  { title: "Parallel City", meta: "Experimental architecture", src: P + "parallel-city-architectural-post.jpg" },
  { title: "Dream State", meta: "Psychedelic", src: P + "surreal-desert-landscape-art-poster.jpg" },
  { title: "The Last Analogue", meta: "Photography / analogue culture", src: P + "film-camera-photography-exhibiti.jpg" },
  { title: "The Unseen", meta: "Luxury conceptual", src: P + "minimalist-art-poster-the-unseen.jpg" },
].map((p, i) => ({ ...p, h: H[i % H.length] }));

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
            <p className="mt-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-yellow">15 pieces · scroll sideways →</p>
          </div>
        </div>
      </section>

      <PosterRail posters={POSTERS} />

      <WorkBand quote={"Beauty exists · in distortion."} />
      <SiteFooter />
    </main>
  );
}

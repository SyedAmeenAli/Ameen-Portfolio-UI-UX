import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { LogoDome } from "@/components/sections/logo-dome";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hatch, Globe } from "@/components/sections/editorial-bits";
import { LOGOS } from "@/lib/logos";

export const metadata: Metadata = { title: "Logo Gallery" };

const FILTERS = ["All", "Tech", "Nature", "Lifestyle", "Food", "Experimental", "Lettermarks", "Monograms"];

const mark = (l: (typeof LOGOS)[number]) =>
  l.file ?? (l.kind === "image" ? `/logos/${l.slug}.webp` : `/logos/${l.slug}.jpg`);

export default function LogoGalleryPage() {
  const live = LOGOS.filter((l) => l.kind !== "todo");
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="identity" label="Logo Design" />

      {/* ============ HEADER + DOME ============ */}
      <section className="grid border-b border-purple/40 lg:grid-cols-[1fr_2fr_0.7fr]">
        <div className="border-purple/30 px-[3vw] pb-[6vh] pt-[13vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ]</p>
          <h1 className="mt-2 font-condensed uppercase leading-[0.72]">
            <span className="block text-[clamp(3rem,9vw,7rem)] text-bone">Logo</span>
            <span className="block text-[clamp(3rem,9vw,7rem)] text-yellow">
              Gallery <span className="align-top text-[0.3em] text-purple">↘</span>
            </span>
          </h1>
          <p className="mt-6 font-condensed text-2xl uppercase leading-none text-bone">Marks that<br />mean more.</p>
          <p className="mt-5 max-w-[30ch] font-grotesk text-[11px] font-medium uppercase leading-relaxed tracking-[0.12em] text-bone/55">
            A curated collection of logos, marks and symbols exploring identity, meaning and visual storytelling.
          </p>
        </div>

        <div className="relative border-purple/30 lg:border-r">
          <LogoDome />
        </div>

        <div className="flex flex-col justify-between gap-6 px-[3vw] py-[7vh]">
          <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-purple">
            Different<br />ideas<br />same<br />purpose.
          </p>
          <Hatch />
          <Globe />
          <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-bone/55">
            Brand marks<br />for a brighter<br />tomorrow.
          </p>
          <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-yellow">
            Explore<br />rotate<br />discover<br />repeat.
          </p>
        </div>
      </section>

      {/* ============ FILTER BAR ============ */}
      <section className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-purple/40 px-[3vw] py-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em]">
        <span className="text-bone/40">[ All Logos ]</span>
        {FILTERS.map((f, i) => (
          <span key={f} className={i === 0 ? "bg-yellow px-2 py-0.5 text-black" : "text-bone/55"}>{f}</span>
        ))}
        <span className="ml-auto flex items-center gap-3 text-bone/40">[ {live.length} ] <span>‹ ›</span></span>
      </section>

      {/* ============ CONTACT SHEET ============ */}
      <section className="grid grid-cols-3 border-b border-purple/40 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-12">
        {live.map((l, i) => (
          <div key={l.slug} className={`group flex flex-col items-center gap-2 p-4 transition-colors hover:bg-purple/10 ${i ? "border-l border-purple/20" : ""}`}>
            <div className="grid aspect-square w-full place-items-center border border-purple/20 bg-iron p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mark(l)} alt={l.name} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-center font-condensed text-sm uppercase leading-none text-bone">{l.name}</span>
            <span className="text-center font-grotesk text-[8px] font-semibold uppercase tracking-[0.1em] text-purple">{l.type}</span>
            <span className="font-grotesk text-[8px] text-bone/35">2026</span>
          </div>
        ))}
      </section>

      <WorkBand />
      <SiteFooter mid="Ideas live longer ↓" />
    </main>
  );
}

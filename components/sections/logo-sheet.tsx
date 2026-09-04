"use client";

import { useMemo, useState } from "react";
import { LOGOS } from "@/lib/logos";

const mark = (l: (typeof LOGOS)[number]) =>
  l.file ?? (l.kind === "image" ? `/logos/${l.slug}.webp` : `/logos/${l.slug}.jpg`);

const GROUP: Record<string, string> = {
  "Emblem": "Emblems", "Heraldic Mark": "Emblems", "Vintage Badge": "Emblems", "Heritage Emblem": "Emblems",
  "Logotype": "Lettermarks", "Experimental Type": "Lettermarks", "Retro Lettering": "Lettermarks", "Liquid Lettering": "Lettermarks", "Continuous Line": "Lettermarks", "Hidden Letter": "Lettermarks",
  "Monogram": "Monograms", "Modular Symbol": "Monograms",
  "Isotype": "Symbols", "Imagotype": "Symbols", "Geometric Isotype": "Symbols", "Negative Space": "Symbols", "Optical Illusion": "Symbols",
  "Illustrative Mark": "Illustrative", "Mascot Mark": "Illustrative",
  "Minimal Luxury": "Minimal",
};

const FILTERS = ["All", "Emblems", "Lettermarks", "Monograms", "Symbols", "Illustrative", "Minimal"];

export function LogoSheet() {
  const [filter, setFilter] = useState("All");
  const live = useMemo(() => LOGOS.filter((l) => l.kind !== "todo"), []);
  const shown = filter === "All" ? live : live.filter((l) => GROUP[l.type] === filter);

  return (
    <>
      <section className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-purple/40 px-[3vw] py-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em]">
        <span className="text-bone/40">[ Logo archive ]</span>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-2 py-0.5 transition-colors ${f === filter ? "bg-yellow text-black" : "text-bone/55 hover:text-bone"}`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-bone/40">[ {shown.length} ]</span>
      </section>

      <section className="grid grid-cols-2 border-b border-purple/40 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
        {shown.map((l, i) => (
          <div key={l.slug} className={`group flex flex-col items-center gap-2 p-4 transition-colors hover:bg-purple/10 ${i ? "border-purple/20 sm:border-l" : ""}`}>
            <div className="grid aspect-square w-full place-items-center border border-purple/20 bg-iron p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mark(l)} alt={l.name} loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-center font-condensed text-sm uppercase leading-none text-bone">{l.name}</span>
            <span className="text-center font-grotesk text-[8px] font-semibold uppercase tracking-[0.1em] text-purple">{l.type}</span>
            <span className="font-grotesk text-[8px] text-bone/35">2026</span>
          </div>
        ))}
      </section>
    </>
  );
}

export default LogoSheet;

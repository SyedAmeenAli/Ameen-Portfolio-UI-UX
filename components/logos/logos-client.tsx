"use client";

import { useState } from "react";
import type { Logo } from "@/lib/logos";
import { LogoBand } from "./logo-band";
import { LogoMarquee } from "./logo-marquee";
import { LogoTile } from "./logo-tile";
import { LogoLightbox } from "./logo-lightbox";

export function LogosClient({ logos }: { logos: Logo[] }) {
  const [current, setCurrent] = useState<number | null>(null);
  const live = logos.filter((l) => l.kind !== "todo").length;

  return (
    <main className="flex-1 pb-[16vh]">
      <LogoBand count={live} />
      <LogoMarquee logos={logos} onOpen={setCurrent} />

      {/* the index — big numbers, full bleed, no card grid */}
      <section className="mt-[12vh] px-[3vw]">
        <div className="flex items-baseline justify-between border-b border-ink/15 pb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/45">
          <span>Index</span>
          <span>{String(live).padStart(2, "0")} / 20</span>
        </div>

        <div className="mt-[6vh] grid grid-cols-2 gap-x-[2vw] gap-y-[6vh] sm:grid-cols-3 lg:grid-cols-4">
          {logos.map((logo) => (
            <figure key={logo.slug} className="group">
              <LogoTile logo={logo} onOpen={setCurrent} />
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="font-mono text-[11px] tabular-nums text-ink/35">
                  {String(logo.n).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[clamp(0.9rem,1.5vw,1.4rem)] uppercase leading-none tracking-tight">
                    {logo.name}
                  </span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-purple">
                    {logo.type}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <LogoLightbox logos={logos} current={current} setCurrent={setCurrent} />
    </main>
  );
}

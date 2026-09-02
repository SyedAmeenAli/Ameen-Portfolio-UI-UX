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
    <main className="flex-1 pb-32">
      <LogoBand count={live} />

      <LogoMarquee logos={logos} onOpen={setCurrent} />

      <section className="mx-auto mt-16 w-[min(1100px,92vw)]">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-purple">
          All marks
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {logos.map((logo) => (
            <LogoTile key={logo.slug} logo={logo} onOpen={setCurrent} />
          ))}
        </div>
      </section>

      <LogoLightbox logos={logos} current={current} setCurrent={setCurrent} />
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Hatch } from "@/components/sections/editorial-bits";
import { IdentitySystemVisual } from "@/components/sections/identity-system-visual";
import type { BrandVis } from "@/lib/brands";

export function IdentityHero({ brands }: { brands: BrandVis[] }) {
  const [hover, setHover] = useState<BrandVis | null>(null);

  return (
    <section className="grid border-b border-purple/40 lg:grid-cols-[1.3fr_2fr_0.85fr]">
      <div className="border-purple/30 px-[3vw] pb-[5vh] pt-[13vh] lg:border-r">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 01 ]</p>
        <h1 className="mt-2 font-condensed uppercase leading-[0.78] tracking-[0.005em]">
          <span className="block text-[clamp(3.6rem,10vw,8.5rem)] text-bone">Brand</span>
          <span className="block text-[clamp(3.6rem,10vw,8.5rem)] text-yellow">Identity</span>
        </h1>
        <p className="mt-6 font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
          Identities / Systems / Visual worlds / Distinctive presence.
        </p>
        <p className="mt-4 max-w-[36ch] font-grotesk text-[12px] leading-relaxed text-bone/50">
          I build identities that move beyond the logo — shaping how a brand looks, speaks and feels across every touchpoint.
        </p>
      </div>

      <div
        className="relative flex items-center justify-center border-purple/30 bg-[#0b0a10] p-4 lg:border-r"
        onMouseLeave={() => setHover(null)}
      >
        <IdentitySystemVisual active={hover} />
        <span className="pointer-events-none absolute left-4 top-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/60">
          {hover ? `System — ${hover.name}` : "Identity system"}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-6 px-[3vw] py-[7vh]">
        <div>
          <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-bone/55">
            More<br />than<br />just<br />a logo.
          </p>
          <div className="mt-4 flex items-center gap-3"><Globe /><Hatch /></div>
        </div>

        <div>
          <p className="font-condensed text-4xl uppercase leading-none text-yellow">05</p>
          <p className="mt-1 font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">Identity systems</p>
          <ul className="mt-4 space-y-1.5">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/work/branding/${b.slug}`}
                  onMouseEnter={() => setHover(b)}
                  onFocus={() => setHover(b)}
                  className="group flex items-baseline gap-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.16em] text-bone/55 transition-colors hover:text-bone"
                  style={{ color: hover?.slug === b.slug ? hover.accent : undefined }}
                >
                  <span className="text-purple">{b.order}</span>
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-yellow">Scroll to explore ↓</p>
      </div>
    </section>
  );
}

export default IdentityHero;

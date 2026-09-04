import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hatch, Globe } from "@/components/sections/editorial-bits";
import { BRAND_VIS } from "@/lib/brands";

export const metadata: Metadata = { title: "Brand Identity" };

const featured = BRAND_VIS[0];
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789";

export default function BrandIdentityPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="identity" label="Brand Identity" />

      <section className="grid border-b border-purple/40 lg:grid-cols-[1.4fr_2fr_0.85fr]">
        <div className="border-purple/30 px-[3vw] pb-[5vh] pt-[13vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 01 ]</p>
          <h1 className="mt-2 font-condensed uppercase leading-[0.72] tracking-[0.005em]">
            <span className="block text-[clamp(2.6rem,8vw,6rem)] text-bone">Brand</span>
            <span className="block text-[clamp(2.6rem,8vw,6rem)] text-yellow">
              Identity <span className="align-top text-[0.3em] text-purple">↘</span>
            </span>
          </h1>
          <p className="mt-5 font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
            Identities /<br />Systems /<br />Visual worlds /<br />Real impact.
          </p>
          <p className="mt-4 max-w-[34ch] font-grotesk text-[11px] leading-relaxed text-bone/45">
            Logo systems, typography, colour, art direction and applications — from the first sketch to the final identity.
          </p>
        </div>

        <div className="relative flex items-center justify-center border-purple/30 bg-[#0b0a10] p-4 lg:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.board} alt="Nexora identity board" className="max-h-[62vh] w-full object-contain" />
          <span className="pointer-events-none absolute left-4 top-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/60">Featured — {featured.name}</span>
        </div>

        <div className="flex flex-col justify-between gap-6 px-[3vw] py-[7vh]">
          <div>
            <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-bone/55">
              More<br />than<br />just<br />a logo.
            </p>
            <div className="mt-4 flex items-center gap-3"><Globe /><Hatch /></div>
          </div>
          <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-purple">
            Idea /<br />Strategy /<br />Design /<br />System.
          </p>
          <p className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-yellow">Scroll to explore ↓</p>
        </div>
      </section>

      <section className="border-b border-purple/40">
        <p className="px-[3vw] py-3 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ] Five identity systems</p>
        {BRAND_VIS.map((b) => (
          <Link
            key={b.slug}
            href={`/work/branding/${b.slug}`}
            className="group grid border-t border-purple/30 transition-colors hover:bg-purple/5 lg:grid-cols-[0.9fr_1.6fr]"
          >
            <div className="flex flex-col justify-between gap-6 px-[3vw] py-[7vh]">
              <div>
                <span className="font-grotesk text-[11px] font-semibold text-purple">{b.order}</span>
                <h2 className="mt-2 font-condensed text-[clamp(2.6rem,7vw,5rem)] uppercase leading-none" style={{ color: b.accent }}>{b.name}</h2>
                <p className="mt-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/55">{b.sectorLine}</p>
                <p className="mt-4 max-w-[40ch] font-grotesk text-sm leading-relaxed text-bone/70">{b.concept}</p>
              </div>
              <div className="flex items-center gap-3">
                {b.palette.slice(0, 5).map((c) => <span key={c} className="h-5 w-5 border border-bone/15" style={{ background: c }} />)}
                <span className="ml-auto font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow group-hover:translate-x-1">View project ↗</span>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#0b0a10] p-4 lg:border-l lg:border-purple/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.board} alt={`${b.name} identity`} className="max-h-[54vh] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
          </Link>
        ))}
      </section>

      <section className="grid border-b border-purple/40 lg:grid-cols-2">
        <div className="flex items-center gap-6 border-purple/30 px-[3vw] py-[10vh] lg:border-r">
          <Globe className="h-16 w-16 shrink-0" />
          <p className="font-condensed text-[clamp(1.6rem,4vw,3rem)] uppercase leading-[0.95] text-bone">
            Different<br />ideas.<br /><span className="text-purple">Same purpose.</span>
          </p>
        </div>
        <div className="flex items-end justify-between px-[3vw] py-[10vh]">
          <p className="font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
            Bold ideas /<br />clear systems /<br />stronger identities.
          </p>
          <div className="flex items-end gap-6">
            <span className="font-condensed text-6xl text-bone">Aa</span>
            <span className="font-grotesk text-4xl font-medium text-bone">Aa</span>
          </div>
        </div>
        <p className="border-t border-purple/25 px-[3vw] py-3 font-grotesk text-[10px] tracking-[0.1em] text-bone/35 lg:col-span-2">{GLYPHS}</p>
      </section>

      <WorkBand />
      <SiteFooter mid="Ideas live longer ↓" />
    </main>
  );
}

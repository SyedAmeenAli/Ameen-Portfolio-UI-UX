import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hatch, Globe } from "@/components/sections/editorial-bits";
import { BRAND_VIS, MORE_BRANDS } from "@/lib/brands";

export const metadata: Metadata = { title: "Brand Visualization" };

const featured = BRAND_VIS.find((b) => b.slug === "nexora") ?? BRAND_VIS[0];
const FONT_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789";

export default function BrandVisualizationPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="identity" label="Brand Identity" />

      {/* ============ [01] HEADER ============ */}
      <section className="grid border-b border-purple/40 lg:grid-cols-[1.5fr_2fr_0.9fr]">
        <div className="border-purple/30 px-[3vw] pb-[5vh] pt-[13vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 01 ]</p>
          <h1 className="mt-2 font-condensed uppercase leading-[0.72] tracking-[0.005em]">
            <span className="block text-[clamp(2.6rem,8vw,6rem)] text-bone">Brand</span>
            <span className="block text-[clamp(2.6rem,8vw,6rem)] text-yellow">
              Visual&shy;ization <span className="align-top text-[0.3em] text-purple">↘</span>
            </span>
          </h1>
          <p className="mt-5 font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
            Identities /<br />Systems /<br />Visual worlds /<br />Real impact.
          </p>
        </div>

        <div className="relative border-purple/30 lg:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.board} alt="Nexora identity" className="h-full min-h-[38vh] w-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 pt-[12vh]">
            <span className="self-end text-right font-grotesk text-[9px] font-semibold uppercase leading-tight tracking-[0.2em] text-bone/70">
              Idea<br />Strategy<br />Design<br />System<br />Experience
            </span>
            <span className="font-condensed text-[clamp(1.4rem,3vw,2.4rem)] uppercase leading-none text-bone">
              {featured.name}<br /><span className="text-[0.42em] tracking-[0.2em] text-bone/70">{featured.tagline}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 px-[3vw] py-[6vh]">
          <div className="duo aspect-[3/4] border border-purple/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me/front.png" alt="" />
          </div>
          <div>
            <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-bone/55">
              More<br />than<br />just<br />a logo.
            </p>
            <div className="mt-4 flex items-center gap-3"><Globe /><Hatch /></div>
            <p className="mt-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">Scroll to explore ↓</p>
          </div>
        </div>
      </section>

      {/* ============ FILTER BAR ============ */}
      <section className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-purple/40 px-[3vw] py-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em]">
        <span className="text-bone/40">[ All Brands ]</span>
        <span className="bg-yellow px-2 py-0.5 text-black">All</span>
        {MORE_BRANDS.map((b) => (
          <span key={b.name} className="text-bone/55">{b.name}</span>
        ))}
        <span className="ml-auto text-bone/40">[ Sort ] Latest</span>
      </section>

      {/* ============ [02] FEATURED BRAND + [03] SKETCHES ============ */}
      <section className="grid border-b border-purple/40 lg:grid-cols-[0.9fr_1.6fr_1.4fr]">
        <div className="border-purple/30 px-[3vw] py-[7vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ] Featured Brand</p>
          <h2 className="mt-3 font-condensed text-[clamp(2.6rem,7vw,5rem)] uppercase leading-none text-bone">{featured.name}</h2>
          <p className="mt-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-purple">{featured.tagline}</p>
          <p className="mt-5 max-w-[36ch] font-grotesk text-sm leading-relaxed text-bone/70">{featured.blurb}</p>
          <ul className="mt-6 space-y-1 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/60">
            {featured.deliverables.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <Link href={`/work/branding/${featured.slug}`} className="mt-6 inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow">
            [ View full project ] <span>↗</span>
          </Link>
        </div>

        <div className="relative border-purple/30 lg:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.board} alt={`${featured.name} final logo`} className="h-full min-h-[44vh] w-full object-cover" />
          <span className="absolute right-4 top-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/70">[ 01 / 06 ]</span>
          <span className="absolute bottom-4 left-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/60">Final logo</span>
        </div>

        <div className="px-[3vw] py-[7vh]">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ] Sketches &amp; Exploration</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.sketch} alt={`${featured.name} sketches`} className="mt-4 w-full border border-purple/30 object-cover" />
          <p className="mt-4 font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-purple">
            Ideas shape<br />identity evolve
          </p>
        </div>
      </section>

      {/* ============ [04][05] COLOUR + TYPE ============ */}
      <section className="grid border-b border-purple/40 lg:grid-cols-[1.1fr_1fr_1.2fr]">
        <div className="border-purple/30 px-[3vw] py-[7vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 04 ] Colour System</p>
          <div className="mt-6 flex flex-wrap gap-6">
            {featured.palette.slice(0, 4).map((c) => (
              <div key={c} className="text-center">
                <span className="block h-14 w-14 rounded-full border border-purple/25" style={{ background: c }} />
                <span className="mt-2 block font-grotesk text-[9px] tracking-[0.1em] text-bone/50">{c.toUpperCase()}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/50">Colours that build a stronger tomorrow.</p>
        </div>

        <div className="border-purple/30 px-[3vw] py-[7vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 05 ] Typography</p>
          <div className="mt-6 flex items-end gap-6">
            <span className="font-condensed text-6xl text-bone">Aa</span>
            <span className="font-grotesk text-5xl font-medium text-bone">Aa</span>
          </div>
          <p className="mt-3 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/45">Primary · Secondary</p>
          <p className="mt-4 break-all font-grotesk text-xs tracking-[0.1em] text-bone/40">{FONT_GLYPHS}</p>
        </div>

        <div className="flex flex-col justify-center px-[3vw] py-[7vh]">
          <p className="font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-purple">
            Bold ideas<br />clear systems<br />stronger identities.
          </p>
          <Hatch className="mt-5" />
        </div>
      </section>

      {/* ============ [06] APPLICATIONS ============ */}
      <section className="border-b border-purple/40 px-[3vw] py-[7vh]">
        <div className="flex items-baseline justify-between">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 06 ] Brand Applications</p>
          <p className="text-right font-grotesk text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-bone/45">From<br />concept to<br />reality.</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {featured.applications.map((src, i) => (
            <div key={i} className="grid aspect-square place-items-center border border-purple/25 bg-iron p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Brand application" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ============ [07] MORE BRANDS ============ */}
      <section className="border-b border-purple/40">
        <p className="px-[3vw] py-3 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 07 ] More Brands</p>
        <div className="grid grid-cols-2 border-t border-purple/30 md:grid-cols-4 lg:grid-cols-9">
          {MORE_BRANDS.map((b, i) => (
            <Link
              key={b.name}
              href={b.slug ? `/work/branding/${b.slug}` : "/work/branding"}
              className={`group flex flex-col justify-between gap-3 p-4 transition-colors hover:bg-purple/10 ${i ? "border-l border-purple/25" : ""}`}
            >
              <span className="h-6 w-6" style={{ background: b.color }} />
              <span>
                <span className="block font-condensed text-base uppercase leading-none text-bone">{b.name}</span>
                <span className="mt-1 block font-grotesk text-[8px] font-medium uppercase tracking-[0.12em] text-bone/45">{b.tagline}</span>
              </span>
              <span className="text-[10px] text-yellow transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <WorkBand />
      <SiteFooter mid="Ideas live longer ↓" />
    </main>
  );
}

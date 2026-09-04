import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { BRAND_VIS } from "@/lib/brands";

export function generateStaticParams() {
  return BRAND_VIS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/branding/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = BRAND_VIS.find((x) => x.slug === slug);
  return { title: b ? `${b.name} — Brand Identity` : "Brand Identity" };
}

const FONT_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789";

export default async function BrandCaseStudy({ params }: PageProps<"/work/branding/[slug]">) {
  const { slug } = await params;
  const b = BRAND_VIS.find((x) => x.slug === slug);
  if (!b) notFound();

  const idx = BRAND_VIS.findIndex((x) => x.slug === slug);
  const next = BRAND_VIS[(idx + 1) % BRAND_VIS.length];

  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="identity" label={`Identity / ${b.name}`} />

      {/* 01 — COVER */}
      <section className="relative border-b border-purple/40 px-[4vw] pb-[6vh] pt-[13vh]">
        <Link href="/work/branding" className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-bone/45 hover:text-yellow">← All brands</Link>
        <p className="mt-6 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 01 ] Overview</p>
        <h1 className="mt-2 font-condensed text-[clamp(3.4rem,16vw,13rem)] uppercase leading-[0.74]" style={{ color: b.color }}>{b.name}</h1>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/60">
          <span>{b.sectorLine}</span>
          <span className="text-purple">{b.tagline}</span>
          <span>2026</span>
        </div>
        <div className="mt-8 aspect-[16/9] w-full border border-purple/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.board} alt={`${b.name} identity`} className="h-full w-full object-cover" />
        </div>
      </section>

      {/* 02/03 — CONCEPT + SKETCH */}
      <section className="grid border-b border-purple/40 lg:grid-cols-2">
        <div className="border-purple/30 px-[4vw] py-[10vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ] Concept</p>
          <p className="mt-4 max-w-[34ch] font-condensed text-[clamp(1.6rem,3.5vw,2.8rem)] uppercase leading-[1.05] text-bone">{b.concept}</p>
          <p className="mt-6 max-w-[42ch] font-grotesk text-sm leading-relaxed text-bone/70">{b.blurb}</p>
        </div>
        <div className="px-[4vw] py-[10vh]">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ] Sketch &amp; exploration</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.sketch} alt={`${b.name} sketches`} className="mt-4 w-full border border-purple/30" />
        </div>
      </section>

      {/* 04/05 — COLOUR + TYPE */}
      <section className="grid border-b border-purple/40 lg:grid-cols-2">
        <div className="border-purple/30 px-[4vw] py-[10vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 04 ] Colour</p>
          <div className="mt-6 flex">
            {b.palette.map((c) => (
              <div key={c} className="flex-1">
                <span className="block h-24" style={{ background: c }} />
                <span className="mt-2 block font-grotesk text-[9px] tracking-[0.08em] text-bone/50">{c.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[4vw] py-[10vh]">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 05 ] Typography</p>
          <div className="mt-6 flex items-end gap-6">
            <span className="font-condensed text-7xl text-bone">Aa</span>
            <span className="font-grotesk text-5xl font-medium text-bone">Aa</span>
          </div>
          <p className="mt-3 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/45">Display · Support</p>
          <p className="mt-4 break-words font-grotesk text-[11px] tracking-[0.06em] text-bone/40">{FONT_GLYPHS}</p>
        </div>
      </section>

      {/* 06 — APPLICATIONS */}
      <section className="border-b border-purple/40 px-[4vw] py-[10vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 06 ] Applications</p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {b.applications.map((src, i) => (
            <div key={i} className="grid aspect-square place-items-center border border-purple/25 bg-iron p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${b.name} application`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* 07 — FINAL */}
      <section className="border-b border-purple/40 px-[4vw] py-[12vh] text-center">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 07 ] Final identity</p>
        <h2 className="mt-4 font-condensed text-[clamp(2rem,8vw,6rem)] uppercase leading-[0.85]" style={{ color: b.color }}>{b.tagline}</h2>
        <Link href={`/work/branding/${next.slug}`} className="mt-8 inline-flex items-center gap-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow">
          Next — {next.name} ↗
        </Link>
      </section>

      <WorkBand />
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { BrowserWindow } from "@/components/sections/browser-window";

export const metadata: Metadata = { title: "Brand Experience — AQARATI" };

const ORIGIN = "https://brand-visualization.vercel.app";

const CHAPTERS = [
  { label: "Home", path: "/", n: "01", d: "Trusted by design. Defined by place. The mark builds itself — roofline, wave, wordmarks — in a logo-in-motion study." },
  { label: "Identity", path: "/identity", n: "02", d: "The master mark, how it is built, how much room it needs and where it can go." },
  { label: "Typography", path: "/typography", n: "03", d: "Fraunces and Plus Jakarta Sans in English, with Arabic set as an equal." },
  { label: "Colour", path: "/colour", n: "04", d: "Mocha, Ivory and Deep Mocha, with warm neutrals designed for light and dark." },
  { label: "Visual language", path: "/visual-language", n: "05", d: "Photography, iconography, illustration, spacing, radius, elevation and motion." },
  { label: "Product", path: "/product", n: "06", d: "Light and dark product screens, navigation, a property expressed and verification." },
  { label: "Applications", path: "/applications", n: "07", d: "The app icon, the launch screen and the brand on the web, paper and social." },
  { label: "Usage", path: "/usage", n: "08", d: "What to do, what to avoid, and the rules that keep the brand quietly distinctive." },
];

const PALETTE = [
  { name: "Mocha", hex: "#825C3F" },
  { name: "Ivory", hex: "#ECE3D7" },
  { name: "Deep Mocha", hex: "#674830" },
];

export default function BrandExperiencePage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="brandexp" label="Brand Experience / AQARATI" />

      {/* HERO */}
      <section className="border-b border-purple/40 px-[4vw] pb-[6vh] pt-[13vh]">
        <Link href="/work" className="-m-2 inline-block p-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-bone/45 hover:text-yellow">← All work</Link>
        <p className="mt-6 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 10 ] Brand experience</p>
        <h1 className="mt-2 font-condensed text-[clamp(3.4rem,16vw,13rem)] uppercase leading-[0.74]" style={{ color: "#b98a64" }}>Aqarati</h1>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/60">
          <span>Brand guidelines / live website</span>
          <span className="text-purple">Trusted by design. Defined by place.</span>
          <span>2026</span>
        </div>
        <p className="mt-6 max-w-[56ch] font-grotesk text-sm leading-relaxed text-bone/70">
          The identity, visual language and digital expression of AQARATI, Oman&apos;s trusted property ecosystem —
          built as a living website instead of a PDF. Below it runs live, inside a window: switch chapters, resize it
          from desktop to mobile, or open it full-screen.
        </p>
      </section>

      {/* LIVE WINDOW */}
      <section className="border-b border-purple/40 bg-iron px-[3vw] py-[5vh]">
        <p className="mb-4 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ] The live site</p>
        <BrowserWindow origin={ORIGIN} chapters={CHAPTERS.map(({ label, path }) => ({ label, path }))} />
      </section>

      {/* WHAT IT IS + PALETTE */}
      <section className="grid border-b border-purple/40 lg:grid-cols-2">
        <div className="border-purple/30 px-[4vw] py-[10vh] lg:border-r">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ] What it is</p>
          <p className="mt-4 max-w-[30ch] font-condensed text-[clamp(1.6rem,3.5vw,2.6rem)] uppercase leading-[1.05] text-bone">
            A brand book you can walk through.
          </p>
          <p className="mt-6 max-w-[46ch] font-grotesk text-sm leading-relaxed text-bone/70">
            Seven chapters — identity, typography, colour, visual language, product, applications, usage — in English
            and Arabic, light and dark. Brand essence: trust, place, journey. Every interaction answers five questions
            before the user proceeds: what am I looking at, who is behind it, has it been verified, what can I do,
            what happens next.
          </p>
        </div>
        <div className="px-[4vw] py-[10vh]">
          <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 04 ] Colour</p>
          <div className="mt-6 flex">
            {PALETTE.map((c) => (
              <div key={c.hex} className="flex-1">
                <span className="block h-28" style={{ background: c.hex }} />
                <span className="mt-2 block font-grotesk text-[9px] tracking-[0.06em] text-bone/50">{c.name.toUpperCase()} · {c.hex}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/45">This brand&apos;s own system — not the portfolio palette.</p>
          <div className="mt-8 flex items-end gap-6">
            <span className="font-serif text-7xl text-bone">Aa</span>
            <span className="font-grotesk text-5xl font-medium text-bone">Aa</span>
          </div>
          <p className="mt-3 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/45">Fraunces · Plus Jakarta Sans · Arabic as an equal</p>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="border-b border-purple/40">
        <p className="px-[4vw] py-3 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 05 ] Chapters — {CHAPTERS.length}</p>
        <div className="grid gap-px border-t border-purple/25 bg-purple/20 sm:grid-cols-2 lg:grid-cols-4">
          {CHAPTERS.map((c) => (
            <a
              key={c.path}
              href={`${ORIGIN}${c.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 bg-void p-5 transition-colors hover:bg-purple/10"
            >
              <span className="font-condensed text-3xl leading-none text-purple transition-colors group-hover:text-yellow">{c.n}</span>
              <span className="font-condensed text-xl uppercase leading-none text-bone">{c.label}</span>
              <span className="font-grotesk text-[11px] leading-snug text-bone/60">{c.d}</span>
              <span className="mt-auto pt-2 font-grotesk text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow">Open live ↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="border-b border-purple/40 px-[4vw] py-[12vh] text-center">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 06 ] Quietly distinctive</p>
        <h2 className="mt-4 font-condensed text-[clamp(2rem,8vw,6rem)] uppercase leading-[0.85]" style={{ color: "#b98a64" }}>Trusted by design.<br />Defined by place.</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <a href={ORIGIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow">
            Open the full site ↗
          </a>
          <Link href="/work/branding/aqarati" className="inline-flex items-center gap-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em] text-bone/70 hover:text-yellow">
            Aqarati identity case study →
          </Link>
        </div>
      </section>

      <WorkBand quote={"Brand · in motion."} />
      <SiteFooter />
    </main>
  );
}

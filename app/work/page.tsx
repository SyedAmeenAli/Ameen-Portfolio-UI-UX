import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { Cat } from "@/components/sections/cat";
import { LogoDome } from "@/components/sections/logo-dome";
import { BRANDS } from "@/lib/work";

export const metadata: Metadata = { title: "Selected Work" };

const CONTACT = "amelio123ali@gmail.com";

const CATS = [
  { n: "01", t: "Brand Identity", d: "Visual systems, identities & campaigns", href: "/work/branding" },
  { n: "02", t: "Logo Design", d: "Marks, symbols & identity systems", href: "/work/logos" },
  { n: "03", t: "Posters", d: "Experimental graphic compositions", href: "/work/posters" },
  { n: "04", t: "Illustration", d: "Characters, concepts & visual art", href: "/work/illustration" },
  { n: "05", t: "UI / UX", d: "Digital experiences & interfaces", href: "/work/typography" },
  { n: "06", t: "Experimental", d: "Play, research & creative experiments", href: "/work/colours" },
];

const BRAND_COPY: Record<string, string> = {
  nexora: "A futuristic visual identity built around technology, structure and visual experimentation.",
  verdant: "A plant-tech identity exploring nature, technology and a more sustainable visual language.",
  auria: "An immersive audio identity exploring sound, atmosphere and sensory experience.",
  terralis: "An earthy lifestyle identity combining tactile materials, natural forms and contemporary design.",
  vayora: "An experimental brand identity built around a distinctive visual language and unconventional form.",
};

type Card = { num: string; name: string; cat: string; year: string; copy: string; img: string; href: string; color?: string };

const CARDS: Card[] = [
  ...["nexora", "verdant", "auria", "terralis", "vayora"].map((slug, i): Card => {
    const b = BRANDS.find((x) => x.slug === slug)!;
    return { num: String(i + 1).padStart(2, "0"), name: b.name, cat: "Brand Identity", year: "2026", copy: BRAND_COPY[slug], img: b.board, href: "/work/branding", color: b.color };
  }),
  { num: "06", name: "Poster Collection", cat: "Poster Design", year: "2026", copy: "A running series of experimental compositions — music, architecture, glitch, memory.", img: "/posters/electronic-music-poster-afterlight.jpg", href: "/work/posters" },
  { num: "07", name: "Illustration Collection", cat: "Illustration", year: "2026", copy: "Character work in black ink with restrained colour — food people, fashion figures, the odd bird man.", img: "/illustration/apple-princess-in-fashion-pose.png", href: "/work/illustration" },
  { num: "08", name: "Logo Collection", cat: "Logo Design", year: "2026", copy: "Twenty-one marks — emblem, monogram, negative space, heritage.", img: "/logos/altivia.jpg", href: "/work/logos" },
];

const POSTERS = [
  { t: "Afterlight", f: "/posters/electronic-music-poster-afterlight.jpg", span: "row-span-2" },
  { t: "404: Reality Not Found", f: "/posters/collage-showing-404-error-doorway.jpg", span: "" },
  { t: "Synesthesia", f: "/posters/synesthesia-visual-music-poster.jpg", span: "" },
  { t: "Fragments", f: "/posters/marble-sculpture-fragmenting-int.jpg", span: "row-span-2" },
  { t: "Parallel City", f: "/posters/parallel-city-architectural-post.jpg", span: "" },
  { t: "After The Flood", f: "/posters/statue-standing-in-flood-water.jpg", span: "" },
  { t: "Orbital Memory", f: "/posters/glass-archival-drawer-with-dream.jpg", span: "" },
  { t: "Dream State", f: "/posters/surreal-desert-landscape-art-poster.jpg", span: "" },
  { t: "The Unseen", f: "/posters/minimalist-art-poster-the-unseen.jpg", span: "" },
];

const ILLOS = [
  { t: "The Apple Princess", f: "/illustration/apple-princess-in-fashion-pose.png" },
  { t: "The Baker", f: "/illustration/baker-holding-large-rolling-pin.png" },
  { t: "The Bird Man", f: "/illustration/bird-man-leaning-forward.png" },
  { t: "The Butcher", f: "/illustration/muscular-butcher-holding-cleaver.png" },
  { t: "Citrus Woman", f: "/illustration/citrus-woman-fashion-illustration.png" },
];

const Hatch = () => (
  <span className="block h-4 w-24" style={{ background: "repeating-linear-gradient(-45deg,#800080 0 6px,transparent 6px 12px)" }} />
);
const Globe = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#800080" strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M4 7h16M4 17h16" />
  </svg>
);

export default function WorkPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-[#050505] text-bone">
      <SiteNav active="work" label="Selected Work" />

      {/* ============ HERO ============ */}
      <section className="relative border-b border-purple/40 px-[4vw] pb-[6vh] pt-[13vh]">
        <p className="reveal font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ]</p>

        <div className="reveal mt-2 grid gap-x-[3vw] gap-y-[4vh] lg:grid-cols-[1.35fr_0.55fr_0.9fr] lg:items-start">
          {/* huge title */}
          <div>
            <h1 className="font-condensed uppercase leading-[0.7] tracking-[0.005em]">
              <span className="block text-[clamp(3.4rem,18vw,14rem)] text-bone">Selected</span>
              <span className="block text-[clamp(3.4rem,18vw,14rem)] text-yellow">
                Work <span className="align-top text-[0.3em] text-purple">↘</span>
              </span>
            </h1>
            <div className="mt-6 flex items-start gap-8">
              <p className="font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
                Ideas<br />explored<br />visually<br />realized
              </p>
              <p className="flex items-center gap-3 self-end font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/45">
                More than just design <span className="h-px w-16 bg-purple" />
              </p>
            </div>
          </div>

          {/* compressed info column */}
          <div className="flex flex-col gap-6 self-stretch border-l border-purple/25 pl-4">
            <p className="font-condensed text-[clamp(1.6rem,3vw,2.6rem)] uppercase leading-[0.86] text-bone">
              Design<br />beyond<br />the<br /><span className="text-purple">obvious.</span>
            </p>
            <Globe />
            <p className="font-grotesk text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-bone/55">
              A collection of ideas, experiments, visual stories and digital experiences.
            </p>
            <Hatch />
          </div>

          {/* purple image panel */}
          <figure className="relative">
            <div className="duo aspect-[3/4] w-full border border-purple/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/posters/giant-eye-floating-above-city.jpg" alt="Editorial visual — Ameen Ali" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">
              <span>Scroll for more</span>
              <span className="text-yellow">↓</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="grid border-b border-purple/40 sm:grid-cols-2 lg:grid-cols-6">
        {CATS.map((c, i) => (
          <Link
            key={c.n}
            href={c.href}
            className={`group flex flex-col justify-between gap-6 px-5 py-8 transition-colors hover:bg-purple/10 ${
              i ? "border-t border-purple/25 lg:border-l lg:border-t-0" : ""
            }`}
          >
            <div>
              <span className="block font-condensed text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-purple transition-colors group-hover:text-yellow">
                {c.n}
              </span>
              <h3 className="mt-3 font-condensed text-xl uppercase leading-none text-bone transition-transform group-hover:translate-x-1">
                {c.t}
              </h3>
              <p className="mt-2 font-grotesk text-[11px] font-medium leading-snug text-bone/50">{c.d}</p>
            </div>
            <span className="inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow">
              <span className="transition-transform group-hover:translate-x-1">↗</span> Explore
            </span>
          </Link>
        ))}
      </section>

      {/* ============ [03] FEATURED PROJECTS ============ */}
      <section className="border-b border-purple/40 px-[4vw] pb-[6vh] pt-[9vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ]</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h2 className="font-condensed text-[clamp(2.4rem,10vw,7rem)] uppercase leading-[0.78] text-yellow">Featured Projects</h2>
          <p className="flex items-center gap-3 max-w-[26ch] font-grotesk text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-bone/50">
            <span className="h-px w-10 bg-purple" /> A few highlights from my creative journey.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {CARDS.map((p) => (
            <Link key={p.num} href={p.href} className="group flex flex-col border border-bone/15 transition-colors hover:border-purple">
              <div className="relative overflow-hidden">
                <span className="absolute left-0 top-0 z-10 bg-bone px-2 py-1 font-grotesk text-[10px] font-bold text-black">{p.num}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="pointer-events-none absolute inset-0 bg-purple/0 transition-colors duration-500 group-hover:bg-purple/15" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3">
                <h3 className="font-condensed text-lg uppercase leading-none transition-transform group-hover:translate-x-1" style={p.color ? { color: p.color } : undefined}>
                  {p.name}
                </h3>
                <div className="flex justify-between font-grotesk text-[9px] font-semibold uppercase tracking-[0.16em] text-bone/45">
                  <span>{p.cat}</span><span>{p.year}</span>
                </div>
                <span className="h-px w-full bg-bone/12" />
                <p className="font-grotesk text-[11px] font-medium leading-snug text-bone/65">{p.copy}</p>
                <span className="mt-auto flex items-center justify-between pt-2 font-grotesk text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow">
                  [ View Project ] <span className="transition-transform group-hover:translate-x-1">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ [ POSTERS ] ============ */}
      <section className="border-b border-purple/40 px-[4vw] py-[9vh]">
        <div className="flex items-baseline justify-between">
          <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none text-bone">[ Posters ]</h2>
          <Link href="/work/posters" className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">All 25 ↗</Link>
        </div>
        <div className="mt-8 grid auto-rows-[16vw] grid-cols-3 gap-2 md:auto-rows-[9vw] md:grid-cols-6">
          {POSTERS.map((p, i) => (
            <Link key={p.t} href="/work/posters" className={`group relative block overflow-hidden border border-bone/12 transition-colors hover:border-purple ${p.span}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.f} alt={p.t} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              <span className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 font-grotesk text-[8px] font-semibold uppercase tracking-[0.12em] text-bone opacity-0 transition-opacity group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")} · {p.t}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ [ ILLUSTRATION ] ============ */}
      <section className="border-b border-purple/40 px-[4vw] py-[9vh]">
        <div className="flex items-baseline justify-between">
          <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none text-bone">[ Illustration ]</h2>
          <Link href="/work/illustration" className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">All 25 ↗</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-5">
          {ILLOS.map((il, i) => (
            <Link key={il.t} href="/work/illustration" className={`group relative flex items-end justify-center border border-bone/12 bg-[#0c0b10] transition-colors hover:border-purple ${i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={il.f} alt={il.t} className={`w-auto object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03] ${i === 0 ? "max-h-[52vh]" : "max-h-[26vh]"}`} />
              <span className="absolute bottom-2 left-2 font-condensed text-sm uppercase leading-none text-bone">{il.t}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ PURPLE ARTWORK BREAK ============ */}
      <section className="relative border-b border-purple/40">
        <div className="duo relative h-[78vh] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/posters/synesthesia-visual-music-poster.jpg" alt="Purple editorial artwork" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-[5vw] font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-bone">
          <span>Same human — different ideas</span>
          <div className="flex items-end justify-between">
            <span className="text-purple">Beauty exists in distortion</span>
            <span className="text-yellow">A more honest version of me</span>
          </div>
        </div>
      </section>

      {/* ============ [ LOGO GALLERY ] ============ */}
      <section className="border-b border-purple/40 px-[4vw] pt-[9vh]">
        <div className="flex items-baseline justify-between">
          <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none text-bone">[ Logo Gallery ]</h2>
          <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-purple">Marks · Symbols · Identity</span>
        </div>
      </section>
      <div className="border-b border-purple/40">
        <LogoDome />
        <div className="px-[4vw] pb-[8vh]">
          <Link href="/work/logos" className="inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">
            [ Open the gallery ] <span>↗</span>
          </Link>
        </div>
      </div>

      {/* ============ CAT + STATEMENT BAND ============ */}
      <section className="grid border-b border-purple/40 lg:grid-cols-[0.85fr_0.95fr_0.9fr_1.4fr_0.7fr]">
        <div className="relative min-h-[22vh] border-purple/25 bg-[#0a0a0d] lg:border-r">
          <span className="absolute left-2 top-2 z-10 font-grotesk text-[9px] text-purple">/\|/\</span>
          <Cat bare />
        </div>
        <div className="flex flex-col justify-center border-t border-purple/25 p-5 lg:border-l lg:border-t-0">
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.28em] text-purple">Curious cats</p>
          <p className="font-condensed text-2xl uppercase leading-none text-bone">Explore better.</p>
          <span className="mt-3 text-yellow">→</span>
        </div>
        <div className="flex flex-col justify-center border-t border-purple/25 p-5 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/55 lg:border-l lg:border-t-0">
          Good design,<br />better tomorrows.
          <span className="mt-3 font-condensed text-xl text-yellow">+</span>
        </div>
        <div className="flex items-center border-t border-purple/25 p-5 lg:border-l lg:border-t-0">
          <p className="font-condensed text-[clamp(1.6rem,4vw,3rem)] uppercase leading-[0.86] text-bone">
            &ldquo;Same human<br />different ideas.&rdquo;
          </p>
        </div>
        <div className="flex flex-col justify-center border-t border-purple/25 p-5 font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-bone/50 lg:border-l lg:border-t-0">
          [<br />Create<br />Explore<br />Iterate<br />Repeat<br />]
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="flex flex-wrap items-center justify-between gap-4 px-[4vw] py-6 font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">
        <span className="flex items-center gap-3">
          <span className="font-condensed text-base text-yellow">AM</span>
          © 2026 Ameen Ali · All rights reserved.
        </span>
        <span className="text-bone/35">Scroll to continue ↓</span>
        <a href={`mailto:${CONTACT}`} className="text-yellow hover:underline">Work together ↗</a>
      </footer>
    </main>
  );
}

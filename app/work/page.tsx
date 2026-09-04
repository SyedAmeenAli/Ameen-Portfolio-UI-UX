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
  { n: "02", t: "Logo Design", d: "Marks, symbols & identity studies", href: "/work/logos" },
  { n: "03", t: "Posters", d: "Experimental graphic compositions", href: "/work/posters" },
  { n: "04", t: "Illustration", d: "Characters, concepts & visual art", href: "/work/illustration" },
  { n: "05", t: "UI / UX", d: "Digital experiences & interfaces", href: "/work/typography" },
  { n: "06", t: "Experimental", d: "Play, research & creative coding", href: "/work/colours" },
];

const BRAND_COPY: Record<string, string> = {
  nexora: "A futuristic identity system built around technology, structure and visual experimentation.",
  verdant: "A plant-tech identity exploring nature, technology and a more sustainable visual language.",
  auria: "An immersive audio identity exploring sound, atmosphere and sensory experience.",
  terralis: "An earthy lifestyle identity combining tactile materials, natural forms and contemporary design.",
  vayora: "An experimental brand identity developed around a distinctive visual language and unconventional form.",
};
const BRAND_ORDER = ["nexora", "verdant", "auria", "terralis", "vayora"];
const PROJECTS = BRAND_ORDER.map((slug, i) => {
  const b = BRANDS.find((x) => x.slug === slug)!;
  return { ...b, num: String(i + 1).padStart(2, "0"), copy: BRAND_COPY[slug] };
});

const POSTERS = [
  { t: "Afterlight", d: "Experimental electronic music poster", f: "/posters/electronic-music-poster-afterlight.jpg", big: true },
  { t: "404: Reality Not Found", d: "Digital culture / glitch concept", f: "/posters/collage-showing-404-error-doorway.jpg" },
  { t: "Synesthesia", d: "Visual music / waveform concept", f: "/posters/synesthesia-visual-music-poster.jpg" },
  { t: "Fragments", d: "Contemporary art poster", f: "/posters/marble-sculpture-fragmenting-int.jpg" },
  { t: "Parallel City", d: "Experimental architecture poster", f: "/posters/parallel-city-architectural-post.jpg" },
  { t: "The Unseen", d: "Luxury conceptual poster", f: "/posters/minimalist-art-poster-the-unseen.jpg" },
];

const ILLOS = [
  { t: "The Apple Princess", d: "Fashion + form, explored through food", f: "/illustration/apple-princess-in-fashion-pose.png" },
  { t: "The Baker", d: "Character study, black ink", f: "/illustration/baker-holding-large-rolling-pin.png" },
  { t: "The Bird Man", d: "Concept figure, restrained colour", f: "/illustration/bird-man-leaning-forward.png" },
];

function Rule() {
  return <div className="h-px w-full bg-bone/12" />;
}

export default function WorkPage() {
  return (
    <main className="home relative min-h-screen bg-black text-bone">
      <SiteNav active="work" />

      {/* ============ [02] SELECTED WORK ============ */}
      <section className="grid-lines relative border-b border-purple/40 px-[4vw] pb-[7vh] pt-[13vh]">
        <p className="reveal font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ]</p>
        <div className="reveal mt-3 grid gap-x-[3vw] gap-y-[5vh] lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <div>
            <h1 className="font-condensed uppercase leading-[0.74] tracking-[-0.01em]">
              <span className="block text-[clamp(3.4rem,17vw,13rem)] text-bone">Selected</span>
              <span className="block text-[clamp(3.4rem,17vw,13rem)] text-yellow">
                Work <span className="align-middle text-[0.32em] text-purple">↘</span>
              </span>
            </h1>
            <p className="mt-6 max-w-[30ch] font-grotesk text-[12px] font-medium uppercase leading-relaxed tracking-[0.14em] text-bone/55">
              A collection of ideas, experiments and visual stories. More than just design.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-24 bg-purple" />
              <span className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.28em] text-purple">Archive / 2026</span>
            </div>
          </div>

          <figure className="relative">
            <div className="duo aspect-[3/4] w-full border border-purple/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/posters/giant-eye-floating-above-city.jpg" alt="Editorial visual — Ameen Ali" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">
              <span>Beauty exists in distortion</span>
              <span className="text-yellow">Scroll ↓</span>
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
              <span className="block font-condensed text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-purple transition-transform group-hover:translate-x-1">
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
      <section className="px-[4vw] pb-[4vh] pt-[12vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ]</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-condensed text-[clamp(2.6rem,11vw,8rem)] uppercase leading-[0.8] text-yellow">
            Featured<br />Projects
          </h2>
          <p className="max-w-[26ch] font-grotesk text-[11px] font-medium uppercase leading-relaxed tracking-[0.14em] text-bone/50">
            A few highlights from my creative journey.
            <span className="mt-2 block h-px w-16 bg-purple" />
          </p>
        </div>
      </section>

      {/* brand identity projects — editorial rhythm */}
      <section className="px-[4vw] pb-[8vh]">
        {PROJECTS.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={p.slug} className="group border-t border-bone/12 py-[5vh]">
              <div className={`grid gap-x-[3vw] gap-y-[3vh] lg:grid-cols-[1fr_1fr] lg:items-center ${flip ? "" : ""}`}>
                <Link href="/work/branding" className={`relative block overflow-hidden border border-bone/15 transition-colors group-hover:border-purple ${flip ? "lg:order-2" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.board}
                    alt={`${p.name} — brand identity`}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${i === 0 ? "aspect-[16/10]" : "aspect-[16/11]"}`}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-purple/0 transition-colors duration-500 group-hover:bg-purple/15" />
                </Link>

                <div className={flip ? "lg:order-1 lg:pr-[4vw]" : "lg:pl-[4vw]"}>
                  <div className="flex items-baseline gap-4 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em]">
                    <span className="text-purple">{p.num}</span>
                    <span className="text-bone/45">Brand Identity</span>
                    <span className="text-bone/45">/ 2026</span>
                  </div>
                  <h3 className="mt-2 font-condensed text-[clamp(2.2rem,7vw,4.5rem)] uppercase leading-none transition-transform group-hover:translate-x-1" style={{ color: p.color }}>
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-[42ch] font-grotesk text-sm font-medium leading-relaxed text-bone/70">{p.copy}</p>
                  <Link href="/work/branding" className="mt-5 inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">
                    [ View Project ] <span className="transition-transform group-hover:translate-x-1">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ============ POSTER SHOWCASE ============ */}
      <section className="border-t border-purple/40 px-[4vw] py-[12vh]">
        <div className="flex items-end justify-between">
          <h2 className="font-condensed text-[clamp(2.2rem,9vw,6rem)] uppercase leading-none text-bone">Poster Archive</h2>
          <Link href="/work/posters" className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">All 25 ↗</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {POSTERS.map((p, i) => (
            <Link
              key={p.t}
              href="/work/posters"
              className={`group relative block overflow-hidden border border-bone/15 transition-colors hover:border-purple ${
                p.big ? "col-span-2 md:row-span-2" : ""
              } ${i === 2 ? "md:mt-10" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.f} alt={p.t} className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${p.big ? "aspect-[3/4] md:aspect-square" : "aspect-[3/4]"}`} />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/90 to-transparent p-3">
                <span>
                  <span className="block font-condensed text-sm uppercase leading-none text-bone">{p.t}</span>
                  <span className="mt-1 block font-grotesk text-[9px] font-medium uppercase tracking-[0.14em] text-bone/50">{p.d}</span>
                </span>
                <span className="font-grotesk text-[10px] font-semibold text-purple">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ ILLUSTRATION ============ */}
      <section className="border-t border-purple/40 px-[4vw] py-[12vh]">
        <div className="flex items-end justify-between">
          <h2 className="font-condensed text-[clamp(2.2rem,9vw,6rem)] uppercase leading-none text-bone">Illustration</h2>
          <Link href="/work/illustration" className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">All 25 ↗</Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Link href="/work/illustration" className="group relative flex items-end overflow-hidden border border-bone/15 bg-[#0c0b10] transition-colors hover:border-purple">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ILLOS[0].f} alt={ILLOS[0].t} className="mx-auto max-h-[70vh] w-auto object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="block font-condensed text-lg uppercase leading-none text-bone">{ILLOS[0].t}</span>
              <span className="mt-1 block font-grotesk text-[9px] font-medium uppercase tracking-[0.14em] text-bone/50">{ILLOS[0].d}</span>
            </div>
          </Link>
          <div className="grid gap-4">
            {ILLOS.slice(1).map((il) => (
              <Link key={il.t} href="/work/illustration" className="group relative flex items-center overflow-hidden border border-bone/15 bg-[#0c0b10] transition-colors hover:border-purple">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={il.f} alt={il.t} className="mx-auto max-h-[33vh] w-auto object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute bottom-0 left-0 p-3">
                  <span className="block font-condensed text-base uppercase leading-none text-bone">{il.t}</span>
                  <span className="mt-1 block font-grotesk text-[9px] font-medium uppercase tracking-[0.14em] text-bone/50">{il.d}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PURPLE ARTWORK BREAK ============ */}
      <section className="relative border-t border-purple/40">
        <div className="duo grid-lines relative h-[80vh] w-full">
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

      {/* ============ LOGO GALLERY PREVIEW ============ */}
      <section className="border-t border-purple/40 px-[4vw] pt-[12vh]">
        <div className="flex items-baseline justify-between">
          <h2 className="font-condensed text-[clamp(2.2rem,9vw,6rem)] uppercase leading-none text-bone">Logo Design</h2>
          <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-purple">Marks · Symbols · Identity</span>
        </div>
        <p className="mt-4 max-w-[38ch] font-grotesk text-sm font-medium text-bone/60">
          Twenty-one marks on a sphere. Drag to turn it — each mark animates in place.
        </p>
      </section>
      <LogoDome />
      <div className="px-[4vw] pb-[10vh]">
        <Link href="/work/logos" className="inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">
          [ Open the gallery ] <span>↗</span>
        </Link>
      </div>

      {/* ============ CAT ============ */}
      <div className="border-t border-purple/40">
        <div className="px-[4vw] pt-[5vh]">
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">Curious cats</p>
          <p className="font-condensed text-[clamp(1.4rem,4vw,2.4rem)] uppercase leading-none text-bone">Explore better.</p>
        </div>
        <Cat compact />
      </div>

      {/* ============ CTA ============ */}
      <section className="grid-lines border-t border-purple/40 px-[4vw] py-[16vh]">
        <p className="font-condensed text-[clamp(2.8rem,15vw,12rem)] uppercase leading-[0.8] text-bone">
          Let&apos;s make<br />something <span className="text-yellow">real.</span>
        </p>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <p className="flex items-center gap-3 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/60">
            <span className="h-3 w-3 shrink-0 bg-purple" />
            Have an idea, project or strange concept?
          </p>
          <a
            href={`mailto:${CONTACT}`}
            className="inline-flex items-center gap-3 border border-bone/30 px-6 py-3 font-grotesk text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-colors hover:bg-yellow hover:text-black"
          >
            Work together <span className="text-yellow">↗</span>
          </a>
        </div>
        <Rule />
        <p className="mt-6 font-grotesk text-[9px] font-semibold uppercase tracking-[0.3em] text-bone/40">
          Ameen Ali · UI/UX &amp; Visual Designer · Portfolio 2026
        </p>
      </section>
    </main>
  );
}

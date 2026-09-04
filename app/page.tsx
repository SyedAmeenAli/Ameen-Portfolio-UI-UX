import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { CategoryStrip } from "@/components/sections/category-strip";
import { FeaturedCards } from "@/components/sections/featured-cards";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main className="home grid-lines relative min-h-screen bg-[#050505] text-bone">
      <SiteNav label="Portfolio" />

      {/* 01 — poster hero: name, PORTFOLI[O], who am I */}
      <Hero />

      {/* 01b — editorial band: half-girl visual + disciplines */}
      <section className="grid border-b border-purple/40 lg:grid-cols-[1.1fr_1.9fr]">
        <div className="relative min-h-[42vh] overflow-hidden border-purple/30 lg:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/posters/girl-half.webp" alt="A more honest version — poster fragment by Ameen Ali" className="h-full w-full object-cover object-left" />
          <span className="absolute bottom-3 left-3 z-10 bg-void/70 px-2 py-1 font-grotesk text-[9px] font-semibold uppercase tracking-[0.22em] text-bone">Visual archive — 001 · A more honest version</span>
        </div>
        <div className="flex flex-col justify-center px-[4vw] py-[8vh]">
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">What I make</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
            {["Digital Designer", "Brand Identity", "Logos", "Posters", "Illustrations", "YouTube Thumbnails", "2D / 3D Animations", "Typography", "Colours"].map((d) => (
              <li key={d} className="border-t border-purple/25 pt-1.5 font-condensed text-[clamp(0.95rem,2vw,1.4rem)] uppercase leading-tight text-bone">{d}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-[44ch] font-grotesk text-sm leading-relaxed text-bone/60">
            Systems, identities, graphics, motion and visual experiments — one point of view across every surface.
          </p>
        </div>
      </section>

      {/* 02 — selected work / categories */}
      <section id="work" className="flex flex-wrap items-end justify-between gap-4 px-[4vw] pb-[4vh] pt-[9vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ]</p>
        <Link href="/work" className="group flex items-baseline gap-3">
          <h2 className="font-condensed text-[clamp(2.4rem,10vw,7rem)] uppercase leading-[0.78] text-bone group-hover:text-yellow">
            Selected Work
          </h2>
          <span className="font-condensed text-[clamp(1.4rem,5vw,3rem)] text-yellow transition-transform group-hover:translate-x-1">↗</span>
        </Link>
      </section>
      <CategoryStrip />

      {/* 03 — featured */}
      <section id="experiments" className="border-b border-purple/40 px-[4vw] pb-[6vh] pt-[9vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ]</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h2 className="font-condensed text-[clamp(2.4rem,10vw,7rem)] uppercase leading-[0.78] text-yellow">Featured Projects</h2>
          <Link href="/work" className="flex items-center gap-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.14em] text-bone/50 hover:text-yellow">
            <span className="h-px w-10 bg-purple" /> View the full archive ↗
          </Link>
        </div>
        <div className="mt-10">
          <FeaturedCards limit={4} />
        </div>
      </section>

      <WorkBand quote={"Same human · different ideas."} />
      <SiteFooter mid="Scroll for more ↓" />
    </main>
  );
}

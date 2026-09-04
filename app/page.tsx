import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { NameCubes } from "@/components/sections/name-cubes";
import { MindMap } from "@/components/sections/mind-map";
import { Cat } from "@/components/sections/cat";
import { LineStrip } from "@/components/ui/line-strip";
import { SITE } from "@/lib/site";

const CONTACT = "amelio123ali@gmail.com";

export default function Home() {
  return (
    <main className="home relative bg-black text-bone">
      <SiteNav />

      {/* 01–03 — poster hero: name, PORTFOLI[O], who am I */}
      <Hero />

      {/* signature — the cat walks the rule into the archive */}
      <Cat compact />

      <LineStrip dark text="UI/UX · VISUAL SYSTEMS · BRAND IDENTITY · ART DIRECTION" speed={36} />

      {/* 04 — selected work */}
      <SelectedWork />

      {/* 05 — what I make */}
      <MindMap />

      {/* personality beat */}
      <NameCubes />

      {/* 07 — final CTA, as a poster */}
      <section id="contact" className="grid-lines border-t border-bone/15 px-[4vw] py-[18vh]">
        <p className="font-condensed text-[clamp(3rem,17vw,14rem)] uppercase leading-[0.8] text-bone">
          Let&apos;s make<br />something<br /><span className="text-yellow">memorable.</span>
        </p>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
          <p className="flex items-center gap-4 font-condensed text-[clamp(1.1rem,3vw,2rem)] uppercase leading-tight text-bone/70">
            <span className="h-4 w-4 shrink-0 bg-purple" />
            Am I the designer you were looking for?
          </p>
          <a
            href={`mailto:${CONTACT}`}
            className="inline-flex items-center gap-3 border border-bone/30 px-6 py-3 font-grotesk text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-colors hover:bg-yellow hover:text-black"
          >
            Contact me <span className="text-2xl leading-none text-yellow group-hover:text-black">↗</span>
          </a>
        </div>
        <p className="mt-16 font-grotesk text-[9px] font-semibold uppercase tracking-[0.3em] text-bone/40">
          {SITE.name} · Portfolio / 2026 · Hyderabad, India
        </p>
      </section>
    </main>
  );
}

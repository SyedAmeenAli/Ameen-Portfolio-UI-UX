import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { NameCubes } from "@/components/sections/name-cubes";
import { MindMap } from "@/components/sections/mind-map";
import { Cat } from "@/components/sections/cat";
import { LineStrip } from "@/components/ui/line-strip";
import PixelReveal from "@/components/ui/pixel-reveal";
import { SITE } from "@/lib/site";

const TOOLS = "Figma · Photoshop · Illustrator · After Effects · Blender · Spline · Framer · Canva";
const CONTACT = "amelio123ali@gmail.com";

export default function Home() {
  return (
    <main className="relative">
      <SiteNav />

      {/* 02 — HERO */}
      <Hero />

      {/* marquee — structural separator */}
      <LineStrip text="DIGITAL DESIGN · UI/UX · VISUAL SYSTEMS · BRAND IDENTITY · ART DIRECTION · EXPERIMENTAL DESIGN" speed={34} />

      {/* 03 — PIXEL SELF / ABOUT */}
      <section id="about" className="grid-lines grid gap-[7vh] border-b border-ink/15 px-[4vw] py-[15vh] md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div className="flex justify-center">
          <PixelReveal />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">03 / The Pixel Self</p>
          <p className="mt-5 max-w-[30ch] font-condensed text-[clamp(1.6rem,4vw,3rem)] uppercase leading-[1.02] text-ink">
            This is me. The face stays a mark, <span className="text-purple">not a photo.</span>
          </p>
          <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-ink/65">{SITE.bio[1]}</p>

          <dl className="mt-10 space-y-3 border-t border-ink/15 pt-4 font-mono text-[10px] uppercase tracking-[0.16em]">
            <div className="flex gap-4"><dt className="w-24 shrink-0 text-ink/45">Study</dt><dd className="text-ink/80">{SITE.education.title}, {SITE.education.school} — {SITE.education.when}</dd></div>
            {SITE.experience.map((e) => (
              <div key={e.when} className="flex gap-4"><dt className="w-24 shrink-0 text-ink/45">{e.when}</dt><dd className="text-ink/80">{e.what} — {e.where}</dd></div>
            ))}
            <div className="flex gap-4"><dt className="w-24 shrink-0 text-ink/45">Tools</dt><dd className="text-ink/80">{TOOLS}</dd></div>
          </dl>
        </div>
      </section>

      {/* 06 — INTERACTIVE MOMENT: the cat walks you into the archive */}
      <Cat />

      {/* 04 — SELECTED WORK */}
      <SelectedWork />

      {/* 05 — WHAT I MAKE */}
      <MindMap />

      {/* personality beat */}
      <NameCubes />

      {/* 07 — FINAL CTA */}
      <section id="contact" className="on-dark grid-lines-dark px-[4vw] py-[20vh]">
        <p className="font-condensed text-[clamp(3rem,18vw,15rem)] uppercase leading-[0.82] text-bone">
          Let&apos;s make<br />something<br /><span className="text-yellow">memorable.</span>
        </p>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[24ch] font-condensed text-[clamp(1.2rem,3vw,2.2rem)] uppercase leading-tight text-bone/70">
            Am I the designer you were looking for?
          </p>
          <a
            href={`mailto:${CONTACT}`}
            className="inline-flex items-center gap-3 border border-bone/30 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone transition-colors hover:bg-yellow hover:text-ink"
          >
            Contact me <span className="text-2xl leading-none">↗</span>
          </a>
        </div>
        <p className="mt-16 font-mono text-[9px] uppercase tracking-[0.3em] text-bone/40">
          {SITE.name} · Portfolio / 2026 · {SITE.coords}
        </p>
      </section>
    </main>
  );
}

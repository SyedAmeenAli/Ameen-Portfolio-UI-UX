import Link from "next/link";
import PixelReveal from "@/components/ui/pixel-reveal";
import { NameCubes } from "@/components/sections/name-cubes";
import { MindMap } from "@/components/sections/mind-map";
import { Cat } from "@/components/sections/cat";
import { LineStrip } from "@/components/ui/line-strip";
import { SITE, SKILLS, CATEGORIES } from "@/lib/site";

const TOOLS = ["photoshop", "illustrator", "aftereffects", "framer", "figma", "blender", "canva", "spline"];

export default function Home() {
  return (
    <main className="relative">
      {/* ============================ HERO ============================ */}
      <section className="grid-lines relative min-h-screen border-b border-ink/15 px-[5vw] pb-[10vh] pt-10">
        <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
          <span>{SITE.kicker}</span>
          <span className="font-condensed text-[clamp(1rem,3vw,2.2rem)] tracking-normal text-ink">{SITE.year}</span>
        </div>

        {/* loading bar */}
        <div className="mt-[6vh] flex items-center gap-3">
          <span className="h-3 w-40 border border-ink/50">
            <span className="block h-full bg-ink" style={{ animation: "load-bar 2.2s ease-out both" }} />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">loading</span>
        </div>

        {/* Portfolio wordmark — serif, with pixel face + ghost */}
        <div className="mt-[3vh] flex flex-wrap items-end gap-x-4">
          <h1 className="font-serif text-[clamp(3.5rem,17vw,15rem)] font-light leading-[0.8] tracking-[-0.02em] text-ink">
            Port<span className="italic">folio</span>
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/me/head.webp" alt="Ameen, pixelated" className="mb-3 h-[clamp(3rem,9vw,7rem)] w-[clamp(3rem,9vw,7rem)] object-contain" style={{ imageRendering: "pixelated" }} />
          <span className="mb-4 text-[clamp(2rem,6vw,4rem)] grayscale contrast-200">👻</span>
        </div>

        <div className="mt-4 flex items-center gap-3 font-mono text-sm text-ink/60">
          <span>Edc design 2026</span>
          <span>←</span>
        </div>

        <p className="mt-[5vh] max-w-[54ch] font-serif text-[clamp(1rem,1.7vw,1.35rem)] leading-relaxed text-ink/75">
          {SITE.name} — {SITE.role} &amp; illustrator, based in India. {SITE.polaroid.info} {SITE.thesis}
        </p>

        <div className="mt-8 inline-block border border-ink px-6 py-2 font-mono text-[11px] uppercase tracking-[0.25em]">
          {SITE.name} · {SITE.kicker}
        </div>

        <p className="mt-[6vh] font-mono text-[10px] uppercase tracking-[0.35em] text-ink/40">scroll ↓</p>
      </section>

      {/* ============================ HELLO ============================ */}
      <section className="grid-lines grid gap-[8vh] border-b border-ink/15 px-[5vw] py-[12vh] md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex items-center justify-center">
          <PixelReveal />
        </div>
        <div>
          <h2 className="font-condensed text-[clamp(3rem,10vw,6.5rem)] uppercase">Hello</h2>
          <div className="mt-6 max-w-[46ch] space-y-4 text-[0.95rem] leading-relaxed text-ink/70">
            {SITE.bio.map((p) => (
              <p key={p} className={p.startsWith("Hi,") ? "font-semibold text-ink" : ""}>{p}</p>
            ))}
          </div>

          <h3 className="mt-12 font-condensed text-2xl uppercase">Education</h3>
          <p className="mt-2 text-sm font-semibold text-ink">{SITE.education.title}</p>
          <p className="text-xs text-ink/50">{SITE.education.school} · {SITE.education.when}</p>

          <h3 className="mt-10 font-condensed text-2xl uppercase">Experience</h3>
          <ul className="mt-3 space-y-3">
            {SITE.experience.map((e) => (
              <li key={e.when}>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red">{e.when}</p>
                <p className="text-sm font-semibold text-ink">{e.what}</p>
                <p className="text-xs text-ink/50">{e.where}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================ SKILLS ============================ */}
      <section className="grid-lines border-b border-ink/15 px-[5vw] pb-[14vh] pt-[6vh]">
        <h2 className="font-condensed text-[clamp(2.4rem,8vw,5rem)] uppercase">Skills</h2>
        <div className="mt-10 grid grid-cols-4 gap-4 sm:max-w-2xl">
          {TOOLS.map((t) => {
            const s = SKILLS.find((x) => x.key === t);
            return (
              <div key={t} className="group relative flex aspect-square items-center justify-center border border-ink/15 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/tools/${t}.png`} alt={s?.name ?? t} className="h-1/2 w-1/2 object-contain" />
                <span className="pointer-events-none absolute -bottom-5 left-0 font-mono text-[8px] uppercase tracking-wider text-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
                  {s?.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================ CAT ============================ */}
      <Cat />

      {/* ============================ MANIFESTO ============================ */}
      <LineStrip text="DESIGN LOUDER" />
      <section className="mx-auto max-w-[70ch] px-[5vw] py-[16vh]">
        <p className="font-condensed text-[clamp(2rem,7vw,5rem)] uppercase leading-[0.95]">{SITE.manifesto[0]}</p>
        <div className="mt-8 max-w-[46ch] space-y-3 font-serif text-[clamp(1rem,1.6vw,1.35rem)] leading-relaxed text-ink/70">
          <p>{SITE.manifesto[1]}</p>
          <p>{SITE.manifesto[2]} {SITE.manifesto[3]}</p>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
          <li className="text-red">not this —</li>
          {SITE.against.map((a) => (
            <li key={a} className="line-through decoration-red decoration-2">{a}</li>
          ))}
        </ul>
      </section>

      {/* ============================ AMEEN cubes ============================ */}
      <NameCubes />

      {/* ============================ MIND MAP ============================ */}
      <MindMap />

      {/* ============================ WORK INDEX ============================ */}
      <section className="border-t border-ink/15 px-[5vw] py-[16vh]">
        <h2 className="font-condensed text-[clamp(2.4rem,8vw,6rem)] uppercase">The Work</h2>
        <ul className="mt-12 divide-y divide-ink/12 border-y border-ink/15">
          {CATEGORIES.map((c) => (
            <li key={c.key}>
              <Link href={c.href} className="group flex items-center justify-between py-7 transition-colors hover:text-red">
                <span className="font-condensed text-[clamp(1.5rem,5vw,3.2rem)] uppercase">{c.label}</span>
                <span className="font-mono text-xs tabular-nums text-ink/40 group-hover:text-red">{c.count} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ============================ THESIS ============================ */}
      <section className="on-dark px-[5vw] pb-[22vh] pt-[16vh]">
        <p className="max-w-[18ch] font-condensed text-[clamp(2rem,9vw,8.5rem)] uppercase leading-[0.86] text-bone">
          {SITE.thesis}
        </p>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-yellow">{SITE.name} · {SITE.year}</p>
      </section>
    </main>
  );
}

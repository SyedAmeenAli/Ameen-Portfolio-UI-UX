import Link from "next/link";
import PixelReveal from "@/components/ui/pixel-reveal";
import { NameCubes } from "@/components/sections/name-cubes";
import { MindMap } from "@/components/sections/mind-map";
import { LineStrip } from "@/components/ui/line-strip";
import { SITE, SKILLS, CATEGORIES } from "@/lib/site";

const TOOLS = ["photoshop", "illustrator", "aftereffects", "framer", "figma", "blender", "canva", "spline"];

export default function Home() {
  return (
    <main className="relative">
      {/* ============================ HERO — paper ============================ */}
      <section className="paper grid-lines relative min-h-screen px-[5vw] pb-[10vh] pt-10 text-ink">
        <div className="flex items-start justify-between">
          <p className="font-condensed text-[clamp(0.8rem,1.6vw,1.15rem)] uppercase tracking-[0.08em]">
            {SITE.kicker}
          </p>
          <p className="font-display text-[clamp(1rem,3vw,2.4rem)] leading-none">{SITE.year}</p>
        </div>

        {/* PORTF[face]LIO — one line */}
        <h1 className="mt-[4vh] flex w-full flex-nowrap items-center justify-center whitespace-nowrap font-display text-[clamp(2.2rem,12.5vw,9.5rem)] uppercase leading-none tracking-[-0.05em] text-ink">
          <span>Portf</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/me/head.webp"
            alt="Ameen, pixelated"
            className="mx-[-0.04em] inline-block h-[0.92em] w-[0.92em] translate-y-[0.04em] object-contain"
            style={{ imageRendering: "pixelated" }}
          />
          <span>lio</span>
        </h1>

        <div className="mx-auto mt-3 flex max-w-3xl items-center justify-center gap-3">
          <span className="font-mono text-2xl text-ink">↳</span>
          <span className="font-condensed text-lg italic tracking-wide text-ink/70">{SITE.signature}</span>
        </div>

        <p className="mt-[5vh] text-center text-2xl tracking-[0.5em] text-ink">★ ◆ ♣</p>

        <p className="mx-auto mt-[6vh] max-w-[42ch] text-center text-sm leading-relaxed text-ink/60">
          {SITE.polaroid.info} — {SITE.thesis}
        </p>
        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-ink/40">scroll ↓</p>
      </section>

      {/* ============================ HELLO — paper ============================ */}
      <section className="paper grid-lines grid gap-[8vh] px-[5vw] py-[12vh] text-ink md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex items-center justify-center">
          <PixelReveal />
        </div>
        <div>
          <h2 className="font-display text-[clamp(3rem,10vw,6.5rem)] uppercase">Hello</h2>
          <div className="mt-6 max-w-[46ch] space-y-4 text-[0.95rem] leading-relaxed text-ink/70">
            {SITE.bio.map((p) => (
              <p key={p} className={p.startsWith("Hi,") ? "font-semibold text-ink" : ""}>{p}</p>
            ))}
          </div>

          <h3 className="mt-12 font-display text-2xl uppercase">Education</h3>
          <p className="mt-2 text-sm font-semibold text-ink">{SITE.education.title}</p>
          <p className="text-xs text-ink/50">{SITE.education.school} · {SITE.education.when}</p>

          <h3 className="mt-10 font-display text-2xl uppercase">Experience</h3>
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

      {/* ============================ SKILLS — paper ============================ */}
      <section className="paper grid-lines px-[5vw] pb-[14vh] pt-[4vh] text-ink">
        <h2 className="font-display text-[clamp(2.4rem,8vw,5rem)] uppercase">Skills</h2>
        <div className="mt-10 grid grid-cols-4 gap-4 sm:max-w-2xl">
          {TOOLS.map((t) => {
            const s = SKILLS.find((x) => x.key === t);
            return (
              <div key={t} className="group relative flex aspect-square items-center justify-center border border-ink/15 bg-white/40">
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

      {/* ============================ TORN → DARK ============================ */}
      <section className="torn-t relative -mt-10 overflow-hidden bg-void px-[5vw] pb-[16vh] pt-[14vh]">
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 overflow-hidden opacity-20">
          {["OLIO 2026", "PORTF · OLIO", "2026 · AMEEN"].map((t, i) => (
            <p key={i} className="stroke whitespace-nowrap font-display text-[14vw] uppercase leading-none text-bone">
              {t} {t}
            </p>
          ))}
        </div>
        <div className="relative mx-auto max-w-xs">
          <span className="absolute -inset-3 border-2 border-red" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/me/front-pad.webp" alt="Ameen, pixelated" className="relative w-full" style={{ imageRendering: "pixelated" }} />
        </div>
        <p className="relative mx-auto mt-10 max-w-[40ch] text-center text-sm text-bone/60">
          Same person, fewer pixels. The face stays a mark, not a photo.
        </p>
      </section>

      {/* ============================ MANIFESTO ============================ */}
      <LineStrip text="DESIGN LOUDER" />
      <section className="mx-auto max-w-[70ch] px-[5vw] py-[16vh]">
        <p className="font-display text-[clamp(1.8rem,6vw,4.5rem)] uppercase leading-[0.95] text-bone">
          {SITE.manifesto[0]}
        </p>
        <div className="mt-8 max-w-[46ch] space-y-3 text-[clamp(1rem,1.5vw,1.3rem)] leading-relaxed text-bone/65">
          <p>{SITE.manifesto[1]}</p>
          <p>{SITE.manifesto[2]} {SITE.manifesto[3]}</p>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/35">
          <li className="text-red/80">not this —</li>
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
      <section className="border-t border-steel/60 px-[5vw] py-[16vh]">
        <h2 className="font-display text-[clamp(2.4rem,8vw,6rem)] uppercase text-bone">The Work</h2>
        <ul className="mt-12 divide-y divide-steel/60 border-y border-steel/60">
          {CATEGORIES.map((c) => (
            <li key={c.key}>
              <Link href={c.href} className="group flex items-center justify-between py-7 transition-colors hover:text-red">
                <span className="font-display text-[clamp(1.5rem,5vw,3.2rem)] uppercase text-bone group-hover:text-red">{c.label}</span>
                <span className="font-mono text-xs tabular-nums text-bone/40 group-hover:text-red">{c.count} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ============================ THESIS ============================ */}
      <section className="px-[5vw] pb-[22vh] pt-[6vh]">
        <p className="max-w-[16ch] font-display text-[clamp(2rem,9vw,8.5rem)] uppercase leading-[0.86] text-bone">
          {SITE.thesis}
        </p>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-red">{SITE.name} · {SITE.year}</p>
      </section>
    </main>
  );
}

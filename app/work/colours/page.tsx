import type { Metadata } from "next";
import Link from "next/link";
import { WorkHero } from "@/components/sections/work-hero";
import { ColourLab } from "@/components/sections/colour-lab";
import { CATEGORIES } from "@/lib/site";

export const metadata: Metadata = { title: "Colours" };
const CAT = CATEGORIES.find((c) => c.key === "colours")!;

export default function ColoursPage() {
  return (
    <main className="relative bg-void text-bone">
      <WorkHero category={CAT} />

      {/* intro — dark */}
      <section className="on-dark grid-lines-dark border-y border-bone/10 px-[5vw] py-[16vh]">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-yellow">01 — Colour</p>
        <h2 className="mt-6 font-condensed text-[clamp(2.6rem,13vw,11rem)] uppercase leading-[0.82]">
          Colour is a<br /><span className="text-purple">design decision.</span>
        </h2>
        <p className="mt-8 max-w-[44ch] font-grotesk font-medium text-[clamp(1.1rem,2vw,1.6rem)] leading-snug text-bone/70">
          I use colour to establish hierarchy, create emotion, guide attention and give digital experiences a visual language.
        </p>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">explore the system ↓</p>
      </section>

      <ColourLab />

      {/* 60 / 30 / 10 */}
      <section className="on-dark border-y border-bone/10 px-[5vw] py-[16vh]">
        <h2 className="font-condensed text-[clamp(3rem,14vw,11rem)] uppercase leading-none text-bone">60 / 30 / 10</h2>
        <div className="mt-10 grid gap-1 sm:grid-cols-[6fr_3fr_1fr]">
          <div className="flex h-40 items-end bg-ink p-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60" style={{ outline: "1px solid rgba(236,233,225,0.15)" }}>Dominant — background</div>
          <div className="flex h-40 items-end bg-purple p-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone">Support — surfaces</div>
          <div className="flex h-40 items-end bg-yellow p-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone">Accent</div>
        </div>
        <p className="mt-6 max-w-[44ch] text-sm text-bone/55">
          Most of the field carries the mood. A third structures it. A sliver does the shouting.
        </p>
      </section>

      {/* final */}
      <section className="px-[5vw] py-[18vh] text-center">
        <h2 className="font-condensed text-[clamp(2.2rem,9vw,7rem)] uppercase leading-[0.85]">
          I don&apos;t just pick colours.<br /><span className="text-purple">I build visual systems.</span>
        </h2>
        <p className="mt-6 font-grotesk font-medium text-bone/60">Every palette has a purpose. Every colour has a role.</p>
        <Link href="/work/typography" className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-red">
          Typography →
        </Link>
      </section>
    </main>
  );
}

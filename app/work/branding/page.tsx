import type { Metadata } from "next";
import Link from "next/link";
import ZoomImage from "@/components/ui/zoom-image";
import { WorkHero } from "@/components/sections/work-hero";
import { CATEGORIES } from "@/lib/site";
import { BRANDS } from "@/lib/work";

export const metadata: Metadata = { title: "Branding & Visual Identity" };

const CAT = CATEGORIES.find((c) => c.key === "branding")!;

export default function BrandingPage() {
  return (
    <main className="relative bg-void">
      <WorkHero category={CAT} />

      {BRANDS.map((b, i) => (
        <section key={b.slug} className="border-t border-purple/25 px-[3vw] py-[12vh]">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-bone/50">
              <span>{b.sector}</span>
              <span>{String(i + 1).padStart(2, "0")} / {String(BRANDS.length).padStart(2, "0")}</span>
            </div>
            <h2 className="mt-3 font-display text-[clamp(2.6rem,8vw,6rem)] uppercase leading-[0.82]" style={{ color: b.color }}>
              {b.name}
            </h2>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/60">{b.tagline}</p>

            {/* the sketch, centred first */}
            <figure className="mx-auto mt-12 max-w-3xl">
              <ZoomImage src={b.sketch} alt={`${b.name} exploration sketch`} caption={`${b.name} — exploration`} className="fibre bg-iron border border-purple/25" />
              <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50">
                exploration — marks, construction, direction
              </figcaption>
            </figure>

            {/* the finished system + writeup */}
            <div className="mt-16 grid gap-[5vh] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)] lg:gap-[4vw]">
              <ZoomImage src={b.board} alt={`${b.name} brand system`} caption={`${b.name} — brand system`} className="fibre bg-iron border border-purple/25 lg:order-1" />
              <div className="lg:order-2 lg:sticky lg:top-[12vh] lg:h-fit">
                <h3 className="font-display text-sm uppercase tracking-wide text-red">The system</h3>
                <p className="mt-4 text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed text-bone/75">{b.blurb}</p>
                <div className="mt-6 flex items-center gap-2">
                  {b.palette.map((c) => (
                    <span key={c} className="h-8 w-8 border border-purple/25" style={{ background: c }} title={c} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <footer className="border-t border-purple/25 px-[4vw] py-[14vh] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/50">next</p>
        <Link href="/work/posters" className="mt-4 inline-block font-display text-[clamp(1.8rem,7vw,4.5rem)] uppercase text-bone hover:text-red">
          Posters →
        </Link>
      </footer>
    </main>
  );
}

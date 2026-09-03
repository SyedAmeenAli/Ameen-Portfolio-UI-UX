import type { Metadata } from "next";
import Link from "next/link";
import ZoomImage from "@/components/ui/zoom-image";
import { BRANDS } from "@/lib/work";

export const metadata: Metadata = { title: "Branding & Visual Identity" };

export default function BrandingPage() {
  return (
    <main className="relative">
      <header className="flex min-h-[42vh] flex-col justify-between gap-[10vh] px-[3vw] pb-[8vh] pt-8">
        <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/40 hover:text-gold">
          ← back
        </Link>
        <div>
          <h1 className="font-display text-[clamp(2.6rem,11vw,11rem)] uppercase leading-[0.8]">
            Branding /
            <br />
            <span className="stroke text-gold">Visual Identity</span>
          </h1>
          <p className="mt-4 max-w-md text-sm text-bone/55">
            {BRANDS.length} full identity systems. Each one: the exploration sketch first,
            then the finished system with the writeup. Click any image to zoom.
          </p>
        </div>
      </header>

      {BRANDS.map((b, i) => (
        <section key={b.slug} className="border-t border-steel/60 px-[3vw] py-[12vh]">
          <div className="mx-auto max-w-6xl">
            {/* name + number */}
            <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-bone/45">
              <span>{b.sector}</span>
              <span>{String(i + 1).padStart(2, "0")} / {String(BRANDS.length).padStart(2, "0")}</span>
            </div>
            <h2 className="mt-3 font-display text-[clamp(2.6rem,8vw,6rem)] uppercase leading-[0.82]" style={{ color: b.color }}>
              {b.name}
            </h2>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/60">{b.tagline}</p>

            {/* 1 — the sketch, centred */}
            <figure className="mx-auto mt-12 max-w-3xl">
              <ZoomImage
                src={b.sketch}
                alt={`${b.name} exploration sketch`}
                caption={`${b.name} — exploration`}
                className="fibre border border-steel"
              />
              <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
                exploration — marks, construction, direction
              </figcaption>
            </figure>

            {/* 2 — the finished system + description */}
            <div className="mt-16 grid gap-[5vh] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)] lg:gap-[4vw]">
              <ZoomImage
                src={b.board}
                alt={`${b.name} brand system`}
                caption={`${b.name} — brand system`}
                className="fibre border border-steel lg:order-1"
              />
              <div className="lg:order-2 lg:sticky lg:top-[12vh] lg:h-fit">
                <h3 className="font-display text-sm uppercase tracking-wide text-gold">The system</h3>
                <p className="mt-4 text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed text-bone/75">{b.blurb}</p>
                <div className="mt-6 flex items-center gap-2">
                  {b.palette.map((c) => (
                    <span key={c} className="h-8 w-8 border border-steel" style={{ background: c }} title={c} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <footer className="px-[4vw] py-[16vh] text-center">
        <p className="font-display text-[clamp(1.4rem,5vw,3rem)] uppercase text-bone/50">five worlds, five rules</p>
        <Link href="/work/logos" className="mt-6 inline-block border-b border-gold pb-0.5 font-mono text-[11px] uppercase tracking-widest text-gold">
          logos &amp; marks →
        </Link>
      </footer>
    </main>
  );
}

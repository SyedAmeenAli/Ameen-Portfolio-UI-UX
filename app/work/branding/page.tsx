import type { Metadata } from "next";
import Link from "next/link";
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
            {BRANDS.length} full identity systems — mark, type, palette, and rollout across
            stationery, packaging and environment.
          </p>
        </div>
      </header>

      {BRANDS.map((b, i) => (
        <section key={b.slug} className="border-t border-steel/60 px-[3vw] py-[10vh]">
          <div className="mx-auto grid max-w-7xl gap-[6vh] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-[4vw]">
            {/* left: the writeup */}
            <div className="lg:sticky lg:top-[10vh] lg:h-fit">
              <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-bone/45">
                <span>{b.sector}</span>
                <span>{String(i + 1).padStart(2, "0")} / {String(BRANDS.length).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.6rem)] uppercase leading-[0.85]" style={{ color: b.color }}>
                {b.name}
              </h2>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/60">{b.tagline}</p>

              <p className="mt-6 max-w-[46ch] text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed text-bone/75">
                {b.blurb}
              </p>

              <div className="mt-6 flex items-center gap-2">
                {b.palette.map((c) => (
                  <span key={c} className="h-7 w-7 border border-steel" style={{ background: c }} title={c} />
                ))}
              </div>

              <a
                href={b.sketch}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block border-b border-gold pb-0.5 font-mono text-[11px] uppercase tracking-widest text-gold"
              >
                exploration sketches →
              </a>
            </div>

            {/* right: the board, large */}
            <figure className="fibre overflow-hidden border border-steel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.board} alt={`${b.name} brand system`} className="w-full" />
            </figure>
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

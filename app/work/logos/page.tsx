import type { Metadata } from "next";
import Link from "next/link";
import { LOGOS } from "@/lib/logos";

export const metadata: Metadata = { title: "Logos & Marks" };

export default function LogosPage() {
  const live = LOGOS.filter((l) => l.kind !== "todo");
  return (
    <main className="relative px-[3vw] pb-[16vh] pt-8">
      <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/40 hover:text-gold">
        ← back
      </Link>

      <h1 className="mt-[8vh] font-display text-[clamp(2.6rem,12vw,12rem)] uppercase leading-[0.8]">
        Logos
        <br />
        <span className="stroke text-gold">&amp; Marks</span>
      </h1>
      <p className="mt-4 max-w-md text-sm text-bone/55">
        {live.length} of 20 marks. Hover to bring one to life.
      </p>

      <div className="mt-[10vh] grid grid-cols-2 gap-x-[2vw] gap-y-[6vh] sm:grid-cols-3 lg:grid-cols-4">
        {LOGOS.map((logo) => (
          <figure key={logo.slug} className="group">
            <div className="fibre relative aspect-square overflow-hidden border border-steel bg-iron">
              {logo.kind === "todo" ? (
                <span className="grid h-full w-full place-items-center font-mono text-[9px] uppercase tracking-[0.25em] text-bone/25">
                  {String(logo.n).padStart(2, "0")}
                  <br />
                  pending
                </span>
              ) : (
                <video
                  src={logo.kind === "video" ? `/logos/${logo.slug}.mp4` : undefined}
                  poster={logo.kind === "image" ? `/logos/${logo.slug}.webp` : `/logos/${logo.slug}.jpg`}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  onMouseEnter={undefined}
                />
              )}
              <span className="pointer-events-none absolute inset-0 bg-gold/0 mix-blend-overlay transition-colors duration-300 group-hover:bg-gold/10" />
            </div>
            <figcaption className="mt-4 flex items-baseline gap-3">
              <span className="font-mono text-[11px] tabular-nums text-bone/30">{String(logo.n).padStart(2, "0")}</span>
              <span>
                <span className="block font-display text-[clamp(0.9rem,1.5vw,1.4rem)] uppercase leading-none">
                  {logo.name}
                </span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-gold">{logo.type}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}

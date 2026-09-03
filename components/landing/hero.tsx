import { SITE } from "@/lib/site";
import { Rip } from "@/components/paper/rip";
import { NameChain } from "./name-chain";

/**
 * Full-bleed hero. The word is set edge to edge with no container, and the
 * pixel avatar stands in for the O — the identity is the work, not the face.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-14">
      {/* meta rail, hard against the page edges */}
      <div className="flex items-end justify-between px-[3vw] font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60 sm:text-[11px]">
        <span>{SITE.kicker}</span>
        <span className="hidden sm:block">Portfolio</span>
        <span className="font-display text-[clamp(1rem,2.6vw,2.2rem)] tracking-normal text-ink">
          {SITE.year}
        </span>
      </div>

      {/* PORTFOLI + avatar-as-O */}
      <h1
        className="mt-1 flex w-full items-center justify-between px-[2vw] font-display leading-[0.78] tracking-[-0.04em]"
        aria-label="Portfolio"
      >
        <span aria-hidden className="text-[clamp(2.6rem,14.7vw,14rem)]">
          PORTF
        </span>

        {/* the O — the pixel figure stands inside the counter. Absolute so the
            tall artwork can never stretch the letter out of round. */}
        <span
          aria-hidden
          className="relative block aspect-square w-[clamp(2.6rem,14.4vw,13.7rem)] shrink-0"
        >
          {/* the counter of the O, filled by the pixel portrait */}
          <span className="absolute inset-[clamp(0.5rem,2.4vw,2.3rem)] overflow-hidden rounded-full bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me/head.webp"
              alt=""
              width={384}
              height={384}
              className="h-full w-full scale-[1.18] object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </span>
          <span className="absolute inset-0 rounded-full border-[clamp(0.5rem,2.4vw,2.3rem)] border-ink" />
        </span>

        <span aria-hidden className="text-[clamp(2.6rem,14.7vw,14rem)]">
          LIO
        </span>
      </h1>

      <div className="flex items-start justify-between px-[3vw]">
        <p className="max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-ink/50">
          the face stays off the page
        </p>
        <p className="font-display text-[clamp(0.8rem,2.3vw,2rem)] uppercase tracking-[0.3em] text-ink">
          Designer
        </p>
      </div>

      {/* the page tears open */}
      <Rip height={140} className="mt-[6vh]" />

      <NameChain />

      {/* manifesto, set like a poster not a paragraph */}
      <div className="mt-[12vh] px-[3vw] pb-[10vh]">
        <p className="font-display text-[clamp(1.8rem,7.6vw,7rem)] uppercase leading-[0.86] tracking-[-0.03em]">
          {SITE.manifesto[0]}
        </p>

        <div className="mt-[6vh] grid gap-x-[6vw] gap-y-8 md:grid-cols-[1fr_1fr_auto]">
          <p className="max-w-[34ch] text-[clamp(1rem,1.5vw,1.35rem)] leading-relaxed text-ink/70">
            {SITE.manifesto[1]}
          </p>
          <p className="max-w-[34ch] text-[clamp(1rem,1.5vw,1.35rem)] leading-relaxed text-ink/70">
            {SITE.manifesto[2]}{" "}
            <span className="text-ink">{SITE.manifesto[3]}</span>
          </p>

          <ul className="space-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/35">
            <li className="text-purple/70">not this</li>
            {SITE.against.map((a) => (
              <li key={a} className="line-through decoration-purple decoration-2">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-[8vh] border-t border-ink/15 pt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-purple">
          {SITE.disciplines.join("  /  ")}
        </p>
      </div>
    </section>
  );
}

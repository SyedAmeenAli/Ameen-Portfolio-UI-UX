import type { CSSProperties } from "react";
import { WhoAmI } from "@/components/sections/who-am-i";

const step = (i: number): CSSProperties => ({ ["--i" as string]: i } as CSSProperties);

const META: [string, string][] = [
  ["Based in", "Hyderabad, India"],
  ["Roles", "UI/UX · Visual · Product"],
  ["Available", "Select projects"],
];

/** Dense editorial poster. Name is the hero; the O of PORTFOLIO frames the pixel head. */
export function Hero() {
  return (
    <section className="grid-lines relative min-h-screen overflow-hidden border-b border-bone/15 px-[4vw] pb-[5vh] pt-[10vh]">
      {/* top meta line */}
      <div className="reveal flex items-center justify-between font-grotesk text-[10px] font-semibold uppercase tracking-[0.28em] text-bone/50">
        <span style={step(0)}>01 / Home</span>
        <span className="text-yellow" style={step(0)}>2026</span>
      </div>

      <div className="mt-[2vh] grid gap-x-[3vw] gap-y-[3vh] lg:grid-cols-[1fr_auto]">
        {/* NAME + PORTFOLIO */}
        <div className="reveal min-w-0">
          <h1 className="font-condensed uppercase leading-[0.74] tracking-[-0.01em] text-bone">
            <span className="block text-[clamp(3rem,15.5vw,12rem)]" style={step(1)}>Ameen</span>
            <span className="block text-[clamp(3rem,15.5vw,12rem)] text-yellow" style={step(2)}>Ali</span>
          </h1>

          {/* PORTFOLI[O = pixel head portal] */}
          <div className="mt-[2.5vh] flex flex-nowrap items-center font-condensed text-[clamp(2rem,9vw,7rem)] uppercase leading-none text-bone" style={step(3)}>
            <span className="tracking-[-0.02em]">Portfoli</span>
            <span
              className="relative ml-[0.04em] inline-block aspect-square h-[0.92em] shrink-0 overflow-hidden rounded-full border-[0.06em] border-purple bg-black"
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me/head.webp"
                alt=""
                className="absolute inset-0 h-full w-full scale-[1.08] object-cover"
                style={{ imageRendering: "pixelated", animation: "portal-open 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
              />
            </span>
          </div>
        </div>

        {/* META COLUMN */}
        <aside className="reveal relative z-10 self-end lg:-ml-[8vw] lg:max-w-[16rem]">
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-purple" style={step(4)}>
            Ameen Ali — Digital Designer
          </p>
          <dl className="mt-4 space-y-3" style={step(5)}>
            {META.map(([k, v]) => (
              <div key={k} className="border-t border-purple/60 pt-1.5">
                <dt className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">{k}</dt>
                <dd className="font-grotesk text-sm font-semibold uppercase tracking-wide text-bone/85">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 max-w-[22ch] font-grotesk text-[13px] font-medium leading-snug text-bone/70" style={step(6)}>
            I design digital experiences, visual systems and identities.
          </p>
        </aside>
      </div>

      {/* lower band */}
      <div className="reveal mt-[4vh] flex flex-wrap items-end justify-between gap-[4vh]">
        <div style={step(7)}><WhoAmI /></div>
        <div className="flex items-center gap-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-bone/50" style={step(7)}>
          <span className="h-3 w-3 bg-purple" />
          Scroll to explore
          <span className="text-yellow">↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

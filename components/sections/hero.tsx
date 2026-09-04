import type { CSSProperties } from "react";
import { WhoAmI } from "@/components/sections/who-am-i";
import { Hatch, Globe } from "@/components/sections/editorial-bits";

const step = (i: number): CSSProperties => ({ ["--i" as string]: i } as CSSProperties);

const META: [string, string][] = [
  ["Based in", "Hyderabad, India"],
  ["Roles", "UI/UX · Visual · Product"],
  ["Available", "Select projects"],
];

/** Dense editorial poster hero. Name is the hero; the O of PORTFOLIO frames the pixel head. */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-purple/40 px-[4vw] pb-[5vh] pt-[13vh]">
      <p className="reveal font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 01 ]</p>

      <div className="reveal mt-2 grid gap-x-[3vw] gap-y-[4vh] lg:grid-cols-[1.4fr_0.55fr_0.85fr] lg:items-start">
        {/* NAME + PORTFOLIO */}
        <div className="min-w-0">
          <h1 className="font-condensed uppercase leading-[0.7] tracking-[0.005em]">
            <span className="block text-[clamp(3rem,15vw,12rem)] text-bone" style={step(1)}>Ameen</span>
            <span className="block text-[clamp(3rem,15vw,12rem)] text-yellow" style={step(2)}>Ali</span>
          </h1>

          <div className="mt-[2vh] flex flex-nowrap items-center font-condensed text-[clamp(1.8rem,8vw,6.5rem)] uppercase leading-none text-bone" style={step(3)}>
            <span>Portfoli</span>
            <span className="relative ml-[0.04em] inline-block aspect-square h-[0.92em] shrink-0 overflow-hidden rounded-full border-[0.055em] border-purple bg-black" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me/head.webp"
                alt=""
                className="absolute inset-0 h-full w-full scale-[1.08] object-cover"
                style={{ imageRendering: "pixelated", animation: "portal-open 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
              />
            </span>
          </div>

          <div className="mt-6 flex items-start gap-8" style={step(4)}>
            <p className="font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
              Digital<br />designer<br />/ visual<br />systems
            </p>
            <p className="flex items-center gap-3 self-end font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/45">
              Design beyond the obvious <span className="h-px w-16 bg-purple" />
            </p>
          </div>
        </div>

        {/* info column */}
        <div className="flex flex-col gap-5 self-stretch border-l border-purple/25 pl-4" style={step(5)}>
          <Globe />
          <dl className="space-y-3">
            {META.map(([k, v]) => (
              <div key={k} className="border-t border-purple/50 pt-1.5">
                <dt className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">{k}</dt>
                <dd className="font-grotesk text-sm font-semibold uppercase tracking-wide text-bone/85">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="max-w-[24ch] font-grotesk text-[11px] font-medium leading-snug text-bone/60">
            I build experiences, identities and visual systems meant to be remembered.
          </p>
          <Hatch />
        </div>

        {/* girl poster — main visual */}
        <figure className="relative" style={step(6)}>
          <div className="aspect-[2/3] w-full overflow-hidden border border-purple/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/posters/panther-full.webp" alt="Beauty in chaos — poster by Ameen Ali" className="h-full w-full object-cover" />
          </div>
          <figcaption className="mt-3 flex items-center justify-between font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">
            <span className="text-purple">Beauty exists in distortion</span>
            <span className="text-yellow">Scroll ↓</span>
          </figcaption>
        </figure>
      </div>

      {/* WHO AM I — lower band */}
      <div className="reveal mt-[6vh] border-t border-purple/25 pt-[5vh]" style={step(7)}>
        <WhoAmI />
      </div>
    </section>
  );
}

export default Hero;

"use client";

import type { CSSProperties } from "react";
import dynamic from "next/dynamic";
import { SITE } from "@/lib/site";
import { LOGOS } from "@/lib/logos";

const DomeGallery = dynamic(() => import("@/components/ui/dome-gallery"), { ssr: false });

const domeImages = LOGOS.filter((l) => l.kind !== "todo").map((l) => ({
  src: l.file ?? (l.kind === "video" ? `/logos/${l.slug}.anim.webp` : `/logos/${l.slug}.webp`),
  alt: `${l.name} — ${l.type}`,
}));

const META: [string, string][] = [
  ["Based in", "Hyderabad, India"],
  ["Specialising in", "UI/UX · Visual Design · Branding · Art Direction"],
  ["Available for", "Select projects · Collaborations"],
];

const step = (i: number): CSSProperties => ({ ["--i" as string]: i } as CSSProperties);

export function Hero() {
  return (
    <section className="grid-lines relative min-h-screen overflow-hidden border-b border-ink/15 px-[4vw] pb-[6vh] pt-[13vh]">
      <div className="reveal flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.24em] text-ink/55 sm:text-[10px]">
        <span style={step(0)}>Portfolio / 2026</span>
        <span className="text-right leading-relaxed" style={step(1)}>
          17°23&apos;N<br />78°29&apos;E
        </span>
      </div>

      <div className="reveal relative mt-[6vh]">
        <h1 className="font-condensed leading-[0.78] tracking-[-0.01em]">
          <span className="block text-[clamp(4rem,26vw,22rem)] text-ink" style={step(2)}>Ameen</span>
          <span className="block text-[clamp(4rem,26vw,22rem)] text-purple" style={step(3)}>Ali</span>
        </h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/me/front-pad.webp"
          alt="Ameen, pixelated"
          className="pointer-events-none absolute right-0 top-[-4vh] hidden h-[62vh] w-auto object-contain md:block"
          style={{ ...step(4), imageRendering: "pixelated", animation: "float-idle 6s ease-in-out infinite" } as CSSProperties}
        />
      </div>

      <div className="reveal mt-[8vh] grid gap-[6vh] md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div style={step(5)}>
          <p className="max-w-[34ch] font-condensed text-[clamp(1.2rem,2.6vw,2rem)] uppercase leading-[1.05] text-ink">
            Digital designer. I build experiences, identities and visual systems meant to be remembered.
          </p>
          <dl className="mt-8 space-y-3">
            {META.map(([k, v]) => (
              <div key={k} className="flex gap-4 border-t border-ink/15 pt-2 font-mono text-[10px] uppercase tracking-[0.18em]">
                <dt className="w-28 shrink-0 text-ink/45">{k}</dt>
                <dd className="text-ink/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="justify-self-start md:justify-self-end" style={step(6)}>
          <div className="h-[34vh] w-[min(80vw,22rem)] border border-ink/15">
            <DomeGallery images={domeImages} fit={0.5} minRadius={360} segments={22} autoSpin={false} overlayBlurColor="#f3f0e8" />
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/45">Selected marks — drag to turn ↗</p>
        </div>
      </div>

      <p className="reveal mt-[6vh] font-mono text-[10px] uppercase tracking-[0.35em] text-ink/40" style={step(7)}>
        Scroll to explore ↓
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/me/front-pad.webp"
        alt="Ameen, pixelated"
        className="mx-auto mt-10 h-[40vh] w-auto object-contain md:hidden"
        style={{ imageRendering: "pixelated" }}
      />

      <span className="sr-only">{SITE.thesis}</span>
    </section>
  );
}

export default Hero;

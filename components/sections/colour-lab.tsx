"use client";

import { useState } from "react";

type Palette = {
  name: string; mood: string;
  bg: string; surface: string; primary: string; accent: string; text: string; muted: string;
};

export const PALETTES: Palette[] = [
  { name: "Electric Noir", mood: "Experimental / Digital / Energetic", bg: "#08080A", surface: "#17131F", primary: "#7C3AED", accent: "#FFD600", text: "#F1EEF9", muted: "#A855F7" },
  { name: "Desert Modern", mood: "Warm / Architectural / Editorial", bg: "#1E1A17", surface: "#2A2420", primary: "#C9794A", accent: "#68705A", text: "#F4EBDD", muted: "#E8C9A8" },
  { name: "Deep Ocean", mood: "Technical / Calm / Intelligent", bg: "#07131F", surface: "#0B3A53", primary: "#087EA4", accent: "#67D4E8", text: "#F2F7F8", muted: "#5C8098" },
  { name: "Raw Earth", mood: "Organic / Crafted / Human", bg: "#171411", surface: "#574438", primary: "#A66A4C", accent: "#D7B89C", text: "#EDE4D7", muted: "#8A7566" },
  { name: "Night Luxury", mood: "Elegant / Premium / Sophisticated", bg: "#0A0909", surface: "#26151A", primary: "#722F3F", accent: "#C58B67", text: "#F0E5D5", muted: "#8A6B62" },
  { name: "Acid Future", mood: "Experimental / Futuristic / Unconventional", bg: "#090B0A", surface: "#17352B", primary: "#A8FF3E", accent: "#C6FF72", text: "#F1F5EA", muted: "#6E9E63" },
];

const ROLES: [keyof Palette, string][] = [
  ["primary", "Primary actions and brand moments"],
  ["accent", "Highlights, attention, the first interaction"],
  ["surface", "Cards and raised panels"],
  ["bg", "Page background / dominant field"],
  ["text", "Body and headings"],
  ["muted", "Supporting information, reduced noise"],
];

export function ColourLab() {
  const [i, setI] = useState(0);
  const p = PALETTES[i];

  return (
    <section className="px-[5vw] py-[14vh]">
      <h2 className="font-condensed text-[clamp(2.4rem,8vw,5.5rem)] uppercase">Colour Lab</h2>
      <p className="mt-3 max-w-[46ch] text-sm text-ink/60">
        A palette isn&apos;t a set of hex codes. It defines how a product feels, behaves and communicates.
        Pick one — the whole interface below rebuilds in it.
      </p>

      {/* selector */}
      <div className="mt-10 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {PALETTES.map((pal, idx) => (
          <button
            key={pal.name}
            onClick={() => setI(idx)}
            className={`group border p-3 text-left transition-colors ${idx === i ? "border-ink" : "border-ink/15 hover:border-ink/40"}`}
          >
            <div className="flex h-8 overflow-hidden">
              {[pal.bg, pal.surface, pal.primary, pal.accent, pal.text].map((c) => (
                <span key={c} className="flex-1" style={{ background: c }} />
              ))}
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em]">{pal.name}</p>
            <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-ink/45">{pal.mood}</p>
          </button>
        ))}
      </div>

      <h3 className="mt-16 font-condensed text-[clamp(1.8rem,6vw,3.5rem)] uppercase">See it in use.</h3>
      <p className="mt-2 max-w-[42ch] text-sm text-ink/55">
        The real test of a colour system isn&apos;t the swatch — it&apos;s what happens when the colours work together.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
        {/* mini product UI */}
        <div className="overflow-hidden border border-ink/15" style={{ background: p.bg, color: p.text }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `1px solid ${p.surface}` }}>
            <span className="font-condensed text-lg uppercase tracking-wide" style={{ color: p.primary }}>Nova</span>
            <nav className="hidden gap-4 font-mono text-[10px] uppercase tracking-[0.15em] sm:flex" style={{ color: p.muted }}>
              <span>Overview</span><span>Projects</span><span>Insights</span><span>About</span>
            </nav>
            <span className="px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ background: p.primary, color: p.bg }}>Explore</span>
          </div>
          <div className="px-6 py-12">
            <h4 className="font-condensed text-[clamp(1.8rem,6vw,3.4rem)] uppercase leading-[0.9]">
              Build what<br /><span style={{ color: p.accent }}>matters.</span>
            </h4>
            <p className="mt-4 max-w-[40ch] text-sm" style={{ color: p.muted }}>
              A simple digital workspace designed to turn complex ideas into clear experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.15em]">
              <span className="px-4 py-2" style={{ background: p.accent, color: p.bg }}>Start a project</span>
              <span className="px-4 py-2" style={{ border: `1px solid ${p.muted}`, color: p.text }}>View work</span>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["Strategy", "Experience", "Systems"].map((c, n) => (
                <div key={c} className="p-4" style={{ background: p.surface }}>
                  <span className="font-mono text-[10px]" style={{ color: p.accent }}>0{n + 1}</span>
                  <p className="mt-2 font-condensed text-lg uppercase">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* roles panel */}
        <div className="border border-ink/15 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">Colour roles</p>
          <ul className="mt-4 space-y-3">
            {ROLES.map(([k, desc]) => (
              <li key={k} className="flex gap-3">
                <span className="mt-0.5 h-8 w-8 shrink-0 border border-ink/15" style={{ background: p[k] as string }} />
                <span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">{k}</span>
                  <span className="ml-2 font-mono text-[10px] text-ink/45">{(p[k] as string).toUpperCase()}</span>
                  <p className="text-[11px] leading-tight text-ink/55">{desc}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* colour changes type */}
      <h3 className="mt-20 font-condensed text-[clamp(1.8rem,6vw,3.5rem)] uppercase">Colour changes type.</h3>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { bg: "#0a0a0b", fg: "#ece9e1", ac: "#7c3aed" },
          { bg: "#ece9e1", fg: "#0a0a0b", ac: "#ff7a1a" },
          { bg: "#0b3a53", fg: "#f2f7f8", ac: "#67d4e8" },
          { bg: "#0a0a0b", fg: "#ffd400", ac: "#7c3aed" },
        ].map((v, n) => (
          <div key={n} className="flex aspect-[4/5] flex-col justify-between p-5" style={{ background: v.bg, color: v.fg }}>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: v.ac }}>0{n + 1}</span>
            <p className="font-condensed text-2xl uppercase leading-none">
              Make something <span style={{ color: v.ac }}>people</span> remember.
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
        identical layout · only the colour system changes
      </p>
    </section>
  );
}

export default ColourLab;

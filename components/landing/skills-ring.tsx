"use client";

import { useState } from "react";
import { SITE, SKILLS } from "@/lib/site";
import { play } from "@/lib/sound";

export function SkillsRing() {
  const [hot, setHot] = useState<number | null>(null);
  const active = hot === null ? null : SKILLS[hot];

  return (
    <>
      {/* small screens: the ring has no room, so lay the tools out flat */}
      <div className="md:hidden">
        <p className="font-display text-2xl uppercase tracking-tight">
          Skills
          <span className="ml-2 text-yellow">✦</span>
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-purple">
          {"02 — My Creativity"}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          {SITE.manifesto[2]}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <li
              key={s.key}
              className="grain border border-ink/15 bg-pure p-3 shadow-torn"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-purple">
                {s.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink/65">{s.desc}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-yellow-600">
          {SITE.manifesto[3]}
        </p>
      </div>

      <div
        className={`relative mx-auto hidden aspect-square w-full max-w-[560px] md:block ${
          hot !== null ? "ring-paused" : ""
        }`}
      >
        <p className="absolute left-0 top-0 font-display text-2xl uppercase tracking-tight">
          Skills
          <span className="ml-2 text-yellow">✦</span>
        </p>

        {/* orbit guide */}
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/15"
        />

        {/* rotating ring of tool tiles.
          L1 spins the ring · L2 places the tile on the orbit ·
          L3 counter-spins · L4 undoes L2's angle so labels stay upright */}
        <div className="ring-spin absolute inset-0">
        {SKILLS.map((s, i) => {
          const angle = (360 / SKILLS.length) * i;
          return (
            <div
              key={s.key}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(-1 * clamp(7.5rem, 25vw, 13.6rem)))`,
              }}
            >
              <div className="ring-spin-rev">
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <button
                    onMouseEnter={() => {
                      setHot(i);
                      play("hover");
                    }}
                    onMouseLeave={() => setHot(null)}
                    onFocus={() => setHot(i)}
                    onBlur={() => setHot(null)}
                    className={`grain -translate-x-1/2 -translate-y-1/2 border px-3 py-2 text-center font-mono text-[10px] uppercase leading-tight tracking-widest shadow-torn transition-[background-color,border-color,color,scale,box-shadow] duration-200 ${
                      hot === i
                        ? "scale-110 border-purple bg-purple text-pure shadow-lift"
                        : "border-ink/20 bg-pure text-ink hover:border-purple"
                    }`}
                    style={{ minWidth: "6.4rem" }}
                  >
                    {s.name}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

        {/* centre panel */}
        <div className="absolute left-1/2 top-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 text-center">
        {active ? (
          <>
            <p className="font-display text-lg uppercase leading-none">{active.name}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink/65">{active.desc}</p>
          </>
        ) : (
          <>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-purple">
              {"02 — My Creativity"}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink/65">
              {SITE.manifesto[2]}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-yellow-600">
              {SITE.manifesto[3]}
            </p>
          </>
        )}
        </div>
      </div>
    </>
  );
}

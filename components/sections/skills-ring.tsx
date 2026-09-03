"use client";

import { useState } from "react";
import { SKILLS } from "@/lib/site";

/** 8 tool tiles orbiting; hover pauses the ring and swaps the centre panel. */
export function SkillsRing() {
  const [hot, setHot] = useState<number | null>(null);
  const active = hot === null ? null : SKILLS[hot];

  return (
    <>
      {/* mobile: flat list */}
      <div className="md:hidden">
        <h2 className="font-display text-3xl uppercase">Skills</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <li key={s.key} className="border border-steel bg-iron p-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold">{s.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-bone/60">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={`relative mx-auto hidden aspect-square w-full max-w-[560px] md:block ${hot !== null ? "[&_.ring]:[animation-play-state:paused]" : ""}`}>
        <span aria-hidden className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/20" />

        <div className="ring absolute inset-0 [animation:spin_46s_linear_infinite]">
          {SKILLS.map((s, i) => {
            const angle = (360 / SKILLS.length) * i;
            return (
              <div
                key={s.key}
                className="absolute left-1/2 top-1/2 h-0 w-0"
                style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * clamp(7.5rem,25vw,13.6rem)))` }}
              >
                <div className="[animation:spin_46s_linear_infinite_reverse]">
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <button
                      onMouseEnter={() => setHot(i)}
                      onMouseLeave={() => setHot(null)}
                      className={`fibre -translate-x-1/2 -translate-y-1/2 border px-3 py-2 text-center font-mono text-[10px] uppercase leading-tight tracking-widest transition-[background-color,border-color,color,scale] duration-200 ${
                        hot === i ? "scale-110 border-gold bg-gold text-ink" : "border-steel bg-iron text-bone hover:border-gold"
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

        <div className="absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2 text-center">
          {active ? (
            <>
              <p className="font-display text-lg uppercase">{active.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/60">{active.desc}</p>
            </>
          ) : (
            <>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">02 — My Creativity</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/60">
                Curiosity, experimentation, a little controlled chaos.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { SKILLS } from "@/lib/site";
import { ToolIcon, TOOL_HEX } from "@/components/ui/tool-icons";

/** 8 tool ICON tiles orbiting; hover pauses the ring, centre shows the name + line. */
export function SkillsRing() {
  const [hot, setHot] = useState<number | null>(null);
  const active = hot === null ? null : SKILLS[hot];

  return (
    <>
      {/* mobile: flat icon grid */}
      <div className="md:hidden">
        <h2 className="font-display text-3xl uppercase">Skills</h2>
        <ul className="mt-6 grid grid-cols-4 gap-3">
          {SKILLS.map((s) => {
            const Icon = ToolIcon[s.key as keyof typeof ToolIcon];
            return (
              <li key={s.key} className="grid aspect-square place-items-center border border-steel bg-iron" style={{ color: TOOL_HEX[s.key] }}>
                <Icon />
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-xs text-bone/55">{SKILLS.map((s) => s.name).join(" · ")}</p>
      </div>

      <div className={`relative mx-auto hidden aspect-square w-full max-w-[560px] md:block ${hot !== null ? "[&_.ring]:[animation-play-state:paused]" : ""}`}>
        <span aria-hidden className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/20" />

        <div className="ring absolute inset-0 [animation:spin_46s_linear_infinite]">
          {SKILLS.map((s, i) => {
            const angle = (360 / SKILLS.length) * i;
            const Icon = ToolIcon[s.key as keyof typeof ToolIcon];
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
                      aria-label={s.name}
                      className={`fibre grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center border transition-all duration-200 ${
                        hot === i ? "scale-125 border-gold bg-void shadow-[0_0_30px_rgba(240,179,35,0.4)]" : "border-steel bg-iron hover:border-gold"
                      }`}
                      style={{ color: hot === i ? TOOL_HEX[s.key] : "#efe9dd99" }}
                    >
                      <Icon width={24} height={24} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute left-1/2 top-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2 text-center">
          {active ? (
            <>
              <p className="font-display text-xl uppercase" style={{ color: TOOL_HEX[active.key] }}>{active.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/60">{active.desc}</p>
            </>
          ) : (
            <>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">02 — My Creativity</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/60">Curiosity, experimentation, a little controlled chaos.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

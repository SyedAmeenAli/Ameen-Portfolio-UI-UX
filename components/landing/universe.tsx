"use client";

import { useRef, useState } from "react";
import { LazyVideo } from "@/components/lazy-video";

const ROWS = [
  { words: ["Figma", "Photoshop", "Illustrator", "Framer", "After Effects"], dur: 34, size: "text-[clamp(2rem,6vw,5rem)]" },
  { words: ["Blender", "Spline", "Canva", "Adobe XD", "InDesign"], dur: 46, size: "text-[clamp(1.4rem,4vw,3.4rem)]" },
  { words: ["Miro", "Webflow", "Notion", "Premiere", "Figma"], dur: 28, size: "text-[clamp(1rem,2.8vw,2.2rem)]" },
];

export function Universe() {
  const wrap = useRef<HTMLElement>(null);
  const [heat, setHeat] = useState(0); // 0 = far, 1 = on the cat

  const onMove = (e: React.PointerEvent) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    const d = Math.min(1, Math.hypot(dx, dy));
    setHeat(1 - d);
  };

  const border = `color-mix(in srgb, var(--color-flame) ${100 - heat * 70}%, var(--color-purple))`;

  return (
    <section
      ref={wrap}
      onPointerMove={onMove}
      onPointerLeave={() => setHeat(0)}
      className="relative isolate my-24 overflow-hidden py-24 text-paper"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 50%, #241d3d 0%, #12101c 45%, #07070a 100%)",
      }}
    >
      {/* torn edges top and bottom so the dark band reads as a rip in the paper */}
      {(["top", "bottom"] as const).map((side) => (
        <span
          key={side}
          aria-hidden
          className={`absolute inset-x-0 ${side}-0 z-20 h-8 bg-paper`}
          style={{
            clipPath:
              side === "top"
                ? "polygon(0 0,100% 0,100% 40%,92% 66%,84% 38%,76% 70%,66% 40%,56% 72%,46% 42%,36% 74%,26% 44%,16% 72%,8% 42%,0 68%)"
                : "polygon(0 32%,8% 58%,16% 28%,26% 56%,36% 26%,46% 58%,56% 28%,66% 60%,76% 30%,84% 62%,92% 34%,100% 60%,100% 100%,0 100%)",
          }}
        />
      ))}

      {/* stars */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%,#fff,transparent),radial-gradient(1px 1px at 70% 20%,#fff,transparent),radial-gradient(1px 1px at 40% 70%,#fff,transparent),radial-gradient(1.5px 1.5px at 85% 60%,#fff,transparent),radial-gradient(1px 1px at 10% 80%,#fff,transparent),radial-gradient(1px 1px at 60% 85%,#fff,transparent)",
        }}
      />

      {/* tool names drifting right to left, behind the cat */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-2">
        {ROWS.map((row, i) => (
          <div key={i} className="overflow-hidden">
            <div
              className={`drift flex w-max gap-10 font-display uppercase ${row.size}`}
              style={
                {
                  "--dur": `${row.dur}s`,
                  color: "transparent",
                  WebkitTextStroke: `1px rgba(255,255,255,${i === 0 ? 0.3 : 0.16})`,
                } as React.CSSProperties
              }
            >
              {[...row.words, ...row.words, ...row.words, ...row.words].map((w, k) => (
                <span key={k}>{w}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* the cat */}
      <div className="relative z-10 mx-auto w-[min(520px,74vw)]">
        <div
          className="relative overflow-hidden transition-[box-shadow,border-color] duration-300"
          style={{
            border: `2px solid ${border}`,
            boxShadow: `0 0 ${18 + heat * 70}px ${heat * 12}px ${border}, inset 0 0 ${
              20 + heat * 50
            }px rgba(0,0,0,0.7)`,
          }}
        >
          <LazyVideo
            src="/media/cat.mp4"
            poster="/media/cat.jpg"
            className="block h-full w-full object-cover"
          />
        </div>

        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-paper/50">
          UI / UX <span className="text-yellow">✦</span> the tools I live in
        </p>
      </div>
    </section>
  );
}

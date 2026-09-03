"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

const SpaceScene = dynamic(
  () => import("./space/scene").then((m) => m.SpaceScene),
  { ssr: false },
);

const ROWS = [
  { words: ["Figma", "Photoshop", "Illustrator", "After Effects"], dur: 38, size: "text-[clamp(2.4rem,8vw,7rem)]", stroke: 0.34 },
  { words: ["Blender", "Spline", "Framer", "InDesign"], dur: 52, size: "text-[clamp(1.6rem,5vw,4.4rem)]", stroke: 0.2 },
  { words: ["Canva", "Miro", "Webflow", "Premiere"], dur: 30, size: "text-[clamp(1.1rem,3.2vw,2.6rem)]", stroke: 0.13 },
];

/**
 * A shaft cut through the page into open space. The section is three screens
 * tall and the canvas is pinned, so scrolling flies the camera through the
 * field rather than sliding a picture past.
 */
export function Universe() {
  const wrap = useRef<HTMLElement>(null);
  // the scene reads this every frame. The ref object itself is handed down —
  // .current is only ever touched in a handler or inside useFrame, never
  // during render.
  const progress = useRef(0);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    let mounted = false;
    // scroll-driven, not rAF-driven: the scene lerps toward this value itself,
    // so an event per scroll is plenty and it works before the first frame
    const read = () => {
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      progress.current = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;

      // build the scene once the shaft is within a screen and a half
      if (!mounted && r.top < window.innerHeight * 1.5 && r.bottom > -window.innerHeight) {
        mounted = true;
        setLive(true);
      }
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  return (
    <section ref={wrap} className="relative h-[300vh] bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* the space itself */}
        <div className="absolute inset-0">{live && <SpaceScene progress={progress} />}</div>

        {/* tool names drifting through the void */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-[2vh] mix-blend-screen">
          {ROWS.map((row, i) => (
            <div key={i} className="overflow-hidden">
              <div
                className={`drift flex w-max gap-[6vw] font-display uppercase ${row.size}`}
                style={
                  {
                    "--dur": `${row.dur}s`,
                    color: "transparent",
                    WebkitTextStroke: `1px rgba(255,255,255,${row.stroke})`,
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

        {/* torn lips of the page, top and bottom of the shaft */}
        {(["top", "bottom"] as const).map((side) => (
          <div
            key={side}
            aria-hidden
            className={`pointer-events-none absolute inset-x-0 ${side}-0 h-[9vh] bg-paper`}
            style={{
              filter: "url(#tear-lift)",
              transform: side === "bottom" ? "scaleY(-1) translateX(-6%)" : "translateX(-6%)",
              width: "112%",
            }}
          />
        ))}

        {/* the line the whole site is built to deliver */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[14vh] px-[4vw]">
          <p className="max-w-[24ch] font-display text-[clamp(1.1rem,3vw,2.6rem)] uppercase leading-[0.95] tracking-tight text-paper mix-blend-difference">
            {SITE.thesis}
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-paper/45">
            the tools I live in
          </p>
        </div>
      </div>
    </section>
  );
}

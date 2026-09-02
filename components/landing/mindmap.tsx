"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MINDMAP } from "@/lib/site";
import { play } from "@/lib/sound";

/** node positions in % of the board, laid out to match the paper sketch */
const POS: Record<string, [number, number]> = {
  logos: [13, 11],
  social: [50, 17],
  typography: [86, 25],
  branding: [8, 54],
  posters: [36, 52],
  thumbnails: [62, 66],
  motion: [88, 78],
  illustration: [21, 88],
  colours: [58, 94],
};

const EDGES: [string, string][] = [
  ["logos", "branding"],
  ["logos", "posters"],
  ["logos", "illustration"],
  ["logos", "typography"],
  ["branding", "posters"],
  ["branding", "illustration"],
  ["posters", "illustration"],
  ["social", "posters"],
  ["social", "thumbnails"],
  ["thumbnails", "typography"],
  ["thumbnails", "colours"],
  ["illustration", "thumbnails"],
  ["colours", "motion"],
  ["typography", "motion"],
];

export function MindMap() {
  const svg = useRef<SVGSVGElement>(null);
  const [hot, setHot] = useState<string | null>(null);
  const hotRef = useRef<string | null>(null);

  // the animation loop reads the live hover without restarting
  useEffect(() => {
    hotRef.current = hot;
  }, [hot]);

  // vibrate the threads: nudge each path's control point every frame
  useEffect(() => {
    const paths = svg.current?.querySelectorAll<SVGPathElement>("path[data-a]");
    if (!paths?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      paths.forEach((p, i) => {
        const a = POS[p.dataset.a!];
        const b = POS[p.dataset.b!];
        const live = hotRef.current === p.dataset.a || hotRef.current === p.dataset.b;
        const amp = live ? 3.4 : 1.1;
        const mx = (a[0] + b[0]) / 2;
        const my = (a[1] + b[1]) / 2;
        // perpendicular direction
        const dx = b[0] - a[0];
        const dy = b[1] - a[1];
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const w = Math.sin(t * (live ? 13 : 7) + i * 1.7) * amp;
        p.setAttribute(
          "d",
          `M${a[0]} ${a[1]} Q${mx + nx * w} ${my + ny * w} ${b[0]} ${b[1]}`,
        );
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative mx-auto w-[min(1240px,94vw)] pb-32">
      <div className="flex flex-wrap items-end gap-4">
        <h2 className="font-display text-[clamp(2.2rem,8vw,6rem)] uppercase leading-none tracking-tight">
          Mind Map
        </h2>
        <span className="mb-2 grain torn bg-pure px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] shadow-torn">
          choose
        </span>
      </div>
      <p className="mt-3 max-w-md text-sm text-ink/55">
        Every thread leads somewhere. Pick a discipline to open its page.
      </p>

      <div className="relative mt-12 aspect-[16/11] w-full">
        <svg
          ref={svg}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {EDGES.map(([a, b]) => {
            const live = hot === a || hot === b;
            return (
              <path
                key={`${a}-${b}`}
                data-a={a}
                data-b={b}
                d={`M${POS[a][0]} ${POS[a][1]} L${POS[b][0]} ${POS[b][1]}`}
                className="thread"
                fill="none"
                vectorEffect="non-scaling-stroke"
                stroke={live ? "var(--color-purple)" : "var(--color-ink)"}
                strokeWidth={live ? 2 : 1}
                opacity={live ? 0.95 : 0.3}
              />
            );
          })}
        </svg>

        {MINDMAP.map((node) => {
          const [x, y] = POS[node.key];
          const live = hot === node.key;
          return (
            <Link
              key={node.key}
              href={node.href}
              onMouseEnter={() => {
                setHot(node.key);
                play("hover");
              }}
              onMouseLeave={() => setHot(null)}
              onFocus={() => setHot(node.key)}
              onBlur={() => setHot(null)}
              onClick={() => play("click")}
              style={{ left: `${x}%`, top: `${y}%` }}
              className={`grain absolute -translate-x-1/2 -translate-y-1/2 border px-3 py-2 text-center font-mono text-[10px] uppercase leading-tight tracking-widest shadow-torn transition-[background-color,border-color,color,scale,box-shadow] duration-200 md:text-[11px] ${
                live
                  ? "z-10 scale-110 border-purple bg-purple text-pure shadow-lift"
                  : "border-ink/25 bg-pure text-ink"
              }`}
            >
              {node.label}
              <span
                className={`mt-1 block h-[2px] transition-colors ${
                  live ? "bg-yellow" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

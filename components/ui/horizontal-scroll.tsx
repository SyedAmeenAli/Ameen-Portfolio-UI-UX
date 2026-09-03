"use client";

import { useEffect, useRef } from "react";
import { scroll } from "motion";

export type HScrollPanel = {
  heading: string;
  image: string;
  caption?: string;
};

/**
 * ui-layouts horizontal scroll (motion v13) — a tall <section> pins a row of
 * full-screen panels and drives it sideways from scroll progress; each heading
 * counter-drifts while its panel is on screen.
 */
export function HorizontalScroll({ panels }: { panels: HScrollPanel[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const row = rowRef.current;
    if (!section || !row) return;
    const n = panels.length;
    const headings = Array.from(row.querySelectorAll<HTMLHeadingElement>("h3"));

    const stop = scroll(
      (progress: number) => {
        row.style.transform = `translate3d(${-progress * (n - 1) * 100}vw, 0, 0)`;
        headings.forEach((h, i) => {
          // local progress of this panel, -1 (incoming) .. 0 (centered) .. 1 (leaving)
          const local = progress * (n - 1) - i;
          h.style.transform = `translate3d(${local * -520}px, 0, 0)`;
          h.style.opacity = String(Math.max(0.15, 1 - Math.abs(local) * 0.9));
        });
      },
      { target: section },
    );
    return () => stop();
  }, [panels.length]);

  return (
    <section ref={sectionRef} style={{ height: `${panels.length * 100}vh` }} className="relative">
      <ul ref={rowRef} className="sticky top-0 flex will-change-transform">
        {panels.map((p, i) => (
          <li
            key={i}
            className="relative flex h-screen w-screen shrink-0 flex-col items-center justify-center overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt={p.heading}
              className="absolute bottom-0 left-1/2 h-[74vh] w-auto max-w-none -translate-x-1/2 object-contain"
            />
            <h3 className="stroke pointer-events-none relative z-10 mb-6 whitespace-nowrap font-display text-[16vw] uppercase text-bone will-change-transform">
              {p.heading}
            </h3>
            {p.caption && (
              <p className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                {p.caption}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HorizontalScroll;

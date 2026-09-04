"use client";

import { useEffect, useRef } from "react";
import { useArtLightbox, type Art } from "@/components/sections/art-lightbox";

export type Poster = Art & { h: string };

/** Horizontal poster archive. Wheel-over-rail converts to horizontal; the page
 *  keeps scrolling vertically everywhere else. Drag + touch swipe supported. */
export function PosterRail({ posters }: { posters: Poster[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const { open, view } = useArtLightbox(posters);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return; // let page scroll
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="border-b border-purple/40">
      <p className="px-[4vw] py-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-bone/45">
        [ Archive ] {posters.length} pieces — scroll / drag sideways
      </p>
      <div
        ref={rail}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[4vw] pb-[8vh] pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posters.map((p, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            style={{ height: p.h }}
            className="group relative flex shrink-0 snap-start cursor-zoom-in flex-col justify-end border border-purple/25 bg-[#0b0a10] transition-colors hover:border-yellow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.title} loading="lazy" className="h-full w-auto max-w-none object-contain" />
            <span className="absolute left-2 top-2 bg-bone px-1.5 py-0.5 font-grotesk text-[9px] font-bold text-black">{String(i + 1).padStart(2, "0")}</span>
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/95 to-transparent p-3 pt-10 font-grotesk text-[9px] font-semibold uppercase tracking-[0.14em] text-bone opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-bone">{p.title}</span>
              {p.meta && <span className="text-yellow">{p.meta}</span>}
            </span>
          </button>
        ))}
      </div>
      {view}
    </section>
  );
}

export default PosterRail;

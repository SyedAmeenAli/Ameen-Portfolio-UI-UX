"use client";

import { useArtLightbox, type Art } from "@/components/sections/art-lightbox";

export type MediaItem = Art & { n?: string; span?: string; video?: boolean };

const SPANS = ["", "md:row-span-2", "md:col-span-2", "", "md:col-span-2 md:row-span-2", "", "md:row-span-2", ""];

/** Editorial media grid — images open the lightbox, videos autoplay muted/loop. */
export function MediaGrid({
  items,
  rows = "auto-rows-[52vw] sm:auto-rows-[34vw] md:auto-rows-[18vw]",
  cols = "grid-cols-2 md:grid-cols-4",
}: {
  items: MediaItem[];
  rows?: string;
  cols?: string;
}) {
  const imgs = items.filter((i) => !i.video);
  const { open, view } = useArtLightbox(imgs);

  return (
    <section className={`grid ${cols} gap-2 border-b border-purple/40 p-[1vw] ${rows}`}>
      {items.map((it, idx) => {
        const span = it.span ?? SPANS[idx % SPANS.length];
        if (it.video) {
          return (
            <figure key={idx} className={`group relative overflow-hidden border border-purple/25 bg-iron ${span}`}>
              <video src={it.src} muted loop autoPlay playsInline preload="metadata" className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent p-3 font-grotesk text-[9px] font-semibold uppercase tracking-[0.16em] text-bone">
                <span>{it.title}</span>
                {it.meta && <span className="text-purple">{it.meta}</span>}
              </figcaption>
            </figure>
          );
        }
        const li = imgs.indexOf(it);
        return (
          <button
            key={idx}
            onClick={() => open(li)}
            className={`group relative flex cursor-zoom-in flex-col justify-between overflow-hidden border border-purple/25 bg-iron text-left transition-colors hover:border-yellow ${span}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            {it.n && <span className="relative z-10 m-2 w-fit bg-bone px-1.5 py-0.5 font-grotesk text-[9px] font-bold text-black">{it.n}</span>}
            <span className="relative z-10 mt-auto translate-y-1 bg-gradient-to-t from-black/95 to-transparent p-3 pt-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block font-condensed text-sm uppercase leading-none text-bone">{it.title}</span>
              {it.meta && <span className="mt-1 block font-grotesk text-[9px] font-medium uppercase tracking-[0.12em] text-yellow">{it.meta}</span>}
            </span>
          </button>
        );
      })}
      {view}
    </section>
  );
}

export default MediaGrid;

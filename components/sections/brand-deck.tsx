"use client";

import { useArtLightbox, type Art } from "@/components/sections/art-lightbox";

/** Full case-study deck for a brand — contained thumbnails, click to full-screen. */
export function BrandDeck({ slides }: { slides: { src: string; title: string }[] }) {
  const arts: Art[] = slides.map((s, i) => ({
    src: s.src,
    title: s.title,
    meta: `${String(i + 1).padStart(2, "0")} / ${slides.length}`,
    bg: "#0a1a2f",
  }));
  const { open, view } = useArtLightbox(arts);

  return (
    <section className="border-b border-purple/40">
      <p className="px-[4vw] py-3 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">
        [ 07 ] Full case study — {slides.length} slides
      </p>
      <div className="grid gap-2 border-t border-purple/25 p-[1vw] sm:grid-cols-2 lg:grid-cols-3">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => open(i)}
            className="group relative cursor-zoom-in overflow-hidden border border-purple/25 bg-[#0a1a2f] transition-colors hover:border-yellow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.title}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent p-3 pt-8 font-grotesk text-[9px] font-semibold uppercase tracking-[0.16em] text-bone opacity-0 transition-opacity group-hover:opacity-100">
              <span>{s.title}</span>
              <span className="text-yellow">{String(i + 1).padStart(2, "0")} / {slides.length}</span>
            </span>
          </button>
        ))}
      </div>
      {view}
    </section>
  );
}

export default BrandDeck;

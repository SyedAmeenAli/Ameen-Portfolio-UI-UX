"use client";

import { useArtLightbox, type Art } from "@/components/sections/art-lightbox";

type Slide = { src: string; title: string; caption?: string };

/** Full case-study deck for a brand — contained thumbnails, click to full-screen.
 *  `phone` renders each slide inside a phone bezel (real app/site screens) and
 *  always shows a one-line explanation under the thumbnail, not just on hover. */
export function BrandDeck({ slides, phone, accent }: { slides: Slide[]; phone?: boolean; accent?: string }) {
  const arts: Art[] = slides.map((s, i) => ({
    src: s.src,
    title: s.title,
    caption: s.caption,
    meta: `${String(i + 1).padStart(2, "0")} / ${slides.length}`,
    bg: phone ? "#0c0b10" : "#0a1a2f",
    frame: phone ? "phone" : undefined,
  }));
  const { open, view } = useArtLightbox(arts);

  return (
    <section className="border-b border-purple/40">
      <p className="px-[4vw] py-3 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">
        [ 07 ] Full case study — {slides.length} slides
      </p>

      {phone ? (
        <div className="grid grid-cols-2 gap-5 border-t border-purple/25 p-[4vw] sm:grid-cols-3 lg:grid-cols-4">
          {slides.map((s, i) => (
            <button key={s.src} onClick={() => open(i)} className="group flex flex-col items-center gap-3 text-left">
              <span
                className="relative overflow-hidden rounded-[1.4rem] border-[6px] shadow-lg transition-transform group-hover:-translate-y-1"
                style={{ borderColor: "#17140f", background: "#17140f" }}
              >
                <span className="absolute left-1/2 top-0 z-10 h-[8px] w-[46px] -translate-x-1/2 rounded-b-md" style={{ background: "#17140f" }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  className="block aspect-[9/19.5] w-full rounded-[0.9rem] object-cover"
                />
              </span>
              <span className="w-full">
                <span className="flex items-center justify-between font-grotesk text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: accent ?? "var(--color-yellow)" }}>
                  {s.title}
                  <span className="text-bone/35">{String(i + 1).padStart(2, "0")}</span>
                </span>
                {s.caption && (
                  <span className="mt-1 block font-grotesk text-[10.5px] leading-snug text-bone/55">{s.caption}</span>
                )}
              </span>
            </button>
          ))}
        </div>
      ) : (
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
      )}
      {view}
    </section>
  );
}

export default BrandDeck;

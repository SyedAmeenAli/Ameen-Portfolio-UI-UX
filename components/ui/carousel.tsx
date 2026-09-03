"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * ui-layouts-style carousel — snap scroller with prev/next + dots.
 * Lightweight, no embla dependency.
 */
export function Carousel({
  children,
  className = "",
  aspect = "aspect-[4/5]",
}: {
  children: ReactNode[];
  className?: string;
  aspect?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = children.length;

  const go = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(count - 1, i));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  }, [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => setIndex(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        className={`flex snap-x snap-mandatory overflow-x-auto ${aspect} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {children.map((child, i) => (
          <div key={i} className="w-full shrink-0 snap-center">
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => go(index - 1)}
        disabled={index === 0}
        aria-label="Previous"
        className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-void/40 text-gold backdrop-blur disabled:opacity-20"
      >
        ‹
      </button>
      <button
        onClick={() => go(index + 1)}
        disabled={index === count - 1}
        aria-label="Next"
        className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-void/40 text-gold backdrop-blur disabled:opacity-20"
      >
        ›
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-gold" : "w-1.5 bg-bone/25"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

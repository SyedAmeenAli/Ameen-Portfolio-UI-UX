"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type Art = { src: string; title: string; meta?: string };

/** Editorial artwork viewer — click a piece, ESC / ← → to navigate. */
export function useArtLightbox(items: Art[]) {
  const [i, setI] = useState<number | null>(null);
  const close = useCallback(() => setI(null), []);
  const prev = useCallback(() => setI((v) => (v === null ? v : (v - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setI((v) => (v === null ? v : (v + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (i === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [i, close, prev, next]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const overlay = i === null ? null : (
    <div className="fixed inset-0 z-[100] flex flex-col bg-void/97 backdrop-blur" onClick={close}>
      <div className="flex items-center justify-between px-[4vw] py-4 font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-bone/60">
        <span>{items[i].title}{items[i].meta ? ` · ${items[i].meta}` : ""}</span>
        <span>{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden pb-6" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={items[i].src}
          alt={items[i].title}
          className="h-auto w-auto object-contain"
          style={{ maxHeight: "86dvh", maxWidth: "94vw" }}
        />
      </div>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"
        className="absolute left-1 top-1/2 -translate-y-1/2 font-condensed text-3xl text-bone/60 hover:text-yellow sm:left-[2vw] sm:text-4xl">←</button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"
        className="absolute right-1 top-1/2 -translate-y-1/2 font-condensed text-3xl text-bone/60 hover:text-yellow sm:right-[2vw] sm:text-4xl">→</button>
      <button onClick={close} aria-label="Close"
        className="absolute right-[4vw] top-4 font-condensed text-2xl text-yellow">✕</button>
    </div>
  );

  const view = mounted && overlay ? createPortal(overlay, document.body) : null;
  return { open: setI, view };
}

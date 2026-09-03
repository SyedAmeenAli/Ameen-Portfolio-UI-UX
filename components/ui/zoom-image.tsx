"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Click to open the image full-screen. Scroll / pinch to zoom, drag to pan,
 * click the backdrop or press Esc to close.
 */
export function ZoomImage({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const [panning, setPanning] = useState(false);

  const reset = useCallback(() => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => { reset(); setOpen(true); }}
        className={`group relative block w-full cursor-zoom-in overflow-hidden ${className}`}
        aria-label={`Zoom: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" />
        <span className="absolute bottom-3 right-3 border border-gold/50 bg-void/70 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-gold opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          zoom +
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[95] flex flex-col bg-void/95 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          onWheel={(e) => {
            e.preventDefault();
            setScale((s) => Math.min(6, Math.max(1, s - e.deltaY * 0.002)));
          }}
        >
          <div className="flex items-center justify-between px-[3vw] py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/60">
            <span>{caption ?? alt}</span>
            <span className="flex items-center gap-4">
              <button onClick={(e) => { e.stopPropagation(); reset(); }} className="hover:text-gold">reset</button>
              <button onClick={(e) => { e.stopPropagation(); setOpen(false); }} className="hover:text-gold">close ✕</button>
            </span>
          </div>

          <div
            className="flex flex-1 items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => {
              if (scale <= 1) return;
              drag.current = { x: e.clientX, y: e.clientY, ox: pos.x, oy: pos.y };
              setPanning(true);
              (e.target as Element).setPointerCapture?.(e.pointerId);
            }}
            onPointerMove={(e) => {
              const d = drag.current;
              if (!d) return;
              setPos({ x: d.ox + (e.clientX - d.x), y: d.oy + (e.clientY - d.y) });
            }}
            onPointerUp={() => { drag.current = null; setPanning(false); }}
            style={{ cursor: scale > 1 ? "grab" : "zoom-in" }}
            onDoubleClick={() => setScale((s) => (s > 1 ? 1 : 2.5))}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="max-h-full max-w-full select-none object-contain"
              style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`, transition: panning ? "none" : "transform 150ms" }}
            />
          </div>

          <p className="px-[3vw] py-3 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-bone/35">
            scroll to zoom · drag to pan · double-click to toggle
          </p>
        </div>
      )}
    </>
  );
}

export default ZoomImage;

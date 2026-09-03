"use client";

import { useState } from "react";
import ZoomImage from "@/components/ui/zoom-image";
import type { Piece } from "@/lib/work";

/** Universal 3-up gallery. Click any piece to zoom. */
export function Gallery({
  pieces,
  tile = "ink",
  fit = "cover",
}: {
  pieces: Piece[];
  tile?: "ink" | "paper";
  fit?: "cover" | "contain";
}) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-2 gap-3 px-[3vw] pb-[14vh] sm:gap-4 md:grid-cols-3">
      {pieces.map((p, i) => (
        <figure
          key={p.slug}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          className={`group relative overflow-hidden border border-steel/60 ${
            tile === "paper" ? "paper" : "bg-iron"
          }`}
        >
          <div className={fit === "contain" ? "p-6" : ""}>
            <div className={fit === "contain" ? "aspect-square" : ""}>
              <ZoomImage
                src={p.file}
                alt={p.title}
                caption={p.title}
                className={fit === "contain" ? "h-full [&_img]:h-full [&_img]:object-contain" : ""}
              />
            </div>
          </div>
          <figcaption
            className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-void/90 to-transparent px-3 pb-2 pt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-bone transition-opacity ${
              hover === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>{p.title}</span>
            <span className="text-red">{String(i + 1).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Gallery;

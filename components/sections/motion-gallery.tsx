"use client";

import type { Piece } from "@/lib/work";

export function MotionGallery({ pieces }: { pieces: Piece[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 px-[3vw] pb-[14vh] sm:grid-cols-2">
      {pieces.map((p, i) => (
        <figure key={p.slug} className="group relative overflow-hidden border border-ink/15 bg-ink">
          <video
            src={p.file}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-void/90 to-transparent px-3 pb-2 pt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-bone">
            <span>{p.title}</span>
            <span className="text-purple">{String(i + 1).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default MotionGallery;

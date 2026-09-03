"use client";

import dynamic from "next/dynamic";

const Cubes = dynamic(() => import("@/components/ui/cubes"), { ssr: false });

/** AMEEN — the name over a reactive 3D cube grid (Cubes tilt toward the cursor). */
export function NameCubes() {
  return (
    <section className="relative isolate overflow-hidden border-y border-steel/70 bg-ink py-[12vh]">
      <div aria-hidden className="absolute inset-0 -z-10 mx-auto max-w-5xl opacity-70">
        <Cubes gridSize={9} maxAngle={48} radius={3} faceColor="#0c0b0e" rippleColor="#7c3aed" borderStyle="1px solid rgba(124,58,237,0.25)" />
      </div>
      <h2 className="pointer-events-none text-center font-display text-[clamp(4rem,22vw,20rem)] uppercase leading-none tracking-[-0.05em] text-bone mix-blend-difference">
        Ameen
      </h2>
      <p className="pointer-events-none mt-4 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-yellow">
        move the cursor
      </p>
    </section>
  );
}

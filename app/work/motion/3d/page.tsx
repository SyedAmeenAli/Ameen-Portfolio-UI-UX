"use client";

import Link from "next/link";
import { PageShell } from "@/components/sections/page-shell";
import { MOTION } from "@/lib/work";
import { useArtLightbox, type Art } from "@/components/sections/art-lightbox";

const LABELS: Record<string, string> = { "3d-video-2": "Material Study" };
const clips = MOTION.filter((m) => m.slug.startsWith("3d"));

export default function Motion3DPage() {
  const arts: Art[] = clips.map((m) => ({ src: m.file, title: LABELS[m.slug] ?? m.title, meta: "3D · Blender · loop", video: true }));
  const { open, view } = useArtLightbox(arts);

  return (
    <PageShell
      active="work" label="3D Animations"
      header={{ num: "09 / B", line1: "3D", line2: "Animations", sub: ["Objects", "Environments", "Material studies"], copy: "Cinematic 3D — surreal geometry, materials and light that behave wrong on purpose." }}
    >
      <section className="divide-y divide-purple/30 border-b border-purple/40">
        {clips.map((m, i) => (
          <figure key={m.slug} className="grid gap-4 px-[4vw] py-[8vh] lg:grid-cols-[1fr_2.4fr] lg:items-center">
            <figcaption>
              <span className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-purple">[ {String(i + 1).padStart(2, "0")} ]</span>
              <h3 className="mt-2 font-condensed text-[clamp(1.8rem,5vw,3.5rem)] uppercase leading-none text-bone">{LABELS[m.slug] ?? m.title}</h3>
              <p className="mt-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/45">3D · Blender · loop</p>
            </figcaption>
            <button
              onClick={() => open(i)}
              className="group relative aspect-video w-full cursor-zoom-in overflow-hidden border border-purple/25"
            >
              <video src={m.file} muted loop autoPlay playsInline preload="metadata" className="h-full w-full object-cover" />
              <span className="pointer-events-none absolute right-3 top-3 bg-bone px-1.5 py-0.5 font-grotesk text-[9px] font-bold text-black opacity-0 transition-opacity group-hover:opacity-100">▶ Expand</span>
            </button>
          </figure>
        ))}
      </section>
      <div className="px-[4vw] py-[6vh]">
        <Link href="/work/motion/2d" className="inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">[ 2D Animations ] ↗</Link>
      </div>
      {view}
    </PageShell>
  );
}

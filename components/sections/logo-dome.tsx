"use client";

import dynamic from "next/dynamic";
import { LOGOS } from "@/lib/logos";

const DomeGallery = dynamic(() => import("@/components/ui/dome-gallery"), { ssr: false });

/** animated webp where we have it, still webp/jpg otherwise */
const src = (l: (typeof LOGOS)[number]) =>
  l.kind === "video" ? `/logos/${l.slug}.anim.webp` : l.kind === "image" ? `/logos/${l.slug}.webp` : `/logos/${l.slug}.jpg`;

/** 20 marks on an auto-rotating sphere; drag to spin, click to enlarge. */
export function LogoDome() {
  const images = LOGOS.filter((l) => l.kind !== "todo").map((l) => ({ src: src(l), alt: `${l.name} — ${l.type}` }));
  return (
    <div className="h-[86vh] w-full">
      <DomeGallery images={images} fit={0.62} minRadius={480} segments={28} autoSpin={0.05} overlayBlurColor="#060507" />
    </div>
  );
}

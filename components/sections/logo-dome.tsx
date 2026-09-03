"use client";

import dynamic from "next/dynamic";
import { LOGOS } from "@/lib/logos";

const DomeGallery = dynamic(() => import("@/components/ui/dome-gallery"), { ssr: false });

const still = (l: (typeof LOGOS)[number]) =>
  l.kind === "image" ? `/logos/${l.slug}.webp` : `/logos/${l.slug}.jpg`;

/** 20 marks on a draggable sphere; click to enlarge. */
export function LogoDome() {
  const images = LOGOS.filter((l) => l.kind !== "todo").map((l) => ({ src: still(l), alt: `${l.name} — ${l.type}` }));
  return (
    <div className="h-[86vh] w-full">
      <DomeGallery images={images} fit={0.62} minRadius={480} segments={28} grayscale={false} overlayBlurColor="#060507" />
    </div>
  );
}

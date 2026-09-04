import type { Metadata } from "next";
import { PageShell } from "@/components/sections/page-shell";
import { MediaGrid } from "@/components/sections/media-grid";

export const metadata: Metadata = { title: "UI / UX" };

/** Concept product work — interface thinking applied to fictional brands. */
const ITEMS = [
  { src: "/social/koro-coffee-machine-design-concept.jpg", title: "Koro — Machine UI", meta: "Product concept", span: "md:col-span-2 md:row-span-2" },
  { src: "/social/orbital-house-hotel-check-in-con.jpg", title: "Orbital House — Check-in", meta: "Flow concept" },
  { src: "/social/velora-03-motion-study-design.jpg", title: "Velora — Motion Study", meta: "Interaction" },
  { src: "/social/koro-architectural-coffee-cup-co.jpg", title: "Koro — System", meta: "Visual system", span: "md:col-span-2" },
  { src: "/social/orbital-house-rotating-hotel-con.jpg", title: "Orbital House — Concept", meta: "Environment" },
  { src: "/social/velora-shoe-on-moving-floor.jpg", title: "Velora — Configurator", meta: "Product concept" },
  { src: "/social/coffee-map-creative-direction-de.jpg", title: "Koro — Direction", meta: "Art direction", span: "md:col-span-2" },
];

export default function UiUxPage() {
  return (
    <PageShell
      active="work" label="UI / UX"
      header={{
        num: "11", line1: "I design", line2: "how things work.",
        sub: ["Product concepts", "Interface systems", "Interaction", "Direction"],
        copy: "Concept product work — interface thinking applied to fictional brands, not client NDAs.",
      }}
    >
      <MediaGrid items={ITEMS} rows="auto-rows-[56vw] sm:auto-rows-[34vw] md:auto-rows-[18vw]" cols="grid-cols-2 md:grid-cols-4" />
    </PageShell>
  );
}

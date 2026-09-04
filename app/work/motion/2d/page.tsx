import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sections/page-shell";
import { MediaGrid } from "@/components/sections/media-grid";
import { MOTION } from "@/lib/work";

export const metadata: Metadata = { title: "2D Motion" };

const LABELS = ["Kinetic Type", "Editorial Transition", "Abstract Shape System", "Brand Motion"];
const items = MOTION.filter((m) => m.slug.startsWith("2d")).map((m, i) => ({
  src: m.file, title: LABELS[i] ?? m.title, meta: "2D · loop", video: true,
  span: i === 0 ? "md:col-span-2 md:row-span-2" : "",
}));

export default function Motion2DPage() {
  return (
    <PageShell
      active="work" label="2D Motion"
      header={{ num: "09 / A", line1: "2D", line2: "Motion", sub: ["Kinetic type", "Loops", "Editorial transitions"], copy: "Short 2D pieces — type that moves, shapes with rules, brand motion." }}
    >
      <MediaGrid items={items} rows="auto-rows-[60vw] sm:auto-rows-[38vw] md:auto-rows-[24vw]" cols="grid-cols-1 md:grid-cols-2" />
      <div className="px-[4vw] py-[6vh]">
        <Link href="/work/motion/3d" className="inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow">
          [ 3D Motion ] ↗
        </Link>
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sections/page-shell";
import { MediaGrid } from "@/components/sections/media-grid";
import { MOTION } from "@/lib/work";

export const metadata: Metadata = { title: "2D / 3D Animations" };

const items = MOTION.map((m, i) => ({
  src: m.file,
  title: m.title.replace(/-/g, " "),
  meta: m.slug.startsWith("2d") ? "2D" : "3D",
  video: true,
  span: i === 0 ? "md:col-span-2 md:row-span-2" : i === 4 ? "md:col-span-2" : "",
}));

export default function MotionPage() {
  return (
    <PageShell
      active="work"
      label="Animations" quote={"Movement is · part of the design."}
      header={{
        num: "09",
        line1: "Animations",
        sub: ["2D", "3D", "Type in space", "Objects that behave wrong"],
        copy: "Movement is part of the design. Loops, kinetic type and 3D studies.",
      }}
    >
      <section className="flex flex-wrap gap-3 border-b border-purple/40 px-[4vw] py-4 font-grotesk text-[10px] font-semibold uppercase tracking-[0.18em]">
        <Link href="/work/motion/2d" className="border border-purple/40 px-4 py-2 text-bone hover:bg-purple hover:text-void">2D Animations ↗</Link>
        <Link href="/work/motion/3d" className="border border-purple/40 px-4 py-2 text-bone hover:bg-purple hover:text-void">3D Animations ↗</Link>
      </section>
      <MediaGrid items={items} rows="auto-rows-[56vw] sm:auto-rows-[34vw] md:auto-rows-[20vw]" cols="grid-cols-1 md:grid-cols-4" />
    </PageShell>
  );
}

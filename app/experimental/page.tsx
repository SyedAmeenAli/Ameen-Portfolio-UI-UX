import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { PageHeader } from "@/components/sections/page-header";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { MOTION } from "@/lib/work";

export const metadata: Metadata = { title: "Experimental" };

const EXPERIMENTS = [
  { t: "Type in Space", tag: "Motion / 2D", tool: "After Effects", dur: "00:06" },
  { t: "Object Wrong on Purpose", tag: "Motion / 3D", tool: "Blender", dur: "00:08" },
  { t: "Grid Break", tag: "Creative Coding", tool: "Canvas / JS", dur: "loop" },
  { t: "Displacement Study", tag: "Interactive", tool: "WebGL", dur: "loop" },
];

export default function ExperimentalPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="experimental" label="Experimental" />

      <PageHeader
        num="07"
        line1="Experi-"
        line2="mental"
        sub={["Play", "Research", "Motion", "Code", "Visual experiments"]}
        copy="Where the grid breaks a little. Motion, 3D, creative coding and things that behave wrong on purpose."
      >
        <div className="duo aspect-[3/4] w-full border border-purple/50">
          <video src={MOTION[0]?.file} muted loop autoPlay playsInline className="h-full w-full object-cover" />
        </div>
      </PageHeader>

      {/* MOTION GRID */}
      <section className="border-b border-purple/40 px-[4vw] py-[9vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none text-bone">[ Motion / 2D · 3D ]</h2>
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
          {MOTION.map((m, i) => (
            <figure key={m.slug} className="group relative overflow-hidden border border-bone/12 transition-colors hover:border-purple">
              <video src={m.file} muted loop autoPlay playsInline preload="metadata" className="aspect-video w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/90 to-transparent p-3 font-grotesk text-[9px] font-semibold uppercase tracking-[0.16em] text-bone">
                <span>{m.title}</span>
                <span className="text-purple">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* EXPERIMENT LIST */}
      <section className="border-b border-purple/40 px-[4vw] py-[9vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none text-bone">[ Research ]</h2>
        <ul className="mt-8 border-t border-purple/25">
          {EXPERIMENTS.map((e, i) => (
            <li key={e.t} className="group grid gap-2 border-b border-purple/25 py-6 transition-colors hover:bg-purple/10 md:grid-cols-[3rem_1fr_10rem_8rem_6rem] md:items-baseline">
              <span className="font-grotesk text-[11px] font-semibold text-yellow">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-condensed text-[clamp(1.4rem,4vw,2.4rem)] uppercase leading-none">{e.t}</span>
              <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-purple">{e.tag}</span>
              <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.14em] text-bone/45">{e.tool}</span>
              <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.14em] text-bone/45">{e.dur} ↗</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/40">
          Placeholder set — real experiments plug in here.
        </p>
      </section>

      <WorkBand />
      <SiteFooter />
    </main>
  );
}

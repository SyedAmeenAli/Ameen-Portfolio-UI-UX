import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { PackagingBrands } from "@/components/sections/packaging-brands";

export const metadata: Metadata = { title: "Design Packaging" };

export default function PackagingPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="packaging" label="Design Packaging" />

      <section className="border-b border-purple/40 px-[4vw] pb-[6vh] pt-[13vh]">
        <Link href="/work" className="-m-2 inline-block p-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-bone/45 hover:text-yellow">← All work</Link>
        <p className="mt-6 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 11 ] Design packaging</p>
        <h1 className="mt-2 font-condensed text-[clamp(3.4rem,15vw,12rem)] uppercase leading-[0.74]" style={{ color: "#f08fab" }}>Packaging</h1>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/60">
          <span>Dieline / structure / print artwork</span>
          <span className="text-purple">Mona&apos;s Baking</span>
          <span className="text-purple">Motif Coffee Works</span>
          <span>2026</span>
        </div>
        <p className="mt-6 max-w-[58ch] font-grotesk text-sm leading-relaxed text-bone/70">
          Every piece is drawn flat first, as a cut-and-crease dieline with print artwork, then the same panels are
          folded live in 3D. Drag a box to turn it, slide it flat, open the lids, switch sizes. Concept stage: the
          sizes are design values and no manufacturer has reviewed them yet.
        </p>
      </section>

      <PackagingBrands />

      <WorkBand quote={"Flat first · folded after."} />
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { BrowserWindow } from "@/components/sections/browser-window";
import { BrandDeck } from "@/components/sections/brand-deck";
import { MONAS_RENDERS, MONAS_DIELINES } from "@/lib/brands";

export const metadata: Metadata = { title: "Design Packaging" };

const VIEWER = "/packaging-3d/index.html";
const CHAPTERS = [
  { label: "Cake box", path: `${VIEWER}#box4` },
  { label: "Brownie", path: `${VIEWER}#tuck` },
  { label: "Cupcake", path: `${VIEWER}#cupbox` },
  { label: "Bento", path: `${VIEWER}#bento` },
  { label: "Cup", path: `${VIEWER}#cup` },
  { label: "Bag", path: `${VIEWER}#bag` },
  { label: "Stickers", path: `${VIEWER}#stickers` },
];

const PRODUCTS = [
  ["Handled cake box", "4, 6, 8, 10 and 12 inch", "Cross-layout tray, two half-lids, carry handle with a heart-tongue lock."],
  ["Brownie box", "5.5 in tuck-end", "Dust flaps and a glue tab, a four-brownie awning on the lid."],
  ["Cupcake window box", "4 cupcakes", "Die-cut window under a printed awning."],
  ["Bento box", "Window lid", "Low carton, one design for a small lunch."],
  ["Dessert cup", "90 mm top, 75 mm tall", "Fan-shaped blank rolled into a cone, plus a round base."],
  ["Paper bag", "180 x 90 x 240 mm", "Gusseted, with twisted-paper cords."],
];

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
          <span>2026</span>
        </div>
        <p className="mt-6 max-w-[58ch] font-grotesk text-sm leading-relaxed text-bone/70">
          Every piece is drawn flat first, as a cut-and-crease dieline with print artwork, then the same panels are
          folded live in 3D. Drag a box to turn it, slide it flat, open the lids, switch sizes. Concept stage: the
          sizes are design values and no manufacturer has reviewed them yet.
        </p>
      </section>

      <section className="border-b border-purple/40 bg-iron px-[3vw] py-[5vh]">
        <p className="mb-4 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ] Live 3D, fold it yourself</p>
        <BrowserWindow origin="" chapters={CHAPTERS} />
      </section>

      <section className="border-b border-purple/40">
        <p className="px-[4vw] py-3 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ] The system, {PRODUCTS.length} products</p>
        <div className="grid gap-px border-t border-purple/25 bg-purple/20 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map(([n, s, d], i) => (
            <div key={n} className="flex flex-col gap-2 bg-void p-5">
              <span className="font-condensed text-3xl leading-none text-purple">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-condensed text-xl uppercase leading-none text-bone">{n}</span>
              <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#f08fab" }}>{s}</span>
              <span className="font-grotesk text-[11px] leading-snug text-bone/60">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <BrandDeck slides={MONAS_RENDERS} accent="#f08fab" bg="#fdf1f1" num="04" label="3D renders" />
      <BrandDeck slides={MONAS_DIELINES} accent="#f08fab" bg="#ffffff" num="05" label="Dielines with print artwork" />

      <section className="border-b border-purple/40 px-[4vw] py-[12vh] text-center">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 06 ] Same brand, wider story</p>
        <h2 className="mt-4 font-condensed text-[clamp(2rem,8vw,6rem)] uppercase leading-[0.85]" style={{ color: "#f08fab" }}>Homemade bakes,<br />made with love.</h2>
        <Link href="/work/branding/monas-baking" className="mt-8 inline-flex items-center gap-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow">
          Mona&apos;s Baking identity case study →
        </Link>
      </section>

      <WorkBand quote={"Flat first · folded after."} />
      <SiteFooter />
    </main>
  );
}

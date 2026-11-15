"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { BrowserWindow } from "@/components/sections/browser-window";
import { BrandDeck } from "@/components/sections/brand-deck";
import { MONAS_RENDERS, MONAS_DIELINES, MOTIF_RENDERS, MOTIF_DIELINES } from "@/lib/brands";

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

const MOTIF_SITE = "https://motif-design-theta.vercel.app";
const MOTIF_CHAPTERS = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection.html" },
  { label: "3D Explorer", path: "/explore.html" },
  { label: "Case study", path: "/case-study.html" },
];

const PRODUCTS = [
  ["Handled cake box", "4, 6, 8, 10 and 12 inch", "Cross-layout tray, two half-lids, carry handle with a heart-tongue lock."],
  ["Brownie box", "5.5 in tuck-end", "Dust flaps and a glue tab, a four-brownie awning on the lid."],
  ["Cupcake window box", "4 cupcakes", "Die-cut window under a printed awning."],
  ["Bento box", "Window lid", "Low carton, one design for a small lunch."],
  ["Dessert cup", "90 mm top, 75 mm tall", "Fan-shaped blank rolled into a cone, plus a round base."],
  ["Paper bag", "180 x 90 x 240 mm", "Gusseted, with twisted-paper cords."],
];

type Key = "monas" | "motif";

const CARDS: { key: Key; name: string; line: string; meta: string; img: string; accent: string }[] = [
  { key: "monas", name: "Mona's Baking", line: "Cake, brownie, cupcake and bento boxes, cup and bag", meta: "6 products / live 3D / 5 sizes", img: "/brands/monas/01-cake-box-front.jpg", accent: "#f08fab" },
  { key: "motif", name: "Motif Coffee Works", line: "Pouches, tins, discovery box, takeaway and merch", meta: "26 renders / live site / dielines", img: "/brands/motif/01-family.jpg", accent: "#3b5bff" },
];

export function PackagingBrands() {
  const [open, setOpen] = useState<Key | null>(null);
  const top = useRef<HTMLDivElement>(null);

  const pick = (k: Key) => {
    const next = open === k ? null : k;
    setOpen(next);
    if (next) requestAnimationFrame(() => top.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <>
      <section className="border-b border-purple/40 px-[4vw] py-[5vh]">
        <p className="mb-4 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 02 ] Pick a system to open</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map((c) => {
            const on = open === c.key;
            return (
              <button
                key={c.key}
                onClick={() => pick(c.key)}
                aria-expanded={on}
                className="group flex items-stretch overflow-hidden border text-left transition-colors"
                style={{ borderColor: on ? c.accent : "rgba(160,90,255,.4)", background: on ? "rgba(255,255,255,.04)" : "transparent" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="" className="h-32 w-32 shrink-0 object-cover sm:h-36 sm:w-36" />
                <span className="flex flex-1 flex-col justify-center gap-1.5 p-4">
                  <span className="font-condensed text-2xl uppercase leading-none sm:text-3xl" style={{ color: c.accent }}>{c.name}</span>
                  <span className="font-grotesk text-[11px] leading-snug text-bone/65">{c.line}</span>
                  <span className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/45">{c.meta}</span>
                  <span className="mt-1 font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-yellow">{on ? "Close −" : "Open +"}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <div ref={top} className="scroll-mt-16" />

      {open === "monas" && (
        <>
      <section className="border-b border-purple/40 bg-iron px-[3vw] py-[5vh]">
        <p className="mb-4 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ] Mona&apos;s Baking: live 3D, fold it yourself</p>
        <BrowserWindow origin="" chapters={CHAPTERS} />
      </section>

      <section className="border-b border-purple/40">
        <p className="px-[4vw] py-3 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 04 ] Mona&apos;s system, {PRODUCTS.length} products</p>
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

      <BrandDeck slides={MONAS_RENDERS} accent="#f08fab" bg="#fdf1f1" num="05" label="Mona's: 3D renders" />
      <BrandDeck slides={MONAS_DIELINES} accent="#f08fab" bg="#ffffff" num="06" label="Mona's: dielines with print artwork" />

          <section className="border-b border-purple/40 px-[4vw] py-[8vh] text-center">
            <Link href="/work/branding/monas-baking" className="inline-flex items-center gap-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow">
              Mona&apos;s Baking identity case study &rarr;
            </Link>
          </section>
        </>
      )}

      {open === "motif" && (
        <>
      <section className="border-b border-purple/40 px-[4vw] pb-[5vh] pt-[10vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 03 ] The system</p>
        <h2 className="mt-2 font-condensed text-[clamp(3rem,13vw,10rem)] uppercase leading-[0.76]" style={{ color: "#3b5bff" }}>Motif Coffee Works</h2>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-bone/60">
          <span>Pouches / tins / discovery box / takeaway / merch</span>
          <span>2026</span>
        </div>
        <p className="mt-6 max-w-[58ch] font-grotesk text-sm leading-relaxed text-bone/70">
          A coffee brand built on one repeating shape, a four-petal bean-bloom. Four origins, four colours, one layout.
          Rendered in Blender (cloth simulation for the fabric) and live in the browser below. Fictional concept: sizes
          and board specs are assumptions until a supplier confirms.
        </p>
      </section>

      <section className="border-b border-purple/40 bg-iron px-[3vw] py-[5vh]">
        <p className="mb-4 font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 04 ] Motif: live site and 3D explorer</p>
        <BrowserWindow origin={MOTIF_SITE} chapters={MOTIF_CHAPTERS} />
      </section>

      <BrandDeck slides={MOTIF_RENDERS} accent="#3b5bff" bg="#14141a" num="05" label="Motif: 3D renders" />
      <BrandDeck slides={MOTIF_DIELINES} accent="#3b5bff" bg="#ffffff" num="06" label="Motif: print proofs and dielines" />

        </>
      )}
    </>
  );
}

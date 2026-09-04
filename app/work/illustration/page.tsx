import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hatch, Globe } from "@/components/sections/editorial-bits";

export const metadata: Metadata = { title: "Illustration" };

type Item = {
  n: string; title: string; f: string; desc?: string;
  span?: string; tint?: boolean; feature?: boolean;
};

const ITEMS: Item[] = [
  { n: "01", title: "The Apple Princess", f: "/illustration/apple-princess-in-fashion-pose.png", desc: "A character exploration of fashion, food and fantasy.", span: "md:col-span-2 md:row-span-2", feature: true },
  { n: "02", title: "The Baker", f: "/illustration/baker-holding-large-rolling-pin.png", desc: "A quiet moment in a busy world.", span: "md:row-span-2" },
  { n: "03", title: "The Bird Man", f: "/illustration/bird-man-leaning-forward.png", desc: "Between reality and imagination." },
  { n: "04", title: "Young Woman Walking", f: "/illustration/young-woman-walking-forward-illu.png" },
  { n: "05", title: "Woman in Mask Coat", f: "/illustration/woman-wearing-mask-coat.png" },
  { n: "06", title: "Faswinn Studies", f: "/illustration/woman-holding-motorcycle-helmet.png", desc: "Character work.", span: "md:col-span-2 md:row-span-2", tint: true },
  { n: "07", title: "Expressions", f: "/illustration/chaotic-artist-girl-holding-pain.png", tint: true },
  { n: "08", title: "Pixel Experiments", f: "/me/front.png", desc: "Same ideas, different forms." },
  { n: "09", title: "Beauty in the Small Things", f: "/illustration/woman-in-red-dress-illustration.png", span: "md:col-span-2" },
];

export default function IllustrationPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="illustration" label="Illustration" />

      {/* ============ HEADER ============ */}
      <section className="border-b border-purple/40 px-[3vw] pb-[5vh] pt-[13vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 04 ]</p>
        <div className="mt-2 grid gap-x-[3vw] gap-y-[3vh] lg:grid-cols-[2fr_0.8fr_0.7fr] lg:items-start">
          <h1 className="font-condensed text-[clamp(3rem,17vw,13rem)] uppercase leading-[0.72] text-bone">
            Illustration <span className="align-top text-[0.18em] text-purple">↘</span>
          </h1>
          <div className="border-l border-purple/25 pl-4">
            <p className="font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
              Characters /<br />Concepts /<br />Visual explorations.
            </p>
            <p className="mt-5 font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-bone/45">
              Drawing<br />different<br />perspectives.
            </p>
            <Hatch className="mt-4" />
          </div>
          <div className="border-l border-purple/25 pl-4">
            <p className="font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-bone/45">
              Art<br />lives<br />in<br />details.
            </p>
            <Globe className="mt-4 h-8 w-8" />
          </div>
        </div>
      </section>

      {/* ============ EDITORIAL MASONRY ============ */}
      <section className="grid auto-rows-[26vw] grid-cols-2 gap-2 border-b border-purple/40 p-[1vw] md:auto-rows-[15vw] md:grid-cols-4">
        {ITEMS.map((it) => (
          <Link
            key={it.n}
            href="/work/illustration"
            className={`group relative flex flex-col justify-between overflow-hidden border border-purple/25 ${it.tint ? "bg-purple/20" : "bg-iron"} ${it.span ?? ""} transition-colors hover:border-yellow`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={it.f}
              alt={it.title}
              className={`absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04] ${it.tint ? "mix-blend-luminosity opacity-90" : ""}`}
            />
            <span className="relative z-10 m-2 w-fit bg-bone px-1.5 py-0.5 font-grotesk text-[9px] font-bold text-black">{it.n}</span>
            {(it.feature || it.desc) && (
              <span className="relative z-10 bg-gradient-to-t from-black/95 to-transparent p-3 pt-8">
                <span className="block font-condensed text-sm uppercase leading-none text-bone">{it.title}</span>
                {it.desc && <span className="mt-1 block font-grotesk text-[9px] font-medium uppercase tracking-[0.12em] text-bone/55">{it.desc}</span>}
                {it.feature && <span className="mt-2 inline-block font-grotesk text-[9px] font-semibold uppercase tracking-[0.16em] text-yellow">[ View project ] ↗</span>}
              </span>
            )}
          </Link>
        ))}
      </section>

      <WorkBand />
      <SiteFooter mid="Ideas live longer ↓" />
    </main>
  );
}

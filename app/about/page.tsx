import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { PageHeader } from "@/components/sections/page-header";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const ROLES = ["A UI/UX Designer", "A Visual Designer", "A Product Designer", "A Digital Creative"];
const TOOLS = ["Figma", "Photoshop", "Illustrator", "After Effects", "Blender", "Spline", "Framer", "Canva"];
const CAPABILITIES = ["Brand identity systems", "UI / UX & product design", "Visual & editorial design", "Illustration", "Motion — 2D / 3D", "Type & colour systems"];

export default function AboutPage() {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active="about" label="About" />

      <PageHeader
        num="15"
        line1="Who"
        line2="Am I?"
        sub={["A UI/UX designer", "A visual designer", "A product designer", "A digital creative"]}
        copy={SITE.polaroid.info}
      >
        <div className="border border-purple/40 p-4">
          <p className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-purple">Based in</p>
          <p className="mt-1 font-condensed text-xl uppercase text-bone">Hyderabad, India</p>
          <p className="mt-4 font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-purple">Available for</p>
          <p className="mt-1 font-condensed text-xl uppercase text-yellow">Select projects</p>
        </div>
      </PageHeader>

      {/* PIXEL SELF + STATEMENT */}
      <section className="grid border-b border-purple/40 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative border-purple/30 p-[3vw] lg:border-r">
          <span className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-purple">[ 01 ] The pixel self</span>
          <div className="relative mt-4 border-2 border-purple/50 p-2" style={{ backgroundImage: "repeating-linear-gradient(0deg,rgba(176,0,255,0.08) 0 1px,transparent 1px 8px),repeating-linear-gradient(90deg,rgba(176,0,255,0.08) 0 1px,transparent 1px 8px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me/front.png" alt="Ameen, pixelated" className="mx-auto max-h-[62vh] w-auto object-contain" style={{ imageRendering: "pixelated" }} />
            <span className="absolute -right-3 -top-3 bg-yellow px-2 py-0.5 font-grotesk text-[9px] font-bold text-black">01</span>
          </div>
          <p className="mt-3 font-grotesk text-[9px] font-semibold uppercase tracking-[0.2em] text-bone/45">
            The face stays a mark, not a photo.
          </p>
        </div>
        <div className="flex flex-col justify-center p-[3vw]">
          <h2 className="font-condensed text-[clamp(2.4rem,8vw,6.5rem)] uppercase leading-[0.82] text-bone">
            I design how<br /><span className="text-yellow">things feel.</span>
          </h2>
          <p className="mt-6 max-w-[42ch] font-grotesk text-sm leading-relaxed text-bone/70">{SITE.bio[1]}</p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {["UI / UX", "Product Design", "Branding", "Visual Design", "Interaction", "Prototyping"].map((d) => (
              <span key={d} className="border-t border-purple/25 pt-1.5 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/60">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="grid gap-[6vh] border-b border-purple/40 px-[4vw] py-[10vh] lg:grid-cols-2">
        <div>
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">[ How I think ]</p>
          <div className="mt-4 max-w-[46ch] space-y-4 font-grotesk text-sm leading-relaxed text-bone/70">
            {SITE.bio.map((p) => (
              <p key={p} className={p.startsWith("Hi,") ? "font-semibold text-bone" : ""}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">[ Design philosophy ]</p>
          <ul className="mt-4 space-y-3">
            {SITE.manifesto.map((m) => (
              <li key={m} className="border-t border-purple/25 pt-2 font-condensed text-[clamp(1.1rem,2.4vw,1.7rem)] uppercase leading-tight text-bone">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CAPABILITIES + TOOLS */}
      <section className="grid gap-[6vh] border-b border-purple/40 px-[4vw] py-[10vh] lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">[ What I do ]</p>
          <ul className="mt-6 divide-y divide-purple/20 border-y border-purple/25">
            {CAPABILITIES.map((c, i) => (
              <li key={c} className="flex items-baseline gap-4 py-4">
                <span className="font-grotesk text-[11px] font-semibold text-yellow">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-condensed text-[clamp(1.4rem,4vw,2.4rem)] uppercase leading-none">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">[ Tools ]</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <span key={t} className="border border-purple/30 px-3 py-1.5 font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/70">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-10 font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">[ Currently exploring ]</p>
          <p className="mt-3 max-w-[30ch] font-grotesk text-sm text-bone/60">
            Interactive web, generative visuals, and motion as part of identity systems.
          </p>
        </div>
      </section>

      {/* ROLES BAND */}
      <section className="grid border-b border-purple/40 sm:grid-cols-2 lg:grid-cols-4">
        {ROLES.map((r, i) => (
          <div key={r} className={`p-6 ${i ? "border-t border-purple/25 lg:border-l lg:border-t-0" : ""}`}>
            <span className="font-grotesk text-[11px] font-semibold text-purple">&gt;</span>
            <p className="mt-2 font-condensed text-lg uppercase leading-none text-bone">{r}</p>
          </div>
        ))}
      </section>

      {/* SIGNATURE */}
      <section className="flex flex-col items-center gap-4 border-b border-purple/40 px-[4vw] py-[10vh] text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo-mark.png" alt="Ameen Ali mark" className="h-20 w-auto opacity-90" />
        <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-bone/45">
          Ameen Ali — designed, not templated.
        </p>
      </section>

      <WorkBand />
      <SiteFooter />
    </main>
  );
}

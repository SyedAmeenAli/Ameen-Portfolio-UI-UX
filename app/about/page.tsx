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

      {/* INTRO + PHILOSOPHY */}
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

      <WorkBand />
      <SiteFooter />
    </main>
  );
}

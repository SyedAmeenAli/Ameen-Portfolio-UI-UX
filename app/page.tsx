import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { PixelMe } from "@/components/landing/pixel-me";
import { SkillsRing } from "@/components/landing/skills-ring";
import { Universe } from "@/components/landing/universe";
import { CreativeHead } from "@/components/landing/creative-head";
import { MindMap } from "@/components/landing/mindmap";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

      <Reveal kind="settle">
        <About />
      </Reveal>

      <section className="grid items-center gap-[8vh] px-[3vw] py-[10vh] md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-[5vw]">
        <Reveal kind="rise">
          <PixelMe />
        </Reveal>
        <Reveal kind="rise" delay={0.08}>
          <SkillsRing />
        </Reveal>
      </section>

      <Universe />

      <Reveal kind="settle">
        <CreativeHead />
      </Reveal>

      <Reveal kind="rise">
        <MindMap />
      </Reveal>

      {/* the last word */}
      <section className="px-[3vw] pb-[18vh] pt-[6vh]">
        <Reveal kind="rise">
          <p className="max-w-[18ch] font-display text-[clamp(2rem,9vw,9rem)] uppercase leading-[0.84] tracking-[-0.035em]">
            {SITE.thesis}
          </p>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-purple">
            {SITE.name} · {SITE.year}
          </p>
        </Reveal>
      </section>
    </main>
  );
}

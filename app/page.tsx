import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { PixelMe } from "@/components/landing/pixel-me";
import { SkillsRing } from "@/components/landing/skills-ring";
import { Universe } from "@/components/landing/universe";
import { CreativeHead } from "@/components/landing/creative-head";
import { MindMap } from "@/components/landing/mindmap";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />

      <section className="mx-auto grid w-[min(1240px,94vw)] items-center gap-16 py-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <PixelMe />
        <SkillsRing />
      </section>

      <Universe />
      <CreativeHead />
      <MindMap />
    </main>
  );
}

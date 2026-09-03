"use client";

import dynamic from "next/dynamic";
import ScrollBaseAnimation from "@/components/ui/scroll-text-marque";

const CRTWarp = dynamic(() => import("@/components/ui/crt-warp"), { ssr: false });

const TOOLS = [
  "Figma", "Photoshop", "Illustrator", "After Effects", "Premiere",
  "InDesign", "Blender", "Spline", "Framer", "Canva", "Webflow", "Notion",
];

/** Dark universe band — CRT-warped plasma, the black cat, tool names drifting. */
export function UniverseBand() {
  return (
    <section className="relative isolate my-24 h-[86vh] overflow-hidden border-y border-steel/70 bg-void">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-40">
        <CRTWarp color="#f0b323" backgroundColor="#060507" bloom={1.2} scanlineStrength={0.18} vignette={0.4} fps={24} />
      </div>

      {/* the cat, framed in a burning red rectangle */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[min(520px,72vw)] -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative overflow-hidden border-2 border-ember"
          style={{ boxShadow: "0 0 60px 6px rgba(255,59,47,0.4), inset 0 0 40px rgba(0,0,0,0.7)" }}
        >
          <video
            src="/media/cat.mp4"
            poster="/media/cat.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="block h-full w-full object-cover"
          />
        </div>
        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-bone/45">
          UI / UX <span className="text-gold">✦</span> the tools I live in
        </p>
      </div>

      {/* tool names, right to left, behind the cat */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-[3vh]">
        <ScrollBaseAnimation baseVelocity={-3} clasname="font-display uppercase text-[7vw] leading-[0.9] stroke text-bone/25 tracking-[-0.03em]">
          {TOOLS.slice(0, 6).join("  ·  ")} ·&nbsp;
        </ScrollBaseAnimation>
        <ScrollBaseAnimation baseVelocity={-4.5} clasname="font-display uppercase text-[4.5vw] leading-[0.9] stroke text-bone/15 tracking-[-0.03em]">
          {TOOLS.slice(6).join("  ·  ")} ·&nbsp;
        </ScrollBaseAnimation>
      </div>
    </section>
  );
}

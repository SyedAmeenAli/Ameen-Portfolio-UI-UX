"use client";

import dynamic from "next/dynamic";
import { MINDMAP } from "@/lib/site";

const FlowingMenu = dynamic(() => import("@/components/ui/flowing-menu"), { ssr: false });

const THUMB: Record<string, string> = {
  logos: "/logos/altivia.jpg",
  branding: "/brands/nexora-brand-visualisation.jpg",
  posters: "/posters/collage-showing-404-error-doorway.jpg",
  social: "/posters/electronic-music-poster-afterlight.jpg",
  thumbnails: "/posters/giant-eye-floating-above-city.jpg",
  illustration: "/posters/impossible-flower-growing-from-s.jpg",
  typography: "/posters/minimalist-art-poster-the-unseen.jpg",
  motion: "/posters/abstract-wave-floating-in-void.jpg",
  colours: "/posters/synesthesia-visual-music-poster.jpg",
};

/** The mind map — a flowing-menu list; hover floods a marquee, click routes. */
export function MindMap() {
  return (
    <section id="index" className="border-t border-steel/70">
      <div className="px-[4vw] py-[10vh]">
        <h2 className="font-condensed text-[clamp(2.4rem,9vw,7rem)] uppercase">What I Make</h2>
        <p className="mt-3 max-w-md text-sm text-bone/55">Eight disciplines, one practice. Hover a thread, follow it in.</p>
      </div>
      <div className="h-[80vh]">
        <FlowingMenu
          items={MINDMAP.map((m) => ({ text: m.label, link: m.href, image: THUMB[m.key] ?? THUMB.logos }))}
          bgColor="#060507"
          textColor="#efe9dd"
          marqueeBgColor="#f0b323"
          marqueeTextColor="#060507"
          borderColor="#2b2a31"
        />
      </div>
    </section>
  );
}

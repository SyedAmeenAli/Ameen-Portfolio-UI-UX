"use client";

import type { Logo } from "@/lib/logos";
import { LogoTile } from "./logo-tile";

/**
 * Right-to-left ribbon. Pure CSS transform animation (compositor-friendly),
 * pauses on hover. Two copies of the set give a seamless -50% loop.
 */
export function LogoMarquee({
  logos,
  onOpen,
}: {
  logos: Logo[];
  onOpen: (n: number) => void;
}) {
  const strip = [...logos, ...logos];

  return (
    <div className="marquee relative overflow-hidden border-y border-ink/10 bg-paper py-6">
      <div className="marquee-track flex w-max gap-4">
        {strip.map((logo, i) => (
          <LogoTile
            key={`${logo.slug}-${i}`}
            logo={logo}
            onOpen={onOpen}
            compact
          />
        ))}
      </div>
    </div>
  );
}

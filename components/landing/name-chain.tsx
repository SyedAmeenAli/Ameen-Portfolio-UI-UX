"use client";

import { useState } from "react";
import { play } from "@/lib/sound";

const LETTERS = ["A", "M", "E", "E", "N"];

/** Five tiles hung from a chain. Idle: purple glow travels tile to tile.
 *  Hover any tile: that tile lights and the wave restarts from it. */
export function NameChain() {
  const [hot, setHot] = useState<number | null>(null);

  return (
    <div className="relative mt-10 select-none">
      {/* the chain the tiles hang from */}
      <svg
        aria-hidden
        viewBox="0 0 1000 44"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-11 w-full"
      >
        <defs>
          {/* one chain link, tiled along the slack curve */}
          <pattern id="chain-link" width="18" height="44" patternUnits="userSpaceOnUse">
            <ellipse
              cx="9"
              cy="22"
              rx="7"
              ry="4.4"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="2.2"
              opacity="0.7"
            />
          </pattern>
        </defs>
        <path
          d="M0 18 Q 250 40 500 26 T 1000 18"
          fill="none"
          stroke="url(#chain-link)"
          strokeWidth="16"
        />
      </svg>

      <ul className="flex flex-wrap items-start justify-center gap-3 pt-6 md:gap-6">
        {LETTERS.map((l, i) => (
          <li key={i} className="tile-sway" style={{ animationDelay: `${i * 0.35}s` }}>
            {/* link connecting tile to the chain */}
            <span aria-hidden className="mx-auto block h-6 w-[3px] bg-ink/60" />
            <button
              onMouseEnter={() => {
                setHot(i);
                play("glow");
              }}
              onMouseLeave={() => setHot(null)}
              className={`chain-glow grain grid h-[clamp(64px,12vw,170px)] w-[clamp(58px,10.5vw,150px)] place-items-center border-2 border-ink font-display text-[clamp(1.6rem,5.4vw,4.6rem)] ${
                hot === i ? "!bg-purple !text-pure" : ""
              }`}
              style={{
                animationDelay: `${i * 0.6}s`,
                boxShadow: hot === i ? "0 0 44px 8px var(--color-purple-glow)" : undefined,
              }}
              aria-label={l}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

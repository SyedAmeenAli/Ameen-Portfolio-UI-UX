"use client";

import { forwardRef, useRef, useState } from "react";
import type { Logo } from "@/lib/logos";
import { play } from "@/lib/sound";

type Props = {
  logo: Logo;
  onOpen?: (n: number) => void;
  /** compact = marquee ribbon size, full = index cell */
  compact?: boolean;
};

export const LogoTile = forwardRef<HTMLButtonElement, Props>(function LogoTile(
  { logo, onOpen, compact = false },
  ref,
) {
  const v = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const still = logo.kind === "image" ? `/logos/${logo.slug}.webp` : `/logos/${logo.slug}.jpg`;

  const enter = () => {
    if (logo.kind === "todo") return;
    play("hover");
    if (logo.kind !== "video" || compact) return;
    v.current?.play().then(() => setPlaying(true)).catch(() => {});
  };
  const leave = () => {
    const el = v.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
    setPlaying(false);
  };

  return (
    <button
      ref={ref}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => {
        if (logo.kind === "todo") return;
        play("open");
        onOpen?.(logo.n);
      }}
      className={`logo-tile group relative isolate block shrink-0 ${
        compact ? "h-40 w-40 md:h-52 md:w-52" : "aspect-square w-full"
      }`}
    >
      {/* torn backing sheet — filtered, so the artwork above stays sharp */}
      <span
        aria-hidden
        className="absolute -z-10 bg-pure"
        style={{ inset: -7, filter: "url(#tear-fine)" }}
      />
      <span className="absolute inset-0 block overflow-hidden">
        {logo.kind === "todo" ? (
          <span className="grid h-full w-full place-items-center font-mono text-[9px] uppercase tracking-[0.25em] text-ink/25">
            {String(logo.n).padStart(2, "0")}
            <br />
            pending
          </span>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={still}
              alt={logo.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {logo.kind === "video" && !compact && (
              <video
                ref={v}
                src={`/logos/${logo.slug}.mp4`}
                muted
                loop
                playsInline
                preload="none"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
                  playing ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </>
        )}
      </span>

      {/* purple wash */}
      <span className="pointer-events-none absolute inset-0 bg-purple/0 mix-blend-multiply transition-colors duration-300 group-hover:bg-purple/20" />
    </button>
  );
});

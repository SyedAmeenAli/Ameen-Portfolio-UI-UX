"use client";

import { forwardRef, useRef, useState } from "react";
import type { Logo } from "@/lib/logos";
import { play } from "@/lib/sound";

type Props = {
  logo: Logo;
  onOpen?: (n: number) => void;
  /** compact = marquee ribbon size, full = grid card */
  compact?: boolean;
};

export const LogoTile = forwardRef<HTMLButtonElement, Props>(function LogoTile(
  { logo, onOpen, compact = false },
  ref,
) {
  const v = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const still =
    logo.kind === "image" ? `/logos/${logo.slug}.webp` : `/logos/${logo.slug}.jpg`;

  const enter = () => {
    if (logo.kind === "todo") return;
    play("hover");
    if (logo.kind !== "video") return;
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
      className={`logo-tile group relative shrink-0 overflow-hidden border border-ink/12 bg-pure ${
        compact ? "h-40 w-40 md:h-52 md:w-52" : "aspect-square w-full"
      }`}
    >
      <span className="absolute left-2 top-2 z-20 font-mono text-[11px] text-ink/45 transition-colors group-hover:text-purple">
        {String(logo.n).padStart(2, "0")}
      </span>

      {logo.kind === "todo" ? (
        <span className="grid h-full w-full place-items-center font-mono text-[10px] uppercase tracking-widest text-ink/25">
          slot {logo.n}
        </span>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={still}
            alt={logo.name}
            loading="lazy"
            className="logo-media absolute inset-0 h-full w-full object-cover"
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

      {/* purple wash on hover */}
      <span className="pointer-events-none absolute inset-0 bg-purple/0 mix-blend-multiply transition-colors duration-300 group-hover:bg-purple/25" />

      <span className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-ink/85 px-3 py-2 text-left text-[10px] uppercase leading-tight tracking-wide text-paper transition-transform duration-300 group-hover:translate-y-0">
        {logo.name}
        {logo.tag ? <span className="text-yellow"> · {logo.tag}</span> : ""}
      </span>
    </button>
  );
});

"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import type { Logo } from "@/lib/logos";
import { Crack } from "./crack";
import { play } from "@/lib/sound";

export function LogoLightbox({
  logos,
  current,
  setCurrent,
}: {
  logos: Logo[];
  current: number | null;
  setCurrent: (n: number | null) => void;
}) {
  const shell = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  const idx = logos.findIndex((l) => l.n === current);
  const logo = idx >= 0 ? logos[idx] : null;

  const step = useCallback(
    (dir: number) => {
      if (idx < 0) return;
      let next = idx;
      for (let k = 0; k < logos.length; k++) {
        next = (next + dir + logos.length) % logos.length;
        if (logos[next].kind !== "todo") break;
      }
      play("click");
      setCurrent(logos[next].n);
    },
    [idx, logos, setCurrent],
  );

  useEffect(() => {
    if (current == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        play("close");
        setCurrent(null);
      }
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, step, setCurrent]);

  useEffect(() => {
    if (current == null || !shell.current || !card.current) return;
    gsap.fromTo(shell.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
    gsap.fromTo(
      card.current,
      { scale: 0.82, y: 24, rotate: -1.5 },
      { scale: 1, y: 0, rotate: 0, duration: 0.5, ease: "expo.out" },
    );
  }, [current]);

  if (current == null || !logo) return null;

  return (
    <div
      ref={shell}
      onClick={() => {
        play("close");
        setCurrent(null);
      }}
      className="fixed inset-0 z-[95] grid place-items-center bg-ink/85 p-6 backdrop-blur-sm"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          step(-1);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-3xl text-paper/60 hover:text-yellow md:left-10"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          step(1);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-3xl text-paper/60 hover:text-yellow md:right-10"
        aria-label="Next"
      >
        ›
      </button>

      <div
        ref={card}
        onClick={(e) => e.stopPropagation()}
        className="grain torn relative w-[min(560px,90vw)] bg-pure p-6"
      >
        <Crack className="-left-3 top-1/4 h-1/2 w-6" vertical />
        <div className="relative aspect-square overflow-hidden border border-ink/10 shadow-torn">
          {logo.kind === "video" ? (
            <video
              key={logo.slug}
              src={`/logos/${logo.slug}.mp4`}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/logos/${logo.slug}.webp`}
              alt={logo.name}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl uppercase leading-none">{logo.name}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-purple">
              {[logo.type, logo.line].filter(Boolean).join(" · ")}
            </p>
          </div>
          <span className="font-mono text-sm text-ink/40">
            {String(logo.n).padStart(2, "0")} / {String(logos.length).padStart(2, "0")}
          </span>
        </div>
        {logo.line && <p className="mt-3 text-sm text-ink/70">{logo.line}</p>}
      </div>
    </div>
  );
}

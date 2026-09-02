"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SITE } from "@/lib/site";
import { RingChain } from "./ring-chain";
import { play } from "@/lib/sound";

export function CreativeHead() {
  const video = useRef<HTMLVideoElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);
  const [shot, setShot] = useState(false);

  const develop = useCallback(() => {
    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setShot(true);
    if (card.current) {
      gsap.fromTo(
        card.current,
        { y: -40, autoAlpha: 0, rotate: -6, scale: 0.9 },
        { y: 0, autoAlpha: 1, rotate: -3, scale: 1, duration: 0.9, ease: "expo.out" },
      );
    }
  }, []);

  const fire = () => {
    const v = video.current;
    setShot(false);
    play("shutter");

    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      develop();
      return;
    }

    v.currentTime = 0;
    v.play().catch(() => {});
    // the card still develops if playback is blocked or stalls
    const wait = (Number.isFinite(v.duration) ? v.duration : 4) * 1000 + 400;
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(develop, wait);
  };

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  return (
    <section className="relative mx-auto w-[min(1240px,94vw)] py-24">
      <div className="grid gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
        {/* camera */}
        <div className="relative">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-purple">
            « press me »
          </p>

          <button
            onClick={fire}
            className="group relative block w-full max-w-[380px] cursor-pointer overflow-hidden border border-ink/15 bg-ink shadow-lift transition-transform duration-300 hover:-translate-y-1"
            aria-label="Take a polaroid"
          >
            <video
              ref={video}
              src="/media/polaroid.mp4"
              poster="/media/polaroid.jpg"
              muted
              playsInline
              preload="metadata"
              onEnded={develop}
              className="w-full"
            />
            {/* purple vignette so the dark booth reads as part of the palette */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(90% 70% at 50% 45%, transparent 40%, rgba(76,29,149,0.45) 100%)",
              }}
            />
            <span className="pointer-events-none absolute inset-0 bg-purple/0 transition-colors duration-300 group-hover:bg-purple/15" />
            {!shot && (
              <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.35em] text-paper/70">
                tap to shoot
              </span>
            )}
          </button>

          {/* the developed card */}
          <div
            ref={card}
            className={`mt-2 max-w-[300px] -rotate-3 bg-pure p-3 pb-10 shadow-lift ${
              shot ? "" : "invisible opacity-0"
            }`}
          >
            <div className="grid aspect-square place-items-center bg-ink px-4 text-center">
              <div>
                <p className="font-display text-xl uppercase leading-tight text-paper">
                  {SITE.polaroid.line1}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-yellow">
                  {SITE.polaroid.line2}
                </p>
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-ink/55">
              {SITE.polaroid.info}
            </p>
          </div>
        </div>

        {/* title block + decor */}
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,6.4vw,5rem)] uppercase leading-[0.86] tracking-tight">
              <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-ink)]">
                Your
              </span>
              <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-ink)]">
                Creative
              </span>
              <span className="block">Head</span>
            </h2>

            {/* trust the process stamp */}
            <span className="mt-2 grid h-24 w-24 shrink-0 rotate-[8deg] place-items-center rounded-full border-2 border-purple text-center font-mono text-[9px] uppercase leading-tight tracking-widest text-purple md:h-28 md:w-28">
              Trust
              <br />
              the
              <br />
              process
            </span>
          </div>

          {/* chevrons */}
          <div aria-hidden className="mt-6 flex gap-1 text-ink/35">
            {[0, 1, 2].map((i) => (
              <svg key={i} width="34" height="18" viewBox="0 0 34 18" fill="none">
                <path d="M2 16 L17 3 L32 16" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            ))}
          </div>

          {/* chain of rings */}
          <div className="mt-8 border-y border-ink/10 py-3">
            <RingChain />
          </div>

          {/* scan me */}
          <div className="mt-8 inline-block text-center">
            <div aria-hidden className="flex h-14 items-end gap-[3px]">
              {Array.from({ length: 34 }, (_, i) => (
                <span
                  key={i}
                  className="block bg-ink"
                  style={{
                    width: (i * 7) % 3 === 0 ? 4 : 2,
                    height: `${60 + ((i * 37) % 40)}%`,
                  }}
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
              scan me
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

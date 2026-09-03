"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { play } from "@/lib/sound";

type Card = {
  id: string;
  /** caption printed under the frame */
  caption: string;
  /** what fills the window */
  render: "avatar-front" | "avatar-back" | "avatar-side" | "type";
  line?: string;
  tilt: number;
  x: number;
  y: number;
};

const DECK: Card[] = [
  { id: "a", caption: "front", render: "avatar-front", tilt: -7, x: -8, y: 2 },
  { id: "b", caption: "back", render: "avatar-back", tilt: 5, x: 5, y: -4 },
  { id: "c", caption: "side", render: "avatar-side", tilt: -2, x: 16, y: 6 },
  {
    id: "d",
    caption: `${SITE.name} · ${SITE.role}`,
    render: "type",
    line: SITE.polaroid.info,
    tilt: 9,
    x: 27,
    y: -2,
  },
];

const SRC: Record<string, string> = {
  "avatar-front": "/me/front-cut.webp",
  "avatar-back": "/me/back-cut.webp",
  "avatar-side": "/me/side-cut.webp",
};

/**
 * A scattered stack of prints. Each one can be picked up and thrown; it keeps
 * the momentum of the throw and settles with a little drift, so the pile
 * behaves like paper on a desk rather than a carousel.
 */
export function Polaroids() {
  const [top, setTop] = useState<string>("d");
  const [pos, setPos] = useState<Record<string, { x: number; y: number; r: number }>>(
    () =>
      Object.fromEntries(
        DECK.map((c) => [c.id, { x: c.x, y: c.y, r: c.tilt }]),
      ),
  );

  type Drag = {
    id: string;
    startX: number;
    startY: number;
    baseX: number;
    baseY: number;
    lastX: number;
    lastY: number;
    vx: number;
    vy: number;
    t: number;
  };

  // mutable only inside handlers and timers, never read during render
  const drag = useRef<Drag | null>(null);
  const glide = useRef<number | null>(null);
  const [dragging, setDragging] = useState<string | null>(null);

  const stop = useCallback(() => {
    if (glide.current !== null) {
      window.clearInterval(glide.current);
      glide.current = null;
    }
  }, []);

  useEffect(() => stop, [stop]);

  const onDown = useCallback(
    (e: React.PointerEvent, c: Card) => {
      stop();
      setTop(c.id);
      setDragging(c.id);
      play("hover");
      const base = pos[c.id];
      (e.target as Element).setPointerCapture?.(e.pointerId);
      drag.current = {
        id: c.id,
        startX: e.clientX,
        startY: e.clientY,
        baseX: base.x,
        baseY: base.y,
        lastX: e.clientX,
        lastY: e.clientY,
        vx: 0,
        vy: 0,
        t: performance.now(),
      };
    },
    [pos, stop],
  );

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      const d = drag.current;
      if (!d) return;
      const now = performance.now();
      const dt = Math.max(1, now - d.t);
      d.vx = ((e.clientX - d.lastX) / dt) * 16;
      d.vy = ((e.clientY - d.lastY) / dt) * 16;
      d.lastX = e.clientX;
      d.lastY = e.clientY;
      d.t = now;

      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;
      setPos((p) => ({
        ...p,
        [d.id]: {
          x: d.baseX + dx * 0.24,
          y: d.baseY + dy * 0.24,
          // the card leans into the direction it is pulled
          r: Math.max(-16, Math.min(16, p[d.id].r + d.vx * 0.09)),
        },
      }));
    },
    [],
  );

  const onUp = useCallback(() => {
    const d = drag.current;
    drag.current = null;
    setDragging(null);
    if (!d) return;

    // carry the throw, bleeding off speed until it settles
    let vx = Math.max(-26, Math.min(26, d.vx));
    let vy = Math.max(-26, Math.min(26, d.vy));
    if (Math.hypot(vx, vy) < 1.2) return;
    play("click");

    stop();
    glide.current = window.setInterval(() => {
      vx *= 0.9;
      vy *= 0.9;
      if (Math.hypot(vx, vy) < 0.15) {
        stop();
        return;
      }
      setPos((p) => {
        const cur = p[d.id];
        return {
          ...p,
          [d.id]: {
            x: Math.max(-46, Math.min(46, cur.x + vx * 0.16)),
            y: Math.max(-30, Math.min(30, cur.y + vy * 0.16)),
            r: cur.r + vx * 0.05,
          },
        };
      });
    }, 16);
  }, [stop]);

  return (
    <div
      className="relative mx-auto h-[clamp(320px,46vw,540px)] w-full max-w-[640px] touch-none select-none"
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      {DECK.map((c) => {
        const p = pos[c.id];
        const isTop = top === c.id;
        return (
          <button
            key={c.id}
            onPointerDown={(e) => onDown(e, c)}
            aria-label={`Print: ${c.caption}`}
            className="absolute left-1/2 top-1/2 w-[clamp(150px,23vw,232px)] cursor-grab bg-pure p-[6%] pb-[16%] active:cursor-grabbing"
            style={{
              zIndex: isTop ? 30 : 10,
              transform: `translate(-50%,-50%) translate(${p.x}%, ${p.y}%) rotate(${p.r}deg) ${isTop ? "scale(1.03)" : ""}`,
              transition:
                dragging === c.id ? "none" : "transform 380ms cubic-bezier(0.16,1,0.3,1)",
              boxShadow: isTop
                ? "0 26px 44px -14px rgba(11,11,12,0.5), 0 2px 0 rgba(11,11,12,0.12)"
                : "0 14px 26px -12px rgba(11,11,12,0.4), 0 1px 0 rgba(11,11,12,0.1)",
            }}
          >
            <div className="relative aspect-square overflow-hidden bg-ink">
              {c.render === "type" ? (
                <div className="grid h-full w-full place-items-center px-3 text-center">
                  <div>
                    <p className="font-display text-[clamp(0.8rem,1.7vw,1.3rem)] uppercase leading-tight text-paper">
                      {SITE.name}
                    </p>
                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.28em] text-yellow">
                      {SITE.role}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SRC[c.render]}
                    alt=""
                    draggable={false}
                    loading="lazy"
                    className="absolute inset-0 m-auto h-[112%] w-auto max-w-none object-contain"
                    style={{ imageRendering: "pixelated" }}
                  />
                </>
              )}
              {/* chemical sheen across the emulsion */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(128deg, rgba(255,255,255,0.16) 0%, transparent 34%, transparent 66%, rgba(122,60,240,0.16) 100%)",
                }}
              />
            </div>
            <p className="mt-[6%] text-center font-mono text-[8px] uppercase tracking-[0.22em] text-ink/45">
              {c.caption}
            </p>
          </button>
        );
      })}

      <p className="pointer-events-none absolute -bottom-2 left-0 font-mono text-[9px] uppercase tracking-[0.3em] text-ink/35">
        drag them · throw them
      </p>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef } from "react";

const MAX_LAYERS = 64;
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const layerColor = (face: string, depth: string, i: number, total: number) => {
  const p = total <= 1 ? 1 : i / total;
  const eased = p * p;
  const faceMix = Math.round((1 - eased) * 72 + 4);
  return `color-mix(in srgb, ${face} ${faceMix}%, ${depth})`;
};
const xform = (rx: number, ry: number) => `rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg)`;

/**
 * reactbits Depth Text — many stacked copies build real extruded depth; the
 * block leans toward the pointer and idles with a slow orbit.
 */
export default function DepthText({
  text = "PORTFOLIO",
  layers = 30,
  depth = 2.4,
  faceColor = "#efe9dd",
  depthColor = "#7a4a00",
  tilt = 8,
  pointerTracking = true,
  smoothing = 0.14,
  perspective = 900,
  autoOrbit = true,
  orbitSpeed = 0.3,
  fontSize = "clamp(3rem, 14vw, 12rem)",
  fontWeight = 900,
  className = "",
  style = {},
}: {
  text?: string;
  layers?: number;
  depth?: number;
  faceColor?: string;
  depthColor?: string;
  tilt?: number;
  pointerTracking?: boolean;
  smoothing?: number;
  perspective?: number;
  autoOrbit?: boolean;
  orbitSpeed?: number;
  fontSize?: string;
  fontWeight?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const stageRef = useRef<HTMLSpanElement>(null);

  const L = clamp(Math.round(layers), 2, MAX_LAYERS);
  const D = clamp(depth, 0, 12);
  const T = clamp(tilt, 0, 14);
  const S = clamp(smoothing, 0.02, 0.35);
  const P = clamp(perspective, 300, 2000);
  const O = clamp(orbitSpeed, 0, 2);
  const base = useMemo(() => ({ x: -T * 0.32, y: T * 0.42 }), [T]);

  const depthLayers = useMemo(
    () =>
      Array.from({ length: L }, (_, li) => {
        const index = L - li;
        return {
          index,
          color: layerColor(faceColor, depthColor, index, L),
          transform: `translateZ(${-index * D}px)`,
        };
      }),
    [L, D, faceColor, depthColor],
  );

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stage.style.transform = xform(base.x, base.y);
      return;
    }
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const track = pointerTracking && fine;
    let frame = 0;
    let active = false;
    const start = performance.now();
    const cur = { ...base };
    const target = { ...base };

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      if (!r.width) return;
      active = true;
      const x = clamp((e.clientX - (r.left + r.width / 2)) / (r.width * 0.8), -1, 1);
      const y = clamp((e.clientY - (r.top + r.height / 2)) / (r.height * 0.8), -1, 1);
      target.x = base.x - y * T;
      target.y = base.y + x * T;
    };
    const onLeave = () => {
      active = false;
      target.x = base.x;
      target.y = base.y;
    };
    if (track) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerleave", onLeave);
    }
    const tick = (now: number) => {
      if ((!track || !active) && autoOrbit) {
        const el = (now - start) / 1000;
        const orbit = el * O * Math.PI * 2;
        const amt = track ? 0.18 : 0.5;
        target.x = base.x + Math.sin(orbit) * T * amt;
        target.y = base.y + Math.cos(orbit * 0.85) * T * amt;
      }
      cur.x += (target.x - cur.x) * S;
      cur.y += (target.y - cur.y) * S;
      stage.style.transform = xform(cur.x, cur.y);
      frame = requestAnimationFrame(tick);
    };
    stage.style.transform = xform(cur.x, cur.y);
    frame = requestAnimationFrame(tick);
    return () => {
      if (track) {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerleave", onLeave);
      }
      cancelAnimationFrame(frame);
    };
  }, [autoOrbit, base, pointerTracking, O, S, T]);

  return (
    <span
      ref={rootRef}
      className={`inline-block ${className}`}
      style={{ perspective: `${P}px`, perspectiveOrigin: "50% 48%", ...style }}
    >
      <span
        ref={stageRef}
        className="inline-grid place-items-center will-change-transform [transform-style:preserve-3d]"
      >
        {depthLayers.map((l) => (
          <span
            key={l.index}
            aria-hidden
            className="pointer-events-none col-start-1 row-start-1 inline-block whitespace-nowrap [backface-visibility:hidden]"
            style={{
              color: l.color,
              transform: l.transform,
              fontSize,
              fontWeight,
              lineHeight: 0.84,
              letterSpacing: "-0.05em",
              fontFamily: "var(--font-display)",
            }}
          >
            {text}
          </span>
        ))}
        <span
          className="col-start-1 row-start-1 inline-block whitespace-nowrap [transform:translateZ(1px)]"
          style={{
            color: faceColor,
            fontSize,
            fontWeight,
            lineHeight: 0.84,
            letterSpacing: "-0.05em",
            fontFamily: "var(--font-display)",
            textShadow: "0 0 22px rgba(240,179,35,0.18)",
          }}
        >
          {text}
        </span>
      </span>
    </span>
  );
}

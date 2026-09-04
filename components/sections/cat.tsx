"use client";

// Frame-by-frame cat. 304 extracted frames, one <canvas>, requestAnimationFrame.
// No video, no CSS fake, no crossfade. Click left / right half to walk that way.
import { useEffect, useRef, useState } from "react";

const COUNT = 49;
const FPS = 5;
const src = (i: number) => `/cat/f/${String(i).padStart(4, "0")}.webp`;

export function Cat({ compact = false, bare = false }: { compact?: boolean; bare?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useRef<HTMLImageElement[]>([]);
  const cur = useRef(0);
  const dir = useRef<1 | -1>(1);
  const walking = useRef(false);
  const [ready, setReady] = useState(false);
  const [hint, setHint] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    let alive = true;
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < COUNT; i++) {
      const im = new Image();
      im.src = src(i);
      im.onload = im.onerror = () => {
        if (!alive) return;
        if (++loaded === COUNT) setReady(true);
      };
      imgs[i] = im;
    }
    frames.current = imgs;

    let raf = 0;
    let last = 0;
    const step = 1000 / FPS;

    const draw = () => {
      const c = canvasRef.current;
      const img = frames.current[cur.current];
      if (c && img && img.complete && img.naturalWidth) {
        const ctx = c.getContext("2d")!;
        ctx.imageSmoothingEnabled = false;
        const cw = c.width, ch = c.height;
        const s = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
        const w = img.naturalWidth * s, h = img.naturalHeight * s;
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      }
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!alive) return;
      if (t - last < step) return;
      last = t;
      if (walking.current) {
        cur.current = (cur.current + dir.current + COUNT) % COUNT; // seamless loop
        draw();
      }
    };

    const onResize = () => {
      const c = canvasRef.current;
      if (!c) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      c.width = c.clientWidth * dpr;
      c.height = c.clientHeight * dpr;
      draw();
    };
    onResize();
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(loop);
    const first = new Image();
    first.src = src(0);
    first.onload = draw;

    return () => { alive = false; cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  const stopT = useRef<ReturnType<typeof setTimeout> | null>(null);
  const walk = (d: 1 | -1) => {
    dir.current = d;
    walking.current = true;
    if (stopT.current) clearTimeout(stopT.current);
    stopT.current = setTimeout(() => { walking.current = false; }, 2800);
  };

  const stage = (
    <div
      className={`relative w-full select-none ${bare ? "h-full min-h-[120px]" : compact ? "mt-4 aspect-[24/7]" : "mt-8 aspect-[16/9]"}`}
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setHint(e.clientX - r.left < r.width / 2 ? "left" : "right");
          }}
          onPointerLeave={() => setHint(null)}
          onPointerDown={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            walk(e.clientX - r.left < r.width / 2 ? -1 : 1);
          }}
        >
          <canvas ref={canvasRef} className="h-full w-full" style={{ imageRendering: "pixelated" }} />
          {!ready && (
            <span className="absolute inset-0 grid place-items-center font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-bone/40">
              loading frames…
            </span>
          )}
          <span className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] transition-opacity ${hint === "left" ? "opacity-100 text-yellow" : "opacity-30 text-bone"}`}>
            ← walk left
          </span>
          <span className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] transition-opacity ${hint === "right" ? "opacity-100 text-yellow" : "opacity-30 text-bone"}`}>
            walk right →
          </span>
    </div>
  );

  if (bare) return stage;

  return (
    <section className={`on-dark grid-lines-dark relative overflow-hidden border-y border-bone/10 ${compact ? "py-[5vh]" : "py-[10vh]"}`}>
      <div className="mx-auto max-w-6xl px-[5vw]">
        <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow">
          {compact ? "Signature — click a side, the cat walks" : "the easter egg"}
        </p>
        {!compact && <h2 className="mt-2 font-condensed text-[clamp(2.5rem,9vw,6rem)] uppercase leading-none">Move the cat</h2>}
        {stage}
        {!compact && (
          <div className="mt-4 flex gap-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.25em] text-bone/50">
            <button onClick={() => walk(-1)} className="border border-bone/20 px-3 py-1 hover:border-yellow hover:text-yellow">← left</button>
            <button onClick={() => walk(1)} className="border border-bone/20 px-3 py-1 hover:border-yellow hover:text-yellow">right →</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cat;

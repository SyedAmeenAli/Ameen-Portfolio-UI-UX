"use client";

// Drag across the frame to de-pixelate the figure. ROTATE cycles the view:
// front -> side -> back -> side. All three are pre-padded to one canvas size,
// so the figure is always the same height and dead-centre.
import { useCallback, useEffect, useRef, useState } from "react";

const VIEWS = ["/me/front-pad.webp", "/me/side-pad.webp", "/me/back-pad.webp", "/me/side-pad.webp"] as const;
const LABELS = ["front", "side", "back", "side"] as const;

const W = 900;
const H = 1600;
const COLS = 20;
const ROWS = 36;
const CW = W / COLS;
const CH = H / ROWS;

export default function PixelReveal() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const img = useRef<HTMLImageElement | null>(null);
  const off = useRef<HTMLCanvasElement | null>(null);
  const level = useRef<Float32Array>(new Float32Array(COLS * ROWS));
  const dragging = useRef(false);

  const [view, setView] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const paintCell = useCallback((cx: number, cy: number) => {
    const c = canvas.current;
    const source = img.current;
    const o = off.current;
    if (!c || !source || !o) return;
    const ctx = c.getContext("2d")!;
    const octx = o.getContext("2d")!;
    const lv = level.current[cy * COLS + cx] ?? 0;
    const k = Math.max(1, Math.round(1 + lv * (Math.min(CW, CH) - 1)));
    const sw = source.width / COLS;
    const sh = source.height / ROWS;
    octx.imageSmoothingEnabled = false;
    octx.clearRect(0, 0, o.width, o.height);
    octx.drawImage(source, cx * sw, cy * sh, sw, sh, 0, 0, k, k);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(cx * CW, cy * CH, CW, CH);
    ctx.drawImage(o, 0, 0, k, k, cx * CW, cy * CH, CW, CH);
  }, []);

  const paintAll = useCallback(() => {
    const c = canvas.current;
    if (c) c.getContext("2d")!.clearRect(0, 0, W, H);
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) paintCell(x, y);
  }, [paintCell]);

  useEffect(() => {
    const o = document.createElement("canvas");
    o.width = Math.ceil(CW);
    o.height = Math.ceil(CH);
    off.current = o;
  }, []);

  useEffect(() => {
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.src = VIEWS[view];
    im.onload = () => {
      img.current = im;
      level.current = new Float32Array(COLS * ROWS);
      setProgress(0);
      setReady(true);
      paintAll();
    };
  }, [view, paintAll]);

  const repairAt = useCallback(
    (clientX: number, clientY: number) => {
      const c = canvas.current;
      if (!c) return;
      const r = c.getBoundingClientRect();
      const cx = Math.floor(((clientX - r.left) / r.width) * COLS);
      const cy = Math.floor(((clientY - r.top) / r.height) * ROWS);
      let touched = false;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const x = cx + dx;
          const y = cy + dy;
          if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue;
          const i = y * COLS + x;
          if (level.current[i] >= 1) continue;
          level.current[i] = Math.min(1, level.current[i] + (dx === 0 && dy === 0 ? 0.5 : 0.22));
          paintCell(x, y);
          touched = true;
        }
      }
      if (touched) {
        let sum = 0;
        for (const v of level.current) sum += v;
        setProgress(Math.round((sum / level.current.length) * 100));
      }
    },
    [paintCell],
  );

  const reveal = () => {
    level.current = level.current.map(() => 1);
    setProgress(100);
    paintAll();
  };
  const reset = () => {
    level.current = new Float32Array(COLS * ROWS);
    setProgress(0);
    paintAll();
  };

  return (
    <div className="mx-auto flex w-full max-w-[340px] flex-col">
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-red">Pixelated me</p>
        <button
          onClick={() => setView((v) => (v + 1) % VIEWS.length)}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 hover:text-red"
        >
          rotate &#8635; {LABELS[view]}
        </button>
      </div>
      <p className="mt-2 text-xs text-ink/50">Drag across the frame to rebuild the picture.</p>

      <div className="relative mx-auto mt-5 w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        <span className="pointer-events-none absolute -inset-3 border border-red/50" />
        {["-left-4 -top-4", "-right-4 -top-4", "-left-4 -bottom-4", "-right-4 -bottom-4"].map((p) => (
          <span key={p} className={`pointer-events-none absolute ${p} h-2.5 w-2.5 border border-red bg-red`} />
        ))}
        <canvas
          ref={canvas}
          width={W}
          height={H}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            repairAt(e.clientX, e.clientY);
          }}
          onPointerMove={(e) => {
            if (dragging.current || e.pointerType === "mouse") repairAt(e.clientX, e.clientY);
          }}
          onPointerUp={() => (dragging.current = false)}
          className="h-full w-full touch-none bg-paper-dim"
          style={{ imageRendering: "pixelated", cursor: "crosshair" }}
        />
        {!ready && (
          <span className="absolute inset-0 grid place-items-center font-mono text-[10px] uppercase tracking-widest text-ink/40">
            loading
          </span>
        )}
      </div>

      <div className="mt-6 flex w-full items-center gap-3">
        <div className="h-1 flex-1 bg-ink/10">
          <div className="h-full bg-red transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
        <span className="font-mono text-[11px] tabular-nums text-ink/50">{String(progress).padStart(3, " ")}%</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={reveal} className="border border-red px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-red hover:bg-red hover:text-white">
          reveal
        </button>
        <button onClick={reset} className="border border-ink/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/50 hover:border-ink hover:text-ink">
          reset
        </button>
      </div>
    </div>
  );
}

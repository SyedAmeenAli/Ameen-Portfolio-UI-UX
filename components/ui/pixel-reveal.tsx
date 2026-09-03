"use client";

// Drag across the frame to de-pixelate the figure. Press ROTATE to turn it:
// front → side → back → side → front. Aspect follows the source so it never
// squashes.
import { useCallback, useEffect, useRef, useState } from "react";

const VIEWS = ["/me/front-cut.webp", "/me/side-cut.webp", "/me/back-cut.webp", "/me/side-cut.webp"] as const;
const LABELS = ["front", "side", "back", "side"] as const;
const DISPLAY_W = 560;

export default function PixelReveal() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement | null>(null);
  const off = useRef<HTMLCanvasElement | null>(null);
  const level = useRef<Float32Array>(new Float32Array(0));
  const dims = useRef({ cols: 20, rows: 30, cw: 1, ch: 1, h: 1 });
  const dragging = useRef(false);

  const [view, setView] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const paintCell = useCallback((cx: number, cy: number) => {
    const c = canvas.current;
    const source = img.current;
    const o = off.current;
    if (!c || !source || !o) return;
    const { cols, rows, cw, ch } = dims.current;
    const ctx = c.getContext("2d")!;
    const octx = o.getContext("2d")!;
    const lv = level.current[cy * cols + cx] ?? 0;
    const k = Math.max(1, Math.round(1 + lv * (Math.min(cw, ch) - 1)));
    const sw = source.width / cols;
    const sh = source.height / rows;
    octx.imageSmoothingEnabled = false;
    octx.clearRect(0, 0, o.width, o.height);
    octx.drawImage(source, cx * sw, cy * sh, sw, sh, 0, 0, k, k);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(o, 0, 0, k, k, cx * cw, cy * ch, cw, ch);
  }, []);

  const paintAll = useCallback(() => {
    const { cols, rows } = dims.current;
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) paintCell(x, y);
  }, [paintCell]);

  const load = useCallback(
    (src: string) => {
      // ready flips true again in onload
      const im = new Image();
      im.crossOrigin = "anonymous";
      im.src = src;
      im.onload = () => {
        img.current = im;
        const aspect = im.width / im.height; // < 1 (tall)
        const displayH = Math.round(DISPLAY_W / aspect);
        const cols = 22;
        const rows = Math.max(8, Math.round(cols / aspect));
        const cw = DISPLAY_W / cols;
        const ch = displayH / rows;
        dims.current = { cols, rows, cw, ch, h: displayH };
        level.current = new Float32Array(cols * rows);
        const c = canvas.current!;
        c.width = DISPLAY_W;
        c.height = displayH;
        if (wrap.current) wrap.current.style.aspectRatio = `${aspect}`;
        const o = document.createElement("canvas");
        o.width = Math.ceil(cw);
        o.height = Math.ceil(ch);
        off.current = o;
        setProgress(0);
        setReady(true);
        paintAll();
      };
    },
    [paintAll],
  );

  useEffect(() => {
    load(VIEWS[view]);
  }, [view, load]);

  const repairAt = useCallback(
    (clientX: number, clientY: number) => {
      const c = canvas.current;
      if (!c) return;
      const { cols, rows } = dims.current;
      const r = c.getBoundingClientRect();
      const cx = Math.floor(((clientX - r.left) / r.width) * cols);
      const cy = Math.floor(((clientY - r.top) / r.height) * rows);
      let touched = false;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const x = cx + dx;
          const y = cy + dy;
          if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
          const i = y * cols + x;
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
    level.current = new Float32Array(level.current.length);
    setProgress(0);
    paintAll();
  };

  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col">
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Pixelated me</p>
        <button
          onClick={() => setView((v) => (v + 1) % VIEWS.length)}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60 hover:text-gold"
        >
          rotate ↻ {LABELS[view]}
        </button>
      </div>
      <p className="mt-2 text-xs text-bone/50">Drag across the frame to rebuild the picture.</p>

      <div ref={wrap} className="relative mt-5 w-full" style={{ aspectRatio: "0.46" }}>
        <span className="pointer-events-none absolute -inset-3 border border-gold/50" />
        {["-left-4 -top-4", "-right-4 -top-4", "-left-4 -bottom-4", "-right-4 -bottom-4"].map((p) => (
          <span key={p} className={`pointer-events-none absolute ${p} h-2.5 w-2.5 border border-ink bg-gold`} />
        ))}
        <canvas
          ref={canvas}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            repairAt(e.clientX, e.clientY);
          }}
          onPointerMove={(e) => {
            if (dragging.current || e.pointerType === "mouse") repairAt(e.clientX, e.clientY);
          }}
          onPointerUp={() => (dragging.current = false)}
          className="h-full w-full touch-none bg-ink"
          style={{ imageRendering: "pixelated", cursor: "crosshair" }}
        />
        {!ready && (
          <span className="absolute inset-0 grid place-items-center font-mono text-[10px] uppercase tracking-widest text-bone/40">
            loading
          </span>
        )}
      </div>

      <div className="mt-6 flex w-full items-center gap-3">
        <div className="h-1 flex-1 bg-steel">
          <div className="h-full bg-gold transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
        <span className="font-mono text-[11px] tabular-nums text-bone/50">{String(progress).padStart(3, " ")}%</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={reveal} className="border border-gold px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gold hover:bg-gold hover:text-ink">
          reveal
        </button>
        <button onClick={reset} className="border border-steel px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bone/50 hover:border-bone hover:text-bone">
          reset
        </button>
      </div>
    </div>
  );
}

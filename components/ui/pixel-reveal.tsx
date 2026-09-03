"use client";

// Drag across the frame to de-pixelate the picture — the "fix it to see the
// full form" interaction, done on a 2D canvas so it is bulletproof.
import { useCallback, useEffect, useRef, useState } from "react";

const COLS = 20;
const ROWS = 25;
const SIZE = 600;

export default function PixelReveal({ src = "/me/front-cut.webp" }: { src?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const img = useRef<HTMLImageElement | null>(null);
  const off = useRef<HTMLCanvasElement | null>(null);
  const level = useRef<Float32Array>(new Float32Array(COLS * ROWS));
  const dragging = useRef(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const cw = SIZE / COLS;
  const ch = (SIZE * 1.25) / ROWS;

  const paintCell = useCallback(
    (cx: number, cy: number) => {
      const c = canvas.current;
      const source = img.current;
      const o = off.current;
      if (!c || !source || !o) return;
      const ctx = c.getContext("2d")!;
      const octx = o.getContext("2d")!;
      const lv = level.current[cy * COLS + cx];
      const k = Math.max(1, Math.round(1 + lv * (Math.min(cw, ch) - 1)));
      const sw = source.width / COLS;
      const sh = source.height / ROWS;
      octx.imageSmoothingEnabled = false;
      octx.clearRect(0, 0, cw, ch);
      octx.drawImage(source, cx * sw, cy * sh, sw, sh, 0, 0, k, k);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(o, 0, 0, k, k, cx * cw, cy * ch, cw, ch);
    },
    [cw, ch],
  );

  const paintAll = useCallback(() => {
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) paintCell(x, y);
  }, [paintCell]);

  useEffect(() => {
    const o = document.createElement("canvas");
    o.width = Math.ceil(cw);
    o.height = Math.ceil(ch);
    off.current = o;
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.src = src;
    im.onload = () => {
      img.current = im;
      setReady(true);
      paintAll();
    };
  }, [src, cw, ch, paintAll]);

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
    <div className="w-full">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Pixelated me</p>
      <p className="mt-2 text-xs text-bone/50">Drag across the frame to rebuild the picture.</p>

      <div className="relative mt-5 w-[calc(100%-2rem)] max-w-[380px]" style={{ aspectRatio: "4 / 5" }}>
        <span className="pointer-events-none absolute -inset-3 border border-gold/50" />
        {["-left-4 -top-4", "-right-4 -top-4", "-left-4 -bottom-4", "-right-4 -bottom-4"].map((p) => (
          <span key={p} className={`pointer-events-none absolute ${p} h-2.5 w-2.5 border border-ink bg-gold`} />
        ))}
        <canvas
          ref={canvas}
          width={SIZE}
          height={SIZE * 1.25}
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

      <div className="mt-6 flex w-[calc(100%-2rem)] max-w-[380px] items-center gap-3">
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

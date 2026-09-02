"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { play } from "@/lib/sound";

const COLS = 18;
const ROWS = 18;
const SIZE = 540; // canvas backing size (square)
const CELL = SIZE / COLS;

/**
 * Pixelated portrait the visitor repairs by dragging over it.
 * Each cell starts as a 1px block and sharpens toward full resolution.
 */
export function PixelMe() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const img = useRef<HTMLImageElement | null>(null);
  const buf = useRef<HTMLCanvasElement | null>(null);
  const level = useRef<Float32Array>(new Float32Array(COLS * ROWS));
  const dragging = useRef(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const paintCell = useCallback((cx: number, cy: number) => {
    const c = canvas.current;
    const source = img.current;
    const off = buf.current;
    if (!c || !source || !off) return;
    const ctx = c.getContext("2d");
    const octx = off.getContext("2d");
    if (!ctx || !octx) return;

    const lv = level.current[cy * COLS + cx];
    const k = Math.max(1, Math.round(1 + lv * (CELL - 1)));

    const sw = source.width / COLS;
    const sh = source.height / ROWS;

    octx.imageSmoothingEnabled = false;
    octx.clearRect(0, 0, CELL, CELL);
    octx.drawImage(source, cx * sw, cy * sh, sw, sh, 0, 0, k, k);

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, k, k, cx * CELL, cy * CELL, CELL, CELL);
  }, []);

  const paintAll = useCallback(() => {
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) paintCell(x, y);
  }, [paintCell]);

  useEffect(() => {
    const off = document.createElement("canvas");
    off.width = CELL;
    off.height = CELL;
    buf.current = off;

    const im = new Image();
    im.src = "/me/head.webp";
    im.onload = () => {
      img.current = im;
      setReady(true);
      paintAll();
    };
  }, [paintAll]);

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
          const gain = dx === 0 && dy === 0 ? 0.5 : 0.22;
          level.current[i] = Math.min(1, level.current[i] + gain);
          paintCell(x, y);
          touched = true;
        }
      }
      if (touched) {
        play("hover");
        let sum = 0;
        for (const v of level.current) sum += v;
        setProgress(Math.round((sum / level.current.length) * 100));
      }
    },
    [paintCell],
  );

  const reset = () => {
    play("close");
    level.current = new Float32Array(COLS * ROWS);
    setProgress(0);
    paintAll();
  };
  const revealAll = () => {
    play("open");
    level.current = level.current.map(() => 1);
    setProgress(100);
    paintAll();
  };

  return (
    <div className="w-full">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-purple">
        Pixelated me
      </p>
      <p className="mt-2 text-xs text-ink/55">
        Drag across the frame to rebuild the picture.
      </p>

      {/* selection box with corner handles, like the sketch */}
      <div className="relative mt-5 aspect-square w-[calc(100%-2rem)] max-w-[380px]">
        <span className="pointer-events-none absolute -inset-3 border border-purple/60" />
        {[
          "-left-4 -top-4",
          "-right-4 -top-4",
          "-left-4 -bottom-4",
          "-right-4 -bottom-4",
        ].map((pos) => (
          <span
            key={pos}
            className={`pointer-events-none absolute ${pos} h-2.5 w-2.5 border border-ink bg-yellow`}
          />
        ))}

        <canvas
          ref={canvas}
          width={SIZE}
          height={SIZE}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            repairAt(e.clientX, e.clientY);
          }}
          onPointerMove={(e) => {
            if (dragging.current || e.pointerType === "mouse") {
              repairAt(e.clientX, e.clientY);
            }
          }}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
          className="h-full w-full touch-none bg-ink shadow-torn"
          style={{ imageRendering: "pixelated", cursor: "crosshair" }}
        />

        {!ready && (
          <span className="absolute inset-0 grid place-items-center font-mono text-[10px] uppercase tracking-widest text-paper/50">
            loading
          </span>
        )}
      </div>

      <div className="mt-6 flex max-w-[380px] items-center gap-3">
        <div className="h-1 flex-1 bg-ink/10">
          <div
            className="h-full bg-purple transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[11px] tabular-nums text-ink/60">
          {String(progress).padStart(3, " ")}%
        </span>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={revealAll}
          className="border border-ink px-3 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-purple hover:text-pure"
        >
          reveal
        </button>
        <button
          onClick={reset}
          className="border border-ink/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/60 transition-colors hover:border-ink hover:text-ink"
        >
          reset
        </button>
      </div>
    </div>
  );
}

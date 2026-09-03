"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ui-layouts shimmer loader — cycles status labels while a shimmer sweeps the
 * text, counts to a target percent, then calls onComplete.
 */
export function ShimmerLoader({
  labels = ["Loading…"],
  icons = ["✦", "◆", "✶", "❋", "✸"],
  duration = 3000,
  tokenTarget = 1,
  showPercent = true,
  onComplete,
  className = "",
}: {
  labels?: string[];
  icons?: string[];
  duration?: number;
  tokenTarget?: number;
  showPercent?: boolean;
  onComplete?: () => void;
  className?: string;
}) {
  const [label, setLabel] = useState(labels[0]);
  const [icon, setIcon] = useState(icons[0]);
  const [pct, setPct] = useState(0);
  const raf = useRef<number | null>(null);
  const done = useRef(false);

  useEffect(() => {
    const start = performance.now();
    const target = Math.round(tokenTarget * 100);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setPct(Math.round(t * target));
      setLabel(labels[Math.floor(t * labels.length * 3) % labels.length]);
      setIcon(icons[Math.floor(now / 120) % icons.length]);
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else if (!done.current) {
        done.current = true;
        onComplete?.();
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [labels, icons, duration, tokenTarget, onComplete]);

  return (
    <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${className}`}>
      <span className="text-gold">{icon}</span>
      <span
        className="bg-[linear-gradient(100deg,transparent,#ffe08a,transparent)] bg-[length:200%_100%] bg-clip-text text-transparent [animation:shimmer_1.4s_linear_infinite]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        <span className="text-bone/60">{label}</span>
      </span>
      {showPercent && <span className="ml-auto tabular-nums text-bone/40">{String(pct).padStart(3, " ")}%</span>}
    </div>
  );
}

export default ShimmerLoader;

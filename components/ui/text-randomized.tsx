"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,";

/**
 * ui-layouts randomized text — scrambles, then resolves character by character.
 * Re-runs whenever it scrolls back into view.
 */
export function RandomizedTextEffect({
  text,
  className,
  duration = 900,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const [out, setOut] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef<number | null>(null);

  const rand = useCallback(() => CHARS[Math.floor(Math.random() * CHARS.length)], []);

  const run = useCallback(() => {
    const start = performance.now();
    const revealAt = text.split("").map((_, i) => (i / text.length) * duration * 0.7 + Math.random() * duration * 0.3);
    const tick = (now: number) => {
      const t = now - start;
      let done = true;
      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (t >= revealAt[i]) return ch;
          done = false;
          return rand();
        })
        .join("");
      setOut(next);
      if (!done) raf.current = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf.current = requestAnimationFrame(tick);
  }, [text, duration, rand]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) run();
        else if (raf.current) cancelAnimationFrame(raf.current);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [run]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {out}
    </span>
  );
}

export default RandomizedTextEffect;

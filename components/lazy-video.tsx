"use client";

import { useEffect, useRef } from "react";

/**
 * A looping background video that downloads nothing until it scrolls into
 * view, then plays only while it is on screen. The poster carries the frame
 * until then, so nothing shifts.
 */
export function LazyVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!el.src) {
            // download on approach, not on page load
            el.preload = "auto";
            el.src = src;
            el.load();
          }
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}

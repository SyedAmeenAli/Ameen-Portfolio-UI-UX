"use client";

import { useRef, useState } from "react";
import { play } from "@/lib/sound";

/**
 * A rip straight through the page. The paper above and below is pulled apart,
 * so what shows through the gap is whatever sits behind — purple depth at
 * rest, live fire on hover.
 *
 * Built from two displaced sheets rather than one zigzag band, so the two
 * torn edges never mirror each other.
 */
export function Rip({
  height = 120,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const v = useRef<HTMLVideoElement>(null);
  const [hot, setHot] = useState(false);

  return (
    <div
      onPointerEnter={() => {
        setHot(true);
        play("flame");
        const el = v.current;
        if (el) {
          if (!el.src) el.src = "/media/flames.mp4";
          el.play().catch(() => {});
        }
      }}
      onPointerLeave={() => {
        setHot(false);
        v.current?.pause();
      }}
      className={`relative isolate w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* what lives inside the tear */}
      <div className="absolute inset-0 -z-20 bg-ink">
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: hot ? 0.25 : 1,
            background:
              "linear-gradient(90deg,#2a0f52,#7a3cf0 28%,#4c1d95 52%,#9d6bff 74%,#2a0f52)",
          }}
        />
        <video
          ref={v}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full scale-110 object-cover transition-opacity duration-500"
          style={{ opacity: hot ? 1 : 0, filter: "saturate(1.5) brightness(1.3)" }}
        />
        {/* the gap is deepest in the middle */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,11,12,0.85), transparent 32%, transparent 68%, rgba(11,11,12,0.85))",
          }}
        />
      </div>

      {/* the two lips of paper. Each is a plain sheet whose inner edge the
          displacement filter chews away; flipping the lower one means the two
          edges are never mirror images. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 bg-paper"
        style={{
          height: "38%",
          filter: "url(#tear-lift)",
          transform: hot ? "translateY(-7px)" : "translateY(0)",
          transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 bg-paper"
        style={{
          height: "38%",
          filter: "url(#tear-lift)",
          transform: `scaleY(-1) translateX(-9%) ${hot ? "translateY(-7px)" : "translateY(0)"}`,
          width: "118%",
          transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
}

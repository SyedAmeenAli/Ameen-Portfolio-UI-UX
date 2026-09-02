"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

// Skip momentum scrolling for reduced-motion and touch devices, where native
// scrolling already feels right.
const QUERIES = ["(prefers-reduced-motion: reduce)", "(pointer: coarse)"];

function subscribe(cb: () => void) {
  const mqs = QUERIES.map((q) => window.matchMedia(q));
  mqs.forEach((mq) => mq.addEventListener("change", cb));
  return () => mqs.forEach((mq) => mq.removeEventListener("change", cb));
}

const wantsSmooth = () => !QUERIES.some((q) => window.matchMedia(q).matches);

export function SmoothScroll({ children }: { children: ReactNode }) {
  const smooth = useSyncExternalStore(subscribe, wantsSmooth, () => false);

  if (!smooth) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true, syncTouch: false }}
    >
      {children}
    </ReactLenis>
  );
}

"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore, type ReactNode } from "react";

const QUERIES = ["(prefers-reduced-motion: reduce)", "(pointer: coarse)"];
const subscribe = (cb: () => void) => {
  const mqs = QUERIES.map((q) => window.matchMedia(q));
  mqs.forEach((m) => m.addEventListener("change", cb));
  return () => mqs.forEach((m) => m.removeEventListener("change", cb));
};
const wantsSmooth = () => !QUERIES.some((q) => window.matchMedia(q).matches);

export function SmoothScroll({ children }: { children: ReactNode }) {
  const smooth = useSyncExternalStore(subscribe, wantsSmooth, () => false);
  if (!smooth) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}

import type { ReactNode } from "react";

/**
 * Native scrolling only. Lenis was making the page feel laggy / trapped;
 * anchor jumps use CSS `scroll-behavior: smooth` (globals). No scroll-jacking.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

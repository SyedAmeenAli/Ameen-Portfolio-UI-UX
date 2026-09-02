"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { play } from "@/lib/sound";

/**
 * Torn-paper wipe between routes: two jagged sheets close over the screen and
 * peel away as the new page mounts.
 */
export function PageTransition() {
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prev = useRef(pathname);

  useEffect(() => {
    // only fire on a real route change (never on mount, never on a re-run)
    if (prev.current === pathname) return;
    prev.current = pathname;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sheets = [top.current, bottom.current];
    play("whoosh");
    const tl = gsap.timeline();
    tl.set(sheets, { visibility: "visible" })
      .fromTo(
        sheets[0],
        { yPercent: -100 },
        { yPercent: 0, duration: 0.34, ease: "power3.in" },
        0,
      )
      .fromTo(
        sheets[1],
        { yPercent: 100 },
        { yPercent: 0, duration: 0.34, ease: "power3.in" },
        0,
      )
      .to(sheets[0], { yPercent: -100, duration: 0.5, ease: "power3.out" }, 0.42)
      .to(sheets[1], { yPercent: 100, duration: 0.5, ease: "power3.out" }, 0.42)
      .set(sheets, { visibility: "hidden" });

    return () => {
      tl.kill();
      // never leave the sheets stranded over the page
      gsap.set(sheets, { visibility: "hidden", yPercent: 0 });
    };
  }, [pathname]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[120]">
      <div
        ref={top}
        className="absolute inset-x-0 top-0 h-[51%] bg-ink"
        style={{
          visibility: "hidden",
          clipPath:
            "polygon(0 0,100% 0,100% 88%,92% 100%,84% 86%,76% 99%,66% 87%,56% 100%,46% 88%,36% 99%,26% 87%,16% 100%,8% 88%,0 98%)",
        }}
      />
      <div
        ref={bottom}
        className="absolute inset-x-0 bottom-0 h-[51%] bg-ink"
        style={{
          visibility: "hidden",
          clipPath:
            "polygon(0 2%,8% 12%,16% 0,26% 13%,36% 1%,46% 12%,56% 0,66% 13%,76% 1%,84% 14%,92% 0,100% 12%,100% 100%,0 100%)",
        }}
      />
    </div>
  );
}

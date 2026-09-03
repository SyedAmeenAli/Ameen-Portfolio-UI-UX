"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Kind = "rise" | "settle" | "drift";

/**
 * Scroll-driven entrance with weight to it. `rise` lifts a block into place,
 * `settle` drops paper down onto the page, `drift` parallaxes slowly for the
 * whole time an element is on screen.
 */
export function Reveal({
  children,
  kind = "rise",
  delay = 0,
  className,
}: {
  children: ReactNode;
  kind?: Kind;
  delay?: number;
  className?: string;
}) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (kind === "drift") {
        gsap.fromTo(
          node,
          { yPercent: 6 },
          {
            yPercent: -6,
            ease: "none",
            scrollTrigger: { trigger: node, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
        return;
      }

      const from =
        kind === "settle"
          ? { y: -46, rotate: -1.6, autoAlpha: 0, scale: 1.02 }
          : { y: 64, rotate: 0.6, autoAlpha: 0, scale: 0.985 };

      gsap.fromTo(node, from, {
        y: 0,
        rotate: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 1.05,
        delay,
        ease: "expo.out",
        scrollTrigger: { trigger: node, start: "top 88%", once: true },
      });
    }, node);

    return () => ctx.revert();
  }, [kind, delay]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}

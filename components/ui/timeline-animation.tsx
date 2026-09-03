"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView, type Variants } from "motion/react";

const DEFAULT: Variants = {
  hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

/**
 * ui-layouts timeline reveal — children blur/slide in on scroll, staggered by
 * their `animationNum`.
 */
export function TimelineAnimation({
  children,
  as = "div",
  animationNum = 0,
  className,
  customVariants,
}: {
  children: ReactNode;
  as?: ElementType;
  animationNum?: number;
  className?: string;
  customVariants?: Variants;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const Comp = (motion[as as "div"] ?? motion.div) as typeof motion.div;
  return (
    <Comp
      ref={ref}
      className={className}
      custom={animationNum}
      variants={customVariants ?? DEFAULT}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </Comp>
  );
}

export default TimelineAnimation;

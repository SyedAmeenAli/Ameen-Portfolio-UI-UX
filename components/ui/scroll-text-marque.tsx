"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "motion/react";

/**
 * ui-layouts velocity marquee — base drift plus a shove from scroll velocity,
 * so it speeds up and reverses as you scroll.
 */
export default function ScrollBaseAnimation({
  children,
  baseVelocity = 3,
  clasname,
  delay = 0,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  clasname?: string;
  delay?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);
  const started = useRef(false);

  useAnimationFrame((t, delta) => {
    if (!started.current && t < delay) return;
    started.current = true;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap">
      <motion.div className={`flex flex-nowrap whitespace-nowrap ${clasname ?? ""}`} style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="block pr-[3vw]">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

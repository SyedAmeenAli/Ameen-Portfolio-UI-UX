"use client";

// ui-layouts / olivierlarose stacking cards — adapted, generic children.
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

export type StackItem = {
  title: string;
  eyebrow?: string;
  description: string;
  image: string;
  color?: string;
  href?: string;
};

export function StackingCards({ items }: { items: StackItem[] }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container}>
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.045;
        return (
          <Card
            key={item.title}
            i={i}
            item={item}
            progress={scrollYProgress}
            range={[i * 0.22, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

function Card({
  i,
  item,
  progress,
  range,
  targetScale,
}: {
  i: number;
  item: StackItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.9, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-6vh + ${i * 26}px)` }}
        className="relative flex h-[clamp(360px,64vh,560px)] w-[min(1100px,92vw)] origin-top flex-col overflow-hidden border border-steel bg-iron p-6 md:p-12"
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: `linear-gradient(90deg, transparent, ${item.color ?? "#f0b323"}, transparent)` }}
        />
        <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-concrete-dim">
          <span>{item.eyebrow}</span>
          <span>
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-4 flex h-full flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex flex-col justify-between md:w-[38%]">
            <h3 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] uppercase">{item.title}</h3>
            <div>
              <p className="text-sm leading-relaxed text-bone/70">{item.description}</p>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border-b border-gold pb-0.5 font-mono text-[11px] uppercase tracking-widest text-gold"
                >
                  view system →
                </a>
              )}
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden border border-steel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={item.image}
              alt={item.title}
              style={{ scale: imageScale }}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StackingCards;

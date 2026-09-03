"use client";

import { useRef, type ElementType } from "react";
import { motion, useInView, type Variants } from "motion/react";

type Direction = "up" | "down" | "left" | "right";

const DEFAULT: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 24 },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

/**
 * ui-layouts scroll-text — words (or letters, or lines) blur into place as the
 * block scrolls into view.
 */
export default function TextAnimation({
  text,
  as = "h2",
  classname,
  variants = DEFAULT,
  letterAnime = false,
  lineAnime = false,
  direction = "up",
  once = true,
}: {
  text: string;
  as?: ElementType;
  classname?: string;
  variants?: Variants;
  letterAnime?: boolean;
  lineAnime?: boolean;
  direction?: Direction;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.3 });
  const Comp = motion[as as "h2"] ?? motion.div;

  const units = lineAnime
    ? text.split("\n")
    : letterAnime
      ? text.split("")
      : text.split(" ");

  const axis =
    direction === "left" ? { x: -40 } : direction === "right" ? { x: 40 } : direction === "down" ? { y: -24 } : { y: 24 };
  const v: Variants = {
    hidden: { ...(variants.hidden as object), ...axis },
    visible: variants.visible,
  };

  return (
    <Comp
      ref={ref}
      className={classname}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ staggerChildren: letterAnime ? 0.025 : 0.06 }}
      aria-label={text}
    >
      {units.map((u, i) => (
        <motion.span
          key={i}
          variants={v}
          className="inline-block"
          style={{ whiteSpace: letterAnime ? "pre" : "normal" }}
        >
          {u}
          {!letterAnime && !lineAnime ? " " : ""}
        </motion.span>
      ))}
    </Comp>
  );
}

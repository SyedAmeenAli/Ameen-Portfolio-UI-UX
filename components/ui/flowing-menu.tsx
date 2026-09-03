"use client";

// reactbits FlowingMenu — GSAP edge-aware hover marquee. Verbatim, typed.
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./flowing-menu.css";

export type FlowingItem = { link: string; text: string; image: string };

export default function FlowingMenu({
  items = [],
  speed = 15,
  textColor = "#efe9dd",
  bgColor = "#060507",
  marqueeBgColor = "#f0b323",
  marqueeTextColor = "#060507",
  borderColor = "#2b2a31",
}: {
  items?: FlowingItem[];
  speed?: number;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
}) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
}: FlowingItem & {
  speed: number;
  textColor: string;
  marqueeBgColor: string;
  marqueeTextColor: string;
  borderColor: string;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(4);
  const animationDefaults = { duration: 0.6, ease: "expo" };

  const dist = (x: number, y: number, x2: number, y2: number) => (x - x2) ** 2 + (y - y2) ** 2;
  const findClosestEdge = (mx: number, my: number, w: number, h: number) =>
    dist(mx, my, w / 2, 0) < dist(mx, my, w / 2, h) ? "top" : "bottom";

  useEffect(() => {
    const calc = () => {
      const content = marqueeInnerRef.current?.querySelector<HTMLElement>(".marquee__part");
      if (!content) return;
      const needed = Math.ceil(window.innerWidth / content.offsetWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [text, image]);

  useEffect(() => {
    const setup = () => {
      const content = marqueeInnerRef.current?.querySelector<HTMLElement>(".marquee__part");
      if (!content || content.offsetWidth === 0) return;
      animationRef.current?.kill();
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -content.offsetWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };
    const t = setTimeout(setup, 50);
    return () => {
      clearTimeout(t);
      animationRef.current?.kill();
    };
  }, [text, image, repetitions, speed]);

  const onEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const r = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - r.left, ev.clientY - r.top, r.width, r.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };
  const onLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const r = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - r.left, ev.clientY - r.top, r.width, r.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <a className="menu__item-link" href={link} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ color: textColor }}>
        {text}
      </a>
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden>
            {Array.from({ length: repetitions }).map((_, idx) => (
              <div className="marquee__part" key={idx} style={{ color: marqueeTextColor }}>
                <span>{text}</span>
                <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

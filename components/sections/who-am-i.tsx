"use client";

// Compact "character select" — the site answers the question. Second font only.
import { useEffect, useRef, useState } from "react";

const ROLES = ["A UI/UX DESIGNER", "A VISUAL DESIGNER", "A PRODUCT DESIGNER", "A DIGITAL CREATIVE"];
const ANSWER = "Someone who likes turning ideas into things people can see, use and remember.";

export function WhoAmI() {
  const [pick, setPick] = useState(0);
  const [typed, setTyped] = useState("");
  const seen = useRef(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || seen.current) return;
        seen.current = true;
        let i = 0;
        const id = setInterval(() => {
          i += 1;
          setTyped(ANSWER.slice(0, i));
          if (i >= ANSWER.length) clearInterval(id);
        }, 22);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="max-w-md font-grotesk">
      <h2 className="font-condensed text-[clamp(1.8rem,5vw,3rem)] uppercase leading-none text-bone">Who am I?</h2>
      <ul className="mt-4 space-y-1 text-sm font-semibold uppercase tracking-wide">
        {ROLES.map((r, i) => (
          <li key={r}>
            <button
              onMouseEnter={() => setPick(i)}
              onFocus={() => setPick(i)}
              className={`inline-flex items-center gap-2 transition-colors ${i === pick ? "text-yellow" : "text-bone/45 hover:text-bone"}`}
            >
              <span className={i === pick ? "text-yellow" : "text-purple"}>&gt;</span>
              {r}
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-5 min-h-[3.5em] max-w-[38ch] text-sm font-medium leading-relaxed text-bone/75">
        {typed}
        {typed.length < ANSWER.length && <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-yellow align-middle" />}
      </p>
    </div>
  );
}

export default WhoAmI;

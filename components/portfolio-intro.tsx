"use client";

import { useEffect, useRef, useState } from "react";

const SEEN_KEY = "portfolio-intro-seen";

/**
 * One-time cinematic title screen shown before the site on first visit.
 * Purely additive — sits above everything as a fixed overlay, does not
 * touch layout, routing, scroll, or any existing component.
 */
export function PortfolioIntro() {
  // null = unknown yet (avoid SSR flash); true = show; false = skip
  const [show, setShow] = useState<boolean | null>(null);
  const [leaving, setLeaving] = useState(false);
  const [reduced, setReduced] = useState(false);
  const enterRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // storage unavailable — just show once per load, never persist
    }
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(rm);
    setShow(!seen);
    if (!seen) {
      // don't trap focus — just offer it
      requestAnimationFrame(() => enterRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = show && !leaving ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [show, leaving]);

  const enter = () => {
    if (leaving) return;
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      // ignore — worst case the intro plays again
    }
    if (reduced) {
      setShow(false);
      return;
    }
    setLeaving(true);
    window.setTimeout(() => setShow(false), 900);
  };

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (show === null || show === false) return null;

  return (
    <div
      role="dialog"
      aria-label="Portfolio intro"
      onClick={enter}
      className={`fixed inset-0 z-[200] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[#000] px-[6vw] text-center transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? "-translate-y-full duration-[900ms]" : "translate-y-0 duration-0"
      }`}
    >
      {/* restrained purple accent — reuses the site's hatch motif */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[6vw] top-[6vh] block h-4 w-24 opacity-60 sm:h-5 sm:w-32"
        style={{ background: "repeating-linear-gradient(-45deg,#800080 0 6px,transparent 6px 12px)" }}
      />

      <p
        className={`font-grotesk text-[9px] font-semibold uppercase tracking-[0.3em] text-purple ${
          reduced ? "" : "opacity-0 [animation:intro-in_0.6s_ease_0.1s_forwards]"
        }`}
      >
        [ Ameen Ali ]
      </p>

      <h1
        className={`mt-4 font-condensed uppercase leading-[0.86] text-bone ${
          reduced ? "" : "opacity-0 [animation:intro-in_0.7s_ease_0.25s_forwards]"
        }`}
        style={{ fontSize: "clamp(2.6rem,9vw,7.5rem)", letterSpacing: "0.005em" }}
      >
        Best experienced<br /><span className="text-yellow">on a large screen.</span>
      </h1>

      <p
        className={`mt-6 max-w-[46ch] font-grotesk text-sm font-semibold text-bone/60 ${
          reduced ? "" : "opacity-0 [animation:intro-in_0.6s_ease_0.5s_forwards]"
        }`}
      >
        For the full visual experience, open this portfolio on a laptop or desktop.
      </p>

      <button
        ref={enterRef}
        onClick={(e) => { e.stopPropagation(); enter(); }}
        className={`mt-10 border border-purple/50 px-6 py-3 font-grotesk text-[11px] font-semibold uppercase tracking-[0.3em] text-bone transition-colors hover:border-yellow hover:text-yellow ${
          reduced ? "" : "opacity-0 [animation:intro-in_0.6s_ease_0.75s_forwards]"
        }`}
      >
        Enter portfolio
      </button>
    </div>
  );
}

export default PortfolioIntro;

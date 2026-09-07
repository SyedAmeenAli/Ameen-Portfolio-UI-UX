"use client";

import { useEffect, useState } from "react";

const KEY = "portfolio-theme";

/** Editorial on/off theme switch. Colour mode only — no layout impact. */
export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === "light");
  }, []);

  const toggle = () => {
    const next = light ? "dark" : "light";
    setLight(!light);
    if (next === "light") document.documentElement.dataset.theme = "light";
    else document.documentElement.removeAttribute("data-theme");
    try { localStorage.setItem(KEY, next); } catch { /* storage blocked — session only */ }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={light}
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Light mode — click for dark" : "Dark mode — click for light"}
      className="relative inline-flex h-7 w-[3.25rem] shrink-0 items-center rounded-full border border-purple/50 bg-purple/10 p-[3px] transition-colors hover:border-yellow focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-purple"
    >
      {/* sliding knob */}
      <span
        aria-hidden
        className="grid h-[22px] w-[22px] place-items-center rounded-full bg-yellow text-void"
        style={{
          transform: light ? "translateX(24px)" : "translateX(0)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {light ? (
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4l1.4-1.4M18 6l1.4-1.4" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
          </svg>
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;

"use client";

import { useEffect, useState } from "react";

const KEY = "portfolio-theme";

/** Minimal editorial dark/light switch. Colour mode only — no layout impact. */
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
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Dark mode" : "Light mode"}
      className="grid h-6 w-6 place-items-center text-yellow transition-colors hover:text-purple focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-purple"
    >
      {light ? (
        /* moon — click to go dark */
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </svg>
      ) : (
        /* sun — click to go light */
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;

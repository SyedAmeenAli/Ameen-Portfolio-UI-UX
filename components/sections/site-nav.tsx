"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Work", href: "/work", key: "work" },
  { label: "Brand Identity", href: "/work/branding", key: "identity" },
  { label: "Logos", href: "/work/logos", key: "logos" },
  { label: "Posters", href: "/work/posters", key: "posters" },
  { label: "Illustrations", href: "/work/illustration", key: "illustration" },
  { label: "Animations", href: "/work/motion", key: "motion" },
  { label: "About", href: "/about", key: "about" },
  { label: "Contact", href: "/contact", key: "contact" },
];

/** Compact editorial nav + fullscreen mobile menu. */
export function SiteNav({ active, label = "Portfolio" }: { active?: string; label?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between border-b border-purple/40 bg-void/70 px-[4vw] py-4 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-bone backdrop-blur">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-mark.png" alt="Ameen Ali" className="h-6 w-auto" />
          <span className="text-purple">/ {label}</span>
        </Link>

        <ul className="hidden gap-3 md:flex">
          {LINKS.map((l) => (
            <li key={l.key}>
              <Link
                href={l.href}
                className={`group inline-flex items-center gap-1 transition-transform hover:translate-x-0.5 ${
                  active === l.key ? "text-yellow" : "text-bone/55 hover:text-bone"
                }`}
              >
                {active === l.key && <span className="h-1.5 w-1.5 bg-purple" />}
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="font-condensed text-xl leading-none text-yellow md:pointer-events-none"
        >
          {open ? "✕" : "+"}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-void px-[6vw] pb-[8vh] pt-[16vh]">
          <ul className="flex flex-col gap-2">
            {LINKS.map((l, i) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 font-condensed text-[clamp(2rem,10vw,4rem)] uppercase leading-none ${
                    active === l.key ? "text-yellow" : "text-bone hover:text-yellow"
                  }`}
                >
                  <span className="font-grotesk text-xs text-purple">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="mailto:amelio123ali@gmail.com" className="mt-auto font-grotesk text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow">
            amelio123ali@gmail.com ↗
          </a>
        </div>
      )}
    </header>
  );
}

export default SiteNav;

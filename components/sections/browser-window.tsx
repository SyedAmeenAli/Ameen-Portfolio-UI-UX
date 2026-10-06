"use client";

import { useState } from "react";

type Chapter = { label: string; path: string };
type Size = "desktop" | "tablet" | "mobile";

const WIDTH: Record<Size, string> = { desktop: "100%", tablet: "768px", mobile: "390px" };

/** A live site inside a browser-window frame — chapter tabs + responsive width toggle. */
export function BrowserWindow({ origin, chapters }: { origin: string; chapters: Chapter[] }) {
  const [i, setI] = useState(0);
  const [size, setSize] = useState<Size>("desktop");
  const [loaded, setLoaded] = useState(false);
  const url = `${origin}${chapters[i].path}`;

  const pick = (n: number) => { setLoaded(false); setI(n); };

  return (
    <div className="mx-auto w-full">
      {/* controls */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em]">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Chapters">
          {chapters.map((c, n) => (
            <button
              key={c.path}
              role="tab"
              aria-selected={n === i}
              onClick={() => pick(n)}
              className={`border px-3 py-2 transition-colors ${
                n === i ? "border-yellow bg-yellow text-void" : "border-purple/40 text-bone/60 hover:border-yellow hover:text-bone"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5" role="group" aria-label="Preview width">
          {(["desktop", "tablet", "mobile"] as Size[]).map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              aria-pressed={size === s}
              className={`border px-3 py-2 transition-colors ${
                size === s ? "border-purple bg-purple text-bone" : "border-purple/40 text-bone/60 hover:border-purple hover:text-bone"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* window */}
      <div
        className="mx-auto overflow-hidden rounded-xl border border-purple/50 bg-iron shadow-2xl transition-[max-width] duration-500"
        style={{ maxWidth: WIDTH[size] }}
      >
        <div className="flex items-center gap-3 border-b border-purple/30 bg-steel px-3 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="min-w-0 flex-1 truncate rounded-md bg-void px-3 py-1 text-center font-mono text-[10px] tracking-wide text-bone/55">
            {url.replace(/^https?:\/\//, "")}
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow hover:text-bone"
          >
            Open ↗
          </a>
        </div>
        <div className="relative bg-[#2c2825]" style={{ height: "min(78vh, 760px)" }}>
          {!loaded && (
            <span className="absolute inset-0 grid place-items-center font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-bone/40">
              Loading live site…
            </span>
          )}
          <iframe
            key={url}
            src={url}
            title={`AQARATI Brand Experience — ${chapters[i].label}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default BrowserWindow;

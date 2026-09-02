"use client";

import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  isEnabled,
  setEnabled,
  subscribe,
} from "@/lib/sound";

export function SoundToggle() {
  const on = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      onClick={() => setEnabled(!isEnabled())}
      aria-pressed={on}
      aria-label={on ? "Turn sound off" : "Turn sound on"}
      className="fixed bottom-5 right-5 z-[80] flex items-center gap-2 border border-ink/25 bg-pure/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.25em] shadow-torn backdrop-blur transition-colors hover:border-purple hover:text-purple"
    >
      <span className="flex h-3 items-end gap-[2px]" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={on ? "bg-purple" : "bg-ink/35"}
            style={{
              width: 2,
              height: on ? undefined : 4,
              animation: on
                ? `eq 0.7s ease-in-out ${i * 0.11}s infinite alternate`
                : undefined,
            }}
          />
        ))}
      </span>
      {on ? "sound on" : "sound off"}
    </button>
  );
}

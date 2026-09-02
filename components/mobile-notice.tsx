"use client";

import { useSyncExternalStore, useState } from "react";

const QUERY = "(max-width: 820px)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function isSmall() {
  return window.matchMedia(QUERY).matches && !sessionStorage.getItem("mn-dismissed");
}

export function MobileNotice() {
  const eligible = useSyncExternalStore(subscribe, isSmall, () => false);
  const [dismissed, setDismissed] = useState(false);

  if (!eligible || dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[100] flex items-center gap-2 bg-ink px-3 py-2 text-[9px] uppercase leading-tight tracking-wide text-paper">
      <span className="shrink-0 text-yellow">◆</span>
      <p className="min-w-0 flex-1">
        Best on laptop for the full experience. Mobile keeps the tap interactions.
      </p>
      <button
        onClick={() => {
          sessionStorage.setItem("mn-dismissed", "1");
          setDismissed(true);
        }}
        className="shrink-0 border border-paper/40 px-2 py-0.5"
      >
        ok
      </button>
    </div>
  );
}

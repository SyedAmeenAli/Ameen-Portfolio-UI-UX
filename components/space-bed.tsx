"use client";

import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("@/components/ui/galaxy"), { ssr: false });

/** Fixed deep-space bed behind the whole site. */
export function SpaceBed() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <Galaxy
          density={0.7}
          hueShift={36}
          glowIntensity={0.22}
          saturation={0.15}
          starSpeed={0.28}
          mouseInteraction={false}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_40%,#060507_92%)]"
      />
    </>
  );
}

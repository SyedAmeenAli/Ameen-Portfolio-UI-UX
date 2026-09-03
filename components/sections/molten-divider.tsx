"use client";

import dynamic from "next/dynamic";

const LiquidChrome = dynamic(() => import("@/components/ui/liquid-chrome"), { ssr: false });

/** A poured-metal seam between sections. */
export function MoltenDivider({ label }: { label?: string }) {
  return (
    <div className="relative h-[26vh] w-full overflow-hidden border-y border-steel/60">
      <div aria-hidden className="absolute inset-0">
        <LiquidChrome baseColor={[0.16, 0.11, 0.03]} speed={0.35} amplitude={0.4} frequencyX={2.6} frequencyY={3.2} />
      </div>
      <div aria-hidden className="absolute inset-0 bg-void/35 mix-blend-multiply" />
      {label && (
        <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-[clamp(1.4rem,5vw,3.4rem)] uppercase tracking-[-0.02em] text-void mix-blend-overlay">
          {label}
        </p>
      )}
    </div>
  );
}

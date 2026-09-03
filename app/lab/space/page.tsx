"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const SpaceScene = dynamic(
  () => import("@/components/landing/space/scene").then((m) => m.SpaceScene),
  { ssr: false },
);

/** Dev-only harness: the space scene on its own, no scroll gate. */
export default function SpaceLab() {
  const progress = useRef(0.4);
  return (
    <main className="relative h-screen w-full bg-ink">
      <SpaceScene progress={progress} />
    </main>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ShimmerLoader from "@/components/ui/shimmer-loader";

/** Brief shimmer curtain on every route change (skips the first paint). */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const first = useRef(pathname);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (first.current === pathname) return;
    first.current = pathname;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 620);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-void">
          <ShimmerLoader labels={["Loading", "Compositing", "Rendering", "Ready"]} duration={600} tokenTarget={1} className="w-56" />
        </div>
      )}
      {children}
    </>
  );
}

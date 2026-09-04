"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Fast editorial route transition — scroll reset + content clip/fade-up (~380ms). */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div key={pathname} className="animate-[route-in_0.42s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none">
      {children}
    </div>
  );
}

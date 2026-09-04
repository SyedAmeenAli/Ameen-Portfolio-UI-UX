import type { ReactNode } from "react";
import { SiteNav } from "@/components/sections/site-nav";
import { WorkBand } from "@/components/sections/work-band";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageHeader } from "@/components/sections/page-header";

/** Standard editorial page frame: nav + header + content + cat band + footer. */
export function PageShell({
  active,
  label,
  header,
  quote,
  children,
}: {
  active?: string;
  label?: string;
  header: Parameters<typeof PageHeader>[0];
  quote?: string;
  children: ReactNode;
}) {
  return (
    <main className="home grid-lines relative min-h-screen bg-void text-bone">
      <SiteNav active={active} label={label} />
      <PageHeader {...header} />
      {children}
      <WorkBand quote={quote} />
      <SiteFooter />
    </main>
  );
}

export default PageShell;

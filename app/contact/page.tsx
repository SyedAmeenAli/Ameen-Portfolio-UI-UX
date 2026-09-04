import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hatch, Globe } from "@/components/sections/editorial-bits";

export const metadata: Metadata = { title: "Contact" };

const CONTACT = "amelio123ali@gmail.com";

const ROWS: [string, string, string?][] = [
  ["Email", CONTACT, `mailto:${CONTACT}`],
  ["Location", "Hyderabad, India"],
  ["Available for", "Select projects · Collaborations"],
  ["Response", "Usually within a day"],
];

export default function ContactPage() {
  return (
    <main className="home grid-lines relative flex min-h-screen flex-col bg-void text-bone">
      <SiteNav active="contact" label="Contact" />

      <section className="flex flex-1 flex-col justify-center border-b border-purple/40 px-[4vw] pb-[8vh] pt-[16vh]">
        <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ 16 ]</p>

        <div className="mt-2 grid gap-x-[3vw] gap-y-[5vh] lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <h1 className="font-condensed uppercase leading-[0.7] tracking-[0.005em]">
            <span className="block text-[clamp(3.4rem,17vw,14rem)] text-bone">Let&apos;s</span>
            <span className="block text-[clamp(3.4rem,17vw,14rem)] text-bone">Make</span>
            <span className="block text-[clamp(3.4rem,17vw,14rem)] text-yellow">
              Something. <span className="align-top text-[0.28em] text-purple">↘</span>
            </span>
          </h1>

          <div className="flex flex-col gap-6 border-l border-purple/25 pl-4">
            <div className="flex items-center gap-4">
              <Globe />
              <Hatch />
            </div>
            <dl className="divide-y divide-purple/20 border-y border-purple/25">
              {ROWS.map(([k, v, href]) => (
                <div key={k} className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
                  <dt className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">{k}</dt>
                  <dd className="font-grotesk text-sm font-semibold uppercase tracking-wide text-bone/85">
                    {href ? <a href={href} className="text-yellow hover:underline">{v}</a> : v}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={`mailto:${CONTACT}`}
              className="inline-flex items-center justify-between border border-bone/30 px-6 py-4 font-grotesk text-[11px] font-semibold uppercase tracking-[0.25em] text-bone transition-colors hover:bg-yellow hover:text-black"
            >
              Start a conversation <span className="text-2xl leading-none text-yellow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter mid="Ideas live longer ↓" />
    </main>
  );
}

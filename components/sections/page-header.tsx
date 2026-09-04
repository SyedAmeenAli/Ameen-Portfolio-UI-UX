import type { ReactNode } from "react";
import { Hatch, Globe } from "@/components/sections/editorial-bits";

/** Shared editorial page hero: [ NN ] + giant two-line heading + slash sub-list + info column. */
export function PageHeader({
  num,
  line1,
  line2,
  sub,
  copy,
  children,
}: {
  num: string;
  line1: string;
  line2?: string;
  sub?: string[];
  copy?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative border-b border-purple/40 px-[4vw] pb-[6vh] pt-[13vh]">
      <p className="font-grotesk text-[10px] font-semibold tracking-[0.3em] text-bone/50">[ {num} ]</p>

      <div className="mt-2 grid gap-x-[3vw] gap-y-[4vh] lg:grid-cols-[1.5fr_0.5fr_0.9fr] lg:items-start">
        <div>
          <h1 className="font-condensed uppercase leading-[0.72] tracking-[0.005em]">
            <span className="block text-[clamp(3rem,15vw,12rem)] text-bone">{line1}</span>
            {line2 && (
              <span className="block text-[clamp(3rem,15vw,12rem)] text-yellow">
                {line2} <span className="align-top text-[0.3em] text-purple">↘</span>
              </span>
            )}
          </h1>
          {sub && (
            <p className="mt-6 font-grotesk text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-bone/55">
              {sub.map((s, i) => (
                <span key={s}>{s}{i < sub.length - 1 ? " /" : "."}<br /></span>
              ))}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-5 self-stretch border-l border-purple/25 pl-4">
          <Globe />
          {copy && (
            <p className="max-w-[24ch] font-grotesk text-[11px] font-medium uppercase leading-relaxed tracking-[0.14em] text-bone/55">
              {copy}
            </p>
          )}
          <Hatch />
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}

export default PageHeader;

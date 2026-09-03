"use client";

import { useState } from "react";

type Font = { name: string; cls: string };
type Version = { cls: string; font: string; note: string };

/** SAME WORD. DIFFERENT VOICE. — hover a font name, the sentence transforms. */
export function TypeLab({ fonts, versions }: { fonts: Font[]; versions: Version[] }) {
  const [active, setActive] = useState(0);
  const f = fonts[active];

  return (
    <>
      <section className="px-[5vw] py-[16vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase">
          Same word. <span className="text-purple">Different voice.</span>
        </h2>

        <div className="mt-14 grid min-h-[34vh] place-items-center border border-ink/15 bg-white p-8">
          <span key={active} className={`${f.cls} text-[clamp(3rem,18vw,13rem)] leading-none`}>
            Create
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em]">
          {fonts.map((x, i) => (
            <button
              key={x.name}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={i === active ? "text-purple underline" : "text-ink/45 hover:text-ink"}
            >
              {x.name}
            </button>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
          layout fixed · word fixed · only the typeface changes
        </p>
      </section>

      <section className="on-dark border-y border-bone/10 px-[5vw] py-[14vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase text-bone">
          Design changes<br />when type changes.
        </h2>
        <div className="mt-12 grid gap-px border border-bone/15 bg-bone/15 md:grid-cols-2 lg:grid-cols-3">
          {versions.map((v, i) => (
            <div key={v.font} className="bg-ink p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                Version {String(i + 1).padStart(2, "0")}
              </p>
              <p className={`${v.cls} mt-4 text-[clamp(1.3rem,3vw,2rem)] leading-tight text-bone`}>
                Design changes when type changes.
              </p>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-yellow">{v.font} · {v.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TypeLab;

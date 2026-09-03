/** The reference "LOGOS & MARKS  ✦✦✦  LOGOS & MARKS" running border strip. CSS-only. */
export function LineStrip({
  text,
  speed = 26,
  reverse = false,
  className = "",
}: {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const unit = (
    <span className="flex shrink-0 items-center">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="px-4 font-condensed text-[clamp(0.7rem,1.5vw,1rem)] uppercase tracking-[0.14em]">{text}</span>
          <span className="px-2 text-[0.7em] text-red">✦✦✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`flex w-full overflow-hidden border-y border-current/25 bg-ink py-2 text-bone ${className}`}>
      <div
        className="flex will-change-transform"
        style={{ animation: `marquee-x ${speed}s linear infinite`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {unit}
        {unit}
      </div>
    </div>
  );
}

export default LineStrip;

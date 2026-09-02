/** A run of interlocking rings that undulates like a floating chain. */
export function RingChain({ count = 22 }: { count?: number }) {
  return (
    <div aria-hidden className="w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${count * 14 + 20} 60`}
        className="h-16 w-full"
        preserveAspectRatio="none"
      >
        {Array.from({ length: count }, (_, i) => (
          <ellipse
            key={i}
            cx={14 + i * 14}
            cy={30}
            rx={11}
            ry={17}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth={2.4}
            opacity={i % 2 ? 0.75 : 0.45}
            style={{
              transformOrigin: `${14 + i * 14}px 30px`,
              animation: `ring-undulate 3.2s ease-in-out ${i * 0.09}s infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

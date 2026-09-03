/**
 * ui-layouts "black paper" — a dark ruled-grid surface. Static, cheap, tiles.
 */
export function GridPaper({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        background:
          "linear-gradient(0deg, transparent 24%, rgba(240,179,35,0.05) 25%, rgba(240,179,35,0.05) 26%, transparent 27%, transparent 74%, rgba(240,179,35,0.05) 75%, rgba(240,179,35,0.05) 76%, transparent 77%, transparent)," +
          "linear-gradient(90deg, transparent 24%, rgba(240,179,35,0.05) 25%, rgba(240,179,35,0.05) 26%, transparent 27%, transparent 74%, rgba(240,179,35,0.05) 75%, rgba(240,179,35,0.05) 76%, transparent 77%, transparent)",
        backgroundColor: "#0a090c",
        backgroundSize: "56px 56px",
      }}
    />
  );
}

export default GridPaper;

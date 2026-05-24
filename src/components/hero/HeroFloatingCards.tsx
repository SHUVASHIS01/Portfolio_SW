"use client";

export function HeroFloatingCards() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {/* Card A — top-right: 13+ Projects */}
      <div
        className="absolute right-2 top-8"
        style={{ animation: "floatA 3s ease-in-out infinite" }}
      >
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 whitespace-nowrap"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span>⚡</span>
          <span>13+ Projects</span>
        </div>
      </div>

      {/* Card B — bottom-left: MERN Stack */}
      <div
        className="absolute left-0 bottom-16"
        style={{ animation: "floatB 4s ease-in-out infinite" }}
      >
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 whitespace-nowrap"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span>🔥</span>
          <span>MERN Stack</span>
        </div>
      </div>

      {/* Card C — top-left: BRAC University */}
      <div
        className="absolute left-4 top-4"
        style={{ animation: "floatC 5s ease-in-out infinite" }}
      >
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 whitespace-nowrap"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span>🎓</span>
          <span>BRAC University · 3.60 GPA</span>
        </div>
      </div>
    </div>
  );
}

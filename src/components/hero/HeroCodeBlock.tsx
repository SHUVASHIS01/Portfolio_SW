"use client";

export function HeroCodeBlock() {
  return (
    <div
      className="rounded-2xl p-5 text-sm leading-relaxed"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Window chrome dots */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>profile.json</span>
      </div>

      {/* Syntax-highlighted JSON */}
      <div className="flex flex-col gap-0.5">
        <span style={{ color: "rgba(255,255,255,0.5)" }}>{"{"}</span>

        <span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{"  "}&quot;</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>name</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;: &quot;</span>
          <span style={{ color: "#00d4ff" }}>Shuvashis Basak</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;,</span>
        </span>

        <span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{"  "}&quot;</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>role</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;: &quot;</span>
          <span style={{ color: "#00d4ff" }}>Full-Stack Developer</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;,</span>
        </span>

        <span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{"  "}&quot;</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>stack</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;: [&quot;</span>
          <span style={{ color: "#00d4ff" }}>React</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;, &quot;</span>
          <span style={{ color: "#00d4ff" }}>Node.js</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;, &quot;</span>
          <span style={{ color: "#00d4ff" }}>MongoDB</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;],</span>
        </span>

        <span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{"  "}&quot;</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>gpa</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;: </span>
          <span style={{ color: "#a855f7" }}>3.61</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>,</span>
        </span>

        <span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{"  "}&quot;</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>available</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>&quot;: </span>
          <span style={{ color: "#f97316" }}>true</span>
        </span>

        <span style={{ color: "rgba(255,255,255,0.5)" }}>{"}"}</span>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timelineEntries } from "@/data/timeline";

gsap.registerPlugin(ScrollTrigger);

const TAG_COLORS: Record<string, string> = {
  cyan: "rgba(250,204,21,0.15)",
  amber: "rgba(251,191,36,0.15)",
  purple: "rgba(168,85,247,0.15)",
  slate: "rgba(148,163,184,0.15)",
  yellow: "rgba(234,179,8,0.15)",
  emerald: "rgba(16,185,129,0.15)",
  blue: "rgba(59,130,246,0.15)",
  green: "rgba(34,197,94,0.15)",
  rose: "rgba(244,63,94,0.15)",
};

const TAG_TEXT: Record<string, string> = {
  cyan: "#facc15",
  amber: "#fbbf24",
  purple: "#a855f7",
  slate: "#94a3b8",
  yellow: "#eab308",
  emerald: "#10b981",
  blue: "#3b82f6",
  green: "#22c55e",
  rose: "#f43f5e",
};

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const entries = gsap.utils.toArray<HTMLElement>(".timeline-entry");
      entries.forEach((el) => {
        const isLeft = el.classList.contains("timeline-left");
        gsap.fromTo(
          el,
          { opacity: 0, x: isLeft ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative py-28 lg:py-36">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(250,204,21,0.04) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <p className="text-xs font-mono tracking-[0.15em] uppercase mb-4" style={{ color: "#facc15" }}>
          // Experience &amp; Journey
        </p>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-20" style={{ color: "rgba(255,255,255,0.95)" }}>
          How I got here.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />
          {/* Mobile line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px lg:hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />

          <div className="flex flex-col gap-8">
            {timelineEntries.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={entry.id} className={`relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8`}>
                  {/* Dot on central line */}
                  <div
                    className="absolute left-4 lg:left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1/2 z-10"
                    style={{
                      background: "#facc15",
                      boxShadow: "0 0 12px rgba(250,204,21,0.5)",
                    }}
                  />

                  {/* Left slot / Right slot */}
                  {isLeft ? (
                    <>
                      {/* Left card */}
                      <div className={`timeline-entry timeline-left pl-10 lg:pl-0 lg:pr-10`}>
                        <TimelineCard entry={entry} align="right" />
                      </div>
                      {/* Year label (right side) */}
                      <div className="hidden lg:flex items-start pt-5 pl-10">
                        <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                          {entry.year}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Year label (left side) */}
                      <div className="hidden lg:flex items-start justify-end pt-5 pr-10">
                        <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                          {entry.year}
                        </span>
                      </div>
                      {/* Right card */}
                      <div className={`timeline-entry timeline-right pl-10 lg:pl-10`}>
                        <TimelineCard entry={entry} align="left" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  entry,
  align,
}: {
  entry: typeof timelineEntries[0];
  align: "left" | "right";
}) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Year (mobile) */}
      <span className="text-xs font-mono lg:hidden" style={{ color: "rgba(255,255,255,0.3)" }}>
        {entry.year}
      </span>

      {/* Tag */}
      <span
        className="self-start px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide"
        style={{
          background: TAG_COLORS[entry.tagColor] || "rgba(255,255,255,0.08)",
          color: TAG_TEXT[entry.tagColor] || "rgba(255,255,255,0.6)",
        }}
      >
        {entry.tag}
      </span>

      {/* Title */}
      <h3 className="font-semibold text-sm lg:text-base" style={{ color: "rgba(255,255,255,0.9)" }}>
        {entry.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
        {entry.description}
      </p>
    </div>
  );
}

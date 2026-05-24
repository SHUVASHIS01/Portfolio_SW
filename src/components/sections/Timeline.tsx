"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Award,
  Brain,
  Cpu,
  Terminal,
  Code2,
  Users,
  GraduationCap,
  Flag,
  Milestone,
} from "lucide-react";
import { timelineEntries } from "@/data/timeline";

// Map tags to premium Lucide icons
const TAG_ICONS: Record<string, any> = {
  Writing: PenTool,
  Leadership: Award,
  "Research · AI": Brain,
  "Systems · C": Cpu,
  "Graphics · Python": Terminal,
  "Full Stack · MERN": Code2,
  Community: Users,
  "Sports · Teamwork": Users,
  Education: GraduationCap,
  Origins: Flag,
};

export function Timeline() {
  return (
    <section id="journey" className="px-4 py-24 sm:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "5%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-6xl w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="section-eyebrow">// Experience &amp; Journey</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-ink display italic">
              How I got here
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A chronological look at my academic foundations, deep learning research, low-level systems building, and leadership milestones.
            </p>
          </div>
          <span className="chip">
            {timelineEntries.length} milestones
          </span>
        </div>

        {/* Timeline List */}
        <div className="mt-14 max-w-3xl">
          {timelineEntries.map((entry, index) => {
            const Icon = TAG_ICONS[entry.tag] || Milestone;
            const isLast = index === timelineEntries.length - 1;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-5"
              >
                {/* Left Side: Glowing Icon & Line */}
                <div className="flex flex-col items-center">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-accent/30 text-accent"
                    style={{
                      background: "radial-gradient(circle at 50% 30%, rgba(34,211,238,0.18), rgba(8,14,16,0.6))",
                      boxShadow: "0 10px 26px -12px rgba(34,211,238,0.6)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  {!isLast && (
                    <span className="my-2 w-px flex-1 bg-white/10" />
                  )}
                </div>

                {/* Right Side: Details Card */}
                <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
                  <div className="card-hover glass rounded-2xl p-6">
                    {/* Header: Tag & Year */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="chip text-[10px] px-2 py-0.5">
                        {entry.tag}
                      </span>
                      <span className="text-sm font-medium text-accent">
                        {entry.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-lg font-semibold text-ink">
                      {entry.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

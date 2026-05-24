"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Brain,
  Rocket,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPytorch,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { skillCategories } from "@/data/skills";

// Icons mapping for category cards
const CATEGORY_ICONS: Record<string, any> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  languages: Terminal,
  "ai-ml": Brain,
  tools: Rocket,
};

// Skill items for infinite marquee
const MARQUEE_SKILLS = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "PyTorch", Icon: SiPytorch, color: "#ee4c2c" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" },
  { name: "GitHub", Icon: FaGithub, color: "#ffffff" },
  { name: "Git", Icon: FaGitAlt, color: "#f05032" },
  { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
];

function SkillsMarquee() {
  // Duplicate array to enable seamless looping
  const doubledSkills = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS, ...MARQUEE_SKILLS];

  return (
    <div className="relative mt-12 overflow-hidden py-4 select-none">
      {/* Marquee Row */}
      <div className="flex w-max animate-marquee gap-3">
        {doubledSkills.map((s, idx) => {
          const Icon = s.Icon;
          return (
            <div
              key={idx}
              className="glass-soft flex shrink-0 items-center gap-2.5 rounded-full px-5 py-3 border border-white/5"
            >
              <Icon className="text-xl" style={{ color: s.color }} />
              <span className="text-sm font-medium text-ink">{s.name}</span>
            </div>
          );
        })}
      </div>

      {/* Side Fade Overlays */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: "linear-gradient(90deg, #04070a, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: "linear-gradient(270deg, #04070a, transparent)" }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 relative overflow-hidden">
      {/* Ambient Light */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-eyebrow">// Skills &amp; Toolkit</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-ink display italic">
              What I build with
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From training deep learning models in Python to shipping MERN applications and writing low-level filesystem systems in C — here&apos;s the stack I reach for.
            </p>
          </div>
          <span className="chip">
            {MARQUEE_SKILLS.length} core stacks
          </span>
        </div>

        {/* Marquee Banner */}
        <SkillsMarquee />

        {/* Categories Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-hover glass h-full rounded-3xl p-6"
              >
                {/* Icon & Category Name */}
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-ink">
                    {category.name}
                  </h3>
                </div>

                {/* Sub-tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip text-xs hover:border-accent/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

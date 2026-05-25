"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cpu } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    title: "Full-Stack Web Apps",
    desc: "End-to-end MERN applications — from responsive React/Next.js interfaces to secure REST APIs and MongoDB data models.",
    icon: Code2,
  },
  {
    title: "Applied AI & ML",
    desc: "Deep learning MRI classification (ResNet18) and segmentation (U-Net, Attention U-Net) in PyTorch + computer vision.",
    icon: Brain,
  },
  {
    title: "Systems Programming",
    desc: "Low-level filesystems in C on Linux featuring binary disk layouts, CRC32 verification, and disk allocations.",
    icon: Cpu,
  },
];

const FACTS = [
  { label: "Based in", value: "Dhaka, BD" },
  { label: "Focus", value: "MERN · AI · Systems" },
  { label: "Studying", value: "CS @ BRAC" },
  { label: "Projects", value: "13+ shipped" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* ── LEFT: PHOTO CARD & QUICK FACTS ── */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Glow */}
            <div
              className="absolute -inset-4 -z-10 rounded-[2.5rem] opacity-60 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 40%, rgba(34,211,238,0.15), transparent 60%)",
              }}
            />

            {/* Photo Card */}
            <div className="glass rounded-[2rem] p-3">
              <div className="overflow-hidden rounded-[1.5rem] relative aspect-[4/5] w-full bg-base">
                <Image
                  src="/shuvashis.jpg"
                  alt="Shuvashis Basak"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {FACTS.map((fact) => (
                <div key={fact.label} className="glass-soft rounded-2xl px-4 py-3 select-none">
                  <div className="text-[0.7rem] uppercase tracking-wide text-[#94a3b8] font-semibold">
                    {fact.label}
                  </div>
                  <div className="mt-0.5 font-semibold text-[#e9eef5] text-sm sm:text-base">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: PARAGRAPHS & WHAT I DO ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Eyebrow Label */}
            <span className="section-eyebrow">// About Me</span>

            {/* Main bio text blocks */}
            <div className="space-y-5 text-base sm:text-[1.05rem] leading-relaxed text-[#cbd5e1]">
              <p>
                My journey into code started with a simple question every builder asks —{" "}
                <span className="text-[#e9eef5] font-medium">&quot;how does this actually work?&quot;</span> That curiosity pulled me from breaking apart small programs to architecting full-stack applications, and eventually into deep learning and systems engineering.
              </p>
              <p>
                Today I&apos;m a Computer Science student at{" "}
                <span className="text-[#e9eef5] font-medium">BRAC University</span> (graduating 2026, GPA 3.60). I love the full arc of building software: crafting clean React frontends, designing secure Express backends with MongoDB, training PyTorch neural networks for medical imaging, or writing low-level file systems in C.
              </p>
              <p>
                What excites me most is coding projects that bridge complex algorithms with polished, real-world utility. Outside of coding, I write technical articles on Hashnode, earned the Duke of Edinburgh Award, and was selected for the global Aspire Leaders Program alongside peers from 180+ countries.
              </p>
            </div>

            {/* What I do Heading */}
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#94a3b8]">
              What I do
            </h3>

            {/* Services Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="card-hover glass h-full rounded-2xl p-5 flex flex-col justify-between">
                    <div>
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="mt-4 font-semibold text-[#e9eef5] text-sm sm:text-base">{s.title}</h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#cbd5e1]">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

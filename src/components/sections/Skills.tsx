"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="skill-card rounded-2xl p-5 flex flex-col gap-4"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      whileHover={{
        scale: 1.02,
        border: "1px solid rgba(0,212,255,0.3)",
        boxShadow: "0 8px 32px rgba(0,212,255,0.08)",
        transition: { duration: 0.2 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span
          className="text-lg font-mono"
          style={{ color: "#00d4ff" }}
        >
          {category.icon}
        </span>
        <span className="font-semibold text-sm tracking-wide" style={{ color: "rgba(255,255,255,0.9)" }}>
          {category.name}
        </span>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            className="px-2.5 py-1 rounded-full text-xs cursor-default"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
            whileHover={{
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.6)",
              color: "rgba(255,255,255,1)",
              scale: 1.04,
              transition: { duration: 0.15 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 lg:py-36">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <p className="text-xs font-mono tracking-[0.15em] uppercase mb-4" style={{ color: "#00d4ff" }}>
          // Skills &amp; Technologies
        </p>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.95)" }}>
          What I build with.
        </h2>

        <p className="text-base mb-16 max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
          A curated toolkit refined across 13+ projects, academic coursework, and real-world deployments.
        </p>

        {/* Grid */}
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

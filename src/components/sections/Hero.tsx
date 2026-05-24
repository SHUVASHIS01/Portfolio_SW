"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { HeroCodeBlock } from "@/components/hero/HeroCodeBlock";
import { HeroFloatingCards } from "@/components/hero/HeroFloatingCards";
import { HeroParticles } from "@/components/hero/HeroParticles";
import { gsap } from "gsap";

const WORDS = ["I", "build", "things", "the", "web", "notices."];

export function Hero() {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const words = headingRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 1.4,
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ── LEFT: Text ── */}
        <div className="flex flex-col gap-6 z-10">
          {/* Greeting tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest"
              style={{
                color: "#00d4ff",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading — word by word */}
          <div ref={headingRef} className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {WORDS.map((word, i) => (
              <span key={i} className="word inline-block mr-3 opacity-0" style={{ color: "rgba(255,255,255,0.95)" }}>
                {i === WORDS.length - 1 ? (
                  <span style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {word}
                  </span>
                ) : word}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-base lg:text-lg max-w-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Full-stack developer & CS student at BRAC University — 3.61 GPA, graduating 2026.
            I build real products with the MERN stack, deep learning pipelines, and systems code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-6 py-3 rounded-full text-sm font-semibold text-[#0a0a0f] transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #00d4ff, #00b4d8)", boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                color: "rgba(255,255,255,0.8)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Visual ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          {/* Avatar + floating cards container */}
          <div className="relative w-full max-w-sm mx-auto">
            <HeroParticles />
            <HeroFloatingCards />

            {/* Avatar */}
            <div className="flex justify-center">
              <div
                className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 0 0 3px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(168,85,247,0.1)",
                }}
              >
                <Image
                  src="/shuvashis.jpg"
                  alt="Shuvashis Basak"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 224px, 256px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,15,0.3))" }} />
              </div>
            </div>
          </div>

          {/* Code block */}
          <div className="w-full max-w-sm">
            <HeroCodeBlock />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>Scroll</span>
        <ChevronDown size={14} color="rgba(255,255,255,0.4)" className="animate-bounce" />
      </motion.div>
    </section>
  );
}

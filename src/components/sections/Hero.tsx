"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Award } from "lucide-react";
import Image from "next/image";
import { HeroCodeBlock } from "@/components/hero/HeroCodeBlock";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  const resumeUrl = "https://drive.google.com/file/d/15VEtAhz7yygmNb5AEbfNFVtuKVQl3fhP/view?usp=sharing";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Glow Orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          right: "5%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT: INTRO ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants}>
              <span className="section-eyebrow bg-accent/10 border border-accent/25 px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Available for Roles & Internships
              </span>
            </motion.div>

            {/* Display Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="display text-5xl sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] text-gradient">
                I build things<br />
                the web <span className="text-accent-gradient">notices.</span>
              </h1>
            </motion.div>

            {/* Sub-line description */}
            <motion.div variants={itemVariants}>
              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#cbd5e1]">
                Full-stack developer &amp; Computer Science student at{" "}
                <span className="text-[#e9eef5] font-medium">BRAC University</span> — GPA{" "}
                <span className="text-accent font-semibold">3.60</span>, graduating 2026.
                I ship real products with MERN, deep learning, and systems code.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
              <a
                href="/cv.pdf"
                download="Shuvashis_Basak_CV.pdf"
                className="btn-primary cursor-pointer"
              >
                Download CV
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-ghost"
              >
                View Projects
              </a>
            </motion.div>

            {/* Stat Row */}
            <motion.div variants={itemVariants} className="flex gap-10 mt-4 border-t border-white/5 pt-6">
              {[
                { value: "13+", label: "Projects Shipped" },
                { value: "3.60", label: "CGPA @ BRAC" },
                { value: "MERN", label: "Primary Stack" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="display text-2xl text-accent-gradient font-bold">{s.value}</span>
                  <span className="text-xs uppercase tracking-wider text-[#94a3b8] font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: PHOTO & CODE ── */}
          <div className="lg:col-span-5 flex flex-col gap-8 items-center justify-center relative">
            
            {/* Photo Avatar Card Wrapper */}
            <div className="relative w-full max-w-[320px]">
              
              {/* Rotating conic border */}
              <div
                className="animate-spin-slow absolute -inset-3 -z-10 rounded-[3rem] opacity-40"
                style={{
                  background: "conic-gradient(from 0deg, transparent, rgba(34,211,238,0.5), transparent 40%)",
                }}
              />

              {/* Photo Frame */}
              <div className="glass rounded-[2.2rem] p-3">
                <div className="relative overflow-hidden rounded-[1.7rem] aspect-[4/5] w-full bg-base">
                  <Image
                    src="/shuvashis.jpg"
                    alt="Shuvashis Basak"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  {/* Subtle dark overlay to blend bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, transparent 55%, rgba(4,7,10,0.85))",
                    }}
                  />
                  {/* Bottom info strip */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur">
                    <span className="text-sm font-semibold text-[#e9eef5]">Shuvashis Basak</span>
                    <span className="text-xs text-accent">MERN · AI · Systems</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge Left */}
              <div className="animate-floaty glass absolute -left-6 top-10 hidden sm:block rounded-2xl px-4 py-3 select-none">
                <div className="text-2xl font-bold text-[#e9eef5]">13+</div>
                <div className="text-[0.7rem] text-[#cbd5e1] font-medium">Projects Shipped</div>
              </div>

              {/* Floating Stat Badge Right */}
              <div
                className="animate-floaty glass absolute -right-6 bottom-20 hidden sm:block rounded-2xl px-4 py-3 select-none"
                style={{ animationDelay: "-3s" }}
              >
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#e9eef5]">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  Dhaka, BD
                </div>
                <div className="text-[0.7rem] text-[#cbd5e1] font-medium mt-0.5">CS @ BRAC University</div>
              </div>
            </div>

            {/* Code Block Card below Photo */}
            <div className="w-full max-w-[320px]">
              <HeroCodeBlock />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

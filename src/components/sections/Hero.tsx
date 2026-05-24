"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { HeroCodeBlock }     from "@/components/hero/HeroCodeBlock";
import { HeroFloatingCards } from "@/components/hero/HeroFloatingCards";
import { HeroParticles }     from "@/components/hero/HeroParticles";

/* ── animation variants ── */
const containerVariants = {
  hidden: {},
  show : { transition: { staggerChildren: 0.10 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show  : { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  show  : { opacity: 1, x: 0,  transition: { duration: 0.65, ease: "easeOut" as const, delay: 0.25 } },
};

export function Hero() {
  const { scrollY }    = useScroll();
  const scrollOpacity  = useTransform(scrollY, [0, 90], [1, 0]);

  return (
    <section
      id="home"
      style={{ minHeight: "100svh", paddingTop: "5rem", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}
    >
      {/* ── Ambient glow orbs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "5%",
          width: 560, height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "15%", right: "5%",
          width: 480, height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── Main grid ── */}
      <div
        className="container mx-auto"
        style={{ padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }}
      >
        <div className="hero-grid"
             style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* ── LEFT ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 10 }}
          >
            {/* Status pill */}
            <motion.div variants={itemVariants}>
              <span
                style={{
                  display       : "inline-flex",
                  alignItems    : "center",
                  gap           : "0.5rem",
                  padding       : "0.35rem 0.9rem",
                  borderRadius  : "9999px",
                  fontSize      : "0.72rem",
                  fontFamily    : "'JetBrains Mono', monospace",
                  letterSpacing : "0.08em",
                  color         : "#00d4ff",
                  background    : "rgba(0,212,255,0.08)",
                  border        : "1px solid rgba(0,212,255,0.25)",
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00d4ff", animation: "pulse 2s infinite" }} />
                Open to opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1
                style={{
                  fontFamily  : "'Outfit', sans-serif",
                  fontWeight  : 800,
                  lineHeight  : 1.08,
                  letterSpacing: "-0.02em",
                  color       : "rgba(255,255,255,0.96)",
                  margin      : 0,
                }}
                className="text-5xl lg:text-[3.8rem] xl:text-[4.4rem]"
              >
                I build things<br />
                the web{" "}
                <span
                  style={{
                    background          : "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor : "transparent",
                    backgroundClip      : "text",
                  }}
                >
                  notices.
                </span>
              </h1>
            </motion.div>

            {/* Sub-line */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily : "'Inter', sans-serif",
                fontSize   : "1rem",
                lineHeight : 1.7,
                color      : "rgba(255,255,255,0.55)",
                maxWidth   : 440,
                margin     : 0,
              }}
            >
              Full-stack developer &amp; CS student at{" "}
              <span style={{ color: "rgba(255,255,255,0.80)", fontWeight: 500 }}>BRAC University</span>
              {" "}— GPA{" "}
              <span style={{ color: "#00d4ff", fontWeight: 600 }}>3.61</span>
              , graduating 2026. I ship real products with MERN, deep learning, and systems code.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.25rem" }}
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display       : "inline-flex",
                  alignItems    : "center",
                  gap           : "0.45rem",
                  padding       : "0.75rem 1.5rem",
                  borderRadius  : "9999px",
                  fontFamily    : "'Inter', sans-serif",
                  fontWeight    : 600,
                  fontSize      : "0.875rem",
                  color         : "#0a0a0f",
                  background    : "linear-gradient(135deg, #00d4ff 0%, #00b4d8 100%)",
                  boxShadow     : "0 0 24px rgba(0,212,255,0.35), 0 2px 8px rgba(0,0,0,0.3)",
                  textDecoration: "none",
                  transition    : "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0,212,255,0.5), 0 4px 12px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,212,255,0.35), 0 2px 8px rgba(0,0,0,0.3)"; }}
              >
                View Projects
                <ArrowRight size={15} />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display       : "inline-flex",
                  alignItems    : "center",
                  gap           : "0.45rem",
                  padding       : "0.75rem 1.5rem",
                  borderRadius  : "9999px",
                  fontFamily    : "'Inter', sans-serif",
                  fontWeight    : 600,
                  fontSize      : "0.875rem",
                  color         : "rgba(255,255,255,0.85)",
                  background    : "rgba(255,255,255,0.06)",
                  border        : "1px solid rgba(255,255,255,0.14)",
                  textDecoration: "none",
                  transition    : "background 0.2s, border 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <Mail size={15} />
                Get in Touch
              </a>
            </motion.div>

            {/* Tiny stat row */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem" }}
            >
              {[
                { value: "13+", label: "Projects" },
                { value: "3.61", label: "GPA" },
                { value: "2+",  label: "Years coding" },
              ].map(s => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#00d4ff" }}>{s.value}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.40)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="show"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", zIndex: 10 }}
          >
            {/* Avatar wrapper (particles + floating cards live here) */}
            <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
              <HeroParticles />
              <HeroFloatingCards />

              {/* Photo */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    position     : "relative",
                    width        : 240,
                    height       : 240,
                    borderRadius : "50%",
                    overflow     : "hidden",
                    boxShadow    : "0 0 0 3px rgba(0,212,255,0.35), 0 0 50px rgba(0,212,255,0.18), 0 0 100px rgba(168,85,247,0.12)",
                    flexShrink   : 0,
                  }}
                >
                  <Image
                    src="/shuvashis.jpg"
                    alt="Shuvashis Basak"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="240px"
                  />
                </div>
              </div>
            </div>

            {/* Code card */}
            <div style={{ width: "100%", maxWidth: 340 }}>
              <HeroCodeBlock />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{
          opacity  : scrollOpacity,
          position : "absolute",
          bottom   : "2rem",
          left     : "50%",
          transform: "translateX(-50%)",
          display  : "flex",
          flexDirection: "column",
          alignItems: "center",
          gap      : "0.35rem",
        }}
      >
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>
          Scroll
        </span>
        <ChevronDown size={14} color="rgba(255,255,255,0.35)" style={{ animation: "bounce 1.5s infinite" }} />
      </motion.div>
    </section>
  );
}

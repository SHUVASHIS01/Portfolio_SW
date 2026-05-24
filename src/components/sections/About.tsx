"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 11, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
  { value: 3.61, suffix: "", label: "GPA at BRAC University", isDecimal: true },
  { value: 2, suffix: "+", label: "Years of Active Building" },
];

function StatCounter({ value, suffix, label, isDecimal }: { value: number; suffix: string; label: string; isDecimal?: boolean }) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = isDecimal ? obj.val.toFixed(2) : Math.round(obj.val).toString();
      },
      onComplete: () => {
        el.textContent = isDecimal ? value.toFixed(2) : value.toString();
      },
    });
  }, [value, isDecimal]);

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-baseline gap-0.5">
        <span
          ref={numRef}
          className="font-extrabold leading-none"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#00d4ff" }}
        >
          0
        </span>
        {suffix && (
          <span className="font-bold text-2xl" style={{ color: "#00d4ff" }}>{suffix}</span>
        )}
      </div>
      <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</span>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text-block",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text-block",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36">
      {/* Subtle glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section label */}
        <p className="text-xs font-mono tracking-[0.15em] uppercase mb-4" style={{ color: "#00d4ff" }}>
          // About Me
        </p>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 max-w-2xl leading-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
          A developer who loves both the craft of code{" "}
          <span style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            and the art of design.
          </span>
        </h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT — Stats 2×2 */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>

          {/* RIGHT — Text */}
          <div className="about-text-block lg:col-span-3 flex flex-col gap-6">
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              I&apos;m Shuvashis Basak — a Computer Science student at BRAC University, Dhaka,
              graduating in 2026 with a 3.61 GPA. I started coding because I wanted to build
              things that people actually use. That curiosity turned into a passion spanning
              full-stack web development, systems programming, machine learning, and frontend
              animation engineering.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              What drives me isn&apos;t just writing code that works — it&apos;s writing code that&apos;s
              clean, scalable, and paired with interfaces that feel alive. I&apos;ve built a
              healthcare platform, a job portal with smart matching algorithms, a booking
              system, a working filesystem in C, a deep learning brain tumor detector, and a
              Pac-Man game in OpenGL. Each project pushed me further.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Outside of coding, I write technical articles on Hashnode, earned the Duke of
              Edinburgh Award, and was recognised through the global Aspire Leaders Program
              alongside participants from 180+ countries. I&apos;m always learning, always building.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { icon: "🎓", text: "BRAC University · BSc CSE · 2022–2026 · GPA 3.61" },
                { icon: "🌐", text: "Open to full-time roles, internships & freelance projects" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="text-xl mt-0.5">{card.icon}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Skills",  href: "#skills" },
  { label: "Projects",href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [active, setActive]           = useState("home");

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Pill navbar ── */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className="flex items-center gap-0.5 px-2 py-2 rounded-full"
          style={{
            background : scrolled ? "rgba(8,8,14,0.92)" : "rgba(8,8,14,0.70)",
            border     : `1px solid ${scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)"}`,
            backdropFilter : "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow  : scrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
            transition : "background 0.3s, border 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center justify-center w-9 h-9 rounded-full mr-1 font-bold text-sm shrink-0"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.02em",
            }}
          >
            SB
          </button>

          {/* Separator */}
          <div className="w-px h-4 mx-1 hidden md:block" style={{ background: "rgba(255,255,255,0.12)" }} />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                  style={{
                    color      : isActive ? "#ffffff" : "rgba(255,255,255,0.50)",
                    background : isActive ? "rgba(0,212,255,0.12)" : "transparent",
                    fontFamily : "'Inter', sans-serif",
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#00d4ff" }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Separator */}
          <div className="w-px h-4 mx-1 hidden md:block" style={{ background: "rgba(255,255,255,0.12)" }} />

          {/* Hire me pill */}
          <a
            href="mailto:basakshuvashis@gmail.com"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold ml-1 transition-opacity duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #00b4d8)",
              color: "#0a0a0f",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0f] opacity-50" />
            Hire Me
          </a>

          {/* Hamburger – mobile */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ml-1 rounded-full"
            style={{ color: "rgba(255,255,255,0.7)" }}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-px rounded-full bg-current transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none" }}
            />
            <span
              className="block w-5 h-px rounded-full bg-current transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px rounded-full bg-current transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none" }}
            />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit  ={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed left-4 right-4 top-20 z-40 md:hidden rounded-2xl p-3"
            style={{
              background: "rgba(8,8,14,0.96)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150"
                style={{
                  color      : active === link.href.slice(1) ? "#00d4ff" : "rgba(255,255,255,0.65)",
                  background : active === link.href.slice(1) ? "rgba(0,212,255,0.08)" : "transparent",
                  fontFamily : "'Inter', sans-serif",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <a
                href="mailto:basakshuvashis@gmail.com"
                className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #00d4ff, #00b4d8)", color: "#0a0a0f" }}
              >
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

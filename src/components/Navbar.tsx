"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto"
      >
        <div
          className="flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: scrolled ? "rgba(10,10,15,0.85)" : "rgba(10,10,15,0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="text-sm font-bold font-mono mr-2 px-2"
            style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            SB
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-3 py-1.5 text-sm rounded-full transition-all duration-200"
                style={{
                  color: activeSection === link.href.replace("#", "") ? "rgba(0,212,255,0.9)" : "rgba(255,255,255,0.55)",
                  background: activeSection === link.href.replace("#", "") ? "rgba(0,212,255,0.08)" : "transparent",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors ml-1"
            aria-label="Toggle menu"
          >
            <div className="w-4 flex flex-col gap-1">
              <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-16 z-40 md:hidden rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,10,15,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

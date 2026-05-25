"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll shadow trigger
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync scroll lock with menuOpen
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            className={`mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 ${
              scrolled ? "glass" : "border border-transparent"
            }`}
          >
            {/* Logo brand */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 cursor-pointer text-left"
              aria-label="Go to home"
            >
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-base">
                <span
                  className="absolute inset-0 rounded-xl p-[1.5px]"
                  style={{
                    background: "linear-gradient(135deg, #fef08a, #facc15, #eab308)",
                    WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <span className="hidden leading-tight sm:block select-none">
                <span className="block text-sm font-semibold text-ink">Shuvashis Basak</span>
                <span className="block text-[0.7rem] text-muted">MERN · AI · Systems</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="mailto:basakshuvashis@gmail.com"
                className="btn-ghost py-2 px-4 text-xs font-semibold flex items-center gap-2"
              >
                <Mail className="h-3.5 w-3.5" />
                Let&apos;s talk
              </a>
            </div>

            {/* Mobile burger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-5 rounded-full bg-ink transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-px w-5 rounded-full bg-ink transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-px w-5 rounded-full bg-ink transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 mx-auto max-w-6xl px-4 sm:px-6 lg:hidden"
          >
            <div className="glass rounded-2xl p-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:basakshuvashis@gmail.com"
                className="btn-primary mt-2 w-full justify-center text-center font-semibold"
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

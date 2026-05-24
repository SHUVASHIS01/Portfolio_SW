"use client";

import { BookOpen } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { icon: FaGithub, href: "https://github.com/SHUVASHIS01", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shuvashis-basak-177425247/", label: "LinkedIn" },
  { icon: BookOpen, href: "https://hashnode.com/@SHUVASHIS01", label: "Hashnode" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-8 pb-8">
      {/* Divider */}
      <div className="w-full h-px mb-10" style={{ background: "rgba(255,255,255,0.07)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Left: Monogram */}
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span
              className="text-2xl font-bold font-mono"
              style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              SB
            </span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Shuvashis Basak</span>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Socials */}
          <div className="flex justify-center md:justify-end gap-3">
            {SOCIAL.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  aria-label={s.label}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 Shuvashis Basak · Built with Next.js &amp; ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

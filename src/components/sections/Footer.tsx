"use client";

import { Mail, ArrowUp, Milestone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { featuredProjects } from "@/data/projects";

const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/SHUVASHIS01" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shuvashis-basak-177425247/" },
  { icon: Mail, label: "Email", href: "mailto:basakshuvashis@gmail.com" },
];

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Main Glass Footer Frame */}
        <div className="glass relative overflow-hidden rounded-t-[2rem] px-6 pb-10 pt-8 sm:px-10 border border-white/5 border-b-0">
          
          {/* Top Row: Social Pills */}
          <div className="grid gap-3 sm:grid-cols-3">
            {SOCIAL_LINKS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-soft flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm text-ink transition-colors hover:border-accent/40 border border-white/5 cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {s.label}
                </a>
              );
            })}
          </div>

          {/* Middle Row: Links Grid */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Column 1: Info */}
            <div>
              <div className="display text-2xl text-accent-gradient font-bold select-none">
                SB
              </div>
              <p className="mt-3 max-w-xs text-xs sm:text-sm text-muted leading-relaxed">
                Shuvashis Basak — Computer Science student &amp; Full-Stack MERN developer from Dhaka, Bangladesh.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-ink">Navigation</h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-left transition-colors hover:text-accent cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Work */}
            <div>
              <h4 className="text-sm font-semibold text-ink">Projects</h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted">
                {featuredProjects.slice(0, 4).map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => scrollTo("projects")}
                      className="text-left transition-colors hover:text-accent cursor-pointer"
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Reach Out */}
            <div>
              <h4 className="text-sm font-semibold text-ink">Get in touch</h4>
              <p className="mt-3 text-xs sm:text-sm text-muted select-all">
                basakshuvashis@gmail.com
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="btn-ghost mt-4 py-2 px-4 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                Back to top
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

          {/* Bottom Display Name */}
          <div className="pointer-events-none mt-8 select-none text-center">
            <div className="display text-[18vw] leading-none text-white/[0.03] uppercase tracking-wide">
              SHUVASHIS
            </div>
          </div>

          {/* Copyright Line */}
          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="text-[10px] sm:text-xs text-faint">
              &copy; {new Date().getFullYear()} Shuvashis Basak. All rights reserved. Built with Next.js &amp; Tailwind.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

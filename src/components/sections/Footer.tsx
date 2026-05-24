"use client";

import { Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

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
    <footer className="relative mt-32 overflow-hidden bg-base pt-20">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Massive Call To Action */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="section-eyebrow mb-6">// What's next?</span>
          <h2 className="display text-[12vw] sm:text-[8vw] md:text-[6rem] leading-[0.9] font-bold text-white tracking-tighter">
            Let&apos;s build <br className="hidden sm:block" />
            <span className="text-accent-gradient italic">together.</span>
          </h2>
          <a
            href="mailto:basakshuvashis@gmail.com"
            className="mt-10 group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-transform hover:scale-105"
          >
            Start a Conversation
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16 border-t border-white/5 pt-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-base select-none border border-white/10">
                <span className="display text-lg text-accent-gradient font-bold">SB</span>
              </span>
              <div>
                <span className="block text-base font-semibold text-white leading-none">Shuvashis Basak</span>
                <span className="block text-[11px] text-slate-400 mt-1.5 uppercase tracking-wider">MERN · AI · Systems</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science student at BRAC University. Building scalable web applications, fine-tuning neural networks, and writing low-level system code.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm font-medium text-slate-400 hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/SHUVASHIS01" target="_blank" rel="noopener noreferrer" className="icon-btn h-10 w-10">
                <FaGithub className="h-4.5 w-4.5" />
              </a>
              <a href="https://www.linkedin.com/in/shuvashis-basak-177425247/" target="_blank" rel="noopener noreferrer" className="icon-btn h-10 w-10">
                <FaLinkedin className="h-4.5 w-4.5" />
              </a>
              <a href="https://hashnode.com/@SHUVASHIS01" target="_blank" rel="noopener noreferrer" className="icon-btn h-10 w-10">
                <SiHashnode className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Massive Bottom Text Watermark & Copyright */}
      <div className="relative border-t border-white/5 bg-black/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
           <span className="display font-extrabold text-[24vw] whitespace-nowrap">SHUVASHIS</span>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <p className="text-xs font-medium text-slate-400">
            &copy; {new Date().getFullYear()} Shuvashis Basak. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}


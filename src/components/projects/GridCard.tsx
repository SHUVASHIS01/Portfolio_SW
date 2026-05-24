"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Project } from "@/data/projects";

interface GridCardProps {
  project: Project;
  index: number;
}

export function GridCard({ project, index }: GridCardProps) {
  const visibleStack = project.techStack.slice(0, 3);
  const remainingCount = project.techStack.length - 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
      className="card-hover glass h-full rounded-2xl flex flex-col overflow-hidden"
    >
      {/* Visual Header (Screenshot or Gradient Fallback) */}
      <div className="relative h-40 w-full shrink-0 border-b border-white/10 overflow-hidden">
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))" }}>
            <div className="absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-overlay" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
            <span className="text-white/30 font-bold text-xl tracking-wider select-none">{project.name}</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-4">
          {/* Top bar: Name and Category */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-white text-sm sm:text-base leading-snug">
              {project.name}
            </h3>
            <span className="chip shrink-0 text-[10px] px-2 py-0.5 whitespace-nowrap border-white/20">
              {project.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {visibleStack.map((t) => (
              <span key={t} className="chip text-[10px] px-2 py-0.5 bg-black/20 border-white/10 text-slate-300">
                {t}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="chip text-[10px] px-2 py-0.5 text-slate-400 bg-transparent border-transparent">
                +{remainingCount} more
              </span>
            )}
          </div>
        </div>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-3 mt-5 pt-3 border-t border-white/5 select-none">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 border border-accent/25 px-2.5 py-1.5 rounded-xl hover:bg-accent/20 transition-all cursor-pointer"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-xl hover:bg-white/10 transition-all cursor-pointer ${
              project.liveUrl ? "" : "w-full justify-center"
            }`}
          >
            <FaGithub className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}


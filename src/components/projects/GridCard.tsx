"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
      className="card-hover glass h-full rounded-2xl p-6 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4">
        {/* Top bar: Name and Category */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-ink text-sm sm:text-base leading-snug">
            {project.name}
          </h3>
          <span className="chip shrink-0 text-[10px] px-2 py-0.5 whitespace-nowrap">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-muted line-clamp-2">
          {project.description}
        </p>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {visibleStack.map((t) => (
            <span key={t} className="chip text-[10px] px-2 py-0.5">
              {t}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="chip text-[10px] px-2 py-0.5 text-faint">
              +{remainingCount} more
            </span>
          )}
        </div>
      </div>

      {/* Actions Row */}
      <div className="flex items-center gap-3 mt-5 pt-3 border-t border-white/5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-accent hover:underline transition-all cursor-pointer"
          >
            <ExternalLink className="h-3 w-3" />
            Live Demo
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-medium text-muted hover:text-ink transition-all cursor-pointer ml-auto"
        >
          <FaGithub className="h-3 w-3" />
          Code
        </a>
      </div>
    </motion.div>
  );
}

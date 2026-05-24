"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";

interface GridCardProps {
  project: Project;
  index: number;
}

export function GridCard({ project, index }: GridCardProps) {
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  };

  const visibleStack = project.techStack.slice(0, 3);
  const remainingCount = project.techStack.length - 3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onMouseMove={handleMouseMove}
      className="relative group rounded-2xl p-5 flex flex-col gap-4 overflow-hidden cursor-none"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ border: "1px solid rgba(0,212,255,0.4)" }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [spotX, spotY],
            ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(0,212,255,0.06), transparent 60%)`
          ),
        }}
      />

      {/* Top row: name + category tag */}
      <div className="flex items-start justify-between gap-2 relative z-10">
        <h3 className="font-semibold text-base" style={{ color: "rgba(255,255,255,0.95)" }}>
          {project.name}
        </h3>
        <span
          className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide whitespace-nowrap"
          style={{
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.2)",
            color: "#00d4ff",
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed line-clamp-2 relative z-10"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {visibleStack.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-full text-[11px]"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {t}
          </span>
        ))}
        {remainingCount > 0 && (
          <span
            className="px-2 py-0.5 rounded-full text-[11px]"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            +{remainingCount} more
          </span>
        )}
      </div>

      {/* Bottom row: action buttons */}
      <div className="flex items-center gap-2 mt-auto pt-2 relative z-10">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.2)",
              color: "#00d4ff",
            }}
            aria-label="Live demo"
          >
            <ExternalLink size={13} />
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)",
          }}
          aria-label="GitHub repository"
        >
          <FaGithub size={13} />
        </a>
      </div>
    </motion.div>
  );
}

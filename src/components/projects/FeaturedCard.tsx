"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";

const GRADIENTS: Record<string, string> = {
  mediqueue: "linear-gradient(135deg, #00d4ff 0%, #00b4d8 100%)",
  jobportal: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
  developerlook: "linear-gradient(135deg, #10b981 0%, #00d4ff 100%)",
};

interface FeaturedCardProps {
  project: Project;
  index: number;
}

export function FeaturedCard({ project, index }: FeaturedCardProps) {
  const isEven = index % 2 === 0;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const num = String(index + 1).padStart(2, "0");
  const gradient = GRADIENTS[project.id] || "linear-gradient(135deg, #00d4ff, #a855f7)";

  const TextSide = (
    <div className="flex flex-col justify-center gap-6 py-2">
      {/* Number */}
      <div className="relative">
        <span
          className="absolute -top-8 -left-2 font-bold select-none pointer-events-none"
          style={{ fontSize: 80, color: "rgba(255,255,255,0.06)", lineHeight: 1 }}
        >
          {num}
        </span>
        <h3 className="relative text-2xl lg:text-3xl font-bold z-10" style={{ color: "rgba(255,255,255,0.95)" }}>
          {project.name}
        </h3>
      </div>

      <p className="text-sm lg:text-base leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-full text-xs"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0a0a0f] transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #00d4ff, #00b4d8)", boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{
            color: "rgba(255,255,255,0.8)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <FaGithub size={14} />
          GitHub
        </a>
      </div>
    </div>
  );

  const VisualSide = (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d", willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden cursor-none"
    >
      {/* Browser mockup */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#1a1a2e" }}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <div
            className="flex-1 mx-3 rounded-md px-3 py-1 text-xs text-center"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}
          >
            {project.name.toLowerCase().replace(/\s+/g, "-")}.vercel.app
          </div>
        </div>

        {/* Gradient screen */}
        <div
          className="h-56 lg:h-72 w-full flex items-center justify-center relative overflow-hidden"
          style={{ background: gradient }}
        >
          {/* Animated pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <span className="text-white/30 font-bold text-3xl tracking-wider select-none">{project.name}</span>

          {/* Spotlight */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: useTransform(
                [spotX, spotY],
                ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.12), transparent 60%)`
              ),
            }}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      ref={cardRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 items-center"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      {isEven ? (
        <>
          <div>{TextSide}</div>
          <div>{VisualSide}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{VisualSide}</div>
          <div className="order-1 lg:order-2">{TextSide}</div>
        </>
      )}
    </motion.div>
  );
}

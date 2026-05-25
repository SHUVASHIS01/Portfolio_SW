"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Project } from "@/data/projects";

const GRADIENTS: Record<string, string> = {
  mediqueue: "linear-gradient(135deg, #facc15 0%, #eab308 100%)",
  jobportal: "linear-gradient(135deg, #fef08a 0%, #facc15 100%)",
  developerlook: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
};

interface FeaturedCardProps {
  project: Project;
  index: number;
}

export function FeaturedCard({ project, index }: FeaturedCardProps) {
  const isEven = index % 2 === 0;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
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
  const gradient = GRADIENTS[project.id] || "linear-gradient(135deg, #facc15, #eab308)";

  const TextSide = (
    <div className="flex flex-col gap-5 py-2">
      {/* Index Number & Title */}
      <div className="flex items-start gap-4 sm:gap-5">
        <span className="display font-extrabold text-accent opacity-50 text-5xl sm:text-6xl leading-none mt-1">
          {num}
        </span>
        <div className="flex flex-col">
          <span className="chip mb-2 text-xs self-start">{project.category}</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base leading-relaxed text-muted max-w-lg">
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((t) => (
          <span key={t} className="chip text-[0.7rem] px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost py-2 px-4 text-xs font-semibold flex items-center gap-1.5"
        >
          <FaGithub className="h-3.5 w-3.5" />
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
      className="relative rounded-[1.8rem] overflow-hidden cursor-none group"
    >
      {/* Mock Browser Frame */}
      <div
        className="rounded-[1.8rem] overflow-hidden border border-white/10"
        style={{ background: "rgba(18,28,30,0.6)", backdropFilter: "blur(8px)" }}
      >
        {/* Mock Browser Tab Bar */}
        <div
          className="flex items-center gap-1.5 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          <div
            className="flex-1 mx-4 rounded-md px-3 py-1.5 text-[10px] text-center select-none text-faint"
            style={{ background: "rgba(255,255,255,0.05)", fontFamily: "var(--font-mono)" }}
          >
            {project.name.toLowerCase().replace(/\s+/g, "-")}.vercel.app
          </div>
        </div>

        {/* Screenshot / Visual Viewport */}
        <div className="h-60 sm:h-72 lg:h-80 w-full relative overflow-hidden flex items-center justify-center">
          {project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={project.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 550px"
              priority
            />
          ) : (
            // Fallback colorful grid pattern screen
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: gradient }}>
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <span className="text-white/30 font-bold text-2xl sm:text-3xl tracking-wider select-none">
                {project.name}
              </span>
            </div>
          )}

          {/* Mouse hover spotlight */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: useTransform(
                [spotX, spotY],
                ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 60%)`
              ),
            }}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={cardRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-12 items-center border-b border-white/5"
    >
      {isEven ? (
        <>
          <div className="order-2 lg:order-1">{TextSide}</div>
          <div className="order-1 lg:order-2">{VisualSide}</div>
        </>
      ) : (
        <>
          <div className="order-2">{VisualSide}</div>
          <div className="order-1">{TextSide}</div>
        </>
      )}
    </motion.div>
  );
}

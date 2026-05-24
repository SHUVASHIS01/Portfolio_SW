"use client";

import { featuredProjects, gridProjects } from "@/data/projects";
import { FeaturedCard } from "@/components/projects/FeaturedCard";
import { GridCard } from "@/components/projects/GridCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[800px] h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.04) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <p className="text-xs font-mono tracking-[0.15em] uppercase mb-4" style={{ color: "#00d4ff" }}>
          // Featured Work
        </p>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.95)" }}>
          Projects that ship.
        </h2>

        <p className="text-base max-w-xl mb-0" style={{ color: "rgba(255,255,255,0.45)" }}>
          From full-stack MERN apps to deep learning pipelines and systems programming — real projects solving real problems.
        </p>

        {/* ── Featured cards ── */}
        <div className="mt-8">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* ── Grid section heading ── */}
        <div className="mt-20 mb-8">
          <p className="text-sm font-mono mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            More projects →
          </p>
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* ── Grid cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridProjects.map((project, i) => (
            <GridCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

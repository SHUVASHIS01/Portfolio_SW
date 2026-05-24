"use client";

import { featuredProjects, gridProjects } from "@/data/projects";
import { FeaturedCard } from "@/components/projects/FeaturedCard";
import { GridCard } from "@/components/projects/GridCard";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-6xl w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="section-eyebrow">// Featured Work</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-ink display italic">
              Projects that ship
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From full-stack web applications to machine learning MRI pipelines and low-level systems programming.
            </p>
          </div>
          <span className="chip">
            {featuredProjects.length + gridProjects.length} projects total
          </span>
        </div>

        {/* Featured Projects List */}
        <div className="flex flex-col gap-4">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Grid Title */}
        <div className="mt-24 mb-10">
          <span className="text-xs uppercase tracking-widest text-faint font-semibold font-mono flex items-center gap-3">
            More projects
            <span className="h-px flex-1 bg-white/10" />
          </span>
        </div>

        {/* Grid Projects Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project, i) => (
            <GridCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useMemo } from "react";

const PARTICLE_DATA = [
  { x: 52, y: 8, size: 2, dur: 10, delay: 0 },
  { x: 63, y: 22, size: 3, dur: 13, delay: 2 },
  { x: 71, y: 45, size: 2, dur: 9, delay: 4 },
  { x: 80, y: 15, size: 2, dur: 14, delay: 1 },
  { x: 58, y: 60, size: 3, dur: 11, delay: 3 },
  { x: 88, y: 35, size: 2, dur: 16, delay: 5 },
  { x: 75, y: 72, size: 2, dur: 8, delay: 2 },
  { x: 93, y: 55, size: 3, dur: 12, delay: 6 },
  { x: 65, y: 85, size: 2, dur: 15, delay: 1 },
  { x: 82, y: 90, size: 2, dur: 10, delay: 4 },
  { x: 55, y: 38, size: 3, dur: 13, delay: 3 },
  { x: 90, y: 20, size: 2, dur: 11, delay: 7 },
];

export function HeroParticles() {
  const particles = useMemo(() => PARTICLE_DATA, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: i % 3 === 0 ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.2)",
            animation: `particleDrift ${p.dur}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

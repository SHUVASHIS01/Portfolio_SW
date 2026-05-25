"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Only on non-touch desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterLink = () => {
      gsap.to(ring, { scale: 1.8, borderColor: "rgba(250,204,21,0.8)", duration: 0.2 });
      gsap.to(dot, { scale: 0.5, duration: 0.2 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(ring, { scale: 1, borderColor: "rgba(250,204,21,0.4)", duration: 0.2 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    document.addEventListener("mousemove", onMouseMove);

    const links = document.querySelectorAll("a, button, [data-cursor-hover]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    const tick = () => {
      gsap.set(dot, { x: mouseX, y: mouseY });
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      gsap.set(ring, { x: ringX, y: ringY });
    };

    gsap.ticker.add(tick);

    // Show cursor
    gsap.set([dot, ring], { opacity: 0 });
    document.addEventListener("mouseenter", () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tick);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden md:block"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          border: "1px solid rgba(250,204,21,0.4)",
          willChange: "transform",
        }}
      />
    </>
  );
}

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Native scroll — Lenis removed (caused slow/automatic scroll feel).
// GSAP ScrollTrigger works perfectly with native scroll.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return <>{children}</>;
}

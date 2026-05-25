"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 600;
    const interval = 16;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = Math.min(100, Math.round((step / steps) * 100));
      setProgress(p);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
          setTimeout(onComplete, 400);
        }, 200);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0f]"
        >
          {/* Glow orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #facc15 0%, transparent 70%)", filter: "blur(80px)" }}
          />

          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            {/* SB logo */}
            <div className="text-6xl font-bold font-mono"
              style={{ background: "linear-gradient(135deg, #facc15, #eab308)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              SB
            </div>

            {/* Name typewriter */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-white/40 text-sm font-mono tracking-[0.3em]"
            >
              shuvashis.basak
            </motion.p>

            {/* Progress bar */}
            <div className="mt-8 w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #facc15, #eab308)",
                  transition: "width 16ms linear",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

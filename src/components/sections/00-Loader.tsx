"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Stage 1: AP
    const t1 = setTimeout(() => setStep(1), 500);
    // Stage 2: AYUSH PURI
    const t2 = setTimeout(() => setStep(2), 1200);
    // Stage 3: Tagline & Complete
    const t3 = setTimeout(() => {
      setStep(3);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-condensed text-7xl md:text-9xl tracking-widest metallic-text"
              >
                AP
              </motion.div>
            )}

            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white">
                  AYUSH PURI
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="font-mono-tech text-xs md:text-sm tracking-[0.25em] text-zinc-400 uppercase"
                >
                  BUILDING / MARKETING / EXPERIENCES
                </motion.div>

                {/* Progress bar */}
                <div className="w-48 h-[1px] bg-zinc-800 mx-auto mt-6 relative overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

const SEQUENCES = [
  "TECHNOLOGY",
  "BUSINESS",
  "MARKETING",
  "EVENTS",
  "COMMUNITY",
];

export default function FinalMessage() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % SEQUENCES.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#030303] py-20 px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center text-center border-t border-white/5 select-none overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-0 relative z-10">
        {/* Animated category sequence ticker */}
        <div className="h-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="font-mono-tech text-xs sm:text-sm tracking-[0.4em] uppercase text-zinc-500 font-semibold"
            >
              {SEQUENCES[wordIdx]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stripped-back dramatic text reveal */}
        <div className="space-y-2">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-400 tracking-tight leading-tight uppercase">
              THEY'RE ALL <br />
              <span className="text-white">JUST TOOLS.</span>
            </h2>
          </ScrollReveal>

          {/* Red Accent Growing Line */}
          <ScrollReveal direction="none" delay={0.25}>
            <div className="w-20 sm:w-28 h-[2px] bg-red-600 mx-auto my-8" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <h3 className="font-display font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-[0.9]">
              THE REAL PRODUCT <br />
              <span className="text-red-500">IS PEOPLE.</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="font-mono-tech text-xs sm:text-base text-zinc-400 tracking-[0.3em] uppercase pt-6">
              THAT'S WHAT I BUILD.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

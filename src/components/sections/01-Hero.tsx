"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { scrollToTarget } from "../layout/SmoothScroll";

const HEADLINES = [
  "I BUILD THINGS.",
  "I BUILD COMMUNITIES.",
  "I BUILD EXPERIENCES.",
  "I BUILD BUSINESSES.",
];

const FAST_CUT_WORDS = [
  "STAGES",
  "CROWDS",
  "CODE",
  "SUPERCARS",
  "NETWORKING",
  "PRODUCTION",
  "PRODUCTS",
  "REVENUE",
  "EXECUTION",
];

export default function Hero({ onExplore }: { onExplore?: () => void }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 2800);

    const tickerInterval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % FAST_CUT_WORDS.length);
    }, 450);

    return () => {
      clearInterval(interval);
      clearInterval(tickerInterval);
    };
  }, []);

  const scrollToNext = () => {
    scrollToTarget("#who-am-i");
    if (onExplore) onExplore();
  };

  const scrollToPitch = () => {
    scrollToTarget("#why-ten");
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-hidden bg-[#050505] select-none">
      {/* Background cinematic atmosphere & lighting */}
      <div className="absolute inset-0 z-0">
        {/* Deep ambient radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-gradient-to-b from-zinc-800/20 via-zinc-900/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-950/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Dynamic scanline grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* Top Bar: Identity & Fast Cuts Ticker */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono-tech text-xs tracking-[0.25em] uppercase text-zinc-300">
            AYUSH PURI
          </span>
          <span className="text-zinc-600 font-mono-tech text-xs">/</span>
          <span className="font-mono-tech text-xs tracking-[0.2em] uppercase text-zinc-400 hidden sm:inline-block">
            AP × THE EXOTICS NETWORK
          </span>
        </div>

        {/* Dynamic Fast-cut trailer word ticker */}
        <div className="flex items-center gap-2 font-mono-tech text-[10px] md:text-xs text-zinc-400">
          <span className="text-zinc-600 hidden md:inline">TRAILER CUT //</span>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700/60 text-white font-semibold min-w-[85px] text-center">
            {FAST_CUT_WORDS[tickerIndex]}
          </span>
        </div>
      </div>

      {/* Central Dramatic Kinetic Typography */}
      <div className="relative z-10 my-auto py-12 md:py-20 flex flex-col justify-center">
        <p className="font-mono-tech text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-400 mb-6 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-zinc-600" />
          EXECUTION IS THE ONLY CURRENCY
        </p>

        {/* Giant Cycling Headline */}
        <div className="h-[90px] sm:h-[130px] md:h-[170px] lg:h-[220px] overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIndex}
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -90, opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white"
            >
              {HEADLINES[headlineIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle & Focus Vector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 md:mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-condensed text-2xl sm:text-3xl md:text-4xl text-zinc-300 uppercase tracking-wider"
        >
          <span className="text-white">TECH</span>
          <span className="text-zinc-600">×</span>
          <span className="text-white">BUSINESS</span>
          <span className="text-zinc-600">×</span>
          <span className="text-white">EVENTS</span>
          <span className="text-zinc-600">×</span>
          <span className="text-white">MARKETING</span>
          <span className="text-zinc-600">×</span>
          <span className="text-white">COMMUNITY</span>
        </motion.div>
      </div>

      {/* Bottom Bar: Action CTAs & Scroll Cue */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-4">
          <MagneticButton
            onClick={scrollToNext}
            dataCursor="ENTER"
            className="px-7 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-sm tracking-wider uppercase rounded-none transition-all flex items-center gap-2 group"
          >
            <span>ENTER EXPERIENCE</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </MagneticButton>

          <MagneticButton
            onClick={scrollToPitch}
            dataCursor="PITCH"
            className="px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-medium text-sm tracking-wider uppercase rounded-none transition-all flex items-center gap-2 group"
          >
            <span>WHY TEN?</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
        </div>

        <div
          onClick={scrollToNext}
          className="flex items-center gap-3 cursor-pointer group text-zinc-400 hover:text-white transition-colors"
        >
          <span className="font-mono-tech text-xs tracking-widest uppercase">
            SCROLL TO DECONSTRUCT
          </span>
          <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

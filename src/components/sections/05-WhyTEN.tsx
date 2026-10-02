"use client";

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import { Sparkles, ArrowRight, ShieldCheck, Check, ChevronRight } from "lucide-react";

export default function WhyTEN() {
  return (
    <section
      id="why-ten"
      className="relative min-h-screen w-full bg-[#030303] py-24 px-6 md:px-12 lg:px-16 flex flex-col justify-center border-t border-red-900/30 overflow-hidden"
    >
      {/* Background ambient automotive red lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-red-500">
              04 // THE STRATEGIC FIT
            </span>
            <div className="flex-1 h-[1px] bg-red-950/60" />
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <div className="mb-14">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="font-mono-tech text-xs tracking-[0.25em] text-zinc-500 uppercase block mb-3">
              DIRECT PROPOSAL TO THE EXOTICS NETWORK
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] uppercase">
              WHY THIS? <br />
              <span className="text-zinc-500">
                BECAUSE I'VE ALREADY EXECUTED THE ENGINE.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-6 text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Supercar rallies and youth arenas sound different on paper. In practice, the underlying mechanics of community, status, crowd energy, and commercial monetization are identical.
            </p>
          </ScrollReveal>
        </div>

        {/* The Comparative Parallel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* What I've Done Column */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="p-6 sm:p-10 bg-zinc-950 border border-white/10 rounded-2xl relative h-full flex flex-col justify-between">
              <div>
                <span className="font-mono-tech text-xs text-zinc-500 uppercase tracking-widest block mb-3">
                  PROVEN BASELINE // WHAT I'VE EXECUTED
                </span>
                <div className="font-condensed text-3xl sm:text-4xl text-white tracking-wider mb-6">
                  COMMUNITY + LIVE ARENAS + REVENUE + BRANDS
                </div>
                <ul className="space-y-4 font-mono-tech text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✔</span>
                    <span>Mobilized 8,000+ ambitious individuals into packed physical venues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✔</span>
                    <span>Generated ₹32L+ in revenue through ticket access and sponsor packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✔</span>
                    <span>Pitched, closed, and delivered for global brands like BMW, Coca-Cola, Royal Enfield, and Red Bull</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✔</span>
                    <span>Architected automated ticketing and dispatch platforms from concept to launch</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 font-mono-tech text-xs text-zinc-500 flex items-center justify-between">
                <span>EXECUTION TRACK RECORD</span>
                <span className="text-emerald-400 font-semibold">100% PROVEN</span>
              </div>
            </div>
          </ScrollReveal>

          {/* What TEN Needs Column */}
          <ScrollReveal direction="right" delay={0.25}>
            <div className="p-6 sm:p-10 bg-zinc-950 border border-red-900/50 rounded-2xl relative h-full flex flex-col justify-between shadow-2xl">
              <div>
                <span className="font-mono-tech text-xs text-red-400 uppercase tracking-widest block mb-3">
                  NEXT CHAPTER // WHAT TEN ACCELERATES
                </span>
                <div className="font-condensed text-3xl sm:text-4xl text-white tracking-wider mb-6">
                  EXOTIC DRIVES + PRIVATE NETWORK + LUXURY COMMERCE
                </div>
                <ul className="space-y-4 font-mono-tech text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">➤</span>
                    <span>Uniting supercar owners and collectors into an exclusive, high-trust network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">➤</span>
                    <span>Engineering closed-canyon runs, VIP track days, and five-star checkpoint soirees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">➤</span>
                    <span>Monetizing high-margin partnerships with luxury horology, private banking, and lifestyle icons</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">➤</span>
                    <span>Building a proprietary digital OS for member registries, telemetry, and private invites</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-red-950 font-mono-tech text-xs text-zinc-500 flex items-center justify-between">
                <span>STRATEGIC IMPACT</span>
                <span className="text-red-400 font-semibold">IMMEDIATE VALUE</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* The Fundamental Truth Banner */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="p-8 sm:p-12 md:p-14 bg-zinc-900/60 border border-white/15 rounded-2xl text-center flex flex-col items-center">
            <span className="font-mono-tech text-xs text-zinc-400 uppercase tracking-[0.3em] mb-3">
              THE CORE PHILOSOPHY
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              DIFFERENT INDUSTRY. <br />
              <span className="metallic-text">SAME UNDERLYING FLYWHEEL.</span>
            </h3>

            {/* Visual Flywheel (Responsive flow) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-condensed text-lg sm:text-2xl md:text-3xl text-zinc-300">
              <span className="px-3 py-1 bg-zinc-800 rounded text-white">PEOPLE</span>
              <span className="text-red-500">→</span>
              <span className="px-3 py-1 bg-zinc-800 rounded text-white">EXPERIENCE</span>
              <span className="text-red-500">→</span>
              <span className="px-3 py-1 bg-zinc-800 rounded text-white">COMMUNITY</span>
              <span className="text-red-500">→</span>
              <span className="px-3 py-1 bg-zinc-800 rounded text-white">CONTENT</span>
              <span className="text-red-500">→</span>
              <span className="px-3 py-1 bg-zinc-800 rounded text-white">GROWTH</span>
            </div>

            <p className="font-mono-tech text-xs sm:text-sm text-zinc-400 max-w-xl mt-6 leading-relaxed">
              Whether on a keynote stage or behind an Italian V12 supercar, the emotional currency of belonging, adrenaline, and prestige works the exact same way.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

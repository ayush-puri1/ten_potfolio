"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";
import carsCandid from "@/asset/hero.png";

export default function WhoAmI() {
  return (
    <section
      id="who-am-i"
      className="relative min-h-screen w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-16 flex flex-col justify-center border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-500">
            02 // EDITORIAL INTEL
          </span>
          <div className="flex-1 h-[1px] bg-zinc-800" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Manifest Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-none overflow-hidden bg-zinc-900 border border-white/15 group">
              {/* Cinematic Texture / Gradient Mock Frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent z-10" />

              {/* Graphic element symbolizing Ayush in motion */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
                <div className="flex justify-between items-start">
                  <div className="font-mono-tech text-[10px] tracking-widest text-zinc-400 uppercase">
                    SUBJECT // AP-01
                  </div>
                  <div className="font-mono-tech text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded">
                    ACTIVE BUILDER
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="my-2 overflow-hidden rounded-xl border border-white/10 w-fit">
                    <a
                      href="https://www.instagram.com/codingninjas.lpu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-30 block cursor-pointer hover:opacity-90 transition-opacity pointer-events-auto"
                      aria-label="View post on Instagram"
                    >
                      <Image
                        src={carsCandid}
                        alt="Cars Candid"
                        className="rounded-xl object-cover w-[450px] h-[450px] max-w-full"
                        priority
                      />
                    </a>
                  </div>
                  <div className="font-display font-bold text-2xl md:text-3xl text-white">
                    "I don't study hype. I build what causes it."
                  </div>
                  <div className="font-mono-tech text-xs text-zinc-500 pt-2">
                    Need for Speed / Jalandhar / Punjab
                  </div>
                </div>
              </div>

              {/* High-tech scanner line effect */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            </div>

            {/* Accompanying Stats Badge */}
            <div className="relative mt-4 sm:absolute sm:mt-0 sm:-bottom-15 sm:-right-6 p-5 bg-[#0f0f0f] border border-white/20 shadow-2xl z-30">
              <span className="block font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest">
                VIBE
              </span>
              <span className="font-display font-semibold text-lg text-white">
                Speed × Taste × High Energy
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono-tech text-sm tracking-widest uppercase text-zinc-200">
                Ayush Puri
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-[1.05]">
                I like building things that people can{" "}
                <span className="underline decoration-zinc-600 underline-offset-8">see, use, experience</span>{" "}
                and remember.
              </h2>
            </div>

            <p className="text-zinc-500 text-sm md:text-subtitle leading-relaxed">
              Most people pick one lane: either you write code in the dark, or you negotiate brand deals in a suit, or you run audio cables backstage at 2 AM.
            </p>

            <p className="text-zinc-500 text-sm md:text-subtitle leading-relaxed">
              I discovered early on that the magic happens where those lanes collide. When technical execution understands human crowd psychology, you don't just ship software—you create movements.
            </p>

            {/* Dynamic Grid: The 4 Operating Vectors */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <span className="font-mono-tech text-xs text-zinc-500 block">01 / ENGINE</span>
                <span className="font-display font-bold text-white text-lg mt-1 block">Full-Stack Capability</span>
                <span className="font-mono-tech text-xs text-zinc-400">Systems, Platforms & Automation</span>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <span className="font-mono-tech text-xs text-zinc-500 block">02 / STAGE</span>
                <span className="font-display font-bold text-white text-lg mt-1 block">Real-World Events</span>
                <span className="font-mono-tech text-xs text-zinc-400">Coding Ninjas LPU | CMO | LPU</span>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <span className="font-mono-tech text-xs text-zinc-500 block">03 / VENTURE</span>
                <span className="font-display font-bold text-white text-lg mt-1 block">B2B Quick Commerce</span>
                <span className="font-mono-tech text-xs text-zinc-400">DelRaw / Textile Hyper-local</span>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <span className="font-mono-tech text-xs text-zinc-500 block">04 / ETHOS</span>
                <span className="font-display font-bold text-white text-lg mt-1 block">Luxury & Velocity</span>
                <span className="font-mono-tech text-xs text-zinc-400">Obsessed with High Craft & Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

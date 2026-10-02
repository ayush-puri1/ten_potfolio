"use client";

import React, { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import {
  Gauge,
  Shield,
  Compass,
  BookOpen,
  Users,
  KeyRound,
  ArrowUpRight,
  Flame,
  Film,
  Sparkles,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "EXPERIENCES",
    icon: Gauge,
    desc: "Curated private track days, closed Alpine mountain passes, and bespoke cross-country rally routes.",
    highlight: "Closed-Circuit Execution",
  },
  {
    label: "PRIVATE NETWORK",
    icon: Users,
    desc: "Verified supercar owners, high-caliber founders, and multi-generational collectors connected directly.",
    highlight: "Vetted Membership",
  },
  {
    label: "EDITORIAL JOURNAL",
    icon: BookOpen,
    desc: "Long-form journalism, vehicle provenance retrospectives, and high-end automotive photography.",
    highlight: "Luxury Storytelling",
  },
  {
    label: "BESPOKE EVENTS",
    icon: Compass,
    desc: "Monaco Grand Prix terraces, Goodwood VIP access, and secret midnight highway convoys.",
    highlight: "Unrivaled Access",
  },
  {
    label: "LUXURY PARTNERS",
    icon: Shield,
    desc: "Official brand integrations with Swiss horology, private banking, and custom coachbuilders.",
    highlight: "High-Margin ROI",
  },
  {
    label: "MEMBER GARAGE OS",
    icon: KeyRound,
    desc: "Private member portal, vehicle provenance registry, instant event RSVPs, and concierge perks.",
    highlight: "Digital Ecosystem",
  },
];

const CONTENT_MULTIPLIERS = [
  { count: "1", label: "HERO CINEMA", desc: "Anamorphic 4K documentary highlight" },
  { count: "15+", label: "VIRAL CLIPS", desc: "High-energy reels tuned for algorithmic reach" },
  { count: "40+", label: "STILLS VAULT", desc: "Private high-res gallery for owners & partners" },
  { count: "1", label: "SPONSOR AUDIT", desc: "Verified impression report for corporate partners" },
];

export default function VisionForTEN() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="vision"
      className="relative min-h-screen w-full bg-[#040404] py-24 px-6 md:px-12 lg:px-16 flex flex-col justify-center border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-400">
              05 // STRATEGIC BLUEPRINT
            </span>
            <div className="flex-1 h-[1px] bg-zinc-800" />
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <div className="mb-14">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="font-mono-tech text-xs tracking-[0.25em] text-red-500 uppercase block mb-3">
              WHAT I BRING TO THE TABLE
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.95]">
              WHAT IF TEN <br />
              <span className="text-zinc-500">OWNED THE DIGITAL EXPERIENCE</span> <br />
              AS HARD AS IT OWNS THE ROAD?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-6 text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
              Most automotive clubs settle for basic websites or chaotic WhatsApp groups. Here is how we can elevate The Exotics Network into a premier digital and physical ecosystem:
            </p>
          </ScrollReveal>
        </div>

        {/* Digital OS Architecture Console */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="rounded-2xl border border-white/20 bg-zinc-950 overflow-hidden shadow-2xl mb-16">
            {/* Header of the TEN OS UI */}
            <div className="px-6 py-4 bg-zinc-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-condensed text-2xl tracking-widest text-white font-bold">
                  TEN // DIGITAL OS
                </span>
                <span className="font-mono-tech text-[10px] text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded">
                  CONCEPT BLUEPRINT
                </span>
              </div>

              <div className="flex items-center gap-3 font-mono-tech text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>PRIVATE MEMBER READY</span>
              </div>
            </div>

            {/* Module Selector Navigation Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-white/10">
              {NAV_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 text-left transition-all flex flex-col justify-between h-[105px] border-r border-white/5 last:border-r-0 cursor-pointer ${
                      isSelected
                        ? "bg-white text-black"
                        : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? "text-black" : "text-zinc-500"}`} />
                    <div>
                      <span className="font-mono-tech text-[10px] block opacity-70">
                        0{idx + 1}
                      </span>
                      <span className="font-condensed text-base sm:text-lg tracking-wider font-bold">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Module Deep-Dive View */}
            <div className="p-6 sm:p-10 md:p-12 bg-gradient-to-b from-zinc-950 to-black">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="font-mono-tech text-xs text-red-500 uppercase tracking-widest block mb-2 font-semibold">
                    {NAV_ITEMS[activeTab].highlight}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white mb-4">
                    {NAV_ITEMS[activeTab].label}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    {NAV_ITEMS[activeTab].desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3 font-mono-tech text-xs">
                    <div className="px-3 py-1.5 bg-zinc-900 border border-white/10 text-zinc-300 rounded">
                      SCOPE: MEMBER PLATFORM & APPLICATION
                    </div>
                    <div className="px-3 py-1.5 bg-zinc-900 border border-white/10 text-emerald-400 rounded">
                      STATUS: READY TO BUILD
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 bg-zinc-900/60 border border-white/10 rounded-xl">
                  <span className="font-mono-tech text-xs text-zinc-400 uppercase tracking-widest block mb-3">
                    MY CONTRIBUTION
                  </span>
                  <p className="font-mono-tech text-xs text-zinc-300 leading-relaxed mb-4">
                    "I don't just draft static mockups. I can design the architecture, build the digital platform, and manage the event floor operations that make it real."
                  </p>
                  <div className="flex items-center gap-2 text-white font-mono-tech text-xs font-semibold">
                    <span>RAPID PROTOTYPE CAPABLE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cinematic Ethos & Content Engine Multiplier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Cinematic Statements */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-zinc-950 border border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-500 font-mono-tech text-xs tracking-widest uppercase mb-4">
                <Flame className="w-4 h-4 fill-red-500" />
                THE CULTURAL POSITIONING
              </div>
              <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-6">
                NOT A CAR CLUB. <br />
                <span className="text-zinc-500">A HIGH-OCTANE NETWORK.</span>
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                "Exotic machines are the catalyst, but the community is the engine. When 30 supercars roll in convoy through mountain passes at dawn, nobody is checking their emails. They are living an unrepeatable experience."
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 font-mono-tech text-xs text-zinc-400">
              <div>
                <span className="text-white block font-semibold">CLOSED PASSES</span>
                <span>Curated precision routes</span>
              </div>
              <div>
                <span className="text-white block font-semibold">PRIVATE SOIRÉES</span>
                <span>High-trust member dinners</span>
              </div>
            </div>
          </div>

          {/* Right: Content Multiplier */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-zinc-950 border border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-zinc-400 font-mono-tech text-xs tracking-widest uppercase mb-4">
                <Film className="w-4 h-4 text-white" />
                DISTRIBUTION ENGINE
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                1 LIVE EVENT = <br />
                <span className="text-red-500">50+ HIGH-IMPACT ASSETS</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Every rally and track day is treated as a production studio that generates weeks of global prestige.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {CONTENT_MULTIPLIERS.map((item) => (
                  <div key={item.label} className="p-3 bg-zinc-900/60 border border-white/5 rounded-lg">
                    <span className="font-condensed text-2xl text-white font-bold block">
                      {item.count}
                    </span>
                    <span className="font-mono-tech text-[10px] text-red-400 uppercase font-semibold block">
                      {item.label}
                    </span>
                    <span className="font-mono-tech text-[10px] text-zinc-400 block mt-1">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono-tech text-xs text-zinc-400">
              ORGANIC GLOBAL REACH WITHOUT AD SPEND
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

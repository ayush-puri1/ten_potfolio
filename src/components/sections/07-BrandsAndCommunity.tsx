"use client";

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import { Handshake, Watch, Landmark, Wine, Cpu, Flag, Users2, Shield } from "lucide-react";

const CATEGORIES = [
  {
    name: "SWISS HOROLOGY",
    icon: Watch,
    concept: "Official timing partner & limited-edition rally chronograph.",
  },
  {
    name: "PRIVATE WEALTH & BANKING",
    icon: Landmark,
    concept: "VIP lounge host & private family office breakfast networking.",
  },
  {
    name: "FINE HOSPITALITY & DINING",
    icon: Wine,
    concept: "Curated post-rally celebratory banquets & sommelier retreats.",
  },
  {
    name: "HIGH-TECH & AI TELEMETRY",
    icon: Cpu,
    concept: "Cockpit camera rigs & automated lap telemetry for track days.",
  },
  {
    name: "MOTORSPORT APPAREL",
    icon: Flag,
    concept: "Co-branded Nomex driving gloves, rally jackets & bespoke leather goods.",
  },
];

const HUMAN_STORIES = [
  {
    title: "THE COLLECTOR",
    quote: "I bought the car for the engineering, but I stayed for the people sitting across from me at dinner.",
    vehicle: "Ferrari SF90 Spider",
    field: "Venture Capital & Aerospace",
  },
  {
    title: "THE FIRST-GEN FOUNDER",
    quote: "In other circles, people ask for your pitch. Here, everyone just speaks the universal language of octane.",
    vehicle: "Porsche 911 GT3 RS",
    field: "Fintech Infrastructure",
  },
  {
    title: "THE RESTORER",
    quote: "Preserving mechanical history isn't about investments. It's about keeping this sound alive.",
    vehicle: "Lamborghini Diablo SV",
    field: "Private Real Estate",
  },
];

export default function BrandsAndCommunity() {
  return (
    <section
      id="brands-and-community"
      className="relative min-h-screen w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-16 flex flex-col justify-center border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-500">
              06 // COMMERCIAL ECOSYSTEM
            </span>
            <div className="flex-1 h-[1px] bg-zinc-800" />
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <div className="mb-14">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2 text-zinc-400 font-mono-tech text-xs tracking-widest uppercase mb-3">
              <Handshake className="w-4 h-4 text-white" />
              INTEGRATION & HUMAN CONNECTIONS
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] uppercase">
              BRANDS & <br />
              <span className="text-zinc-500">THE COMMUNITY MOAT.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-6 text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              "The strongest brand partnerships don't interrupt an experience with banner ads. They elevate the experience. And the network of people is what keeps members coming back."
            </p>
          </ScrollReveal>
        </div>

        {/* Brand Integration Categories */}
        <div className="mb-20">
          <ScrollReveal direction="up" delay={0.25}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono-tech text-xs tracking-widest uppercase text-zinc-400">
                PROPOSED LUXURY PARTNERSHIP CATEGORIES
              </h3>
              <span className="font-mono-tech text-[10px] text-emerald-400 uppercase">
                STRATEGIC ROADMAP
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.name} direction="up" delay={0.1 + idx * 0.08}>
                  <div className="p-6 bg-zinc-950 border border-white/10 rounded-xl hover:border-white/30 transition-all flex flex-col justify-between h-[190px]">
                    <div className="flex justify-between items-start">
                      <span className="font-mono-tech text-[10px] text-zinc-500">
                        0{idx + 1}
                      </span>
                      <Icon className="w-4 h-4 text-zinc-400" />
                    </div>

                    <div>
                      <h4 className="font-condensed text-xl text-white tracking-wide">
                        {cat.name}
                      </h4>
                      <p className="font-mono-tech text-[11px] text-zinc-400 mt-2 leading-relaxed">
                        {cat.concept}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Human Dimension / Persona Stories */}
        <div>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center gap-2 mb-6">
              <Users2 className="w-4 h-4 text-red-500" />
              <h3 className="font-mono-tech text-xs tracking-widest uppercase text-zinc-400">
                THE PEOPLE BEHIND THE MACHINES
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {HUMAN_STORIES.map((story, idx) => (
              <ScrollReveal key={story.title} direction="up" delay={0.25 + idx * 0.1}>
                <div className="p-6 sm:p-8 bg-zinc-950 border border-white/10 rounded-xl hover:border-white/30 transition-all flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono-tech text-xs text-red-500 uppercase tracking-widest block mb-4 font-semibold">
                      {story.title}
                    </span>
                    <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed italic mb-8">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 font-mono-tech text-xs space-y-1">
                    <div className="text-white font-semibold">{story.vehicle}</div>
                    <div className="text-zinc-500">{story.field}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.35}>
            <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl text-center">
              <p className="font-mono-tech text-xs sm:text-sm text-zinc-300 uppercase tracking-widest max-w-2xl mx-auto">
                "Cars attract attention. People create the network. Experiences build the moat."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

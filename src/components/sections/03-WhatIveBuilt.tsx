"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { Trophy, ShieldCheck } from "lucide-react";

const TRACKS = [
  {
    id: "events",
    title: "LIVE ARENAS & COMMUNITY ",
    badge: "At Lovely Professional University",
    subtitle: "Coding Ninjas LPU | CMO",
    highlights: [
      {
        label: "PROVEN ARENA SCALE",
        val: "8,000+ Checked-in attendees",
        detail: "Managed high-density crowd logistics, ticketing pipelines, and stage control across 18+ showcases.",
      },
      {
        label: "COMMERCIAL REVENUE",
        val: "₹32,00,000+ Generated",
        detail: "Direct ticket revenue, premium access passes, and commercial brand integration packages.",
      },
      {
        label: "TIER-1 BRAND PARTNERS",
        val: "BMW, Coca-Cola, Royal Enfield, Red Bull",
        detail: "Secured, structured, and executed corporate partnerships with verifiable experiential ROI.",
      },
    ],
    summary:
      "Events are the ultimate crucible. You cannot pause a crowd of 5,000 people. It taught me how to align sponsors, manage real-time operational risk, and create an atmosphere people talk about for months.",
  },
  {
    id: "venture",
    title: "B2B VENTURE",
    badge: "HYPER-LOCAL QUICK PROCUREMENT",
    subtitle: "Delraw | Solving supply chain friction with modern operational architecture",
    highlights: [
      {
        label: "THE ARCHAIC PROBLEM",
        val: "Fragmented Phone-Call Sourcing",
        detail: "Addressed raw material procurement bottlenecks across one of India's largest industrial manufacturing clusters.",
      },
      {
        label: "THE OPERATIONAL MODEL",
        val: "Under-4-Hour Fulfillment Hubs",
        detail: "Connected raw material spinners with manufacturing floors via verified live rates and localized dispatch hubs.",
      },
      {
        label: "COMMERCIAL RIGOUR",
        val: "P&L, Margins & Vendor Trust",
        detail: "Negotiated supplier pricing, structured unit economics, and designed user-friendly ordering flows for non-tech owners.",
      },
    ],
    summary:
      "DelRaw proved commercial execution from the ground up: confronting real business friction, negotiating margins, managing physical logistics, and building customer trust that lasts.",
  },
  {
    id: "digital",
    title: "DIGITAL PLATFORMS & SYSTEMS",
    badge: "MODERN WEB & AUTOMATION",
    subtitle: "Digital products built for high velocity and flawless member experience",
    highlights: [
      {
        label: "SEAMLESS DIGITAL PORTALS",
        val: "Private Member Architecture",
        detail: "Designing intuitive web applications, member directories, and concierge interfaces tailored for luxury clientele.",
      },
      {
        label: "WORKFLOW AUTOMATION",
        val: "Zero-Friction Operations",
        detail: "Automating ticket issuance, verification badges, event RSVPs, and internal coordination pipelines.",
      },
      {
        label: "TECHNICAL BRIDGE",
        val: "Boardroom to Digital Product",
        detail: "Speaking the language of leadership and technical teams effortlessly—shipping prototypes without relying on third-party agencies.",
      },
    ],
    summary:
      "Technology shouldn't feel complicated; it should feel effortless. I build modern digital platforms that streamline operations, delight users, and drive tangible business value.",
  },
];

const PANELS = TRACKS.length + 1; // 1 Intro Panel + 3 Track Panels

export default function WhatIveBuilt() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(PANELS - 1) * 100}vw`]
  );

  return (
    <>
      <div
        ref={wrapperRef}
        id="what-ive-built"
        style={{ height: `${PANELS * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-[#080808] border-t border-white/5">
          <motion.div
            style={{ x, width: `${PANELS * 100}vw` }}
            className="flex h-full"
          >
            {/* ══════════════════════════════════════════
                PANEL 1 — Intro
            ══════════════════════════════════════════ */}
            <div className="shrink-0 w-screen h-full flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 overflow-y-auto">
              <div className="max-w-5xl mx-auto w-full">
                <ScrollReveal direction="up">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-500">
                      02 // PROVEN EXECUTION
                    </span>
                    <div className="flex-1 h-[1px] bg-zinc-800" />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1}>
                  <div className="flex items-center gap-2 text-red-500 font-mono-tech text-xs tracking-widest uppercase mb-4">
                    <Trophy className="w-4 h-4" />
                    THE OPERATING TRACK RECORD
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.15}>
                  <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.92] uppercase mb-8">
                    WHAT I'VE BUILT. <br />
                    <span className="text-zinc-600">REAL STAGES. REAL BUSINESSES.</span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-3xl font-light leading-relaxed">
                    Explore the 3 core pillars where I have delivered verified results: from executing live arenas with thousands of attendees, to building hyper-local supply chains, to crafting modern digital platforms.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <div className="mt-14 flex items-center gap-3 text-zinc-600">
                    <span className="font-mono-tech text-[10px] tracking-widest uppercase">Scroll to explore pillars</span>
                    <div className="flex gap-1">
                      <span className="w-6 h-[1px] bg-zinc-700" />
                      <span className="w-3 h-[1px] bg-zinc-800" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* ══════════════════════════════════════════
                PANELS 2-4 — The Tracks
            ══════════════════════════════════════════ */}
            {TRACKS.map((track, idx) => (
              <div key={track.id} className="shrink-0 w-screen h-full flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 overflow-y-auto">
                <div className="max-w-6xl mx-auto w-full">
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left side: Track Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-8">
                        <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-500">
                          PILLAR 0{idx + 1}
                        </span>
                        <div className="flex-1 h-[1px] bg-zinc-800" />
                      </div>

                      <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-red-950/40 border border-red-900/50 text-red-400 font-mono-tech text-[10px] tracking-widest uppercase rounded mb-6">
                          {track.badge}
                        </span>
                        <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[0.95] mb-6">
                          {track.title}
                        </h3>
                        <p className="font-mono-tech text-sm text-zinc-400 leading-relaxed max-w-md">
                          {track.subtitle}
                        </p>
                      </div>

                      <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl flex gap-4">
                        <ShieldCheck className="w-6 h-6 text-red-500 shrink-0" />
                        <p className="text-zinc-300 text-sm leading-relaxed font-light">
                          {track.summary}
                        </p>
                      </div>
                    </div>

                    {/* Right side: Highlights Grid */}
                    <div className="flex-1 grid grid-cols-1 gap-4">
                      {track.highlights.map((item, i) => (
                        <div
                          key={item.label}
                          className="p-6 bg-zinc-950 border border-white/10 rounded-2xl hover:border-white/25 transition-all duration-300 relative overflow-hidden group"
                        >
                          <div className="absolute top-0 left-0 w-[2px] h-0 bg-red-600 group-hover:h-full transition-all duration-300" />
                          <span className="font-mono-tech text-[10px] text-zinc-600 uppercase tracking-widest block mb-2">
                            0{i + 1} // {item.label}
                          </span>
                          <div className="font-display font-bold text-2xl text-white mb-2">
                            {item.val}
                          </div>
                          <p className="font-mono-tech text-[11px] text-zinc-400 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "../ui/Counter";
import ScrollReveal from "../ui/ScrollReveal";
import { IndianRupee, Users, Trophy, Calendar } from "lucide-react";

import bmwImg from "@/asset/bmw.png";
import cocaColaImg from "@/asset/cokacola.png";
import royalEnfieldImg from "@/asset/royalenflied.png";
import redBullImg from "@/asset/redbull.png";

const STATS = [
  {
    label: "REVENUE GENERATED",
    value: 32,
    prefix: "₹",
    suffix: "L+",
    icon: IndianRupee,
    desc: "Direct ticket sales, brand integrations & passes",
  },
  {
    label: "CHECKED-IN FOOTFALL",
    value: 8000,
    prefix: "",
    suffix: "+",
    icon: Users,
    desc: "Actual attendees across headline events",
  },
  {
    label: "BRAND COLLABORATIONS",
    value: 28,
    prefix: "",
    suffix: "+",
    icon: Trophy,
    desc: "Secured & closed tier-1 corporate partnerships",
  },
  {
    label: "LIVE SHOWCASES EXECUTED",
    value: 18,
    prefix: "",
    suffix: "+",
    icon: Calendar,
    desc: "Stage productions, hackathons & flagship arenas",
  },
];

// next frame visible when scrolled
interface BrandCollaboration {
  id: string;
  name: string;
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  accent: string;
}

const BRAND_COLLABORATIONS: BrandCollaboration[] = [
  {
    id: "bmw",
    name: "BMW",
    role: "Headline Automotive Showcase",
    image: bmwImg,
    accent: "#3b82f6",
  },
  {
    id: "cocacola",
    name: "Coca-Cola",
    role: "Main Arena Experience Partner",
    image: cocaColaImg,
    accent: "#ef4444",
  },
  {
    id: "royalenfield",
    name: "ROYAL ENFIELD",
    role: "Moto Partner & Custom Arena",
    image: royalEnfieldImg,
    accent: "#f59e0b",
  },
  {
    id: "redbull",
    name: "RED BULL",
    role: "Energy & Action Sports Partner",
    image: redBullImg,
    accent: "#6366f1",
  },
];

// Number of panels × 100vh = total scroll height for this section
const PANELS = 2;

export default function TheNumbers() {
  // The tall wrapper drives the scroll progress
  const wrapperRef = useRef<HTMLDivElement>(null);

  // scrollYProgress = 0 when wrapper top hits viewport top
  //                 = 1 when wrapper bottom hits viewport bottom
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Convert vertical progress → horizontal shift (0 → -(PANELS-1)*100vw)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(PANELS - 1) * 100}vw`]
  );

  // Hover bubble state
  const [mounted, setMounted] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState<BrandCollaboration | null>(null);
  const [bubblePos, setBubblePos] = useState<{ x: number; y: number; flip: boolean }>({
    x: 0,
    y: 0,
    flip: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBrandEnter = (e: React.MouseEvent<HTMLElement>, brand: BrandCollaboration) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = Math.max(140, Math.min(window.innerWidth - 140, rect.left + rect.width / 2));
    const flip = rect.top < 340;
    setBubblePos({ x: cx, y: flip ? rect.bottom + 12 : rect.top - 12, flip });
    setHoveredBrand(brand);
  };

  const handleBrandLeave = () => setHoveredBrand(null);

  return (
    <>
      {/*
        Tall wrapper — its height controls how long the section stays pinned.
        PANELS × 100vh: one "scroll length" per panel.
      */}
      <div
        ref={wrapperRef}
        id="the-numbers"
        style={{ height: `${PANELS * 100}vh` }}
        className="relative"
      >
        {/* ── Sticky viewport: stays at top of screen while wrapper scrolls ── */}
        <div className="sticky top-0 h-screen overflow-hidden bg-[#050505] border-t border-white/5">
          {/*
            Horizontal track — total width = PANELS × 100vw.
            Shifted left by `x` as the user scrolls through the wrapper.
          */}
          <motion.div
            style={{ x, width: `${PANELS * 100}vw` }}
            className="flex h-full"
          >

            {/* ══════════════════════════════════════════
                PANEL 1 — Headline + Stats
            ══════════════════════════════════════════ */}
            <div className="shrink-0 w-screen h-full flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 overflow-y-auto">
              <div className="max-w-5xl mx-auto w-full">

                {/* Eyebrow */}
                <ScrollReveal direction="up">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-500">
                      03 // AUDITED STATS
                    </span>
                    <div className="flex-1 h-[1px] bg-zinc-800" />
                  </div>
                </ScrollReveal>

                {/* Headline */}
                <ScrollReveal direction="up" delay={0.1}>
                  <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.92] uppercase mb-6">
                    THE NUMBERS. <br />
                    <span className="text-zinc-600">PROOF OVER PROMISES.</span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.18}>
                  <p className="text-zinc-400 text-sm sm:text-base max-w-lg font-light leading-relaxed mb-14">
                    Anyone can draft a high-concept pitch. These are the measurable milestones,
                    crowds, and commercial deliverables executed on the ground.
                  </p>
                </ScrollReveal>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {STATS.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <ScrollReveal key={stat.label} direction="up" delay={0.22 + i * 0.07}>
                        <div className="p-5 sm:p-6 bg-zinc-950 border border-white/8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                          {/* Accent bar */}
                          <div className="absolute top-0 left-0 w-[2px] h-0 bg-red-600 group-hover:h-full transition-all duration-300" />

                          <div className="flex justify-between items-start mb-4">
                            <span className="font-mono-tech text-[9px] text-zinc-700 tracking-widest">
                              0{i + 1}
                            </span>
                            <Icon className="w-3.5 h-3.5 text-zinc-700 group-hover:text-zinc-400 transition-colors duration-300" />
                          </div>

                          <div className="font-condensed text-5xl sm:text-6xl font-bold tracking-tight text-white mb-1 leading-none">
                            <Counter
                              end={stat.value}
                              prefix={stat.prefix}
                              suffix={stat.suffix}
                              duration={2200}
                            />
                          </div>

                          <h3 className="font-mono-tech text-[9px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">
                            {stat.label}
                          </h3>

                          <p className="font-mono-tech text-[9px] text-zinc-700 leading-relaxed hidden sm:block">
                            {stat.desc}
                          </p>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* Scroll hint */}
                <ScrollReveal direction="up" delay={0.5}>
                  <div className="mt-10 flex items-center gap-3">
                    <span className="font-mono-tech text-[9px] tracking-widest uppercase text-zinc-700">
                      Keep scrolling to explore brands
                    </span>
                    <div className="flex gap-1">
                      <span className="inline-block w-6 h-[1px] bg-zinc-800" />
                      <span className="inline-block w-3 h-[1px] bg-zinc-900" />
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>

            {/* ══════════════════════════════════════════
                PANEL 2 — Brand Collaborations
            ══════════════════════════════════════════ */}
            <div className="shrink-0 w-screen h-full flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 overflow-y-auto">
              <div className="max-w-5xl mx-auto w-full">

                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-12">
                  <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-500">
                    BRAND COLLABORATIONS
                  </span>
                  <div className="flex-1 h-[1px] bg-zinc-800" />
                </div>

                <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.92] uppercase mb-14">
                  BRANDS BROUGHT <br />
                  <span className="text-zinc-600">TO THE ARENA.</span>
                </h2>

                {/* Brand list — minimal typographic rows */}
                <div className="flex flex-col divide-y divide-white/5">
                  {BRAND_COLLABORATIONS.map((brand, idx) => (
                    <div
                      key={brand.id}
                      className="group flex items-center justify-between py-5 sm:py-6 hover:pl-3 transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center gap-5 sm:gap-8">
                        <span className="font-mono-tech text-[10px] text-zinc-700 w-5 shrink-0">
                          0{idx + 1}
                        </span>

                        {/* Brand name — hover shows image bubble */}
                        <span
                          onMouseEnter={(e) => handleBrandEnter(e, brand)}
                          onMouseLeave={handleBrandLeave}
                          className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white group-hover:text-zinc-200 transition-colors duration-200 select-none cursor-pointer leading-none"
                        >
                          {brand.name}
                        </span>
                      </div>

                      {/* Role — right side */}
                      <span className="hidden sm:block font-mono-tech text-[9px] uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200 text-right max-w-[150px] leading-relaxed">
                        {brand.role}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer line */}
                <div className="mt-12 flex items-center gap-4">
                  <div className="flex-1 h-[1px] bg-zinc-800" />
                  <span className="font-mono-tech text-[9px] tracking-widest text-zinc-700 uppercase">
                  </span>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ── Image bubble portal (rendered outside sticky to avoid clipping) ── */}
      {mounted &&
        hoveredBrand &&
        createPortal(
          <div
            className="fixed z-[99999] pointer-events-none"
            style={{
              left: `${bubblePos.x}px`,
              top: `${bubblePos.y}px`,
              transform: bubblePos.flip ? "translate(-50%, 0%)" : "translate(-50%, -100%)",
            }}
          >
            <div
              className="relative w-56 h-40 rounded-2xl overflow-hidden border border-white/15 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] animate-in fade-in zoom-in-95 duration-150"
              style={{ background: "#0a0a0a" }}
            >
              {/* Brand-colour ambient glow */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${hoveredBrand.accent} 0%, transparent 70%)`,
                }}
              />
              <Image
                src={hoveredBrand.image}
                alt={hoveredBrand.name}
                fill
                className="object-contain p-5 drop-shadow-2xl"
                sizes="224px"
                priority
              />
              {/* Pointer beak */}
              {bubblePos.flip ? (
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a0a] border-l border-t border-white/15 rotate-45" />
              ) : (
                <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a0a] border-r border-b border-white/15 rotate-45" />
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

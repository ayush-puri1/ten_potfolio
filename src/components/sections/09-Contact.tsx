"use client";

import React, { useState } from "react";
import MagneticButton from "../ui/MagneticButton";
import ScrollReveal from "../ui/ScrollReveal";
import { ArrowUpRight, Mail, Send, Check, MessageCircle } from "lucide-react";

export default function Contact() {
  const email = "sawanpuri011@gmail.com";

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-16 flex flex-col justify-between border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-zinc-500">
              07 // DIRECT ACCESS
            </span>
            <div className="flex-1 h-[1px] bg-zinc-800" />
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <div className="mb-14">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="font-mono-tech text-xs tracking-[0.25em] text-red-500 uppercase mb-3">
              THE INVITATION
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tight uppercase leading-[0.9]">
              LET'S BUILD <br />
              <span className="text-zinc-500">SOMETHING ICONIC.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-8 text-zinc-300 text-base sm:text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
              "Ready to bring technical capability, operational leadership, and community energy to The Exotics Network. Let's start the conversation."
            </p>
          </ScrollReveal>
        </div>

        {/* Action CTAs */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <MagneticButton
              onClick={() => window.open(`https://wa.me/918146729779`, "_blank")}
              dataCursor="TALK"
              className="min-h-[48px] px-8 py-4 bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>LET'S TALK</span>
            </MagneticButton>

            <MagneticButton
              onClick={() => { window.location.href = `mailto:${email}`; }}
              dataCursor="MAIL"
              className="min-h-[48px] px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>MAIL</span>
            </MagneticButton>

            <MagneticButton
              onClick={() =>
                window.open("https://www.instagram.com/sawan_puri/", "_blank")
              }
              dataCursor="INSTA"
              className="min-h-[48px] px-8 py-4 bg-zinc-950 hover:bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer credits bar */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] sm:text-xs text-zinc-500 text-center sm:text-left">
        <div>
          AYUSH PURI × THE EXOTICS NETWORK (TEN) // PERSONAL PITCH SPECIFICATION
        </div>
        <div>
          DESIGNED FOR VELOCITY & IMPACT — NOT AN OFFICIAL TEN ENTITY
        </div>
      </div>
    </section>
  );
}

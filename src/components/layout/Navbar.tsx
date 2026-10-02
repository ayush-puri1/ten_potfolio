"use client";

import React, { useEffect, useState } from "react";
import MagneticButton from "../ui/MagneticButton";
import { scrollToTarget } from "./SmoothScroll";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "WHO I AM", href: "#who-am-i" },
  { label: "MY WORK", href: "#what-ive-built" },
  { label: "THE NUMBERS", href: "#the-numbers" },
  { label: "WHY TEN?", href: "#why-ten" },
  { label: "VISION", href: "#vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        {/* Brand / Logo */}
        <div className="z-50">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#hero");
            }}
            className="font-condensed text-2xl tracking-widest text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            AP <span className="text-red-600">//</span> TEN
          </a>
        </div>

        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 bg-zinc-950/85 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-1.5 font-mono-tech text-xs tracking-wider uppercase text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <MagneticButton
            onClick={() => scrollToTarget("#contact")}
            className="min-h-[40px] px-5 py-2 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-none hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            LET'S TALK
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden z-50 p-2 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="space-y-4">
              <span className="font-mono-tech text-xs text-zinc-500 uppercase tracking-widest block mb-4">
                NAVIGATION
              </span>
              {LINKS.map((link, idx) => (
                <div key={link.label} className="border-b border-white/10 pb-3">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between font-condensed text-3xl text-white hover:text-red-500 transition-colors"
                  >
                    <span>0{idx + 1} // {link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToTarget("#contact");
                }}
                className="w-full py-4 bg-white text-black font-bold text-center uppercase tracking-widest text-sm rounded-none"
              >
                LET'S TALK
              </button>
              <p className="font-mono-tech text-[10px] text-zinc-500 text-center uppercase tracking-wider mt-4">
                AYUSH PURI // PITCH BRIEF × THE EXOTICS NETWORK
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

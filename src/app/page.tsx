"use client";

import React, { useState } from "react";
import SmoothScroll from "../components/layout/SmoothScroll";
import CustomCursor from "../components/ui/CustomCursor";
import Navbar from "../components/layout/Navbar";
import Loader from "../components/sections/00-Loader";
import Hero from "../components/sections/01-Hero";
import WhoAmI from "../components/sections/02-WhoAmI";
import WhatIveBuilt from "../components/sections/03-WhatIveBuilt";
import TheNumbers from "../components/sections/04-TheNumbers";
import WhyTEN from "../components/sections/05-WhyTEN";
import VisionForTEN from "../components/sections/06-VisionForTEN";
import BrandsAndCommunity from "../components/sections/07-BrandsAndCommunity";
import FinalMessage from "../components/sections/08-FinalMessage";
import Contact from "../components/sections/09-Contact";

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <SmoothScroll>
      {/* Cinematic intro loader */}
      <Loader onComplete={() => setLoadingDone(true)} />

      {/* Interactive custom pointer */}
      <CustomCursor />

      {/* Floating dynamic navigation with mobile menu & progress bar */}
      <Navbar />

      {/* Main Single-Page Cinematic Flow */}
      <main className="relative min-h-screen bg-[#050505] text-[#FAFAFA] grain-overlay">
        <Hero />
        <WhoAmI />
        <WhatIveBuilt />
        <TheNumbers />
        <WhyTEN />
        <VisionForTEN />
        <BrandsAndCommunity />
        <FinalMessage />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

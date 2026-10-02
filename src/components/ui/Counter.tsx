"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function Counter({
  end,
  duration = 2, // framer-motion animate uses seconds by default
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && ref.current) {
      // Convert ms to seconds if the passed duration was large (like 2200)
      const durationInSeconds = duration > 100 ? duration / 1000 : duration;

      const controls = animate(0, end, {
        duration: durationInSeconds,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(
            value.toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          );
        },
      });

      return () => controls.stop();
    }
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

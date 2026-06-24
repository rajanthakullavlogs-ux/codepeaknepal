"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function AnimatedCircle({ label, delay }: { label: string; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 100;
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(counter);
        }, incrementTime);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const circleLength = 2 * Math.PI * 45; // r=45

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Background track */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-100"
          />
          {/* Animated progress ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#10B981" // emerald-500
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circleLength, strokeDashoffset: circleLength }}
            animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: circleLength }}
            transition={{ duration: 2, ease: "easeOut", delay: delay }}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-emerald-500 font-bold text-3xl">
          {count}
        </div>
      </div>
      <span className="font-semibold text-navy tracking-wide">{label}</span>
    </div>
  );
}

export default function PerformanceMetrics() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Flawless Execution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
            We build websites that <br className="hidden md:block" />
            <span className="text-emerald-500">score 100%</span> across the board.
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            No compromises. Our enterprise solutions are perfectly optimized for performance, accessibility, best practices, and search engines.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
          <AnimatedCircle label="Performance" delay={0.2} />
          <AnimatedCircle label="Accessibility" delay={0.4} />
          <AnimatedCircle label="Best Practices" delay={0.6} />
          <AnimatedCircle label="SEO" delay={0.8} />
        </div>
      </div>
    </section>
  );
}

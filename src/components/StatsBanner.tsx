"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  // Handle decimals properly
  const displayValue = count % 1 !== 0 || value % 1 !== 0 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-white mb-2 block">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0}>
          <div className="bg-navy rounded-[2.5rem] px-8 py-8 md:px-12 md:py-8 relative overflow-hidden shadow-2xl border border-gray-800">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 pb-6 border-b border-gray-800/60">
                <div>
                  <ScrollReveal delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300 font-semibold text-xs uppercase tracking-widest mb-4">
                      By The Numbers
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.15}>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      Proven Track Record
                    </h2>
                  </ScrollReveal>
                </div>
                <ScrollReveal delay={0.2}>
                  <p className="text-sm md:text-base text-gray-400 max-w-sm md:text-right font-medium">
                    Delivering high-quality digital solutions with technical excellence.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { value: 3, prefix: "", suffix: "+", text: "Successful Projects" },
                  { value: 3, prefix: "", suffix: "+", text: "Happy Clients" },
                  { value: 5, prefix: "", suffix: "+", text: "Years Experience" },
                  { value: 100, prefix: "", suffix: "%", text: "Uptime Guaranteed" }
                ].map((stat, idx) => (
                  <ScrollReveal key={idx} delay={0.1 + idx * 0.1}>
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    <p className="text-gray-400 text-sm font-medium mt-1">{stat.text}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

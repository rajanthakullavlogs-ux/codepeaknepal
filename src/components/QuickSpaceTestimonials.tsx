"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export default function QuickSpaceTestimonials() {
  const testimonials = [
    {
      quote: "CodePeak Nepal transformed our online presence. Their team was professional, responsive, and delivered exactly what we needed within budget.",
      name: "Rajesh Paudel",
      role: "Fashion Nepal Ltd",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Outstanding work! The mobile app they built has exceeded our expectations. The support team is always available to help with updates.",
      name: "Priya Sharma",
      role: "Tech Startup Kathmandu",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Best investment for our business. The website is fast, beautiful, and has significantly improved our online sales. Highly recommended!",
      name: "Ahmed Khan",
      role: "E-commerce Hub",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  // Quadruple the array to ensure there's enough content to seamlessly loop -50%
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden border-b border-gray-100 dark:border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white dark:bg-[#1E2330] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-widest mb-6">
                Client Feedback
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white tracking-tight leading-tight">
                Trusted by Industry Leaders
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md md:text-right font-medium">
              Read how we have empowered businesses across Nepal with high-performance digital solutions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative w-full flex overflow-hidden group py-4"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <motion.div 
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {marqueeItems.map((test, idx) => (
              <div
                key={idx}
                className="w-[350px] md:w-[420px] shrink-0 bg-white dark:bg-[#151926] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-gray-100 dark:border-gray-800"
              >
                <p className="text-gray-500 dark:text-gray-300 text-lg leading-relaxed font-medium flex-grow mb-8">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                    <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-navy dark:text-white font-bold">{test.name}</h4>
                    <p className="text-gray-400 dark:text-gray-500 text-sm font-medium">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { HOME_CONTENT } from "@/data/content";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const testimonials = HOME_CONTENT.testimonials;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-offwhite rounded-3xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Side */}
          <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team collaborating" 
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-3/5 p-6 md:p-16 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction < 0 ? 50 : -50 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="mb-8">
                  <span className="text-xl font-bold tracking-wider text-navy bg-white px-4 py-2 rounded-lg shadow-sm inline-block">
                    {testimonials[currentIndex].company}
                  </span>
                </div>
                
                <p className="text-2xl md:text-3xl text-navy font-medium leading-relaxed mb-10">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>
                
                <div className="w-full h-px bg-gray-200 mb-8"></div>
                
                <div className="flex flex-col sm:flex-row gap-8">
                  {testimonials[currentIndex].stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-3xl font-bold text-navy mb-1">{stat.value}</p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-10 right-10 flex gap-3">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

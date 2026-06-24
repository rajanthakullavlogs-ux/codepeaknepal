"use client";

import { motion } from "framer-motion";
import { HOME_CONTENT } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 clip-diagonal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary mb-6 shadow-sm border border-pink-100"
            >
              {HOME_CONTENT.hero.badge}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6 tracking-tight"
            >
              {HOME_CONTENT.hero.heading}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {HOME_CONTENT.hero.subtext}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-navy/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Get 14 Days Free Trial
              </button>
              <span className="text-sm text-gray-500">No credit card required</span>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full max-w-lg mx-auto h-[400px] md:h-[500px]">
            {/* Dashboard Mockups with Parallax effect */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-0 right-0 w-64 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">W</div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Sales</p>
                  <p className="font-bold text-navy">$2,450</p>
                </div>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-0 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-30"
            >
              <p className="text-sm font-semibold text-navy mb-4">Sales Overview</p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                <div>
                  <p className="text-3xl font-bold text-navy">{HOME_CONTENT.hero.stats.sales}%</p>
                  <p className="text-xs text-green-500 font-medium">+12.5% from last week</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-accent1 to-accent2 rounded-full opacity-20 blur-3xl -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

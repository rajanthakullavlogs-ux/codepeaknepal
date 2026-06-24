"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 bg-offwhite relative flex flex-col">
      {/* Global subtle grid background for the whole page */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 font-semibold text-sm uppercase tracking-widest mb-6 shadow-sm"
          >
            Contact CodePeak Nepal
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] mb-6 tracking-tight leading-tight"
          >
            Let's Build Something <br className="hidden md:block"/> <span className="text-[#2D45FF]">Extraordinary</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Whether you need a custom software solution, a high-performance app, or a complete digital transformation, our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section using reusable component */}
      <div className="flex-1 relative z-10 -mt-8">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}

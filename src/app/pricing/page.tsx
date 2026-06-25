"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { PRICING_CONTENT } from "@/data/content";
import { Check, Sparkles, Globe, Wrench, ShieldCheck, Monitor, Smartphone, Code } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

type Category = 'website' | 'app' | 'software';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<Category>('website');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "globe": return <Globe className="w-8 h-8 text-primary dark:text-blue-400" />;
      case "wrench": return <Wrench className="w-8 h-8 text-primary dark:text-blue-400" />;
      case "shield": return <ShieldCheck className="w-8 h-8 text-primary dark:text-blue-400" />;
      default: return <Sparkles className="w-8 h-8 text-primary dark:text-blue-400" />;
    }
  };

  const filteredTiers = PRICING_CONTENT.tiers.filter(tier => tier.category === activeCategory);

  return (
    <main className="min-h-screen pt-20 bg-offwhite dark:bg-[#0B0F19] relative">
      {/* Global subtle grid background for the whole page */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--radial-grid-color) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 text-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy dark:text-white mb-6 tracking-tight">
            {PRICING_CONTENT.heading}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {PRICING_CONTENT.subtext}
          </p>
        </motion.div>
      </section>

      {/* Tab Selector */}
      <section className="relative z-20 pb-12 px-4 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 bg-white dark:bg-[#151926] p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <button
            onClick={() => setActiveCategory('website')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeCategory === 'website' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 border border-transparent'
            }`}
          >
            <Monitor className="w-5 h-5" />
            Website
          </button>
          <button
            onClick={() => setActiveCategory('app')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeCategory === 'app' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 border border-transparent'
            }`}
          >
            <Smartphone className="w-5 h-5" />
            Mobile App
          </button>
          <button
            onClick={() => setActiveCategory('software')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeCategory === 'software' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 border border-transparent'
            }`}
          >
            <Code className="w-5 h-5" />
            Custom Software
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 relative z-10 min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className={`max-w-7xl mx-auto grid grid-cols-1 gap-8 justify-center ${
              filteredTiers.length === 1 ? 'md:grid-cols-1 max-w-md' :
              filteredTiers.length === 2 ? 'md:grid-cols-2 max-w-4xl' :
              filteredTiers.length === 3 ? 'md:grid-cols-3' :
              'md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {filteredTiers.map((tier, idx) => (
              <motion.div 
                variants={item}
                key={idx} 
                className={`relative bg-white/80 dark:bg-[#151926]/90 backdrop-blur-xl p-8 rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-2 border-primary shadow-xl scale-100 lg:scale-105 z-10' 
                    : 'border border-gray-200 dark:border-gray-850 shadow-lg'
                }`}
              >
                <span className="text-sm font-bold text-primary dark:text-blue-400 mb-4 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full w-fit self-start">
                  {tier.badge}
                </span>
                
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-2 min-h-[4rem] flex items-start">{tier.name}</h3>
                <p className="text-4xl font-extrabold text-navy dark:text-white mb-3 tracking-tight">
                  {tier.price}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-8 bg-gray-50 dark:bg-[#1E2330] py-2 px-3 rounded-lg inline-block border border-gray-100 dark:border-gray-800">
                  {tier.delivery}
                </p>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-8"></div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary dark:text-blue-400 shrink-0 mt-0.5 drop-shadow-sm" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className={`w-full py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg text-center block ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-primary to-blue-600 text-white hover:opacity-90' 
                    : 'bg-white dark:bg-[#1E2330] text-navy dark:text-white border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary'
                }`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Yearly Renewals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-850 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy dark:text-white mb-4 tracking-tight">Post-Launch & Renewals</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Clear, predictable costs for keeping your digital presence secure and fast.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_CONTENT.renewals.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="text-center p-10 bg-white dark:bg-[#151926] border border-gray-100 dark:border-gray-850 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-blue-50 dark:bg-blue-950/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                  {getIcon(item.icon)}
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-white mb-3">{item.title}</h4>
                <p className="text-3xl font-extrabold text-primary dark:text-blue-400 mb-4">{item.price}</p>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}

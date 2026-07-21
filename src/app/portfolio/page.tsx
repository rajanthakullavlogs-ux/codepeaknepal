"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, GraduationCap, ArrowUpRight, Code2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  image: string;
  icon: React.ReactNode;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Website", "E-commerce", "Mobile App", "Education"];

  const projects: Project[] = [
    {
      title: "Yashodhara Model School",
      description: "A comprehensive educational portal featuring student enrollment resources, notice boards, dynamic academic calendars, and modern school management details.",
      category: "Education",
      tags: ["Next.js", "Tailwind CSS", "Educational Portal", "Admin Panel"],
      url: "https://yms.edu.np",
      image: "/assets/portfolio/yms.png",
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />
    },
    {
      title: "CA Aman",
      description: "A highly professional and responsive portfolio website for a Chartered Accountant, highlighting accounting services, financial advisory expertise, and client success stories.",
      category: "Website",
      tags: ["React", "Vite", "Portfolio", "Framer Motion"],
      url: "https://ca-aman.vercel.app",
      image: "/assets/portfolio/ca-aman.png",
      icon: <Globe className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Truth Biotech",
      description: "A sleek B2B corporate biotechnology website showcasing laboratory equipment, biotech research products, and pharmaceutical distribution listings.",
      category: "Website",
      tags: ["Next.js", "Tailwind CSS", "Product Showcase", "Corporate Site"],
      url: "https://truthbiotech.com",
      image: "/assets/portfolio/truthbiotech.png",
      icon: <Globe className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "We Cycle Ames",
      description: "An interactive community bike-sharing web application displaying rental plans, fleet availability, safety instructions, and service stations.",
      category: "Website",
      tags: ["Next.js", "Tailwind CSS", "Interactive UI", "Rental Platform"],
      url: "https://we-cycle-ames.vercel.app",
      image: "/assets/portfolio/we-cycle.png",
      icon: <Globe className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Remnant Language School",
      description: "A premium Japanese language school portal facilitating class registrations, study resources, student success metrics, and visa counseling support.",
      category: "Education",
      tags: ["Next.js", "Tailwind CSS", "Language Academy", "Consultancy"],
      url: "https://rem.edu.np",
      image: "/assets/portfolio/rem.png",
      icon: <GraduationCap className="w-5 h-5 text-red-500" />
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-20 bg-offwhite dark:bg-[#0B0F19] relative overflow-hidden">
      {/* Global subtle grid background for the whole page */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--radial-grid-color) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 text-center px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1E2330] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-semibold text-sm uppercase tracking-widest mb-8 shadow-sm"
          >
            🚀 Our Work
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-6 tracking-tight"
          >
            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our portfolio of cutting-edge websites, applications, and custom solutions built for businesses worldwide.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid & Filters */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10 min-h-[500px]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 relative ${
                  activeCategory === cat 
                    ? 'bg-navy border-navy text-white dark:bg-white dark:border-white dark:text-[#0B0F19] shadow-lg shadow-navy/10 dark:shadow-white/5' 
                    : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-[#151926]/50 backdrop-blur-sm hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Container */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white dark:bg-[#151926] rounded-3xl p-6 border border-gray-100 dark:border-gray-850 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden relative"
                >
                  {/* Image Container with Hover Effect */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy/80 dark:bg-[#0B0F19]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                      <p className="text-white font-semibold text-lg mb-2">{project.title}</p>
                      <p className="text-gray-300 text-sm mb-6 max-w-xs">{project.description}</p>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                      >
                        Visit Website
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Info Header */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-navy dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full border border-gray-100 dark:border-gray-700/60 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Empty State / Coming Soon */}
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-full text-center py-20 bg-white dark:bg-[#151926] rounded-3xl border border-gray-100 dark:border-gray-850"
              >
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Projects Coming Soon!</h3>
                <p className="text-gray-400 dark:text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">
                  We are currently developing exciting new applications in this category. Check back soon or contact us to build yours!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}

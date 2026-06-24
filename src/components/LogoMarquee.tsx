"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Server, Cloud, Cpu, Layout, FileJson, Blocks, Globe } from "lucide-react";

export default function TechStackMarquee() {
  const techStack = [
    { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
    { name: "React Native", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
    { name: "Python", icon: <FileJson className="w-5 h-5" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "Docker", icon: <Blocks className="w-5 h-5" /> },
    { name: "Flutter", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Tailwind CSS", icon: <Layout className="w-5 h-5" /> },
    { name: "Firebase", icon: <Cloud className="w-5 h-5" /> },
  ];

  // Duplicate array for seamless infinite scroll
  const items = [...techStack, ...techStack];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="overflow-hidden"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <div className="flex w-[200%]">
            <motion.div 
              className="flex items-center justify-around gap-8 w-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30, // Adjust speed here
              }}
            >
              {items.map((tech, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer min-w-max"
                >
                  <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-primary shadow-sm">
                    {tech.icon}
                  </div>
                  <span className="text-xl font-bold text-gray-400 hover:text-navy transition-colors tracking-widest">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

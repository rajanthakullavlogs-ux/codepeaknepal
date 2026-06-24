"use client";

import { motion } from "framer-motion";
import { PenTool, MessageCircle, Kanban, Send, Code, GitBranch, Layout, Globe, Palette } from "lucide-react";

export default function IntegrationGrid() {
  const icons = [
    { icon: <MessageCircle className="w-8 h-8 text-blue-500" />, delay: 0.1 },
    { icon: <Kanban className="w-8 h-8 text-blue-400" />, delay: 0.2 },
    { icon: <Send className="w-8 h-8 text-blue-300" />, delay: 0.3 },
    { icon: <PenTool className="w-8 h-8 text-purple-500" />, delay: 0.4 },
    { icon: <Code className="w-8 h-8 text-gray-800" />, delay: 0.2 },
    { icon: <GitBranch className="w-8 h-8 text-orange-500" />, delay: 0.5 },
    { icon: <Layout className="w-8 h-8 text-black" />, delay: 0.3 },
    { icon: <Globe className="w-8 h-8 text-green-500" />, delay: 0.4 },
    { icon: <Palette className="w-8 h-8 text-pink-500" />, delay: 0.6 },
  ];

  return (
    <section className="py-16 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight"
            >
              Integrate with 100+ favourite tools
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Connect Cloudo seamlessly with the tools you already use. Enhance your workflow without breaking your existing systems.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-2 border-gray-200 text-navy px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Explore All Tools
            </motion.button>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-3 gap-4 md:gap-6 relative p-8">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent1/10 rounded-full blur-3xl -z-10" />
              
              {icons.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: item.delay 
                  }}
                  className={`bg-white shadow-md rounded-2xl aspect-square flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer 
                    ${idx % 2 === 0 ? 'mt-4' : '-mt-4'} 
                  `}
                >
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

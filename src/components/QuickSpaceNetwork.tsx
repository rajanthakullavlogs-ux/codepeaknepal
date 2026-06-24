"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, LayoutGrid, CheckCircle } from "lucide-react";

export default function QuickSpaceNetwork() {
  const chooseCards = [
    {
      title: "Creative Ideas",
      desc: "Class aptent taciti socia torquent conub.",
      icon: <Lightbulb className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Awesome Design",
      desc: "Integer a elit pellentesque semper sem ultricies.",
      icon: <Palette className="w-8 h-8 text-pink-400" />
    },
    {
      title: "Best Features",
      desc: "Fusce risus lorem pulvinar eu posuere vitae.",
      icon: <LayoutGrid className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Easy Solutions",
      desc: "Aenean eget nulla eu dui malesuad convallis vel.",
      icon: <CheckCircle className="w-8 h-8 text-teal-400" />
    }
  ];

  return (
    <section className="py-16 bg-[#FAFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
          >
            Why Will You Choose Our Application
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500"
          >
            Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
          </motion.p>
        </div>

        {/* Network Graphic Placeholder */}
        <div className="relative max-w-3xl mx-auto h-[400px] mb-20 flex items-center justify-center">
          {/* Central Node */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-48 h-48 bg-white rounded-full border-4 border-primary flex flex-col items-center justify-center shadow-xl z-10 relative"
          >
            <span className="text-4xl font-bold text-navy">5M+</span>
            <span className="text-gray-500 text-sm">Active Members</span>
          </motion.div>

          {/* This is a simple representation of the dotted network circles around it */}
          <div className="absolute inset-0 border border-dashed border-gray-300 rounded-full scale-[0.6] opacity-50"></div>
          <div className="absolute inset-0 border border-dashed border-gray-300 rounded-full scale-[0.8] opacity-50"></div>
          <div className="absolute inset-0 border border-dashed border-gray-300 rounded-full scale-[1] opacity-50"></div>

          {/* We would place floating avatars here around the circle */}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chooseCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

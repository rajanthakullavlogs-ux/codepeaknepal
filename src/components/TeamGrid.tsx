"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Mail, Link2 } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/content";

export default function TeamGrid() {
  return (
    <section className="py-16 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">The minds behind Cloudo</h2>
          <p className="text-gray-500 text-lg">Meet the team of passionate designers, developers, and creators.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_CONTENT.team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-offwhite group-hover:border-primary/20 transition-colors">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-6">{member.role}</p>
              
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                  <Link2 className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

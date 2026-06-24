"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";


interface SplitFeatureSectionProps {
  heading: string;
  paragraph: string;
  subFeatures: string[];
  reversed?: boolean;
  imageNode?: React.ReactNode;
}

export default function SplitFeatureSection({
  heading,
  paragraph,
  subFeatures,
  reversed = false,
  imageNode,
}: SplitFeatureSectionProps) {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-10 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight"
            >
              {heading}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-500 mb-8 leading-relaxed"
            >
              {paragraph}
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0, x: reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              {subFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-navy font-medium text-lg">{feature}</span>
                </li>
              ))}
            </motion.ul>
            
            <motion.button
              initial={{ opacity: 0, x: reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-navy/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Visual Content */}
          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {imageNode}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

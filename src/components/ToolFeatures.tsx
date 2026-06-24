"use client";

import { motion } from "framer-motion";
import { HOME_CONTENT } from "@/data/content";

export default function ToolFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">The tool you really need for growing fast</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOME_CONTENT.toolFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="bg-offwhite rounded-3xl h-64 mb-6 flex items-center justify-center overflow-hidden relative border border-gray-100">
                {/* Abstract mockups based on index */}
                {idx === 0 && (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-48 bg-white rounded-xl shadow-md p-4 absolute"
                  >
                    <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">A</div>
                      <div className="h-2 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">B</div>
                      <div className="h-2 w-20 bg-gray-200 rounded"></div>
                    </div>
                  </motion.div>
                )}
                {idx === 1 && (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-48 bg-white rounded-xl shadow-md p-4 absolute flex items-end gap-2 h-32"
                  >
                    <div className="w-full bg-blue-100 rounded-t-md h-[40%]"></div>
                    <div className="w-full bg-accent1 rounded-t-md h-[70%]"></div>
                    <div className="w-full bg-blue-100 rounded-t-md h-[50%]"></div>
                    <div className="w-full bg-accent2 rounded-t-md h-[90%]"></div>
                    <div className="w-full bg-blue-100 rounded-t-md h-[60%]"></div>
                  </motion.div>
                )}
                {idx === 2 && (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-56 bg-white rounded-xl shadow-md p-4 absolute flex flex-col gap-2"
                  >
                    <div className="flex gap-2">
                      <div className="h-4 w-1/3 bg-green-200 rounded-full"></div>
                      <div className="h-4 w-1/2 bg-gray-100 rounded-full"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-4 w-1/4 bg-gray-100 rounded-full"></div>
                      <div className="h-4 w-2/3 bg-blue-200 rounded-full"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-4 w-1/2 bg-purple-200 rounded-full"></div>
                      <div className="h-4 w-1/4 bg-gray-100 rounded-full"></div>
                    </div>
                  </motion.div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

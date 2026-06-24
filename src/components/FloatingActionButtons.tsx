"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActionButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-navy px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-medium text-sm border border-gray-100 flex items-center justify-center gap-2"
          >
            ↗ Get This Template
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-accent1 to-blue-500 text-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] font-medium text-sm flex items-center justify-center gap-2"
          >
            ▦ Unlock 300+ Templates
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-navy text-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] font-medium text-sm flex items-center justify-center gap-2"
          >
            ▤ Access 4200+ Components
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

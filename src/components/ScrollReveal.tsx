"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
export function ScrollReveal({ 
  children, 
  delay = 0, 
  y = 40,
  blur = true,
  scale = true,
  className = "" 
}: { 
  children: ReactNode, 
  delay?: number, 
  y?: number,
  blur?: boolean,
  scale?: boolean,
  className?: string 
}) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: y,
        filter: blur ? "blur(12px)" : "blur(0px)",
        scale: scale ? 0.96 : 1
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        scale: 1
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: "spring",
        bounce: 0.3,
        damping: 20,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  );
}

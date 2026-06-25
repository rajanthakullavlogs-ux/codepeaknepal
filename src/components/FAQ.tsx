"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Our timelines depend on the scope and complexity of the project. A standard website takes 2-4 weeks, while complex management systems or mobile apps typically take 2-4 months. We provide a detailed timeline during the discovery phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! We include 12 months of free technical support and maintenance with all our major projects to ensure your software runs smoothly and remains secure."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, scalable technologies including React, Next.js, Node.js, and Python for web development, and Flutter or React Native for cross-platform mobile apps. We choose the best tech stack tailored to your specific needs."
  },
  {
    question: "Do I own the source code after the project is complete?",
    answer: "Absolutely. Once the project is fully paid and delivered, you own 100% of the intellectual property and source code."
  },
  {
    question: "How do we communicate during the project?",
    answer: "We maintain transparent communication through weekly update meetings, a dedicated Slack channel, and access to a project management board so you can track progress in real-time."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-50/50 dark:bg-blue-950/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-800/40 text-primary dark:text-blue-400 font-bold text-sm tracking-wide mb-8 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Support & FAQ
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white tracking-tight mb-6 leading-[1.15]">
                Got questions? <br/>
                <span className="text-gray-400 dark:text-gray-500">We've got answers.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-10 max-w-md leading-relaxed">
                Find answers to the most common questions about our services, timelines, and processes. Need something specific?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy dark:bg-primary text-white rounded-2xl font-bold hover:bg-primary dark:hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <MessageCircle className="w-5 h-5" />
                  Contact Support
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div 
                    className={`group border rounded-2xl overflow-hidden transition-all duration-500 ${
                      isOpen 
                        ? 'border-primary/20 dark:border-primary/30 shadow-xl shadow-primary/5 bg-white dark:bg-[#151926]' 
                        : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#1E2330]/40 hover:bg-white dark:hover:bg-[#151926] hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md'
                    }`}
                  >
                    <button 
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-start justify-between text-left focus:outline-none"
                    >
                      <span className={`font-semibold text-base sm:text-lg pr-6 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-navy dark:text-white group-hover:text-primary'}`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isOpen 
                          ? 'bg-primary text-white rotate-180 shadow-sm shadow-primary/20' 
                          : 'bg-white dark:bg-[#1E2330] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800 group-hover:border-primary/30 group-hover:text-primary'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-base mt-1">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}

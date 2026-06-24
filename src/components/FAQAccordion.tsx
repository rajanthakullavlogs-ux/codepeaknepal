"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { HOME_CONTENT } from "@/data/content";

function FAQItem({ 
  question, 
  answer, 
  isExpanded, 
  onToggle 
}: { 
  question: string, 
  answer: string, 
  isExpanded: boolean, 
  onToggle: () => void 
}) {
  return (
    <div className="border border-gray-100 rounded-2xl mb-4 bg-white overflow-hidden shadow-sm hover:border-gray-200 transition-colors">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={isExpanded}
      >
        <span className="text-lg font-semibold text-navy pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${isExpanded ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 text-gray-500'}`}
        >
          {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-500 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>(
    HOME_CONTENT.faqs.map((item, idx) => item.expanded ? idx : -1).filter(idx => idx !== -1)
  );

  const toggleItem = (idx: number) => {
    setOpenItems(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const leftItems = HOME_CONTENT.faqs.filter(item => item.side === "left");
  const rightItems = HOME_CONTENT.faqs.filter(item => item.side === "right");

  return (
    <section className="py-16 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-lg">Everything you need to know about the product and billing.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          <div>
            {leftItems.map((item) => {
              const globalIdx = HOME_CONTENT.faqs.indexOf(item);
              return (
                <FAQItem 
                  key={globalIdx}
                  question={item.question}
                  answer={item.answer}
                  isExpanded={openItems.includes(globalIdx)}
                  onToggle={() => toggleItem(globalIdx)}
                />
              );
            })}
          </div>
          <div>
            {rightItems.map((item) => {
              const globalIdx = HOME_CONTENT.faqs.indexOf(item);
              return (
                <FAQItem 
                  key={globalIdx}
                  question={item.question}
                  answer={item.answer}
                  isExpanded={openItems.includes(globalIdx)}
                  onToggle={() => toggleItem(globalIdx)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Code2, Layout, Smartphone } from "lucide-react";

export default function QuickSpaceNewsletter() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-xs uppercase tracking-widest mb-6"
            >
              Let's Build Together
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight max-w-lg tracking-tight"
            >
              Ready To Digitize Your Business Operations?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8 max-w-lg text-lg font-medium leading-relaxed"
            >
              Join the growing list of Nepali businesses that have optimized their workflows with our affordable, high-quality custom software solutions. Let's discuss your project today.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 max-w-md"
            >
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-navy bg-gray-50/50 transition-all"
              />
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 whitespace-nowrap">
                Get Free Consultation
              </button>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative max-w-md mx-auto"
            >
              {/* Graphic with agency stats and services */}
              <div className="w-full aspect-square bg-gray-50 rounded-full flex items-center justify-center relative shadow-inner border border-gray-100/50">
                
                {/* Top Right Widget: Quality Guarantee */}
                <div className="absolute top-12 right-0 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl shadow-navy/5 border border-gray-100 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">Quality Assured</p>
                    <p className="text-sm font-bold text-navy">12 Months Free Support</p>
                  </div>
                </div>
                
                {/* Bottom Left Widget: Fast Delivery */}
                <div className="absolute bottom-12 left-0 lg:-left-10 bg-white p-5 rounded-2xl shadow-xl shadow-navy/5 border border-gray-100 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <p className="text-xs text-gray-500 font-medium">Standard Delivery</p>
                  </div>
                  <p className="text-2xl font-black text-navy tracking-tight">15-20 <span className="text-base font-medium text-gray-500">Days</span></p>
                </div>
                
                {/* Right Side Main Widget: Core Services */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl shadow-navy/5 border border-gray-100 w-72 hover:-translate-y-[52%] transition-transform duration-300">
                  <p className="text-sm font-bold text-navy mb-5 uppercase tracking-wide">Our Expertise</p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                        <Layout className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">Management Systems</p>
                        <p className="text-xs text-gray-500 mt-0.5">Schools, Hostels, CRM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">Custom Web Apps</p>
                        <p className="text-xs text-gray-500 mt-0.5">Scalable & Secure</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">Mobile Development</p>
                        <p className="text-xs text-gray-500 mt-0.5">iOS & Android Apps</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative wavy lines */}
                <svg className="absolute -left-16 -bottom-10 w-40 h-40 text-primary opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50 Q 30 10 50 50 T 90 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M10 60 Q 30 20 50 60 T 90 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M10 70 Q 30 30 50 70 T 90 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

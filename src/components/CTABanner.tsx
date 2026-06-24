"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Premium background mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-indigo-900 to-navy z-0"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0"></div>
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 max-w-xl font-medium">
                Let's discuss which service is perfect for your business. Our team is ready to help you transform your digital presence.
              </p>
            </div>
            
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <MessageSquare className="w-5 h-5" /> Chat Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export default function QuickSpaceHero() {

  return (
    <section className="relative pt-20 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-50 border border-gray-200 text-gray-600 font-semibold text-xs uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Nepal's Premier Digital Agency
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy mb-8 tracking-tight leading-[1.15]">
                Management Softwares, <span className="text-primary">AI Products</span> <br className="hidden md:block" /> & Professional Solutions.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                CodePeak Nepal delivers high-end Management Software, AI integrations, and premium digital solutions tailored to your needs. From comprehensive systems to cutting-edge AI products, we transform your vision into reality.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Link href="/contact" className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded font-semibold hover:bg-navy/90 transition-colors duration-200 flex items-center justify-center gap-2 group">
                  Get Free Quote
                </Link>
                <Link href="https://wa.me/9779743568595" target="_blank" className="w-full sm:w-auto bg-white border border-gray-200 text-navy px-8 py-4 rounded font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 group">
                  Chat on WhatsApp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium border-t border-gray-100 pt-8">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>12 Months Support</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Clean Mockup */}
          <div className="flex-1 w-full relative lg:pl-10">
            <ScrollReveal delay={0.3}>
              <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none">
                <div className="relative rounded bg-gray-50 p-2 border border-gray-200 shadow-sm">
                  <div className="rounded overflow-hidden border border-gray-100 bg-white">
                    <div className="bg-gray-100 px-4 py-3 flex gap-2 items-center border-b border-gray-200">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <img 
                      src="/quickspace/Image.png" 
                      alt="Dashboard Mockup" 
                      className="w-full h-auto object-contain opacity-90"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}

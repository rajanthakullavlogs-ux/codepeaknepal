"use client";

import { Check, ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export default function QuickSpaceHero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      
      {/* Background Waves (matching the reference image's soft purple/blue curves) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[100%] rounded-[100%] bg-white/40 blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[80%] rounded-[100%] bg-[#E4E3F8] blur-2xl transform -rotate-12"></div>
        <div className="absolute top-[30%] -right-[5%] w-[40%] h-[60%] rounded-full bg-[#E5E3FF] blur-3xl opacity-80"></div>
        
        <svg className="absolute bottom-0 left-0 w-full h-auto text-[#DFDCF6] transform translate-y-1/3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>

        {/* Seamless Fade Transition */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-offwhite to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:flex-[1.15] text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold text-[#111111] mb-6 tracking-tight leading-tight">
                Scalable Websites, <br className="hidden lg:block"/> <span className="text-[#2D45FF]">Mobile Apps</span> & <br className="hidden lg:block"/> Custom Software
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-[20px] text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                CodePeak Nepal engineers high-performance web applications, native mobile experiences, and robust enterprise software. We transform complex challenges into scalable, cutting-edge digital solutions tailored to your business.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-8 text-sm md:text-[15px] font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-gray-700" />
                  <span>Custom Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-gray-700" />
                  <span>Rapid Deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gray-700" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Link href="/contact" className="w-full sm:w-auto bg-[#2D45FF] text-white px-7 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center shadow-lg shadow-blue-500/30 text-[17px]">
                  Get a free quote
                </Link>
                <Link href="https://wa.me/9779743568595" target="_blank" className="w-full sm:w-auto bg-white border border-gray-200 text-gray-800 px-7 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm text-[17px] group">
                  Chat on WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Mockup tailored for their agency */}
          <div className="w-full lg:flex-[0.85] relative mt-20 lg:mt-0 lg:-translate-y-16 lg:-mb-16 lg:translate-x-6 max-w-2xl mx-auto z-20">
            <ScrollReveal delay={0.3}>
              <div className="relative w-full aspect-[4/3]">
                
                {/* --- MAIN DASHBOARD CARD --- */}
                <div className="absolute top-0 right-10 w-[85%] h-[85%] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex z-10">
                  <div className="w-16 bg-[#F8F9FA] border-r border-gray-100 flex flex-col items-center py-6 gap-6 text-[#A0AEC0]">
                    <div className="w-6 h-6 rounded bg-[#E2E8F0] mb-2"></div>
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  </div>
                  
                  <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">250+</div>
                          <div className="text-xs text-gray-400">Live Projects</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">99.9%</div>
                          <div className="text-xs text-gray-400">System Uptime</div>
                        </div>
                      </div>
                      
                      <div className="mt-auto space-y-3">
                        <button className="w-full py-2.5 rounded-lg bg-[#EAE8FF] text-[#4262FF] font-semibold text-xs text-left px-4">Start New Project</button>
                        <button className="w-full py-2.5 rounded-lg bg-[#F3F4F6] text-gray-600 font-semibold text-xs text-left px-4">View Portfolio</button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Digital Ecosystem</h3>
                      <p className="text-[10px] text-gray-400 mb-6">Custom software tailored for you</p>
                      
                      <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-sm" style={{ background: 'conic-gradient(#A78BFA 0% 45%, #60A5FA 45% 75%, #34D399 75% 100%)' }}></div>
                      
                      <div className="space-y-3 mt-8">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#A78BFA]"></span>
                            <span className="text-gray-600 font-medium">Web Apps</span>
                          </div>
                          <span className="font-bold">45%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#60A5FA]"></span>
                            <span className="text-gray-600 font-medium">Mobile Apps</span>
                          </div>
                          <span className="font-bold">30%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#34D399]"></span>
                            <span className="text-gray-600 font-medium">ERP Systems</span>
                          </div>
                          <span className="font-bold">25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- FLOATING WEB ICON TOP RIGHT --- */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 border-4 border-[#F2F1FA] z-20 overflow-hidden shadow-xl flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* --- FLOATING APP ICON MID LEFT --- */}
                <div className="absolute top-[30%] -left-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 border-4 border-[#F2F1FA] z-20 overflow-hidden shadow-xl flex items-center justify-center text-white">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* --- FLOATING CUSTOM SOFTWARE CODE CARD (BOTTOM RIGHT) --- */}
                <div className="absolute -bottom-8 -right-4 w-60 bg-[#1E1E2E] rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] z-30 overflow-hidden flex flex-col border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#181825]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F38BA8]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F9E2AF]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A6E3A1]"></div>
                    <span className="ml-2 text-[10px] font-medium text-[#A6ADC8] font-mono">api_service.ts</span>
                  </div>
                  <div className="p-4 font-mono text-[11px] leading-relaxed">
                    <div className="text-[#CBA6F7]">async function <span className="text-[#89B4FA]">fetchData</span>() {'{'}</div>
                    <div className="pl-4 text-[#F38BA8]">const <span className="text-[#CDD6F4]">response</span> = <span className="text-[#CBA6F7]">await</span> <span className="text-[#89B4FA]">api</span>.<span className="text-[#89B4FA]">get</span>(<span className="text-[#A6E3A1]">'/data'</span>);</div>
                    <div className="pl-4 text-[#CBA6F7]">return <span className="text-[#CDD6F4]">response.data</span>;</div>
                    <div className="text-[#CBA6F7]">{'}'}</div>
                    <div className="mt-3 text-[#6C7086] italic text-[10px]">// Custom Software Architecture</div>
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

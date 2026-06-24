"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export default function QuickSpaceSplitSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      title: "Custom Software Development",
      desc: "We build robust, tailor-made digital solutions to streamline your workflows and unlock data-driven insights."
    },
    {
      title: "Native Mobile App Development",
      desc: "High-performance iOS and Android applications engineered for seamless user experiences."
    },
    {
      title: "Scalable Cloud Infrastructure",
      desc: "We deploy on AWS and Google Cloud to ensure your software remains fast and reliable at scale."
    },
    {
      title: "Dedicated Technical Support",
      desc: "Our team provides ongoing maintenance, updates, and 24/7 support for all enterprise deployments."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Section 1: Enterprise Software */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="flex-1">
              <ScrollReveal delay={0}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 leading-tight max-w-lg">
                  Scalable Enterprise Architecture & Custom Software.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-gray-800 mb-10 max-w-lg leading-relaxed text-lg">
                  CodePeak Nepal architects high-performance, custom-built ERP and management systems designed to streamline your operations and scale effortlessly as your business grows.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal delay={0.2}>
                  <h4 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Intelligent Integrations
                  </h4>
                  <p className="text-gray-800 text-sm max-w-md">Seamlessly connect your existing workflows with custom APIs, modern frontends, and robust backend systems.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <h4 className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Enterprise-Grade Security
                  </h4>
                  <p className="text-gray-800 text-sm max-w-md">We implement robust security protocols, ensuring your corporate data is protected at all times against modern threats.</p>
                </ScrollReveal>
              </div>
            </div>

            <div className="flex-1 w-full relative flex justify-center">
              <ScrollReveal delay={0.2} className="w-full flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-gray-50 rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                  {/* Abstract Dashboard Visual */}
                  <div className="absolute top-0 w-full h-12 bg-white border-b border-gray-100 flex items-center px-4 gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="w-48 h-4 bg-gray-50 rounded-full mx-auto"></div>
                  </div>
                  <div className="absolute top-12 left-0 w-16 h-full bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-6">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50"></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50"></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50"></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50"></div>
                  </div>
                  <div className="absolute top-16 left-20 right-4 bottom-4 flex flex-col gap-4">
                    <div className="flex gap-4 h-24">
                      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between">
                        <div className="w-1/2 h-3 bg-gray-100 rounded-full"></div>
                        <div className="w-3/4 h-6 bg-navy rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between">
                        <div className="w-1/2 h-3 bg-gray-100 rounded-full"></div>
                        <div className="w-2/3 h-6 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex items-end p-6 gap-2">
                      <div className="flex-1 bg-indigo-100 rounded-t-lg h-[40%]"></div>
                      <div className="flex-1 bg-primary rounded-t-lg h-[80%]"></div>
                      <div className="flex-1 bg-indigo-200 rounded-t-lg h-[60%]"></div>
                      <div className="flex-1 bg-navy rounded-t-lg h-[100%]"></div>
                      <div className="flex-1 bg-indigo-100 rounded-t-lg h-[50%]"></div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Mobile & Web */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            
            <div className="flex-1">
              <ScrollReveal delay={0}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 leading-tight max-w-lg">
                  Next-Gen Digital Products & Mobile Experiences.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-gray-800 mb-10 max-w-lg leading-relaxed text-lg">
                  From scalable cloud platforms to native iOS and Android applications, we deliver digital products that drive user engagement and exponential growth.
                </p>
              </ScrollReveal>

              <div className="space-y-4 max-w-lg">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)}>
                      <div className="border-b border-gray-100 pb-4">
                        <button 
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex justify-between items-center text-left focus:outline-none"
                        >
                          <span className={`font-bold text-lg ${isOpen ? 'text-primary' : 'text-[#111111]'}`}>{faq.title}</span>
                          {isOpen ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 text-primary shrink-0" />}
                        </button>
                        
                        {/* Expanded Content */}
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="text-gray-800 text-sm leading-relaxed pr-8">
                            {faq.desc}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>

            <div className="flex-1 w-full relative flex justify-center">
              <ScrollReveal delay={0.2} className="w-full flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-gray-50 rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center p-8 overflow-hidden group">
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#CBD5E1 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

                  {/* Floating Elements */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    
                    {/* Top Cloud/Server Block */}
                    <div className="w-48 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center px-4 gap-3 transform -translate-y-4 group-hover:-translate-y-6 transition-transform duration-500">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                      </div>
                      <div className="flex flex-col gap-1.5 flex-1">
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>

                    {/* Connecting Line */}
                    <div className="w-1 h-12 bg-gradient-to-b from-gray-200 to-indigo-200 transform -translate-y-2"></div>

                    {/* Center Hub / Application Block */}
                    <div className="w-64 h-32 bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col p-4 z-20 group-hover:scale-105 transition-transform duration-500">
                      <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
                        <div className="w-16 h-3 bg-gray-200 rounded-full"></div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                      <div className="flex gap-3 h-full">
                        <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100 h-full flex flex-col justify-end p-2">
                           <div className="w-full bg-primary rounded-sm h-1/2"></div>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100 h-full flex flex-col justify-end p-2">
                           <div className="w-full bg-navy rounded-sm h-3/4"></div>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100 h-full flex flex-col justify-end p-2">
                           <div className="w-full bg-indigo-400 rounded-sm h-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line */}
                    <div className="w-1 h-12 bg-gradient-to-t from-gray-200 to-indigo-200 transform translate-y-2"></div>

                    {/* Bottom Mobile/Client Block */}
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500">
                      <div className="w-24 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-2">
                        <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-md"></div>
                      </div>
                      <div className="w-24 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-2">
                        <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-md"></div>
                      </div>
                    </div>

                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

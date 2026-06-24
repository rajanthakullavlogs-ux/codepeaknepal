"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function OurProcess() {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "1. Discovery & Strategy",
      desc: "We start by understanding your business needs, goals, and target audience to craft the perfect digital strategy.",
      color: "bg-blue-50 text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "2. UI/UX Design",
      desc: "Our design team creates beautiful, intuitive interfaces that ensure an engaging and seamless user experience.",
      color: "bg-purple-50 text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "3. Development",
      desc: "We write clean, scalable, and secure code using the latest technologies to bring the designs to life.",
      color: "bg-orange-50 text-orange-600",
      iconBg: "bg-orange-100",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "4. Testing & Launch",
      desc: "Rigorous testing guarantees a flawless product. After launch, we provide continuous 12-month free support.",
      color: "bg-green-50 text-green-600",
      iconBg: "bg-green-100",
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-xs uppercase tracking-widest mb-6">
              How We Work
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
              Our Simple & Transparent Process
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-500 font-medium">
              From the initial idea to the final product launch, we follow a streamlined process to ensure exceptional quality and timely delivery.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-100 z-0"></div>
          
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="relative flex flex-col items-center text-center group z-10">
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 bg-white border-4 border-white shadow-xl shadow-gray-200/50 group-hover:-translate-y-2 transition-transform duration-300 relative`}>
                  <div className={`w-full h-full rounded-[1.5rem] flex items-center justify-center ${step.color}`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

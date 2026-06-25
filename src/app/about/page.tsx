"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import LogoMarquee from "@/components/LogoMarquee";
import OurProcess from "@/components/OurProcess";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Banknote, Server, Lightbulb, CheckCircle2, Clock, Handshake, Star } from "lucide-react";

export default function About() {
  const coreValues = [
    { title: "Quality First", desc: "We never compromise on quality. Every line of code is tested, every design is refined, and every project is delivered with pride.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
    { title: "Transparent Pricing", desc: "No hidden fees, no surprise charges. What you see is what you pay. We believe in honest conversations about budget and deliverables.", icon: <Banknote className="w-6 h-6 text-primary" /> },
    { title: "Reliability at Scale", desc: "Your website runs 24/7/365. We invest in robust infrastructure, 99.9% uptime guarantees, and proactive monitoring.", icon: <Server className="w-6 h-6 text-primary" /> },
    { title: "Innovation & Learning", desc: "Technology moves fast. We stay ahead with continuous learning, using the latest best practices and modern tools in every project.", icon: <Lightbulb className="w-6 h-6 text-primary" /> }
  ];

  const team = [
    { name: "Rajan Thakulla", role: "Founder & Lead Engineer", exp: "3+ years experience", focus: "Mobile, Web and Backend", color: "bg-blue-100", initial: "RT", image: "/team/founder.jpeg" },
    { name: "Anushka Chand", role: "UI/UX Designer Head", exp: "Creative & Design Lead", focus: "UI/UX Design", color: "bg-pink-100", initial: "AC" },
    { name: "Raunak Bikram Shah", role: "App Developer", exp: "Mobile Development", focus: "App Development", color: "bg-orange-100", initial: "RS", image: "/team/raunak.jpg" },
    { name: "Akshat Mittal", role: "Full Stack Developer", exp: "2+ years in Web Development", focus: "Web Development", color: "bg-indigo-100", initial: "AM", image: "/team/designer.jpeg" },
    { name: "Ratik Rauniyar", role: "Full Stack Developer", exp: "2+ years in Web Development", focus: "Web Development", color: "bg-green-100", initial: "RR", image: "/team/support.jpeg" }
  ];

  return (
    <main className="min-h-screen pt-20 bg-offwhite dark:bg-[#0B0F19] relative">
      {/* Global subtle grid background for the whole page */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--radial-grid-color) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1E2330] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-semibold text-sm uppercase tracking-widest mb-6 shadow-sm"
          >
            About CodePeak Nepal
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white mb-4 leading-tight tracking-tight"
          >
            Transforming businesses through affordable digital solutions.
          </motion.h1>
        </div>
      </section>

      {/* Our Story & Mission/Vision Split Layout */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Side: Our Story */}
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-8 tracking-tight"
              >
                Our Story
              </motion.h2>
              <div className="space-y-6 text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  CodePeak Nepal was founded with a clear vision: to democratize digital technology for Nepali businesses. We recognized that many organizations in Nepal were being left behind digitally, not because they didn't need digital solutions, but because they couldn't afford the premium prices charged by larger agencies.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  We started with a simple goal — to help schools, hostels, and businesses go digital with powerful Management Softwares and custom digital tools without breaking their budgets. From humble beginnings, we've grown to serve 3+ clients across Nepal.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  Whether it's a comprehensive School Management system with staff and results tracking, or a Hostel management platform, we specialize in building integrated software that simplifies your operations. Today, our expertise has expanded into custom software products and seamless integrations, ensuring your website and apps are not just beautiful, but highly intelligent and automated.
                </motion.p>
              </div>
            </div>

            {/* Right Side: Mission & Vision List */}
            <div className="lg:w-1/2 flex flex-col gap-12 lg:pt-16">
              
              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151926] flex items-center justify-center shrink-0 text-primary font-bold shadow-sm group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 tracking-tight uppercase">Our Mission</h3>
                  <h4 className="text-lg font-bold text-navy dark:text-white mb-3 leading-snug">Empowering every Nepali business with world-class digital tools.</h4>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    To make professional digital services affordable and accessible for every business in Nepal. We are committed to empowering organizations of all sizes—from single-person startups to growing enterprises—with world-class digital solutions at fair, transparent prices.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151926] flex items-center justify-center shrink-0 text-primary font-bold shadow-sm group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 tracking-tight uppercase">Our Vision</h3>
                  <h4 className="text-lg font-bold text-navy dark:text-white mb-3 leading-snug">To become the most trusted digital engineering partner in Nepal.</h4>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    We aspire to be known for exceptional quality, unmatched affordability, and support that goes beyond expectations. Every day, we work to be the partner that empowers Nepali businesses to compete globally.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-base text-gray-500 dark:text-gray-400 font-medium">The principles that guide our work, shape our culture, and drive our commitment to excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1E2330]/40 hover:bg-white dark:hover:bg-[#151926] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white dark:bg-[#151926] rounded-xl shadow-sm border border-gray-100 dark:border-gray-850 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-white mb-4">{value.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 tracking-tight">Meet Our Expert Team</h2>
            <p className="text-base text-gray-500 dark:text-gray-400 font-medium">Passionate professionals dedicated to bringing your vision to life with excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-[#151926] rounded-[2rem] p-6 border border-gray-100 dark:border-gray-850 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center"
              >
                <div className={`w-28 h-28 rounded-full ${member.color} dark:bg-gray-800 flex items-center justify-center mb-6 overflow-hidden relative`}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-navy dark:text-white/60 opacity-50">{member.initial}</span>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-navy dark:text-white mb-1">{member.name}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-semibold mb-4">
                    {member.role}
                  </div>
                  <div className="space-y-1 pt-4 border-t border-gray-100 dark:border-gray-850 w-full">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{member.exp}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{member.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Capsule Layout */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0F1C] rounded-[2.5rem] py-10 px-6 md:py-12 md:px-12 relative overflow-hidden shadow-2xl border border-gray-800"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">Why Choose CodePeak</h2>
                <p className="text-base text-indigo-200 font-medium">Premium digital solutions without the premium price tag.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">
                
                <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 border-t-0">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group hover:scale-110 hover:bg-primary transition-all duration-300 cursor-default">
                    <Star className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">12 Months Support</h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">1 year of free updates and dedicated tech support.</p>
                </div>

                <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group hover:scale-110 hover:bg-primary transition-all duration-300 cursor-default">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Quality & Price</h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Premium software architecture at competitive rates.</p>
                </div>

                <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group hover:scale-110 hover:bg-primary transition-all duration-300 cursor-default">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Projects successfully delivered in 7–15 days.</p>
                </div>

                <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group hover:scale-110 hover:bg-primary transition-all duration-300 cursor-default">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">True Partnership</h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Direct communication with your project manager.</p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <OurProcess />
      <FAQ />

      <LogoMarquee />
      <CTABanner />
      <Footer />
    </main>
  );
}

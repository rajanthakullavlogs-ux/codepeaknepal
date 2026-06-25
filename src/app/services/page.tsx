"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import LogoMarquee from "@/components/LogoMarquee";
import { motion } from "framer-motion";
import { Globe, Smartphone, Building, ShoppingCart, Wrench, Network, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Business Websites",
      desc: "Modern, responsive, and SEO-optimized websites that convert visitors into customers. Fast-loading and fully managed.",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/40",
      hoverColor: "group-hover:bg-blue-600 group-hover:text-white"
    },
    {
      title: "Mobile Applications",
      desc: "Native iOS & Android apps with seamless performance, push notifications, and offline capabilities.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900/40",
      hoverColor: "group-hover:bg-indigo-600 group-hover:text-white"
    },
    {
      title: "Management Softwares",
      desc: "Custom ERP solutions for schools, hostels, and businesses with automated workflows and real-time reporting.",
      icon: <Building className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/40",
      hoverColor: "group-hover:bg-emerald-600 group-hover:text-white"
    },
    {
      title: "Custom API & Integration",
      desc: "Intelligent workflows, automation, and powerful backend integrations to connect all your existing systems flawlessly.",
      icon: <Network className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-900/40",
      hoverColor: "group-hover:bg-purple-600 group-hover:text-white"
    },
    {
      title: "E-commerce Stores",
      desc: "Complete online shopping platforms with payment integration, inventory management, and order tracking.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-900/40",
      hoverColor: "group-hover:bg-orange-500 group-hover:text-white"
    },
    {
      title: "Website Maintenance",
      desc: "Ongoing support, security updates, backups, and performance optimization with 24/7 monitoring.",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-teal-50 text-teal-600 border-teal-100 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-900/40",
      hoverColor: "group-hover:bg-teal-500 group-hover:text-white"
    }
  ];

  return (
    <main className="min-h-screen pt-20 bg-offwhite dark:bg-[#0B0F19] relative">
      {/* Global subtle grid background for the whole page */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--radial-grid-color) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1E2330] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-semibold text-sm uppercase tracking-widest mb-8 shadow-sm"
          >
            Our Services
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-tight tracking-tight"
          >
            Digital solutions tailored to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">transform</span> your business.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium"
          >
            From stunning web experiences to robust enterprise software, we build the digital infrastructure your business needs to scale.
          </motion.p>
        </div>
      </section>

      {/* Elegant Grid Services Section */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white dark:bg-[#151926] rounded-[2rem] p-10 shadow-sm border border-gray-100 dark:border-gray-850 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Top Header: Icon & Arrow */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-colors duration-500 ${service.color} ${service.hoverColor}`}>
                    {service.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-navy dark:text-white tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium flex-grow">
                  {service.desc}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />
      <CTABanner />
      <Footer />
    </main>
  );
}

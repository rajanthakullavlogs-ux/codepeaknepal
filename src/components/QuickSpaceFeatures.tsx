"use client";

import { motion } from "framer-motion";
import { Activity, Code2, Smartphone, Globe, ArrowUpRight } from "lucide-react";

export default function QuickSpaceFeatures() {
  const features = [
    {
      title: "Management Softwares",
      desc: "Custom-built ERP and management systems tailored to your specific business needs.",
      icon: <Activity className="w-6 h-6 text-navy" />,
      className: "md:col-span-2 md:row-span-2 bg-white",
      iconClass: "bg-gray-50 text-navy border border-gray-200",
      textClass: "text-gray-500",
      titleClass: "text-navy",
      visual: (
        <div className="hidden md:flex absolute right-0 top-20 bottom-0 w-[85%] bg-gray-50 rounded-tl-2xl border-t border-l border-gray-200 shadow-sm overflow-hidden flex-col pointer-events-none group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-700 ease-out z-0">
          {/* Dashboard Header */}
          <div className="h-10 border-b border-gray-200 bg-white flex items-center px-4 justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 h-3 bg-gray-100 rounded-full"></div>
              <div className="w-5 h-5 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="flex-1 p-4 flex gap-4">
            {/* Sidebar */}
            <div className="w-1/4 h-full bg-white border border-gray-100 shadow-sm rounded-lg flex flex-col gap-3 p-3">
              <div className="w-full h-4 bg-indigo-50 rounded mb-2"></div>
              <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
              <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
              <div className="w-4/5 h-3 bg-gray-100 rounded"></div>
              <div className="w-full h-16 bg-gray-50 rounded mt-auto border border-gray-100"></div>
            </div>
            {/* Main Content */}
            <div className="flex-1 h-full flex flex-col gap-4">
              {/* KPI Cards */}
              <div className="flex gap-3 h-16">
                <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-lg p-3 flex flex-col justify-center">
                  <div className="w-1/2 h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-navy rounded"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-lg p-3 flex flex-col justify-center">
                  <div className="w-1/2 h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-2/3 h-4 bg-primary rounded"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-lg p-3 flex flex-col justify-center">
                  <div className="w-1/2 h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-4/5 h-4 bg-green-500 rounded"></div>
                </div>
              </div>
              {/* Chart Area */}
              <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-lg p-4 flex flex-col relative overflow-hidden">
                <div className="w-1/3 h-3 bg-gray-200 rounded mb-4"></div>
                <div className="flex-1 flex items-end gap-2 px-2">
                  <div className="flex-1 bg-indigo-100 rounded-t-sm h-[40%]"></div>
                  <div className="flex-1 bg-indigo-200 rounded-t-sm h-[60%]"></div>
                  <div className="flex-1 bg-primary rounded-t-sm h-[85%]"></div>
                  <div className="flex-1 bg-indigo-100 rounded-t-sm h-[30%]"></div>
                  <div className="flex-1 bg-indigo-200 rounded-t-sm h-[70%]"></div>
                  <div className="flex-1 bg-navy rounded-t-sm h-[95%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Custom Web Applications",
      desc: "Scalable, high-performance web applications built for speed and reliability.",
      icon: <Code2 className="w-5 h-5 text-gray-700" />,
      className: "md:col-span-1 md:row-span-1 bg-white",
      iconClass: "bg-gray-50 border border-gray-200",
      textClass: "text-gray-500",
      titleClass: "text-navy",
      visual: (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent pointer-events-none z-0 overflow-hidden">
           {/* Abstract Data / Web App Visual */}
           <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
           <div className="hidden sm:flex absolute right-4 bottom-4 gap-2 items-end opacity-40 group-hover:opacity-70 transition-opacity duration-700">
             <div className="w-4 h-12 bg-indigo-400 rounded-t-sm"></div>
             <div className="w-4 h-16 bg-navy rounded-t-sm"></div>
             <div className="w-4 h-8 bg-primary rounded-t-sm"></div>
             <div className="w-4 h-20 bg-blue-500 rounded-t-sm"></div>
           </div>
        </div>
      )
    },
    {
      title: "Business Websites",
      desc: "Modern, fast, and conversion-focused websites that represent your brand.",
      icon: <Globe className="w-5 h-5 text-gray-700" />,
      className: "md:col-span-1 md:row-span-1 bg-white",
      iconClass: "bg-gray-50 border border-gray-200",
      textClass: "text-gray-500",
      titleClass: "text-navy",
      visual: (
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -right-4 top-16 w-40 h-32 border border-gray-200 rounded-lg bg-gray-50 shadow-sm group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-700 ease-out"></div>
          <div className="absolute right-4 top-24 w-40 h-36 border border-gray-200 rounded-lg bg-white shadow-lg group-hover:-translate-y-4 group-hover:-rotate-3 transition-all duration-700 ease-out flex flex-col overflow-hidden">
            <div className="h-4 bg-gray-100 flex items-center px-2 gap-1 border-b border-gray-200">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 p-2 flex flex-col gap-2">
              <div className="w-full h-12 bg-indigo-50 rounded flex items-center justify-center">
                <div className="w-1/2 h-2 bg-indigo-200 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/3 h-8 bg-gray-50 rounded"></div>
                <div className="w-1/3 h-8 bg-gray-50 rounded"></div>
                <div className="w-1/3 h-8 bg-gray-50 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Mobile Applications",
      desc: "Native iOS and Android apps with seamless performance and user experience.",
      icon: <Smartphone className="w-6 h-6 text-gray-700" />,
      className: "md:col-span-2 md:row-span-1 bg-white",
      iconClass: "bg-gray-50 border border-gray-200",
      textClass: "text-gray-500",
      titleClass: "text-navy",
      visual: (
        <div className="hidden md:block absolute right-12 top-10 bottom-[-20px] w-64 rounded-t-[2.5rem] border-[6px] border-gray-800 bg-gray-50 shadow-2xl pointer-events-none overflow-hidden group-hover:-translate-y-6 transition-transform duration-700 ease-out z-0">
           {/* phone notch */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-20"></div>
           
           {/* Mobile Header */}
           <div className="w-full bg-white pt-10 pb-4 px-5 border-b border-gray-100 flex justify-between items-center">
             <div className="w-6 h-6 rounded-full bg-gray-100"></div>
             <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
             <div className="w-6 h-6 rounded-full bg-gray-100"></div>
           </div>

           {/* phone content */}
           <div className="w-full h-full p-4 flex flex-col gap-4 bg-gray-50">
             {/* Feed Item 1 */}
             <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0"></div>
                 <div className="flex flex-col gap-1 w-full">
                   <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                   <div className="w-1/4 h-2 bg-gray-100 rounded"></div>
                 </div>
               </div>
               <div className="w-full h-16 bg-gray-50 rounded-lg mb-2"></div>
             </div>
             {/* Feed Item 2 */}
             <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0"></div>
                 <div className="flex flex-col gap-1 w-full">
                   <div className="w-1/3 h-2 bg-gray-200 rounded"></div>
                 </div>
               </div>
               <div className="w-full h-2 bg-gray-100 rounded mb-1"></div>
               <div className="w-4/5 h-2 bg-gray-100 rounded"></div>
             </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-gray-200 text-gray-600 font-semibold text-xs uppercase tracking-widest mb-6"
            >
              Core Competencies
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight"
            >
              Enterprise Solutions
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-lg md:text-right font-medium"
          >
            Comprehensive digital solutions tailored to transform your business operations and scale your impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[220px]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`p-6 sm:p-8 rounded border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-pointer min-h-[260px] md:min-h-0 ${feature.className}`}
            >
              {feature.visual}
              
              <div className="flex justify-between items-start z-10">
                <div className={`w-12 h-12 rounded flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 ${feature.iconClass}`}>
                  {feature.icon}
                </div>
                <div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                  <ArrowUpRight className={`w-4 h-4 ${feature.titleClass}`} />
                </div>
              </div>
              
              <div className="z-10 mt-auto pt-6 max-w-full md:max-w-[60%]">
                <h3 className={`text-xl font-bold mb-2 tracking-tight ${feature.titleClass}`}>{feature.title}</h3>
                <p className={`text-sm leading-relaxed font-medium ${feature.textClass}`}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

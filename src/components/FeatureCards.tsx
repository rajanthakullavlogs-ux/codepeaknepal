"use client";

import { motion } from "framer-motion";
import { Zap, DollarSign, Heart, Users, Smartphone, Search } from "lucide-react";
import { HOME_CONTENT } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  money: <DollarSign className="w-6 h-6 text-white" />,
  zap: <Zap className="w-6 h-6 text-white" />,
  gift: <Heart className="w-6 h-6 text-white" />,
  users: <Users className="w-6 h-6 text-white" />,
  mobile: <Smartphone className="w-6 h-6 text-white" />,
  search: <Search className="w-6 h-6 text-white" />,
};

const colorMap: Record<string, string> = {
  money: "bg-green-500",
  zap: "bg-orange-500",
  gift: "bg-red-500",
  users: "bg-blue-500",
  mobile: "bg-purple-500",
  search: "bg-teal-500",
};

export default function FeatureCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{HOME_CONTENT.whyChooseUs.heading}</h2>
          <p className="text-gray-500 text-lg">{HOME_CONTENT.whyChooseUs.paragraph}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOME_CONTENT.whyChooseUs.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-offwhite rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${colorMap[feature.icon] || 'bg-gray-800'}`}>
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

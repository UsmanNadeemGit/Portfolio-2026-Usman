"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./hero-section";
import { 
  IconBrain, 
  IconCode, 
  IconChartBar, 
  IconRocket 
} from "@tabler/icons-react";

const SERVICES = [
  {
    title: "AI & LLM Integration",
    description: "Automate complex workflows and customer interactions using state-of-the-art Large Language Models (LLMs).",
    benefit: "Reduces operational costs by up to 60% and provides 24/7 intelligent automation for your business.",
    icon: <IconBrain className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Full-Stack Platforms",
    description: "End-to-end development of scalable web applications using the MERN stack and Next.js.",
    benefit: "Enables businesses to reach a wider audience with high-performance, responsive Digital Marketplaces.",
    icon: <IconCode className="w-12 h-12 text-purple-500" />,
  },
  {
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable insights using statistical modeling and advanced visualization.",
    benefit: "Helps stakeholders make data-driven decisions that optimize customer retention and conversion rates.",
    icon: <IconChartBar className="w-12 h-12 text-green-500" />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 scroll-mt-20 bg-transparent">
      <div className="container mx-auto px-4">
        <SectionTitle>My Services</SectionTitle>
        <p className="text-center text-xl text-neutral-400 mt-4 mb-16 max-w-2xl mx-auto">
          Tailored technical solutions designed to drive business growth and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:border-pink-500/50 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-neutral-400 mb-6 font-medium">
                {service.description}
              </p>
              <div className="pt-6 border-t border-neutral-800">
                <p className="text-sm font-bold text-pink-500 flex items-center gap-2">
                  <IconRocket className="w-4 h-4" /> Why it matters for businesses:
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  {service.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

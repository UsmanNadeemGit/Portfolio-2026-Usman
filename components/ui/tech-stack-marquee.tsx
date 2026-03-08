"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiVite,
  SiTailwindcss,
  SiFlask,
  SiFirebase,
  SiKubernetes,
  SiDocker,
  SiPrometheus,
  SiGrafana,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPytorch,
  SiNodedotjs,
  SiSupabase,
  SiGooglecloud,
  SiMongodb,
  SiExpress,
  SiGithub,
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "HTML/CSS", icon: <span className="text-2xl">🌐</span> }, // Globe for HTML/CSS
      { name: "Bootstrap", icon: <span className="text-2xl text-purple-600 font-bold">B</span> }, // Bootstrap B
      { name: "UI/UX", icon: <span className="text-2xl">🎨</span> }, // Palette for UI/UX
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "FastAPI", icon: <span className="text-2xl text-[#009688] font-bold">F</span> },
      { name: "Flask", icon: <SiFlask className="text-black dark:text-white" /> },
      { name: "ASP.NET", icon: <span className="text-2xl text-blue-700 font-bold">.NET</span> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "C++/C", icon: <span className="text-2xl">💻</span> },
      { name: "C#", icon: <span className="text-2xl text-purple-700 font-bold">#</span> },
      { name: "Microservices", icon: <span className="text-2xl">🏗️</span> },
      { name: "Solidity", icon: <span className="text-2xl">⛓️</span> },
      { name: "MongoDB Atlas", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "SQL", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    title: "MLOps & DevOps",
    items: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
      { name: "Apache Airflow", icon: <span className="text-2xl">💨</span> },
      { name: "MLflow", icon: <span className="text-2xl">📈</span> },
      { name: "Prometheus", icon: <SiPrometheus className="text-[#E6522C]" /> },
      { name: "Grafana", icon: <SiGrafana className="text-[#F46800]" /> },
      { name: "Jenkins / CI/CD", icon: <SiGithub className="text-black dark:text-white" /> },
      { name: "PyTest / Testing", icon: <span className="text-2xl">🧪</span> },
    ],
  },
  {
    title: "AI, ML & Data Science",
    items: [
      { name: "LLMs (Ollama/Phi-3)", icon: <span className="text-2xl">🧠</span> },
      { name: "HuggingFace", icon: <span className="text-2xl">🤗</span> },
      { name: "Whisper", icon: <span className="text-2xl">🎙️</span> },
      { name: "XLM-RoBERTa", icon: <span className="text-2xl">🤖</span> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "Pandas/Seaborn", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Random Forest / PCA", icon: <span className="text-2xl">🌲</span> },
    ],
  },
];

const TechCategory = ({
  category,
}: {
  category: (typeof techCategories)[0];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h3 className="text-3xl font-semibold text-center text-white mb-6 inline-block border-b-4 border-transparent bg-gradient-to-r from-pink-500 to-rose-400 bg-[length:100%_4px] bg-no-repeat bg-bottom">
      {category.title}
    </h3>

    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
      {category.items.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-3 p-4 bg-neutral-900 border border-neutral-800 rounded-xl shadow-md hover:shadow-pink-500/10 hover:border-pink-500/50 hover:scale-[1.04] transition-all duration-300"
        >
          <div className="text-3xl">{tech.icon}</div>
          <span className="font-medium text-neutral-200 text-sm leading-snug">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 scroll-mt-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-white uppercase tracking-widest">
            My Tech Stack
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 rounded-full"></span>
          </h2>

          <p className="text-xl text-neutral-400 mt-6 max-w-2xl mx-auto">
            Advanced toolsets for robust and scalable engineering.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {techCategories.map((category) => (
            <TechCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { SectionTitle } from "./hero-section";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-800 flex flex-col hover:border-pink-500/50 transition-colors duration-300"
            >
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-neutral-800 text-pink-400 rounded-full text-xs font-semibold border border-pink-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-400 text-sm">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "EstateMate (Final Year Project)",
    tags: ["React", "Node.js", "Python", "Flask", "MongoDB Atlas", "XLM-RoBERTa"],
    bullets: [
      "Objective: Automate lead management and property search for real estate SMEs using AI.",
      "Strategy: Built a bilingual (Urdu/English) NLP pipeline using XLM-RoBERTa for intent classification and Whisper for voice-to-text integration.",
      "Implementation: Engineered a dynamic lead scoring algorithm and integrated WhatsApp Business APIs for seamless communication.",
      "Reliability: Deployed secure REST APIs with JWT and validated with 36+ test cases via PyTest."
    ],
  },
  {
    title: "LLM-Based E-commerce Ad Generation",
    tags: ["FastAPI", "Ollama", "MLflow", "Docker", "Grafana", "Kubernetes"],
    bullets: [
      "Objective: Provide businesses with production-grade automated ad copy generation at scale.",
      "Strategy: Architected an MLOps / LLMOps pipeline using local Phi-3 LLM inference via Ollama to ensure data privacy and performance.",
      "Automation: Built real-time inference APIs with FastAPI and managed Agile workflows via Apache Airflow.",
      "Monitoring: Containerized with Docker/K8s and monitored system health via Prometheus and Grafana."
    ],
  },
  {
    title: "SafaiPak",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    bullets: [
      "Objective: Create a scalable marketplace for sanitation and agricultural service bookings.",
      "Strategy: Implemented a robust MERN stack architecture with role-based dashboards for both customers and service providers.",
      "Features: Engineered intelligent service discovery with location filters and recurring scheduling for high availability."
    ],
  },
  {
    title: "FMCG Customer Analytics",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    bullets: [
      "Objective: Discover hidden behavioral patterns in customer data to optimize marketing strategies.",
      "Strategy: Performed K-Means clustering with PCA for customer segmentation and compared multiple ML models for campaign prediction.",
      "Outcome: Selected Random Forest model for superior recall and precision in identifying high-value customers."
    ],
  },
];

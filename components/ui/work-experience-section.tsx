import React from "react";
import { SectionTitle } from "./hero-section";

/**
 * WorkExperienceSection displays the user's work experience in a clean, modern style.
 * Add more experiences as needed.
 */
export function WorkExperienceSection() {
  return (
    <section id="work-experience" className="w-full py-12 md:py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="mt-8 space-y-8">
          <div className="bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-800 hover:border-pink-500/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Backend API Developer (Internship)</h3>
                <div className="text-lg text-pink-500 font-semibold">Sky Infinit</div>
              </div>
              <div className="text-neutral-500 font-medium">
                Jun. 2025 &ndash; Aug. 2025
              </div>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-400">
              <li>Designed and deployed scalable, microservices-based Flask REST APIs integrating Ollama and open-source LLMs for production AI systems, including text humanization and health report interpretation.</li>
              <li>Optimized LLM inference pipelines and data preprocessing workflows using parallel processing, chunking, and tokenization &ndash; reducing average response latency by 67% (from 45s to 15s).</li>
              <li>Enhanced API throughput and model deployment reliability through system-level distributed systems optimizations and efficient pipeline restructuring.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 
"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const GippityAITimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Timeline data strictly based on the user's resume: technical skills, soft skills, and project experience
  const data = [
    {
      title: "Technical Expertise",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">My Core Stack</h2>
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 font-bold underline decoration-rose-500/20 underline-offset-4">Languages & AI</p>
          <p className="text-base text-neutral-400">
            Python, JavaScript, C/C++, C#, Solidity, SQL. Specializing in LLMs, Scikit-learn, HuggingFace, Whisper, TensorFlow, Ollama, XLM-RoBERTa.
          </p>
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 font-bold underline decoration-rose-500/20 underline-offset-4">Backend & MLOps</p>
          <p className="text-base text-neutral-400">
            Node.js, Flask, FastAPI, ASP.NET, Microservices. MLOps tools: Docker, Kubernetes, Apache Airflow, MLflow, Prometheus, Grafana.
          </p>
        </div>
      ),
    },
    {
      title: "Recent Experience",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Sky Infinit</h2>
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 font-bold underline decoration-rose-500/20 underline-offset-4">Backend API Developer (Internship)</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-400">
            <li>Built scalable Flask REST APIs using Ollama & open-source LLMs</li>
            <li>Optimized inference pipelines reducing latency by 67%</li>
            <li>Improved deployment reliability with pipeline restructuring</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Major Projects",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Key Engineering Work</h2>
          <p className="text-base text-neutral-400">
            <strong className="text-white">EstateMate:</strong> Urdu/English real estate AI automation platform.<br/>
            <strong className="text-white">MLOps Ad Gen:</strong> Production-grade local Phi-3 inference at scale.<br/>
            <strong className="text-white">SafaiPak:</strong> Full-stack MERN marketplace with role-based dashboards.<br/>
            <strong className="text-white">FMCG Analytics:</strong> Customer behavior modeling and campaign prediction.
          </p>
        </div>
      ),
    },
    {
      title: "Philosophy",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Scalable Solutions</h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            I am dedicated to engineering high-performance systems where AI meets robust software architecture. I enjoy bridging the gap between cutting-edge research and production implementation.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-16 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-pink-500 border border-rose-500/50 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-red-400 via-rose-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

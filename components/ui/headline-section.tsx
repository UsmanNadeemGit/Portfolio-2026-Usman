"use client";
import { motion } from "framer-motion";

export function HeadlineSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Animated Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white inline-block relative pb-2"
          >
            About Me
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 rounded-full"></span>
          </motion.h2>

          {/* Animated Paragraph - Now a single, personal paragraph as requested */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl leading-8 text-neutral-400"
          >
            {/* Personal summary paragraph */}
            Hi! I'm Usman, a Computer Science graduate from FAST &ndash; National University of Computer and Emerging Sciences, Islamabad. I love building things that make life easier&mdash;whether it's a web platform, a game, or a tool for my community. I'm passionate about learning new technologies, solving real problems, and working with people who share my curiosity and drive. When I'm not coding, you'll find me exploring new ideas, collaborating on projects, or just enjoying a good strategy game. Let's build something great together!
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

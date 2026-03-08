"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { NavbarButton } from "@/components/ui/navbar";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { FlipWords } from "./flip-words";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

/**
 * SectionTitle component renders a heading with a gradient underline.
 * Usage: <SectionTitle>About Me</SectionTitle>
 */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit mx-auto text-center">
      <h2 className="text-4xl font-extrabold">{children}</h2>
      <div
        className="h-1 mt-2 rounded-full"
        style={{
          background: "linear-gradient(90deg, #ec4899 0%, #f43f5e 50%, #fb7185 100%)",
          width: "100%",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    // Only run on client
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Update the animated name to 'Muhammad Usman Nadeem' and update the intro words to match resume skills
  const words = [
    // These words reflect the technical skills and areas of expertise from the resume
    "MLOps",
    "LLMs",
    "FastAPI",
    "Python",
    "HuggingFace",
    "Microservices",
    "Asp.NET",
    "C++/C",
    "React",
    "Solidity",
    "Cyber Security",
    "Figma",
    "Flask",
  ];

  const nameWords = [
    {
      text: "Hi",
      className: "text-white text-3xl sm:text-5xl lg:text-5xl font-bold",
    },
    {
      text: "I am",
      className: "text-white text-3xl sm:text-5xl lg:text-5xl font-bold",
    },
    {
      text: "Muhammad Usman Nadeem",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 text-3xl sm:text-5xl lg:text-5xl font-bold",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-28 scroll-mt-20"
    >
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <div className="pt-4 sm:pt-0 flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-neutral-700 shadow-lg">
            <Image
              src="/images/Usman.jpg"
              alt="Usman Nadeem Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-4 md:gap-6">
          <TypewriterEffectSmooth
            words={nameWords}
            className="text-center"
            cursorClassName="h-8 sm:h-10 lg:h-12"
          />

          <div className="text-center w-full">
            <div className="text-2xl sm:text-3xl lg:text-5xl text-neutral-400 mb-3 font-medium">
              I specialize in
            </div>
            <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center">
              <FlipWords
                words={words}
                duration={3000}
                isActive={isInView}
                className="text-2xl sm:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 text-center"
              />
            </div>
          </div>

          <div className="flex justify-center">
            {/*
              Download Resume Button:
              - This button allows users to download the latest resume directly from the website.
              - The 'href' attribute points to the PDF file located in the public/resume directory.
              - The 'download' attribute ensures the browser downloads the file instead of opening it in a new tab.
              - Always update the 'href' to match the latest resume file name to ensure users get the most recent version.
              - The file path is relative to the public directory, so '/resume/Muhammad-Usman-Nadeem-Resume.pdf' will resolve to 'public/resume/Muhammad-Usman-Nadeem-Resume.pdf'.
              - This approach works in both development and production environments as Next.js serves files from the public directory at the root URL.
            */}
            <NavbarButton
              href="/resume/MuhammadUsmanNadeem_Resume.pdf"
              download
              variant="primary"
            >
              Download Resume
            </NavbarButton>
          </div>
          {/* Contact and Social Links Section - All links and info are updated to match the latest user data */}
          <div className="flex flex-col items-center gap-2 mt-4">
            {/* Contact Info Row */}
            <div className="flex flex-wrap justify-center gap-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-200">
              {/* Email */}
              <a
                href="mailto:usman.nadeem2985@gmail.com"
                className="flex items-center gap-1 hover:underline"
                aria-label="Email"
              >
                <FaEnvelope className="text-blue-500" /> usman.nadeem2985@gmail.com
              </a>
              {/* Phone - updated to latest */}
              <span className="flex items-center gap-1">
                <svg width="18" height="18" fill="currentColor" className="text-green-600" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
                03476575824
              </span>
              {/* Location */}
              <span className="flex items-center gap-1">
                <svg width="18" height="18" fill="currentColor" className="text-red-500" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Islamabad, Pakistan
              </span>
            </div>
            {/* Social Links Row */}
            <div className="flex gap-3 justify-center mt-2">
              {/* LinkedIn - updated to latest */}
              <a
                href="https://www.linkedin.com/in/usman-nadeem-88a388322/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800 hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg text-blue-400" />
              </a>
              {/* GitHub - updated to latest */}
              <a
                href="https://github.com/UsmanNadeemGit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800 hover:bg-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg text-white" />
              </a>
              {/* Instagram button removed as per user request */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

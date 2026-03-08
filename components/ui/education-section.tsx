"use client";
import React from "react";

/**
 * EducationSection displays the user's education background in a clean, modern card style.
 * All data is taken directly from the user's resume. This section is meant to be placed
 * after the Hero/Intro section on the main page.
 */
export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-16 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-olive-dark mb-8 text-center">
          Education
        </h2>
        {/* Education Card */}
        <div className="max-w-xl mx-auto bg-neutral-900 rounded-xl shadow-lg p-6 border border-neutral-800 hover:border-pink-500/50 transition-colors">
          {/* University Name */}
          <div className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
            FAST &ndash; National University of Computer and Emerging Sciences
          </div>
          {/* Degree and Field */}
          <div className="text-lg md:text-xl text-neutral-400 mb-2">
            Bachelor of Science in Computer Science
          </div>
          {/* Year and Location */}
          <div className="flex flex-wrap gap-4 text-neutral-500 text-base md:text-lg">
            <span className="font-semibold text-pink-500">2021 &ndash; 2026</span>
            <span className="flex items-center gap-1">
              <svg width="18" height="18" fill="currentColor" className="text-pink-600" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Islamabad, Pakistan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 
"use client";
import { HeroSection } from "@/components/ui/hero-section";
import { HeadlineSection } from "@/components/ui/headline-section";
import { GippityAITimeline } from "@/components/ui/gippity-timeline";
import { ProjectsSection } from "@/components/ui/projects-section";
import { WorkExperienceSection } from "@/components/ui/work-experience-section";
import { ServicesSection } from "@/components/ui/services-section";
import { TechStackSection } from "@/components/ui/tech-stack-marquee";
import { EducationSection } from "@/components/ui/education-section";

export default function Home() {
  return (
    <div className=" w-full px-4 sm:px-8">
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Education Section */}
      <EducationSection />

      {/* About Section */}
      <section id="about" className="scroll-mt-5">
        <HeadlineSection />
        <GippityAITimeline />
      </section>

      {/* Business Services Section - Fulfills assignment requirement */}
      <section id="services" className="scroll-mt-5">
        <ServicesSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-5">
        <ProjectsSection />
      </section>

      {/* Work Experience Section */}
      <WorkExperienceSection />

      {/* Technical Skills Section */}
      <section id="tech-stack" className="scroll-mt-5">
        <TechStackSection />
      </section>
    </div>
  );
}

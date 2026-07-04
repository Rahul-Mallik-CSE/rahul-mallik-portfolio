/** @format */

"use client";

import { useState } from "react";
import AboutMe from "@/components/AboutMeComponents/AboutMe";
import ExperienceSection from "@/components/ExperienceComponents/ExperienceSection";
import ContactSection from "@/components/ContactComponents/ContactSection";
import SendEmailModal from "@/components/ContactComponents/SendEmailModal";
import Footer from "@/components/CommonComponents/Footer";
import NavBar from "@/components/CommonComponents/NavBar";
import HeroSection from "@/components/HeroComponents/HeroSection";
import ProjectsSection from "@/components/ProjectsComponents/ProjectsSection";
import SkillsSection from "@/components/SkillsComponents/SkillsSection";
import EducationSection from "@/components/EducationComponents/EducationSection";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 text-white md:space-y-8">
      <NavBar onOpenContact={() => setIsContactModalOpen(true)} />
      <HeroSection />
      <AboutMe onOpenContact={() => setIsContactModalOpen(true)} />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection onOpenContact={() => setIsContactModalOpen(true)} />
      <Footer onOpenContact={() => setIsContactModalOpen(true)} />
      <SendEmailModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
}

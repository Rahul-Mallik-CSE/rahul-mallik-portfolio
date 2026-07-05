/** @format */

"use client";

import { Suspense, useState, lazy } from "react";
import SendEmailModal from "@/components/ContactComponents/SendEmailModal";
import Footer from "@/components/CommonComponents/Footer";
import NavBar from "@/components/CommonComponents/NavBar";
import HeroFallback from "@/components/HeroComponents/HeroFallback";
import AboutMeFallback from "@/components/AboutMeComponents/AboutMeFallback";
import ExperienceFallback from "@/components/ExperienceComponents/ExperienceFallback";
import ProjectsFallback from "@/components/ProjectsComponents/ProjectsFallback";
import SkillsFallback from "@/components/SkillsComponents/SkillsFallback";
import EducationFallback from "@/components/EducationComponents/EducationFallback";
import ContactFallback from "@/components/ContactComponents/ContactFallback";
import FooterFallback from "@/components/CommonComponents/FooterFallback";

const HeroSection = lazy(() => import("@/components/HeroComponents/HeroSection"));
const AboutMe = lazy(() => import("@/components/AboutMeComponents/AboutMe"));
const ExperienceSection = lazy(() => import("@/components/ExperienceComponents/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsComponents/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsComponents/SkillsSection"));
const EducationSection = lazy(() => import("@/components/EducationComponents/EducationSection"));
const ContactSection = lazy(() => import("@/components/ContactComponents/ContactSection"));

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 text-white md:space-y-8">
      <NavBar onOpenContact={() => setIsContactModalOpen(true)} />
      <Suspense fallback={<HeroFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<AboutMeFallback />}>
        <AboutMe onOpenContact={() => setIsContactModalOpen(true)} />
      </Suspense>
      <Suspense fallback={<ExperienceFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<ProjectsFallback />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SkillsFallback />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<EducationFallback />}>
        <EducationSection />
      </Suspense>
      <Suspense fallback={<ContactFallback />}>
        <ContactSection onOpenContact={() => setIsContactModalOpen(true)} />
      </Suspense>
      <Suspense fallback={<FooterFallback />}>
        <Footer onOpenContact={() => setIsContactModalOpen(true)} />
      </Suspense>
      <SendEmailModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
}

/** @format */

import AboutMe from "@/components/AboutMeComponents/AboutMe";
import ExperienceSection from "@/components/ExperienceComponents/ExperienceSection";
import HeroSection from "@/components/HeroComponents/HeroSection";
import ProjectsSection from "@/components/ProjectsComponents/ProjectsSection";
import SkillsSection from "@/components/SkillsComponents/SkillsSection";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full text-white space-y-4 md:space-y-8 flex-col">
      <HeroSection />
      <AboutMe />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

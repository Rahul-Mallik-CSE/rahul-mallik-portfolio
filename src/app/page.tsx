/** @format */

import AboutMe from "@/components/AboutMeComponents/AboutMe";
import HeroSection from "@/components/HeroComponents/HeroSection";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full text-white space-y-4 md:space-y-8 flex-col">
      <HeroSection />
      <AboutMe />
    </div>
  );
}

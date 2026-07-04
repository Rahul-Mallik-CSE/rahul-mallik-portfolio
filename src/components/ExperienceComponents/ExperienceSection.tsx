/** @format */

"use client";


import SectionHeading from "../CommonComponents/SectionHeading";
import ExpLeftContainer from "./ExpLeftContainer";
import ExpRightContainer from "./ExpRightContainer";




const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="max-w-500 mx-auto p-2 md:p-4 lg:p-6">
        <SectionHeading title="Experience" />

        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-5 xl:gap-8">
            {/* left side */}
            <ExpLeftContainer />

            {/* right side */}
            <ExpRightContainer />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

"use client";

import Image from "next/image";
import SectionHeading from "../CommonComponents/SectionHeading";
import { motion } from "framer-motion";
import { smallToBigOpen, downToUp } from "../AllAnimation/Animation";
import EducationItem from "./EducationItem";
import EducationHighlight from "./EducationHighlight";

const educationData = [
  {
    duration: "Jan 2019 - Dec 2023",
    degree: "BSc in CSE",
    institution: "United International University",
    url: "https://www.uiu.ac.bd/",
    description:
      "Completed my Bachelor of Science in Computer Science and Engineering with a strong focus on problem solving, software fundamentals, and building a solid base for front-end development.",
  },
  {
    duration: "July 2015 - July 2017",
    degree: "HSC",
    institution: "Govt. Sundarban Adarsha College, Khulna",
    url: "https://gsac.ac.bd/",
    description:
      "Studied science-focused higher secondary subjects and developed the discipline and analytical thinking that later supported my engineering path.",
  },
  {
    duration: "Jan 2013 - June 2015",
    degree: "SSC",
    institution: "Maizpara Secondary School, Narail",
    url: "https://maizparass.edu.bd/",
    description:
      "Built my early academic foundation and first interest in technical learning, teamwork, and structured study habits.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="w-full scroll-mt-24 px-4 lg:px-6">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <SectionHeading
          title="Education"
          subtitle="Academic Background"
          description="A focused timeline of the academic path that shaped my technical foundation and professional mindset."
        />

        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <motion.div
              variants={smallToBigOpen}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-5"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1d2222] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(149,237,255,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />
                <div className="relative aspect-4/5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101515]">
                  <Image
                    src="/images/convocation.jpg"
                    alt="Graduation ceremony photo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority={false}
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <EducationHighlight value="7+" label="Years of Learning" delay={0.05} />
                <EducationHighlight value="3" label="Academic Milestones" delay={0.1} />
                <EducationHighlight value="CSE" label="Core Discipline" delay={0.15} />
              </div>
            </motion.div>

            <motion.div
              variants={downToUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="absolute left-6 top-0 h-full w-px bg-linear-to-b from-[#95EDFF]/60 via-white/15 to-transparent sm:left-6" />
              <div className="space-y-1">
                {educationData.map((item, index) => (
                  <EducationItem
                    key={item.degree}
                    index={index}
                    duration={item.duration}
                    degree={item.degree}
                    institution={item.institution}
                    url={item.url}
                    description={item.description}
                    isLast={index === educationData.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

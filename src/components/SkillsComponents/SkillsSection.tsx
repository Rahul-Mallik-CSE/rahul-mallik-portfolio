/** @format */

"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiMaterialdesign,
  SiPython,
  SiC,
  SiCplusplus,
  SiBootstrap,
  SiPostman,
  SiGoogleads,
  SiNetlify,
  SiSpringboot,
  SiDjango,
  SiOpenjdk,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { BsFillCursorFill } from "react-icons/bs";
import SectionHeading from "../CommonComponents/SectionHeading";
import { SkillCategory } from "@/types/SkillsTypes";
import skillsData from "@/data/SkillsData.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const categoryVariants: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  javascript: <SiJavascript className="h-5 w-5 md:h-6 md:w-6" />,
  typescript: <SiTypescript className="h-5 w-5 md:h-6 md:w-6" />,
  python: <SiPython className="h-5 w-5 md:h-6 md:w-6" />,
  java: <SiOpenjdk className="h-5 w-5 md:h-6 md:w-6" />,
  c: <SiC className="h-5 w-5 md:h-6 md:w-6" />,
  cplusplus: <SiCplusplus className="h-5 w-5 md:h-6 md:w-6" />,
  html5: <SiHtml5 className="h-5 w-5 md:h-6 md:w-6" />,
  css3: <SiCss3 className="h-5 w-5 md:h-6 md:w-6" />,
  react: <SiReact className="h-5 w-5 md:h-6 md:w-6" />,
  nextjs: <SiNextdotjs className="h-5 w-5 md:h-6 md:w-6" />,
  redux: <SiRedux className="h-5 w-5 md:h-6 md:w-6" />,
  framerMotion: <TbBrandFramerMotion className="h-5 w-5 md:h-6 md:w-6" />,
  springBoot: <SiSpringboot className="h-5 w-5 md:h-6 md:w-6" />,
  django: <SiDjango className="h-5 w-5 md:h-6 md:w-6" />,
  tailwindcss: <SiTailwindcss className="h-5 w-5 md:h-6 md:w-6" />,
  bootstrap: <SiBootstrap className="h-5 w-5 md:h-6 md:w-6" />,
  material: <SiMaterialdesign className="h-5 w-5 md:h-6 md:w-6" />,
  git: <SiGit className="h-5 w-5 md:h-6 md:w-6" />,
  github: <SiGithub className="h-5 w-5 md:h-6 md:w-6" />,
  figma: <SiFigma className="h-5 w-5 md:h-6 md:w-6" />,
  postman: <SiPostman className="h-5 w-5 md:h-6 md:w-6" />,
  vscode: <VscVscode className="h-5 w-5 md:h-6 md:w-6" />,
  cursor: <BsFillCursorFill className="h-5 w-5 md:h-6 md:w-6" />,
  antigravity: <SiGoogleads className="h-5 w-5 md:h-6 md:w-6" />,
  vercel: <SiVercel className="h-5 w-5 md:h-6 md:w-6" />,
  netlify: <SiNetlify className="h-5 w-5 md:h-6 md:w-6" />,
};



const SkillsSection = () => {
  const typedSkillsData = skillsData as SkillCategory[];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Intermediate":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
    }
  };

  return (
    <section className="w-full    px-4 lg:px-6">
      <div className="max-w-500 mx-auto  p-2 md:p-4 lg:p-6">
        <SectionHeading
          title="Skills"
          subtitle="Technical Expertise"
          description="A comprehensive overview of my technical skills and expertise levels across various domains of web development."
        />

        {/* Skills Categories */}
        <div className="space-y-8 md:space-y-10">
          {typedSkillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-6"
            >
              {/* Category Title */}
              <motion.div
                variants={categoryVariants}
                className="flex items-center gap-3"
              >
                <div className="h-5 md:h-6 w-1 bg-[#95EDFF] rounded-full"></div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#95EDFF] tracking-wide">
                  {category.title}
                </h2>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative"
                  >
                    {/* Skill Card */}
                    <div className="relative bg-[#1a1f2e]/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-1 md:p-2 overflow-hidden transition-all duration-300 hover:border-[#95EDFF]/50 hover:shadow-lg hover:shadow-[#95EDFF]/10">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-[#95EDFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="shrink-0 p-1 md:p-2 bg-[#0d1117] rounded-lg border border-gray-800/50 group-hover:border-[#95EDFF]/30 transition-colors duration-300"
                          style={{
                            color: skill.color,
                          }}
                        >
                          {iconMap[skill.iconKey]}
                        </motion.div>

                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs  font-semibold text-white mb-1 group-hover:text-[#95EDFF] transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <span
                            className={`inline-block px-1 md:px-2 py-0 text-xs  font-medium rounded-full border ${getLevelColor(
                              skill.level
                            )} transition-all duration-300`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {/* Animated border effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-[#95EDFF] to-transparent"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

/** @format */

"use client";
import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { rightToLeft } from "../AllAnimation/Animation";
import { BsFillCursorFill } from "react-icons/bs";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const categoryVariants = {
  hidden: { x: -50, opacity: 0 },
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

interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const skillsData: SkillCategory[] = [
    {
      title: "LANGUAGES",
      skills: [
        {
          name: "JavaScript (ES6+)",
          level: "Expert",
          icon: <SiJavascript className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#F7DF1E",
        },
        {
          name: "TypeScript",
          level: "Intermediate",
          icon: <SiTypescript className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#3178C6",
        },
        {
          name: "Python",
          level: "Intermediate",
          icon: <SiPython className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#3776AB",
        },
        {
          name: "C",
          level: "Intermediate",
          icon: <SiC className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#A8B9CC",
        },
        {
          name: "C++",
          level: "Intermediate",
          icon: <SiCplusplus className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#00599C",
        },
        {
          name: "HTML5",
          level: "Expert",
          icon: <SiHtml5 className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          level: "Expert",
          icon: <SiCss3 className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#1572B6",
        },
      ],
    },
    {
      title: "JAVASCRIPT FRAMEWORKS & LIBRARIES",
      skills: [
        {
          name: "React.js",
          level: "Expert",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#61DAFB",
        },
        {
          name: "Next.js",
          level: "Expert",
          icon: <SiNextdotjs className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#FFFFFF",
        },
        {
          name: "Redux",
          level: "Expert",
          icon: <SiRedux className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#764ABC",
        },
        {
          name: "Redux Toolkit",
          level: "Expert",
          icon: <SiRedux className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#764ABC",
        },
        {
          name: "React Router",
          level: "Expert",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#CA4245",
        },
        {
          name: "React Hook Form",
          level: "Expert",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#EC5990",
        },
        {
          name: "Framer Motion",
          level: "Expert",
          icon: <TbBrandFramerMotion className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#FEF62A",
        },
      ],
    },
    {
      title: "CSS FRAMEWORKS & LIBRARIES",
      skills: [
        {
          name: "Tailwind CSS",
          level: "Expert",
          icon: <SiTailwindcss className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#06B6D4",
        },
        {
          name: "Bootstrap",
          level: "Expert",
          icon: <SiBootstrap className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#7952B3",
        },
      ],
    },
    {
      title: "REACT UI COMPONENTS",
      skills: [
        {
          name: "ShadCN",
          level: "Expert",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#FFFFFF",
        },
        {
          name: "Aceternity UI",
          level: "Expert",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#A855F7",
        },
        {
          name: "Material UI",
          level: "Intermediate",
          icon: <SiMaterialdesign className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#007FFF",
        },
        {
          name: "React Bits",
          level: "Intermediate",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#61DAFB",
        },
        {
          name: "UI Layouts",
          level: "Expert",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#10B981",
        },
        {
          name: "Shera UI",
          level: "Intermediate",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#F59E0B",
        },
        {
          name: "Swiper JS",
          level: "Expert",
          icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#6332F6",
        },
      ],
    },
    {
      title: "TOOLS & PLATFORMS",
      skills: [
        {
          name: "Git",
          level: "Expert",
          icon: <SiGit className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#F05032",
        },
        {
          name: "GitHub",
          level: "Expert",
          icon: <SiGithub className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#FFFFFF",
        },
        {
          name: "Figma",
          level: "Expert",
          icon: <SiFigma className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#F24E1E",
        },
        {
          name: "Postman",
          level: "Expert",
          icon: <SiPostman className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#F76935",
        },
        {
          name: "VS Code",
          level: "Expert",
          icon: <VscVscode className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#007ACC",
        },
        {
          name: "Cursor",
          level: "Expert",
          icon: <BsFillCursorFill className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#fffff",
        },
        {
          name: "Antigravity",
          level: "Expert",
          icon: <SiGoogleads className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#4285F4",
        },
        {
          name: "Vercel",
          level: "Expert",
          icon: <SiVercel className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#FFFFFF",
        },
        {
          name: "Netlify",
          level: "Expert",
          icon: <SiNetlify className="w-5 h-5 md:w-6 md:h-6" />,
          color: "#00C7B7",
        },
      ],
    },
  ];

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
        <div className="mx-auto flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl text-[#95EDFF] font-bold"
          >
            Skills
          </motion.h1>
          <motion.div
            variants={rightToLeft}
            initial="hidden"
            animate="visible"
            className="mb-6 flex items-center mt-2 "
          >
            <div className="w-4 sm:w-6 md:w-8 border border-[#95EDFF]"></div>
            <div className="w-4 sm:w-6 md:w-8 border-3 rounded-2xl border-white"></div>
            <div className="w-4 sm:w-6 md:w-8 border border-[#95EDFF]"></div>
          </motion.div>
        </div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Technical Expertise
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical skills and expertise levels
            across various domains of web development.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-8 md:space-y-10">
          {skillsData.map((category, categoryIndex) => (
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
                          {skill.icon}
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
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#95EDFF] to-transparent"
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

/** @format */

"use client";

import { motion } from "framer-motion";
import SectionHeading from "../CommonComponents/SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "@/data/ProjectsData.json";
import { ProjectItem } from "@/types/ProjectsTypes";
import { showListLeftToRight } from "../AllAnimation/Animation";

const ProjectsSection = () => {
  const featuredProjects = (projects as ProjectItem[]).filter((project) => project.featured);
  const regularProjects = (projects as ProjectItem[]).filter((project) => !project.featured);

  return (
    <section className="w-full px-4 lg:px-6">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <SectionHeading
          title="Projects"
          subtitle="Selected Work"
          description="A curated collection of production-style products, dashboards, and practice builds crafted with modern front-end tools."
        />

        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6 lg:p-8">
          <motion.div
            variants={showListLeftToRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >
            <div  className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {featuredProjects.slice(0, 5).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6  xl:grid-cols-3">
              {regularProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

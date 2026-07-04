/** @format */

"use client";

import { useState } from "react";
import SectionHeading from "../CommonComponents/SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "@/data/ProjectsData.json";
import { ProjectItem } from "@/types/ProjectsTypes";
import { Button } from "../ui/button";

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredProjects = (projects as ProjectItem[]).filter((project) => project.featured);
  const regularProjects = (projects as ProjectItem[]).filter((project) => !project.featured);
  const visibleRegularProjects = showAllProjects ? regularProjects : regularProjects.slice(0, 6);
  const hasMoreProjects = regularProjects.length > 6;

  return (
    <section id="projects" className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <SectionHeading
          title="Projects"
          subtitle="Selected Work"
          description="A curated collection of production-style products, dashboards, and practice builds crafted with modern front-end tools."
        />

        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6 lg:p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleRegularProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>

            {hasMoreProjects ? (
              <div className="flex justify-center pt-2 md:pt-4">
                <Button
                  type="button"
                  onClick={() => setShowAllProjects((current) => !current)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#95EDFF]/30 bg-[linear-gradient(134deg,rgba(37,37,37,1)_17%,rgba(132,132,132,1)_100%)] px-6 py-3 text-base font-semibold text-[#95EDFF] transition-opacity hover:opacity-90"
                >
                  <span>{showAllProjects ? "Show Less" : "Show More"}</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-y-0.5">
                    {showAllProjects ? "↑" : "↓"}
                  </span>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

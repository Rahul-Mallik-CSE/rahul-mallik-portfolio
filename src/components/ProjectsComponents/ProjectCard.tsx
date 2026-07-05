/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe } from "lucide-react";
import { ProjectItem } from "@/types/ProjectsTypes";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isFeatured = Boolean(project.featured);

  return (
    <motion.article
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      initial={{ opacity: 0, y: 36, scale: 0.98, filter: "blur(8px)" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)] shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-1 ${
        isFeatured ? "lg:col-span-2 xl:row-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(149,237,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_26%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className={`relative flex h-full flex-col ${isFeatured ? "xl:flex-row" : ""}`}>
        <div className={`relative overflow-hidden ${isFeatured ? "xl:w-1/2" : "aspect-16/10"}`}>
          <div className="relative h-full min-h-55 w-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes={isFeatured ? "(max-width: 1280px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#95EDFF]" />
              Project {String(index + 1).padStart(2, "0")}
            </div>

            {isFeatured ? (
              <div className="absolute bottom-4 left-4 rounded-full border border-[#95EDFF]/25 bg-[#95EDFF]/10 px-3 py-1 text-xs font-medium text-[#95EDFF] backdrop-blur-md">
                Featured Project
              </div>
            ) : null}
          </div>
        </div>

        <div className={`relative flex flex-1 flex-col p-5 md:p-6 ${isFeatured ? "xl:w-1/2 xl:p-7" : ""}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#95EDFF]/75">
                Selected Work
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white md:text-[1.65rem]">
                {project.name}
              </h3>
            </div>

            <div className="rounded-full border border-white/10 bg-black/20 p-2 text-white/70">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-300 md:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.liveLink ? (
              <Link
                href={project.liveLink}
                target="_blank"
                className="group/link inline-flex items-center justify-center gap-2 rounded-xl border border-[#95EDFF]/30 bg-[#95EDFF] px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#7de5fa]"
              >
                <Globe className="h-4 w-4" />
                Live Demo
              </Link>
            ) : null}

            {project.codeLink ? (
              <Link
                href={project.codeLink}
                target="_blank"
                className="group/link inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-[#95EDFF]/35 hover:bg-white/10"
              >
                <Code2 className="h-4 w-4" />
                Source Code
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

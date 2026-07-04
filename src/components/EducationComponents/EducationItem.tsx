"use client";

import { motion } from "framer-motion";
import { leftToRight, rightToLeft } from "../AllAnimation/Animation";
import { ExternalLink, GraduationCap } from "lucide-react";

type EducationItemProps = {
  duration: string;
  degree: string;
  institution: string;
  url: string;
  description: string;
  isLast?: boolean;
  index: number;
};

const EducationItem = ({
  duration,
  degree,
  institution,
  url,
  description,
  isLast,
  index,
}: EducationItemProps) => {
  const animation = index % 2 === 0 ? leftToRight : rightToLeft;

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="relative flex gap-4 sm:gap-6"
    >
      <div className="relative flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#95EDFF]/30 bg-[#95EDFF]/10 text-[#95EDFF] shadow-[0_0_30px_rgba(149,237,255,0.18)]">
          <GraduationCap className="h-5 w-5" />
        </div>
        {!isLast ? (
          <div className="mt-3 h-full w-px grow bg-linear-to-b from-[#95EDFF]/60 via-white/20 to-transparent" />
        ) : null}
      </div>

      <div className="flex-1 pb-8">
        <div className="rounded-3xl border border-white/10 bg-[#1d2222] p-4 shadow-[0_20px_55px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#95EDFF]/30 hover:bg-white/6 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                {duration}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
                {degree}
              </h3>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-sm text-[#95EDFF] transition-colors hover:text-white"
              >
                {institution}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-full border border-[#95EDFF]/20 bg-[#95EDFF]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[#95EDFF]">
              Academic Journey
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/68 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationItem;
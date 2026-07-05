"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Sparkles } from "lucide-react";

type Achievement = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
};

type AchievementCardProps = {
  achievement: Achievement;
  index: number;
};

const accentStyles = [
  "from-[#95EDFF]/18 via-white/5 to-transparent",
  "from-white/12 via-[#95EDFF]/12 to-transparent",
  "from-[#95EDFF]/14 via-white/5 to-transparent",
];

const borderStyles = [
  "border-[#95EDFF]/28",
  "border-white/12",
  "border-[#95EDFF]/24",
];

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const gradient = accentStyles[index % accentStyles.length];
  const border = borderStyles[index % borderStyles.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[1.75rem] border ${border} bg-[#111717] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 md:p-6`}
    >
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-100`} />
      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">{achievement.tag}</p>
            <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
              {achievement.title}
            </h3>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#95EDFF]/25 bg-[#95EDFF]/10 text-[#95EDFF]">
            <Award className="h-5 w-5" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#95EDFF]">
          <BadgeCheck className="h-4 w-4" />
          <span className="font-medium">{achievement.subtitle}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
            {achievement.year}
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-[#95EDFF]/60 via-white/15 to-transparent" />
          <Sparkles className="h-4 w-4 text-[#95EDFF] opacity-70 transition-transform duration-300 group-hover:rotate-12" />
        </div>

        <p className="text-sm leading-6 text-white/70 md:text-[15px]">
          {achievement.description}
        </p>
      </div>
    </motion.article>
  );
};

export default AchievementCard;

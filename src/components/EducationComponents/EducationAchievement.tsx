"use client";

import { motion } from "framer-motion";
import SectionHeading from "../CommonComponents/SectionHeading";
import AchievementCard from "./AchievementCard";

const achievements = [
  {
    year: "2025",
    title: "8th Convocation of United International University",
    subtitle: "United International University",
    description:
      "Completed the 8th Convocation of United International University on December 27, 2025, marking the successful completion of my academic journey in Computer Science and Engineering.",
    tag: "Convocation",
  },
  {
    year: "2025",
    title: "Solvio AI Hackathon",
    subtitle: "Team Silent_Rainmakers",
    description:
      "Participated in the AI Solvio Hackathon as part of Team Silent_Rainmakers and successfully cleared the first and second phases with an innovative AI-driven project concept.",
    tag: "Hackathon",
  },
  {
    year: "2020",
    title: "IT Carnival, Dhaka International University",
    subtitle: "Champion of Tech Olympiad",
    description:
      "Earned the Champion title in the Tech Olympiad at IT Carnival, Dhaka International University, which strengthened my competitive problem-solving mindset.",
    tag: "Champion",
  },
];

const EducationAchievement = () => {
  return (
    <div className="mt-8 md:mt-10">
      <SectionHeading
        title="Academic Achievements"
        subtitle="Milestones that shaped my growth"
        description="These moments reflect the practical side of my academic journey: graduation, hackathon participation, and recognition in a competitive tech event."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="overflow-hidden rounded-4xl border border-white/10 bg-[#1d2222] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6 lg:p-8"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard key={`${achievement.title}-${index}`} achievement={achievement} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationAchievement;

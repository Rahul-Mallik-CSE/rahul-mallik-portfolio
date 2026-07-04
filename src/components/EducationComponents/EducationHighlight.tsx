"use client";

import { motion } from "framer-motion";

type EducationHighlightProps = {
  value: string;
  label: string;
  delay?: number;
};

const EducationHighlight = ({ value, label, delay = 0 }: EducationHighlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay }}
      className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
    >
      <p className="text-2xl font-bold text-[#95EDFF] md:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/45 md:text-sm">
        {label}
      </p>
    </motion.div>
  );
};

export default EducationHighlight;
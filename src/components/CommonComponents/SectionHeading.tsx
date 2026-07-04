/** @format */

"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
};

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = "center",
}: SectionHeadingProps) => {
  const containerAlign = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mx-auto mb-4 md:mb-6 flex flex-col justify-center ${containerAlign}`}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#95EDFF] md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "auto" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-2  flex items-center"
      >
        <div className="w-4 border border-[#95EDFF] sm:w-6 md:w-8" />
        <div className="w-4 border-3 border-white rounded-2xl sm:w-6 md:w-8" />
        <div className="w-4 border border-[#95EDFF] sm:w-6 md:w-8" />
      </motion.div>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 max-w-3xl text-xl font-semibold text-gray-100 md:text-2xl"
        >
          {subtitle}
        </motion.p>
      ) : null}

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-1 max-w-3xl text-sm text-gray-400 md:text-base"
        >
          {description}
        </motion.p>
      ) : null}

      
    </div>
  );
};

export default SectionHeading;

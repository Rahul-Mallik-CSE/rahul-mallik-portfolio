/** @format */
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import {
  smallToBigOpen,
  leftToRight,
  rightToLeft,
} from "../AllAnimation/Animation";

const AboutMe = () => {
  return (
    <section className="w-full bg-[#1a1a1a] py-16 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* About Me Heading */}
        <motion.div
          variants={smallToBigOpen}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-[#95EDFF] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-[#95EDFF] mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            variants={leftToRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[450px] rounded-[40px] bg-gradient-to-br from-[#4a6266] via-[#66787c] to-[#8fa9ad] p-1 shadow-2xl">
                <div className="w-full h-full rounded-[36px] bg-gradient-to-br from-[#2a3a3e] to-[#4a6266] flex items-end justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Rahul Mallik"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover rounded-[36px]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={rightToLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div>
              <h3 className="text-white text-2xl lg:text-3xl font-normal mb-2">
                Hi There! I'm{" "}
                <span className="font-bold text-white">Rahul Mallik</span>
              </h3>
              <p className="text-[#95EDFF] text-lg font-medium mb-6">
                Front-End Developer
              </p>
            </div>

            <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8">
              Rahul Mallik is a{" "}
              <span className="text-[#95EDFF] font-medium">
                Front-End developer
              </span>{" "}
              passionate about creating intuitive, user-friendly digital
              experiences. He shares design insights on his YouTube channel,{" "}
              <span className="text-[#95EDFF] font-medium">
                "Simply UX With UI"
              </span>
              , and specializes in impactful, functional designs powered by
              creativity and simplicity.
            </p>

            {/* Personal Details */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <span className="text-gray-300 w-24">Birthday</span>
                <span className="text-gray-400 mx-4">:</span>
                <span className="text-gray-300">Feb 04, 1998</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300 w-24">Phone</span>
                <span className="text-gray-400 mx-4">:</span>
                <span className="text-gray-300">(307) 555-0133</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300 w-24">E-mail</span>
                <span className="text-gray-400 mx-4">:</span>
                <span className="text-gray-300">rahul.mallik@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300 w-24">Nationality</span>
                <span className="text-gray-400 mx-4">:</span>
                <span className="text-gray-300">Indian</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300 w-24">Freelance</span>
                <span className="text-gray-400 mx-4">:</span>
                <span className="text-[#95EDFF] font-medium">Available</span>
              </div>
            </div>

            {/* Download Button */}
            <Button className="inline-flex items-center gap-3 px-8 py-4 bg-[#95EDFF] hover:bg-[#7de5fa] text-black font-medium text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#95EDFF]/25">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

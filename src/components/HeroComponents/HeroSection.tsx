/** @format */
"use client";
import TextType from "../ui/TextType";
import SplitText from "../ui/SplitText";
import { motion } from "framer-motion";
import {
  downToUpText,
  rightToLeft,
  smallToBigOpen,
} from "../AllAnimation/Animation";
import { Button } from "../ui/button";
import { ArrowDownToLine, Linkedin } from "lucide-react";
import { IoDocumentSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="w-full  mt-4 md:mt-6  px-4 lg:px-6 ">
      <div className="max-w-500 mx-auto  p-2 md:p-4 lg:p-6 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-4xl border border-gray-300 bg-[#282a2a] p-4 md:p-6 lg:p-8 ">
          <div className="col-span-2 order-2 md:order-1 text-center md:text-left">
            {/* <motion.p variants={rightToLeft} initial="hidden" animate="visible">
              Hello there,
            </motion.p>*/}
            <TextType
              text={["Welcome to my Portfolio!"]}
              typingSpeed={35}
              pauseDuration={200000}
              showCursor={true}
              cursorCharacter="|"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4"
            />
            <motion.p
              variants={rightToLeft}
              initial="hidden"
              animate="visible"
              className="text-base italic text-gray-300"
            >
              I&apos;m,
            </motion.p>
            <SplitText
              text="Rahul Mallik "
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            />
            <motion.p
              variants={downToUpText}
              initial="hidden"
              animate="visible"
              className="md:max-w-3/4 text-gray-300 mb-8"
            >
              A passionate{" "}
              <span className="text-[#95EDFF]">Front-End Developer</span>{" "}
              dedicated to building modern, responsive, and engaging web
              experiences that bring ideas to life.
            </motion.p>

            <motion.div
              variants={smallToBigOpen}
              initial="hidden"
              animate="visible"
              className="gap-2 md:gap-4 flex flex-wrap justify-center md:justify-start"
            >
              <Button className="group inline-flex  items-center justify-center gap-2 px-6 xl:px-7 py-3 xl:py-3.5 rounded-lg border-[0.5px] border-solid border-[#95EDFF] bg-[linear-gradient(134deg,rgba(37,37,37,1)_17%,rgba(132,132,132,1)_100%)] hover:opacity-90 transition-opacity">
                <span className="font-normal text-[#95EDFF] text-base xl:text-lg text-center leading-[21.6px] whitespace-nowrap tracking-[0]">
                  View my Resume
                </span>{" "}
                <ArrowDownToLine className="text-[#95EDFF]" />
              </Button>

              <Button className="group inline-flex  items-center justify-center gap-2 px-6 xl:px-7 py-3 xl:py-3.5 rounded-lg border-[0.5px] border-solid border-[#95EDFF] bg-[#95EDFF] hover:bg-[#7de5fa] hover:opacity-100 transition-opacity">
                <span className="font-normal text-black text-base xl:text-lg text-center leading-[21.6px] whitespace-nowrap tracking-[0]">
                  Hire me
                </span>{" "}
                <IoDocumentSharp className="text-black" />
              </Button>
              <div className="gap-0">
                <Button className="bg-transparent hover:bg-transparent">
                  <FaGithub className="w-8 h-8" />
                </Button>
                <Button className="bg-transparent hover:bg-transparent p-0">
                  <Linkedin />
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="col-span-1 order-1 lg:order-2 flex justify-center items-center mb-6 lg:mb-0">
            <motion.div
              className="relative justify-end items-center border-4 md:border-8 border-[#66787C] rounded-full shadow-[0_0_60px_rgba(102,120,124,0.5),0_0_100px_rgba(102,120,124,0.3)] bg-gradient-radial from-[#8fa9ad] to-[#4a6266]"
              variants={smallToBigOpen}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/logo.png"
                alt=""
                width={6000}
                height={6000}
                className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover bg-linear-to-tl from-[#b8c8ca] to-[#80d8e7] "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

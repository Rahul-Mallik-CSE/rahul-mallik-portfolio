/** @format */
"use client";

import Image from "next/image";
import {
  downToUp,
  smallToBigOpen,
} from "../AllAnimation/Animation";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import SectionHeading from "../CommonComponents/SectionHeading";
import ResumeDownloadButton from "../CommonComponents/ResumeDownloadButton";
type AboutMeProps = {
  onOpenContact?: () => void;
};

const AboutMe = ({ onOpenContact }: AboutMeProps) => {
  return (
    <section id="about" className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="max-w-500 mx-auto  p-2 md:p-4 lg:p-6 ">
        <SectionHeading title="About Me" />
        <div className="w-full min-h-96 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-4xl  bg-[#282a2a] p-4 md:p-6 lg:p-8 ">
          <div className="col-span-1  flex items-center justify-center ">
            <motion.div
              variants={smallToBigOpen}
              initial="hidden"
              animate="visible"
              className="relative w-62 h-70 md:w-68 md:h-76 xl:w-82 xl:h-108 rotate-[-8deg]"
            >
              <div className="w-full h-full rounded-[60px] bg-linear-to-br from-[#3a3a3a] via-[#4a5a5e] to-[#6a9aa8] overflow-hidden shadow-2xl">
                <Image
                  src="/logo-2.png"
                  alt="Profile"
                  width={6000}
                  height={6000}
                  className="w-full h-full object-cover rotate-[8deg] scale-110 origin-center"
                />
              </div>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-2 flex items-center justify-center  text-center md:text-left">
            <div className="flex flex-col">
              <motion.div
                variants={smallToBigOpen}
                initial="hidden"
                animate="visible"
                className=""
              >
                <h1 className="text-gray-300 text-xl md:text-2xl lg:text-3xl">
                  Hi There! I&apos;m{" "}
                  <strong className="text-white font-bold">Rahul Mallik</strong>
                </h1>
                <h1 className="text-[#95EDFF] font-medium text-lg lg:text-xl">
                  Software Engineer
                </h1>
              </motion.div>
              <motion.div
                variants={downToUp}
                initial="hidden"
                animate="visible"
                className="mt-1 lg:mt-2 text-white text-lg lg:text-xl font-semibold"
              >
                <p>Transforming Ideas into Interactive Web Experiences</p>
              </motion.div>
              <motion.div
                variants={downToUp}
                initial="hidden"
                animate="visible"
                className="mt-1 lg:mt-2 text-xs md:text-sm lg:text-base text-gray-300 space-y-1"
              >
                <p>
                  I’m Rahul Mallik, a passionate and detail-oriented Software Engineer
                  with a strong focus on Front-End Development and growing expertise in
                  full-stack engineering.
                </p>

                <p>
                  I hold a BSc in Computer Science and Engineering from United International
                  University, where I built a strong foundation in software development,
                  algorithms, and modern programming practices, with a deep interest in
                  creating scalable and user-focused digital products.
                </p>

                <p>
                  Currently, I work as a Junior Software Engineer(Front-end) at Join Venture AI,
                  where I contribute to building responsive and high-performance web
                  applications, including e-commerce and CRM platforms. I specialize in
                  React.js, Next.js, TypeScript, and modern frontend architecture, focusing
                  on clean code, reusable components, and optimized user experiences.
                </p>

                <p>
                  Alongside frontend development, I am actively expanding into backend
                  technologies, currently learning Node.js and Spring Boot to strengthen
                  my full-stack development capabilities. I enjoy building end-to-end
                  solutions and continuously improving my understanding of scalable system
                  design and backend architecture.
                </p>
              </motion.div>

              <motion.div
                variants={downToUp}
                initial="hidden"
                animate="visible"
                className="flex gap-2 mt-4 lg:mt-6 justify-center md:justify-start"
              >
                <Button
                  type="button"
                  onClick={onOpenContact}
                  className="group inline-flex items-center justify-center gap-2 px-6 xl:px-7 py-3 xl:py-3.5 rounded-xl border-[0.5px] border-solid border-white bg-[linear-gradient(134deg,rgba(37,37,37,1)_17%,rgba(132,132,132,1)_100%)] hover:opacity-90 transition-opacity"
                >
                  <span className="font-normal text-white text-base xl:text-lg text-center leading-[21.6px] whitespace-nowrap tracking-[0]">
                    Get in Touch
                  </span>
                  <GoArrowUpRight className="w-8 h-6 font-bold  group-hover:rotate-45 transition-transform duration-300" />
                </Button>
                
                {/* Custom resume download button component is used here for better reusability and maintainability of the code. */}
                <ResumeDownloadButton />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

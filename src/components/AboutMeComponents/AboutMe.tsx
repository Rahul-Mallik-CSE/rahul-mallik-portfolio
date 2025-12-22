/** @format */
"use client";

import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="w-full  mt-4 md:mt-6  px-4 lg:px-6 ">
      <div className="max-w-500 mx-auto  p-2 md:p-4 lg:p-6 ">
        <div className="w-full min-h-96 grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-4xl  bg-[#282a2a] p-4 md:p-6 lg:p-8 ">
          <div className="col-span-2  flex items-center justify-center ">
            <div className="relative w-72 h-72 md:w-80 md:h-[350px] lg:w-96 lg:h-[400px] rotate-[-8deg]">
              <div className="w-full h-full rounded-[60px] bg-linear-to-br from-[#3a3a3a] via-[#4a5a5e] to-[#6a9aa8] overflow-hidden shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  width={6000}
                  height={6000}
                  className="w-full h-full object-cover rotate-[8deg] scale-110 origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

/** @format */
"use client";

import { PhoneIcon, Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";

const navigationItems = [
  { label: "Home" },
  { label: "Previous Work" },
  { label: "Service" },
  { label: "About me" },
  { label: "Contact" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 ">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="py-0.5 w-56 flex items-center gap-0.5">
          <Image
            src="/R-logo-preview.png"
            alt="Logo"
            width={60}
            height={60}
            className="w-10 h-10 "
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 xl:gap-20">
          <nav className="flex items-end justify-between pt-3.75 pb-2 px-8 xl:px-12.25 bg-linear-to-l from-[#ffffff1a] via-[#3B4E52] to-[#ffffff05] rounded-[0px_0px_49px_40px] shadow-[0px_21px_45px_#0000004a,0px_83px_83px_#00000042,0px_186px_112px_#00000026,0px_331px_132px_#0000000a,0px_517px_145px_#00000003] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="inline-flex p-2.5 items-center justify-center gap-2.5 hover:bg-white/10 transition-colors"
              >
                <span className="font-normal text-white text-base xl:text-lg text-center tracking-[0] leading-[21.6px] whitespace-nowrap">
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex w-56 text-right">
          <Button className="group inline-flex items-center justify-center gap-2 px-6 xl:px-7 py-3 xl:py-3.5 rounded-xl border-[0.5px] border-solid border-white bg-[linear-gradient(134deg,rgba(37,37,37,1)_17%,rgba(132,132,132,1)_100%)] hover:opacity-90 transition-opacity">
            <span className="font-normal text-white text-base xl:text-lg text-center leading-[21.6px] whitespace-nowrap tracking-[0]">
              Get in Touch
            </span>
            <GoArrowUpRight className="w-8 h-6 font-bold  group-hover:rotate-45 transition-transform duration-300" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <nav className="flex flex-col items-center pt-20 pb-8 gap-4 px-8">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs py-4 hover:bg-white/10 transition-colors"
              >
                <span className="font-normal text-white text-xl tracking-[0] leading-[21.6px]">
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

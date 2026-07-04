"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

type FooterProps = {
  onOpenContact?: () => void;
};

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Rahul-Mallik-CSE", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-mallik-cse/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/rahul.mallik.1272/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/rahul_mallik_08/?hl=en", icon: Instagram },
];

const Footer = ({ onOpenContact }: FooterProps) => {
  return (
    <footer className="w-full px-4 lg:px-6 pb-6 md:pb-8">
      <div className="mx-auto max-w-500 rounded-[2rem] border border-white/10 bg-[#202525] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Rahul Mallik</p>
            <h2 className="max-w-xl text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Front-end developer crafting responsive, animated interfaces with a clean dark aesthetic.
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-white/65 md:text-base">
              Available for collaborations, freelance builds, and product-focused front-end roles.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                onClick={onOpenContact}
                className="group inline-flex h-auto items-center justify-center gap-2 rounded-xl border border-[#95EDFF]/40 bg-[#95EDFF] px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-[#7de5fa]"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button asChild variant="ghost" className="h-auto rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                <a href="mailto:mallikrahul3507mr@gmail.com">Email Me</a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">Quick Links</p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition-colors hover:border-[#95EDFF]/30 hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">Contact</p>
            <div className="space-y-3 text-sm text-white/70">
              <a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-[#95EDFF]/30 hover:bg-white/8" href="mailto:rmallik191242@bscse.uiu.ac.bd">
                <Mail className="h-4 w-4 text-[#95EDFF]" />
                <span className="break-all">rmallik191242@bscse.uiu.ac.bd</span>
              </a>
              <a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-[#95EDFF]/30 hover:bg-white/8" href="tel:+8801628438045">
                <Phone className="h-4 w-4 text-[#95EDFF]" />
                <span>+88 01628438045</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Button key={item.label} asChild variant="ghost" className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-white hover:bg-white/10">
                    <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Rahul Mallik. All rights reserved.</p>
          <p>Designed for fully responsive browsing across desktop and mobile.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

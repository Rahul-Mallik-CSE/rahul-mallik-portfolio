"use client";

import SectionHeading from "../CommonComponents/SectionHeading";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type ContactSectionProps = {
  onOpenContact?: () => void;
};

const contactItems = [
  {
    label: "Primary email",
    value: "rmallik191242@bscse.uiu.ac.bd",
    href: "mailto:rmallik191242@bscse.uiu.ac.bd",
    icon: Mail,
  },
  {
    label: "Personal email",
    value: "mallikrahul3507mr@gmail.com",
    href: "mailto:mallikrahul3507mr@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+88 01628438045",
    href: "tel:+8801628438045",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "+88 01628438045",
    href: "https://wa.me/8801628438045",
    icon: FaWhatsapp,
  },
  {
    label: "Address",
    value: "Shamim Sharani, Shewrapara, Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Shamim+Sharani,+Shewrapara,+Dhaka,+Bangladesh",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Rahul-Mallik-CSE",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-mallik-cse/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rahul.mallik.1272/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rahul_mallik_08/?hl=en",
    icon: Instagram,
  },
];

const ContactSection = ({ onOpenContact }: ContactSectionProps) => {
  return (
    <section id="contact" className="w-full px-4 lg:px-6 scroll-mt-24">
      <div className="mx-auto max-w-500 p-2 md:p-4 lg:p-6">
        <SectionHeading
          title="Contact"
          subtitle="Let’s build something useful"
          description="I’m open to freelance work, collaborations, and full-time opportunities. Use the form or reach me directly through any of the channels below."
        />

        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#282a2a] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-[#95EDFF]/10 p-3 text-[#95EDFF]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                      Direct Contact
                    </p>
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      Reach out any time
                    </h3>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-[#1d2222] p-4 transition-all hover:border-[#95EDFF]/30 hover:bg-white/8"
                      >
                        <div className="mt-0.5 rounded-xl bg-[#95EDFF]/10 p-2 text-[#95EDFF] transition-transform group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-white break-words">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(149,237,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] p-4 md:p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Message Options
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Prefer the full form?
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70 md:text-base">
                Use the modal to send your name, email address, phone number,
                and message directly to my inboxes. I usually reply through the
                same email you provide.
              </p>

              <div className="mt-6 space-y-3">
                <Button
                  type="button"
                  onClick={onOpenContact}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#95EDFF]/40 bg-[#95EDFF] px-6 py-3 text-base font-semibold text-black transition-all hover:bg-[#7de5fa]"
                >
                  Open Email Form
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Button
                        key={item.label}
                        asChild
                        variant="ghost"
                        className="h-auto rounded-2xl border border-white/10 bg-[#1d2222] px-4 py-3 text-white transition-colors hover:border-[#95EDFF]/30 hover:bg-white/8"
                      >
                        <a href={item.href} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-sm font-medium">
                          <Icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

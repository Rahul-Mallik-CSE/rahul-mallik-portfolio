import React from 'react'
import { listItemLeftToRight } from '../AllAnimation/Animation'
import { motion } from 'framer-motion'
import { ExperienceItem } from '@/types/ExperienceDataTypes';

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  return (
    <motion.article
                      key={`${experience.company}-${experience.duration}`}
                      variants={listItemLeftToRight}
                      className="relative rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] p-4 shadow-[0_14px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-5 lg:p-6"
                    >
                      <div className="absolute left-[-1.55rem] top-6 hidden h-4 w-4 rounded-full border-2 border-[#95EDFF] bg-[#282a2a] md:block" />

                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#95EDFF]/75">
                              {experience.company}
                            </p>
                            <h4 className="mt-1 text-xl font-semibold text-white md:text-2xl">
                              {experience.position}
                            </h4>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                              {experience.duration}
                            </span>
                            <span className="rounded-full border border-[#95EDFF]/20 bg-[#95EDFF]/8 px-3 py-1 text-[#95EDFF]">
                              {experience.technologies.join(" • ")}
                            </span>
                          </div>
                        </div>

                        <div className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                            Responsibilities
                          </p>
                          <ul className="mt-3 space-y-3 text-sm leading-6 text-gray-300 md:text-base">
                            {experience.responsibilities.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#95EDFF]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                            Key achievements
                          </p>
                          <ul className="mt-3 space-y-3 text-sm leading-6 text-gray-300 md:text-base">
                            {experience.achievements.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.article>
  )
}

export default ExperienceCard

import Image from 'next/image'
import React from 'react'
import { smallToBigOpen } from '../AllAnimation/Animation'
import { motion } from 'framer-motion'

const ExpLeftContainer = () => {
  return (
    <motion.div
              variants={smallToBigOpen}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(149,237,255,0.14)_0%,rgba(255,255,255,0.03)_45%,rgba(0,0,0,0.18)_100%)] p-4 md:p-5 xl:col-span-2"
              style={{ minHeight: 760 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(149,237,255,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#95EDFF]/80">
                    Professional Journey
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Building modern front-end products with React and Next.js.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-gray-300 md:text-base">
                    I focus on creating responsive, maintainable, and polished
                    interfaces that balance performance with strong user
                    experience.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                  <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                    <Image
                      src="/images/safar-safarov-koOdUvfGr4c-unsplash.jpg"
                      alt="Workspace showing software development screens"
                      fill
                      sizes="(max-width: 1280px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15), transparent)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-[#95EDFF]/35 bg-[#95EDFF]/10 px-3 py-1 text-xs font-medium text-[#95EDFF]">
                          2 Companies
                        </span>
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                          React.js
                        </span>
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                          Next.js
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
  )
}

export default ExpLeftContainer

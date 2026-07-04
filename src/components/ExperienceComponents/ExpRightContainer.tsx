import React from 'react'
import { showListLeftToRight } from '../AllAnimation/Animation'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

// Experience data
import experiences from '@/data/ExperienceData.json'

const ExpRightContainer = () => {
  return (
    <motion.div
      variants={showListLeftToRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:col-span-3"
    >
      <div className="relative pl-5 md:pl-6">

        {/* Timeline Growing Line Animation */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ 
            duration: 1.2,       // Keeps the growth smooth and steady
            delay: 0.5,          // Adjust this delay based on your card animation speed
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 left-2 top-1  w-px  origin-top"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #95EDFF, rgba(255,255,255,0.3), transparent)",
          }}
        />

        <div className="space-y-5 md:space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ExpRightContainer
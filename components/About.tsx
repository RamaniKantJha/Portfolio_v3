'use client'

import { personalDetails } from '../personalDetails';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-about section-padding bg-offwhite dark:bg-[#151515]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Portrait Image */}
          <motion.div 
            className="flex-1 flex justify-center items-center mb-12 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="/assets/me.png"
              alt={personalDetails.name}
              className="rounded-3xl w-[320px] h-[420px] object-cover border-0"
            />
          </motion.div>
          {/* About Text */}
          <motion.div 
            className="flex-1 flex flex-col items-start justify-center max-w-xl pl-0 md:pl-16"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2d2d2d] dark:text-white">
              About <span className="text-mint font-accent italic">Me</span>
            </h2>
            <motion.p 
              className="text-lg text-[#2d2d2d] dark:text-white mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {personalDetails.aboutMe}
            </motion.p>
            <motion.ul 
              className="mb-6 text-[#2d2d2d] dark:text-white text-base leading-relaxed space-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <li className="text-[#2d2d2d] dark:text-white"><b className="text-[#2d2d2d] dark:text-white">Current Role:</b> {personalDetails.stats.currentRole}</li>
              <li className="text-[#2d2d2d] dark:text-white"><b className="text-[#2d2d2d] dark:text-white">Education:</b> {personalDetails.stats.education}</li>
              <li className="text-[#2d2d2d] dark:text-white"><b className="text-[#2d2d2d] dark:text-white">Experience:</b> {personalDetails.stats.experience}</li>
              <li className="text-[#2d2d2d] dark:text-white"><b className="text-[#2d2d2d] dark:text-white">Projects Completed:</b> {personalDetails.stats.projectsCompleted}</li>
            </motion.ul>
            <motion.a 
              href="/assets/cv.pdf" 
              download 
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
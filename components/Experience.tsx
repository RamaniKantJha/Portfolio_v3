'use client'

import { personalDetails } from '../personalDetails';
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = personalDetails.workExperience;
  const education = personalDetails.education[0];

  return (
    <section id="experience" className="section-experience section-padding bg-offwhite dark:bg-[#151515]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#2d2d2d] dark:text-white">
            Work <span className="text-mint font-accent italic">Experience</span>
          </h2>
          <p className="text-lg text-[#2d2d2d] dark:text-white max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700"></div>
              )}

              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-white dark:bg-dark-900 rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="card p-6 hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-[#232323]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#2d2d2d] dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-[#2d2d2d] dark:text-white">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span className="text-[#2d2d2d] dark:text-white">{experience.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span className="text-[#2d2d2d] dark:text-white">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <span className="text-sm font-medium text-mint font-accent">
                          {experience.company}
                        </span>
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    <p className="text-[#2d2d2d] dark:text-white mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-mint text-sm rounded-full font-medium font-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#2d2d2d] dark:text-white mb-4">
              <span className="text-mint font-accent">Education</span>
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card p-8 text-center bg-white dark:bg-[#232323]">
              <h4 className="text-xl font-bold text-[#2d2d2d] dark:text-white mb-2">
                {education.degree}
              </h4>
              <p className="text-lg text-mint font-accent mb-4">
                {education.institution}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-[#2d2d2d] dark:text-white">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span className="text-[#2d2d2d] dark:text-white">{education.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span className="text-[#2d2d2d] dark:text-white">{education.location}</span>
                </div>
              </div>
              <p className="mt-4 text-[#2d2d2d] dark:text-white">
                {education.details}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 
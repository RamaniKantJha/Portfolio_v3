'use client'

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'GUI Design (Tkinter)', level: 70 },
      { name: 'Blender 3D', level: 50 },
    ],
  },
  {
    category: 'Backend & Data Science',
    items: [
      { name: 'Python', level: 95 },
      { name: 'Data Science', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'MySQL', level: 75 },
      { name: 'DBMS', level: 75 },
      { name: 'OpenCV', level: 75 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Keras', level: 75 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib', level: 80 },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'Figma', level: 80 },
      { name: 'Flask', level: 70 },
      { name: 'Next.js', level: 70 },
      { name: 'MERN Stack', level: 70 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-skills section-padding bg-offwhite dark:bg-[#151515]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#2d2d2d] dark:text-white">
            Skills & <span className="text-mint font-accent italic">Expertise</span>
          </h2>
          <p className="text-lg text-[#2d2d2d] dark:text-white max-w-2xl mx-auto">
            My technical stack and areas of expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="card p-6 bg-white dark:bg-[#232323] rounded-3xl group hover:shadow-xl transition-shadow duration-300 hover:scale-105"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-[#2d2d2d] dark:text-white mb-6 text-center">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#2d2d2d] dark:text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-mint font-medium font-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-mint to-blue-400 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 
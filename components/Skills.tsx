'use client'

import { motion } from 'framer-motion';

const skills = [
    {
    category: 'Frontend',
    items: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind', level: 75 },
      { name: 'React Native', level: 70 },
      { name: 'Figma to UI', level: 75 }
    ],
  },
  {
    category: 'Backend & API Development',
    items: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 90 },
      { name: 'Socket.io', level: 90 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'RabbitMQ (AMQP)', level: 80 },
      { name: 'MVC Architecture', level: 85 }
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Mongoose', level: 75 },
      { name: 'Sequelize', level: 75 }
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'AWS (EC2, S3, Lambda)', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'PM2', level: 75 },
      { name: 'Jenkins', level: 70 },
      { name: 'Kubernetes', level: 65 },
      { name: 'Docker Hub', level: 75 },
      { name: 'CI/CD', level: 75 }
    ],
  },
  {
    category: 'Tools & Utilities',
    items: [
      { name: 'Postman', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'GitHub / GitHub Actions', level: 85 },
      { name: 'DB Diagram', level: 70 },
      { name: 'Version Control', level: 85 }
    ],
  },
  {
    category: 'Languages & Programming',
    items: [
      { name: 'C/C++', level: 70 },
      { name: 'Python', level: 75 }
    ]
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
'use client'

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend & Web',
    items: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 80 }
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Python', level: 95 },
      { name: 'FastAPI', level: 85 },
      { name: 'Flask', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'C/C++', level: 70 }
    ],
  },
  {
    category: 'AI & Data Science',
    items: [
      { name: 'Machine Learning', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'OpenCV', level: 80 },
      { name: 'NLP', level: 75 }
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'GitHub Actions', level: 75 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 70 }
    ],
  },
  {
    category: 'Application Support',
    items: [
      { name: 'System Troubleshooting', level: 90 },
      { name: 'Application Testing', level: 85 },
      { name: 'Technical Documentation', level: 85 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Customer Support', level: 90 },
      { name: 'Incident Resolution', level: 85 },
      { name: 'REST Architecture', level: 85 },
      { name: 'CI/CD Concepts', level: 75 }
    ],
  },
  {
    category: 'Enterprise Systems',
    items: [
      { name: 'Finacle Core Banking', level: 80 },
      { name: 'Digital Banking Systems', level: 80 },
      { name: 'Data Management', level: 85 },
      { name: 'MVC Architecture', level: 85 },
      { name: 'Version Control', level: 90 },
      { name: 'DBMS Concepts', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'Matplotlib', level: 80 }
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
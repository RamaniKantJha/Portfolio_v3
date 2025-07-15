'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { useRef } from 'react';
import { personalDetails } from '../personalDetails';

const Projects = () => {
  const projects = personalDetails.projects;

  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollAmount = clientWidth * 0.8;
    carouselRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="section-projects section-padding bg-offwhite dark:bg-[#151515]">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#2d2d2d] dark:text-white mb-4">
            All Projects
          </h3>
        </div>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex flex-nowrap gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="card min-w-[320px] max-w-[320px] flex-shrink-0 overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-[#232323] rounded-3xl"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-[#2d2d2d] dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[#2d2d2d] dark:text-white mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-mint text-xs rounded font-medium font-accent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-mint text-xs rounded font-medium font-accent">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-mint hover:text-[#2d2d2d] transition-colors duration-200 font-accent"
                    >
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-mint hover:text-[#2d2d2d] transition-colors duration-200 font-accent"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <button
              aria-label="Scroll Left"
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white shadow hover:bg-mint hover:text-white transition-colors"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              aria-label="Scroll Right"
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white shadow hover:bg-mint hover:text-white transition-colors"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="text-center mt-16">
          <a
            href={personalDetails.socials.find(s => s.label === 'GitHub')?.url || 'https://github.com/'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 mb-8"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 
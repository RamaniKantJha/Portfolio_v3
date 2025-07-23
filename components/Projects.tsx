'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react';
import { personalDetails } from '../personalDetails';

const Projects = () => {
  const projects = personalDetails.projects;

  // Theme detection for dynamic image switching
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the root html element has the 'dark' class
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    // Listen for class changes (e.g., via MutationObserver)
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Map projects, swapping image for Portfolio Website based on theme
  const themedProjects = projects.map((project) => {
    if (project.title === 'Portfolio Website') {
      return {
        ...project,
        image: isDarkMode ? '/assets/Portfolio_light.png' : '/assets/Portfolio_dark.png',
      };
    }
    return project;
  });

  // Hover preview state
  type ProjectType = typeof projects[number];
  const [hoveredProject, setHoveredProject] = useState<ProjectType | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });
  const [hoverAnim, setHoverAnim] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionRect, setSectionRect] = useState<{top: number, left: number, width: number, height: number}>({top: 0, left: 0, width: 0, height: 0});

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update section rect on mount and resize
  useEffect(() => {
    const updateRect = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionRect({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
      }
    };
    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);

  // Animate preview position toward mouse position with a floating effect
  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      setHoverAnim(elapsed);
      setPreviewPos(prev => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        const factor = 0.18;
        return {
          x: prev.x + dx * factor,
          y: prev.y + dy * factor,
        };
      });
      animationFrame = requestAnimationFrame(animate);
    };
    if (hoveredProject) {
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos, hoveredProject]);

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
    <section id="projects" ref={sectionRef} className="section-projects section-padding bg-offwhite dark:bg-[#151515] relative">
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
            {themedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                onMouseEnter={!isMobile ? () => setHoveredProject(project) : undefined}
                onMouseMove={!isMobile ? e => setMousePos({ x: e.clientX + 24, y: e.clientY + 24 }) : undefined}
                onMouseLeave={!isMobile ? () => setHoveredProject(null) : undefined}
                onClick={isMobile ? () => setHoveredProject(project) : undefined}
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
      {/* Floating project preview */}
      {hoveredProject && (
        <>
          {isMobile && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: sectionRect.width,
                height: sectionRect.height,
                zIndex: 999,
                background: 'rgba(0,0,0,0.08)',
              }}
              onClick={() => setHoveredProject(null)}
            ></div>
          )}
          <div
            style={{
              position: isMobile ? 'absolute' : 'fixed',
              top: isMobile ? sectionRect.height * 0.6 : previewPos.y + 16 + Math.sin(hoverAnim / 400) * 10,
              left: isMobile ? sectionRect.width / 2 : previewPos.x + 16 + Math.cos(hoverAnim / 400) * 10,
              transform: isMobile ? 'translate(-50%, 0)' : undefined,
              zIndex: 1001,
              width: 360,
              background: isDarkMode ? '#232323' : 'white',
              color: isDarkMode ? 'white' : '#2d2d2d',
              borderRadius: 20,
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              padding: 24,
              pointerEvents: isMobile ? 'auto' : 'none',
              opacity: 0.98,
              transition: 'opacity 0.2s',
            }}
          >
            {hoveredProject.image && (
              <img
                src={hoveredProject.image}
                alt={hoveredProject.title}
                style={{ width: '100%', borderRadius: 16, marginBottom: 16, objectFit: 'cover', height: 160 }}
              />
            )}
            <h4 style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 8 }}>
              {hoveredProject.title}
            </h4>
            <p style={{ fontSize: 16 }}>
              {hoveredProject.description}
            </p>
            {hoveredProject.technologies && (
              <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {hoveredProject.technologies.map((tech: string) => (
                  <span key={tech} style={{ background: '#e0f7f4', color: '#2ec6a6', borderRadius: 8, padding: '2px 8px', fontSize: 13, marginRight: 4, marginBottom: 4 }}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects; 
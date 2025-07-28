'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react';
import { personalDetails } from '../personalDetails';
import TypingAnimation from './TypingAnimation';

// Hero section portrait images with different angles
const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=500&q=80',
    alt: 'Portrait 1',
    style: 'rotate-[-12deg] z-10 left-0 bottom-0',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&h=500&q=80',
    alt: 'Portrait 2',
    style: 'rotate-[6deg] z-20 left-12 bottom-0',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=500&q=80',
    alt: 'Portrait 3',
    style: 'rotate-[16deg] z-30 left-24 bottom-0',
  },
]

interface HeroProps {
  startTyping?: boolean;
}

const Hero = ({ startTyping = false }: HeroProps) => {
  const [scrollAngle, setScrollAngle] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate scroll progress for card rotation animation
      const total = rect.height + windowHeight;
      const progress = Math.min(Math.max(1 - (rect.bottom / total), 0), 1);
      setScrollAngle(progress * 10);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initialize on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main hero section with title */}
      <section id="home" ref={heroRef} className="section-hero relative min-h-screen flex flex-col justify-center items-center px-4 bg-offwhite dark:bg-[#151515]">
        <div className="w-full flex flex-col items-center justify-center pt-24 pb-12 hero-mobile-padding">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="hero-main text-center text-[#2d2d2d] dark:text-white">
              {startTyping ? (
                <TypingAnimation 
                  text={personalDetails.designation}
                  speed={150}
                  delay={0}
                  className="hero-main"
                  isHero={true}
                />
              ) : (
                personalDetails.designation.join(' ').split(' ').map((word, i) =>
                  word === '&' ? (
                    <span key={i} className="hero-accent text-mint font-accent">&</span>
                  ) : word === 'Intern' ? (
                    <span key={i} className="hero-accent text-mint font-accent">Intern</span>
                  ) : (
                    (i === 0 ? '' : ' ') + word
                  )
                )
              )}
            </h1>
            <div className="flex flex-row justify-center gap-12 mt-8 w-full max-w-5xl">
              <div className="flex flex-col items-start gap-2 text-gray-400 dark:text-gray-200 text-xs font-semibold uppercase">
                <span className="text-gray-400 dark:text-gray-200 text-xs font-semibold uppercase">Currently Available <span className="italic text-[#2d2d2d] dark:text-white">for</span></span>
                <span className="text-gray-400 dark:text-gray-200 text-xs font-semibold uppercase">Freelance Worldwide</span>
              </div>
              <div className="flex flex-col items-end gap-2 text-gray-400 dark:text-gray-200 text-xs font-semibold uppercase">
                <span className="text-gray-400 dark:text-gray-200 text-xs font-semibold uppercase">My Local Time 16:38</span>
                <span className="text-gray-400 dark:text-gray-200 text-xs font-semibold uppercase">GMT (+5:30)</span>
              </div>
            </div>
          </div>
          {/* Downward arrow for all screens */}
          <div className="mt-8 w-full flex justify-center">
            <span
              className="arrow-down text-[2.5rem] md:text-[4rem] lg:text-[6rem]"
              style={{ color: '#2ec6a6', lineHeight: 1, animation: 'bounceDown 1.2s infinite' }}
            >&#8595;</span>
          </div>
        </div>
      </section>
      {/* Hero intro section with text and cards */}
      <section className="section-hero-intro relative w-full flex flex-col md:flex-row items-start justify-between px-4 py-24 bg-offwhite dark:bg-[#151515]">
        {/* Introduction text */}
        <div className="flex-1 max-w-2xl z-10 mt-0 md:mt-0 md:ml-16 lg:ml-32 xl:ml-40 hero-intro-mobile text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2d2d2d] dark:text-white mb-6">
            I am {personalDetails.name.toUpperCase()},<br />
            building smart, scalable &<br />
            <span className="text-mint font-accent italic">visually engaging</span> solutions—<br />
            from intelligent models to<br />
            full-stack web apps.
          </h2>
        </div>
        {/* Portrait cards container */}
        <div className="flex-1 flex justify-center items-end relative min-h-[700px] max-w-2xl hero-cards-below">
          <div className="relative w-[700px] h-[800px] md:w-[800px] md:h-[900px] lg:w-[900px] lg:h-[1000px] xl:w-[1000px] xl:h-[1100px]" style={{ opacity: 1, pointerEvents: 'all' }}>
            {heroImages.map((img, i) => {
              // Base rotation angles for each card
              const baseAngles = [-10.611, -4.3923, -1.0518];
              const baseTransforms = [
                'translate3d(0px, -6.2474%, 0px)',
                'translate3d(0px, -5.2708%, 0px)',
                'translate3d(0px, -3.3413%, 0px)'
              ];
              const angle = baseAngles[i] + scrollAngle;
              // Push cards further right and down for separation
              const lefts = ["6rem", "14rem", "22rem"];
              const bottoms = ["-8rem", "-16rem", "-24rem"];
              return (
                <motion.img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  initial={false}
                  animate={false}
                  transition={undefined}
                  viewport={undefined}
                  className={`absolute card-img hero-portrait-card hero-portrait-card-${i + 1} w-[220px] h-[320px] md:w-[380px] md:h-[540px] lg:w-[400px] lg:h-[600px] object-cover group hover:shadow-xl transition-shadow duration-300 filter grayscale hover:grayscale-0 z-${(i+1)*10} transition-transform duration-[1200ms] ease-in-out`}
                  style={{
                    transform: `${baseTransforms[i]} rotate(${angle}deg)`,
                    left: lefts[i],
                    bottom: bottoms[i],
                  }}
                  whileHover={{
                    boxShadow: '0 16px 48px 0 rgba(60,60,60,0.28)',
                    transform: `${baseTransforms[i]} rotate(${angle}deg) scale(1.05)`
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero 
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import TypingAnimation from '@/components/TypingAnimation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showName, setShowName] = useState(false)
  const [showIsA, setShowIsA] = useState(false)
  const [showTyping, setShowTyping] = useState(false)

  useEffect(() => {
    // Name appears first
    const nameTimer = setTimeout(() => {
      setShowName(true)
    }, 500)

    // "is a" slides in after 1.5 seconds
    const isATimer = setTimeout(() => {
      setShowIsA(true)
    }, 1500)

    // Typing animation starts after 2.5 seconds (1 second after "is a")
    const typingTimer = setTimeout(() => {
      setShowTyping(true)
    }, 2500)

    // Home page shows after 3.5 seconds total
    const homeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => {
      clearTimeout(nameTimer)
      clearTimeout(isATimer)
      clearTimeout(typingTimer)
      clearTimeout(homeTimer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-offwhite dark:bg-[#151515] z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-mint mx-auto mb-8"></div>
          
          {/* Name appears first */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#2d2d2d] dark:text-white mb-4"
          >
            Ramani Kant <span className="text-mint font-accent">Jha</span>
          </motion.div>
          
          {/* "is a" slides in */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: showIsA ? 1 : 0, x: showIsA ? 0 : -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#2d2d2d] dark:text-white mb-4"
          >
            is a
          </motion.div>
          
          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showTyping ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="h-16 flex items-center justify-center"
          >
            {showTyping && (
              <TypingAnimation 
                text="AI & Machine Learning Intern"
                speed={150}
                delay={1000}
                className="text-4xl md:text-5xl font-bold text-[#2d2d2d] dark:text-white"
                isHero={true}
              />
            )}
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-offwhite">
      <Hero startTyping={!isLoading} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
} 
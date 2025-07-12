'use client'

import { useState, useEffect, useRef } from 'react'

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  isHero?: boolean
  triggerOnScroll?: boolean
}

const TypingAnimation = ({ text, speed = 100, delay = 0, className = '', isHero = false, triggerOnScroll = false }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!triggerOnScroll) {
      const timer = setTimeout(() => {
        setIsTyping(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [delay, triggerOnScroll])

  useEffect(() => {
    if (!triggerOnScroll || hasTriggered) return

    const handleScroll = () => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Trigger when element is 50% visible in viewport
      if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
        setHasTriggered(true)
        const timer = setTimeout(() => {
          setIsTyping(true)
        }, delay)
        return () => clearTimeout(timer)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [delay, triggerOnScroll, hasTriggered])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, isTyping])

  // For hero section, render with special styling
  if (isHero) {
    const words = displayText.split(' ')
    return (
      <span className={className}>
        {words.map((word, i) => {
          if (word === '&') {
            return <span key={i} className="hero-accent text-mint font-accent">&</span>
          } else if (word === 'Intern') {
            return <span key={i} className="hero-accent text-mint font-accent">Intern</span>
          } else {
            return (i === 0 ? '' : ' ') + word
          }
        })}
      </span>
    )
  }





  return (
    <span ref={elementRef} className={className}>
      {displayText}
    </span>
  )
}

export default TypingAnimation 
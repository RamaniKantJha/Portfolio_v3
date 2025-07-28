'use client'

import { useState, useEffect, useRef } from 'react'

interface TypingAnimationProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  className?: string;
  isHero?: boolean;
  triggerOnScroll?: boolean;
}

const TypingAnimation = ({ text, speed = 100, delay = 0, className = '', isHero = false, triggerOnScroll = false }: TypingAnimationProps) => {
  const texts = Array.isArray(text) ? text : [text];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

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
    if (!isTyping) return;

    if (!isErasing) {
      if (currentIndex < texts[textIndex].length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + texts[textIndex][currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Wait before erasing
        const timer = setTimeout(() => {
          setIsErasing(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timer);
      } else {
        // Move to next text, loop
        setIsErasing(false);
        setCurrentIndex(0);
        setTextIndex(prev => (prev + 1) % texts.length);
      }
    }
  }, [currentIndex, texts, textIndex, isTyping, isErasing, displayText, speed]);

  // For hero section, render with special styling
  if (isHero) {
    // Highlight substrings: 'end', 'and', '&', '-', 'intern' (case-insensitive, anywhere in word)
    const highlightRegex = /(end|and|&|-|intern)/gi;
    // Split displayText into array of matches and non-matches
    const parts = [];
    let lastIndex = 0;
    let match;
    while ((match = highlightRegex.exec(displayText)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ text: displayText.slice(lastIndex, match.index), highlight: false });
      }
      parts.push({ text: match[0], highlight: true });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < displayText.length) {
      parts.push({ text: displayText.slice(lastIndex), highlight: false });
    }
    return (
      <span className={className} style={{ display: 'inline' }}>
        {parts.map((part, i) => {
          // If the highlighted part is a whole word '&' or 'intern', render on a new line
          if (part.highlight && (/^(&|intern)$/i.test(part.text.trim()))) {
            return (
              <div key={i} style={{ width: '100%' }}>
                <span className="hero-accent text-mint font-accent">{part.text}</span>
              </div>
            );
          } else if (part.highlight) {
            return (
              <span key={i} className="hero-accent text-mint font-accent" style={{ display: 'inline' }}>{part.text}</span>
            );
          } else {
            return part.text;
          }
        })}
      </span>
    );
  }





  return (
    <span ref={elementRef} className={className}>
      {displayText}
    </span>
  )
}

export default TypingAnimation 
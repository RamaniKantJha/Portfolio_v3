'use client'

import { useEffect, useState } from 'react';
import { personalDetails } from '../personalDetails';

const DARK_BG = 'rgb(21,21,21)';

const Header = () => {
  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Socials', href: '#socials' },
    { name: 'Contact', href: '#footer' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false); // Add state for mobile socials dropdown

  // Set default mode and mobile state based on screen size
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 400px)');
    setDarkMode(mq.matches);
    setIsMobile(mq.matches);
    const handleResize = () => {
      setDarkMode(window.matchMedia('(max-width: 400px)').matches);
      setIsMobile(window.matchMedia('(max-width: 400px)').matches);
    };
    mq.addEventListener('change', handleResize);
    return () => mq.removeEventListener('change', handleResize);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.setProperty('background', DARK_BG, 'important');
      // Set all .bg-offwhite and .bg-white to dark
      document.querySelectorAll('.bg-offwhite, .bg-white').forEach(el => {
        (el as HTMLElement).style.setProperty('background', DARK_BG, 'important');
      });
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.setProperty('background', '', 'important');
      // Reset all .bg-offwhite and .bg-white backgrounds
      document.querySelectorAll('.bg-offwhite, .bg-white').forEach(el => {
        (el as HTMLElement).style.setProperty('background', '', 'important');
      });
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu when screen gets larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 400) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter social links for the dropdown
  const socials = personalDetails.socials.filter(s => ['Behance', 'Instagram', 'Twitter', 'Dribbble'].includes(s.label));

  return (
    <header
      className={`section-header w-full px-8 pt-10 pb-6 flex items-center justify-between z-50 fixed top-0 transition-all transition-[background,backdrop-filter] duration-500 will-change-[background,backdrop-filter] ${scrolled ? (darkMode ? 'bg-mint/70 backdrop-blur-md shadow-lg' : 'bg-mint/70 backdrop-blur-md shadow-lg') : (darkMode ? 'bg-[#151515]' : 'bg-transparent')} ${scrolled ? 'text-[#0f172a]' : (darkMode ? 'text-white' : 'text-[#2d2d2d]')}`}
      style={scrolled ? { background: darkMode ? 'rgba(46, 230, 166, 0.7)' : 'rgba(46, 230, 166, 0.7)', backdropFilter: 'blur(12px)' } : (darkMode ? { background: DARK_BG } : {})}
    >
      {/* Brand name or dark mode toggle on mobile */}
      {isMobile ? (
        <button
          className="p-2 rounded-full border border-mint bg-transparent hover:bg-mint/20 transition-colors duration-200"
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
          ) : (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 6.66l-.71-.71M4.05 4.93l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
          )}
        </button>
      ) : (
        <a href="#home" className={`font-semibold text-base nav-link !no-underline tracking-widest ${scrolled ? 'text-[#0f172a]' : (darkMode ? 'text-white' : 'text-[#2d2d2d]')}`}>{personalDetails.name}</a>
      )}
      {/* Mobile menu toggle (hamburger) always visible on mobile */}
      <button
        className={`block md:hidden ml-auto focus:outline-none hamburger-btn ${scrolled ? 'text-[#0f172a]' : (darkMode ? 'text-white' : 'text-[#2d2d2d]')}`}
        style={{ display: isMobile ? 'block' : 'none' }}
        aria-label="Open menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className={`block w-8 h-1 mb-1 rounded ${scrolled ? '!bg-[#0f172a]' : (darkMode ? '!bg-white' : '!bg-[#2d2d2d]')}`}></span>
        <span className={`block w-8 h-1 mb-1 rounded ${scrolled ? '!bg-[#0f172a]' : (darkMode ? '!bg-white' : '!bg-[#2d2d2d]')}`}></span>
        <span className={`block w-8 h-1 rounded ${scrolled ? '!bg-[#0f172a]' : (darkMode ? '!bg-white' : '!bg-[#2d2d2d]')}`}></span>
      </button>
      {/* Desktop navigation (hidden on mobile) */}
      {!isMobile && (
        <nav className={`flex-1 flex justify-center gap-24 nav-desktop ${scrolled ? 'text-[#0f172a]' : (darkMode ? 'text-white' : 'text-[#2d2d2d]')}`}>
          {navItems.map((item) =>
            item.name === 'Socials' ? (
              <div key={item.name} className="relative group">
                <button className={`nav-link flex items-center gap-1 focus:outline-none ${scrolled ? 'text-[#0f172a]' : (darkMode ? 'text-white' : 'text-[#2d2d2d]')}`}>
                  {item.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 p-6 flex flex-col gap-4 text-[#2d2d2d] dark:text-white">
                  {socials.map(s => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="block text-base hover:text-mint transition-colors">{s.label.toUpperCase()}</a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${scrolled ? 'text-[#0f172a]' : (darkMode ? 'text-white' : 'text-[#2d2d2d]')}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            )
          )}
        </nav>
      )}
      {/* Dark mode toggle button on right (hidden on mobile) */}
      {!isMobile && (
        <button
          className="ml-4 p-2 rounded-full border border-mint bg-transparent hover:bg-mint/20 transition-colors duration-200"
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
          ) : (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 6.66l-.71-.71M4.05 4.93l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
          )}
        </button>
      )}
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-end" style={{ background: 'rgba(46, 230, 166, 0.18)', backdropFilter: 'blur(16px)' }}>
          <div className="w-3/4 max-w-xs h-full p-8 flex flex-col gap-8 shadow-2xl" style={{ background: 'rgba(46, 230, 166, 0.28)', backdropFilter: 'blur(24px)' }}>
            <button
              className="self-end mb-8 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <span className="block w-8 h-1 bg-[#2d2d2d] mb-1 rotate-45 translate-y-2"></span>
              <span className="block w-8 h-1 bg-[#2d2d2d] -rotate-45 -translate-y-2"></span>
            </button>
            {navItems.map((item) =>
              item.name === 'Socials' ? (
                <div key={item.name} className="group rounded-2xl p-2" style={{ background: 'rgba(46, 230, 166, 0.32)', backdropFilter: 'blur(24px)' }}>
                  <button
                    className="nav-link flex items-center gap-1 focus:outline-none text-[#2d2d2d] dark:text-white w-full justify-between"
                    onClick={() => setSocialsOpen((open) => !open)}
                    aria-expanded={socialsOpen}
                    aria-controls="mobile-socials-dropdown"
                  >
                    {item.name}
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${socialsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Only show dropdown if open and on mobile */}
                  {socialsOpen && isMobile && (
                    <div id="mobile-socials-dropdown" className="mt-2 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col gap-2" style={{ background: 'rgba(46, 230, 166, 0.38)', backdropFilter: 'blur(24px)' }}>
                      {socials.map(s => (
                        <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="block text-base text-[#2d2d2d] dark:text-white hover:text-mint transition-colors">{s.label.toUpperCase()}</a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-[#2d2d2d] dark:text-white"
                  style={{ background: 'rgba(46, 230, 166, 0.32)', backdropFilter: 'blur(24px)', borderRadius: '1rem', padding: '0.5rem' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
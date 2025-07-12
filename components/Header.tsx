'use client'

import { useEffect, useState } from 'react';
import { personalDetails } from '../personalDetails';

const Header = () => {
  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Socials', href: '#socials' },
    { name: 'Contact', href: '#footer' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className={`section-header w-full px-8 pt-10 pb-4 flex items-center justify-between z-50 fixed top-0 transition-all duration-300 bg-transparent`}
    >
      {/* Brand name */}
      <a href="#home" className="font-semibold text-base nav-link !no-underline tracking-widest">{personalDetails.name}</a>
      {/* Mobile menu toggle */}
      <button
        className="block md:hidden ml-auto focus:outline-none hamburger-btn"
        style={{ display: 'none' }}
        aria-label="Open menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className="block w-8 h-1 bg-[#2d2d2d] mb-1 rounded"></span>
        <span className="block w-8 h-1 bg-[#2d2d2d] mb-1 rounded"></span>
        <span className="block w-8 h-1 bg-[#2d2d2d] rounded"></span>
      </button>
      {/* Desktop navigation */}
      <nav className="flex-1 flex justify-center gap-24 nav-desktop">
        {navItems.map((item) =>
          item.name === 'Socials' ? (
            <div key={item.name} className="relative group">
              <button className="nav-link flex items-center gap-1 focus:outline-none">
                {item.name}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 p-6 flex flex-col gap-4">
                {socials.map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="block text-base text-[#2d2d2d] hover:text-mint transition-colors">{s.label.toUpperCase()}</a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
          )
        )}
      </nav>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col items-end">
          <div className="w-3/4 max-w-xs bg-white h-full p-8 flex flex-col gap-8 shadow-2xl">
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
                <div key={item.name} className="group">
                  <button className="nav-link flex items-center gap-1 focus:outline-none">
                    {item.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2">
                    {socials.map(s => (
                      <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="block text-base text-[#2d2d2d] hover:text-mint transition-colors">{s.label.toUpperCase()}</a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
      <style jsx global>{`
        .section-header {
          position: fixed !important;
          top: 0 !important;
          z-index: 50 !important;
        }
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
        @media (min-width: 701px) {
          .nav-desktop { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header; 
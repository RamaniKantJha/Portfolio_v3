'use client'

import { personalDetails } from '../personalDetails';
import { motion } from 'framer-motion';

const Footer = () => {
  const socials = personalDetails.socials.filter(s => ['Behance', 'Instagram', 'Twitter', 'Dribbble'].includes(s.label));
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full bg-[#233532] text-white pt-20 pb-8 px-4 relative overflow-hidden">
      {/* Circular background */}
      <div className="footer-circle-bg"></div>
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Heading */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-12 uppercase" style={{fontFamily: 'Gilroy'}}>
            LET'S TALK<br />ABOUT THE NEXT<br />BIG THING
          </h2>
        </motion.div>
        {/* Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.a
            href={`mailto:${personalDetails.email}`}
            className="flex-1 max-w-md text-center py-5 px-8 border border-white rounded-full text-lg font-semibold transition-all hover:bg-white hover:text-[#233532]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Write a Message
          </motion.a>
          <motion.a
            href={`mailto:${personalDetails.email}?subject=Project%20Discussion`}
            className="flex-1 max-w-md text-center py-5 px-8 border border-white rounded-full text-lg font-semibold transition-all hover:bg-white hover:text-[#233532]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Project
          </motion.a>
        </motion.div>
        {/* Socials Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {socials.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <hr className="border-t border-white/40 mb-4" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">{s.label}</div>
                  <div className="text-sm text-white/80">{s.handle}</div>
                </div>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="ml-4">
                  {/* Simple icon fallback, you can replace with SVGs if desired */}
                  <span className="w-7 h-7 flex items-center justify-center bg-white text-[#233532] rounded-full font-bold">{s.label[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/70 gap-2">
          <div>
            ©{year} {personalDetails.name}. All Rights Reserved - <a href="#" className="underline">Credits</a>
          </div>
          <div>
            {year} Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
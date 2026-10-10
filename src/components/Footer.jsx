import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 500) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 500) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="py-8 border-t border-black/30 glass-panel mt-12 relative z-10">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-wrap justify-between items-center gap-6 max-md:flex-col max-md:text-center">
          <div>
            <a href="#" className="font-heading text-2xl font-bold tracking-[1px] mb-2 inline-block text-black flex items-center gap-2 justify-center md:justify-start">
               <span className="text-accent">&lt;</span>
               TMH
               <span className="text-accent-secondary">/&gt;</span>
            </a>
            <p className="text-text-secondary text-sm">
              &copy; {new Date().getFullYear()} Thein Min Htet. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { href: "https://www.facebook.com/thein.m.htet.56?mibextid=ZbWKwL", icon: "ri-facebook-circle-fill", label: "Facebook" },
              { href: "https://www.linkedin.com/in/thein-min-htet-b73582349", icon: "ri-linkedin-fill", label: "LinkedIn" },
              { href: "https://www.instagram.com/thein.m.htet.56?igsh=MTNnc3FudWZsMDQ3bQ==", icon: "ri-instagram-line", label: "Instagram" },
              { href: "https://t.me/thein_min_htet", icon: "ri-telegram-fill", label: "Telegram" },
              { href: "https://tiktok.com/@theinminhtet47", icon: "ri-tiktok-fill", label: "TikTok" },
              { href: "https://github.com/TheinMinHtet", icon: "ri-github-fill", label: "GitHub" }
            ].map((link, i) => (
              <motion.a 
                key={i} 
                whileHover={{ scale: 1.1, y: -4 }}
                href={link.href} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={link.label} 
                className="w-11 h-11 rounded-full bg-black/5 flex justify-center items-center text-xl text-text-secondary transition-colors hover:bg-black/10 hover:text-black border border-black/5"
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
      
      <AnimatePresence>
        {showScroll && (
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop} 
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-panel border border-black text-black text-xl flex justify-center items-center cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] z-50 hover:text-accent" 
            aria-label="Scroll to top"
          >
            <i className="ri-arrow-up-line"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;

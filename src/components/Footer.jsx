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
      <footer className="pt-8 pb-24 md:pb-8 border-t border-black/30 bg-white border-x-0 border-b-0 mt-12 relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:pr-24 flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 text-center md:text-left">
          <div>
            <a href="#" className="font-heading text-2xl font-bold tracking-[1px] mb-2 inline-flex text-black items-center gap-2 justify-center md:justify-start">
               <span className="text-accent">&lt;</span>
               TMH
               <span className="text-accent-secondary">/&gt;</span>
            </a>
            <p className="text-text-secondary text-sm">
              &copy; {new Date().getFullYear()} Thein Min Htet. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 w-full md:w-auto mt-4 md:mt-0">
            {[
              { href: "https://www.facebook.com/thein.m.htet.56?mibextid=ZbWKwL", icon: "ri-facebook-circle-fill", label: "Facebook" },
              { href: "https://www.linkedin.com/in/thein-min-htet/", icon: "ri-linkedin-fill", label: "LinkedIn" },
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
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/5 flex justify-center items-center text-lg sm:text-xl text-text-secondary transition-colors hover:bg-black/10 hover:text-black border border-black/5"
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
            onClick={scrollTop} 
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 bg-white rounded-none border border-black text-black text-xl flex justify-center items-center cursor-pointer shadow-[4px_4px_0px_rgba(0,0,0,1)] z-50 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:bg-zinc-50 transition-all duration-150" 
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

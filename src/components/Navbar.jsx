import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Projects', 'Achievements', 'Experience', 'Certificates'];

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', ' ');
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleMobileNavClick = (e, item) => {
    const targetId = item.toLowerCase() === 'contact me' ? 'contact' : item.toLowerCase();
    scrollToSection(e, targetId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'py-4 glass-nav' : 'py-6 bg-transparent'}`} 
      id="navbar"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex justify-between items-center relative z-[1001]">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'top')}
          className="font-heading text-3xl font-bold tracking-wider text-black flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-accent">&lt;</span>
          TMH
          <span className="text-accent-secondary">/&gt;</span>
        </a>
        
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-text-secondary hover:text-black text-base font-medium transition-colors relative group whitespace-nowrap cursor-pointer"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full rounded-full"></span>
              </a>
            </motion.li>
          ))}
          <motion.li
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: navLinks.length * 0.1 }}
          >
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="glass-button text-base whitespace-nowrap cursor-pointer"
            >
              Contact Me <i className="ri-arrow-right-up-line text-lg leading-none"></i>
            </a>
          </motion.li>
        </ul>
        
        <div className="lg:hidden text-2xl text-black cursor-pointer z-50 p-2 bg-white border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 max-w-sm h-screen glass-nav bg-white/95 flex flex-col pt-24 shadow-2xl z-[999]"
          >
            {[...navLinks, 'Contact Me'].map((item, i) => (
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                key={item} 
                className="py-4 px-4 sm:px-8 border-b border-black/5"
              >
                <a 
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className="text-black text-lg font-medium block w-full cursor-pointer" 
                  onClick={(e) => handleMobileNavClick(e, item)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

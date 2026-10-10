import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <span className="text-xl text-accent font-heading font-medium tracking-wide">Hi there, I am</span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-black leading-tight">Thein Min Htet</h1>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gradient pb-2">
            Knowledge Engineering Student
          </h2>
          <p className="text-lg text-text-secondary max-w-lg mb-4 leading-relaxed">
            Currently studying at the <span className="text-black font-medium">University of Information Technology Yangon</span>. Passionate about solving real-world problems and building high-quality software solutions.
          </p>

          <motion.div 
            className="flex gap-4 mb-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { delayChildren: 0.5, staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              { href: "https://www.facebook.com/thein.m.htet.56?mibextid=ZbWKwL", icon: "ri-facebook-circle-fill", label: "Facebook" },
              { href: "https://www.linkedin.com/in/thein-min-htet-b73582349", icon: "ri-linkedin-fill", label: "LinkedIn" },
              { href: "https://www.instagram.com/thein.m.htet.56?igsh=MTNnc3FudWZsMDQ3bQ==", icon: "ri-instagram-line", label: "Instagram" },
              { href: "https://t.me/thein_min_htet", icon: "ri-telegram-fill", label: "Telegram" },
              { href: "https://tiktok.com/@theinminhtet47", icon: "ri-tiktok-fill", label: "TikTok" },
              { href: "https://github.com/TheinMinHtet", icon: "ri-github-fill", label: "GitHub" }
            ].map((link) => (
              <motion.a 
                key={link.label} 
                href={link.href} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={link.label} 
                className="w-11 h-11 rounded-full bg-black/5 flex justify-center items-center text-xl text-text-secondary transition-all duration-200 hover:bg-black/10 hover:text-black border border-black/5 hover:-translate-y-1 hover:scale-110 active:scale-95"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="glass-button-primary">
              View Work <i className="ri-arrow-right-up-line text-lg leading-none"></i>
            </a>
            <a href="#contact" className="glass-button">
              Contact Me <i className="ri-arrow-right-up-line text-lg leading-none"></i>
            </a>
            <a href="/assets/Thein_Min_Htet_CV.pdf" download="Thein_Min_Htet_CV.pdf" className="glass-button">
              Download CV <i className="ri-download-line text-lg leading-none"></i>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full p-2 bg-white border border-black/30 shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-black/10">
               <img src="/assets/images/profile.jpg" alt="Thein Min Htet Profile Picture" className="w-full h-full object-cover object-[center_top]" />
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 glass-card p-4 rounded-none flex items-center gap-4"
          >
             <div className="w-12 h-12 rounded-none bg-black/5 border border-black/30 flex items-center justify-center text-black text-2xl">
               <i className="ri-code-line"></i>
             </div>
             <div>
               <h3 className="text-black font-bold text-lg">Developer</h3>
               <p className="text-text-secondary text-sm">AI & Web</p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

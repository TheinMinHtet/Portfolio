import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "MediHub",
      desc: "A clinic OPD system with three roles: Patient, Doctor, and Admin. Features AI triage, appointment booking, an AI Scribe, and clinical safety alerts wrapped in a resilient architecture.",
      tech: ["Next.js", "React", "TypeScript", "PostgreSQL"],
      icon: "ri-hospital-line",
      link: "https://github.com/TheinMinHtet/MediHub",
      demo: "https://medi-hub-psi.vercel.app",
      color: "bg-teal-500/10 text-teal-600"
    },
    {
      title: "PixelProof",
      desc: "PixelProof is a Deepfake Detection website where you can check if a video or photo is real or tampered with. Built for anyone who wants to verify truth online.",
      tech: ["HTML", "Python", "CSS"],
      icon: "ri-scan-fill",
      link: "https://github.com/TheinMinHtet/PixelProof",
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Sky-Cast-Smart-Weather-Forecasting",
      desc: "A smart weather forecasting system built using J2EE for the backend, MySQL for database storage, and a web-based frontend providing accurate predictions.",
      tech: ["J2EE", "MySQL", "HTML", "CSS", "JS"],
      icon: "ri-sun-cloudy-line",
      link: "https://github.com/TheinMinHtet/Sky-Cast-Smart-Weather-Forecasting-System",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Miracle - Zodiac Personality",
      desc: "C++ console astrology and fortune app. Offers insights on personality, compatibility, health, luck, and love wrapped in an engaging, colorful interface.",
      tech: ["C++"],
      icon: "ri-sparkling-fill",
      link: "https://github.com/TheinMinHtet/Miracle",
      color: "bg-pink-500/10 text-pink-400"
    },
    {
      title: "Skill-Sharing-Platform",
      desc: "A web application that enables users to share their skills, request new ones, and connect with others. Powered by PHP, MySQL with a modern frontend.",
      tech: ["PHP", "MySQL", "HTML/CSS/JS"],
      icon: "ri-exchange-box-line",
      link: "https://github.com/TheinMinHtet/Skill-Sharing-Platform",
      color: "bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Nextjs Authentication",
      desc: "Authentication system built with Next.js supporting credential login and Google OAuth. Uses JWT-based session management and email verification.",
      tech: ["Next.js", "React", "TypeScript"],
      icon: "ri-lock-password-line",
      link: "https://github.com/TheinMinHtet/nextjs_authentication_and_login",
      color: "bg-amber-500/10 text-amber-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 font-bold text-black"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Some of the works I am most proud of.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -6, transition: { delay: 0, duration: 0.2 } }}
              className="glass-card flex flex-col h-full group p-8"
            >
              <div className={`w-14 h-14 rounded-none flex items-center justify-center mb-6 border border-black/30 ${proj.color} transition-colors group-hover:border-black`}>
                <i className={`${proj.icon} text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-accent transition-colors">{proj.title}</h3>
              <p className="text-text-secondary mb-8 flex-1 text-sm leading-relaxed">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tech.map((t, index) => (
                  <span key={index} className="text-xs py-1.5 px-3 bg-black/5 border border-black/5 text-text-secondary rounded-none font-medium">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-6 flex gap-3">
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noreferrer" className="glass-button-primary !w-full flex-1 !px-2 whitespace-nowrap">
                    Live Demo <i className="ri-arrow-right-up-line"></i>
                  </a>
                )}
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noreferrer" className="glass-button !w-full flex-1 !px-2 whitespace-nowrap">
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a href="https://github.com/TheinMinHtet" target="_blank" rel="noreferrer" className="glass-button-primary flex items-center gap-2">
            <i className="ri-github-fill text-xl"></i> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

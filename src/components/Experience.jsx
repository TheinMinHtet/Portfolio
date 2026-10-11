import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "UIT Futsal President",
      org: "University of Information Technology Yangon(UIT)",
      date: "Jun 2026 - Present",
      desc: "Organized and managed the university futsal tournament, handling match schedules, team coordination, stadium management, first-aid, and overall event operations."
    },
    {
      title: "Working Group Member & Volunteer",
      org: "Myanmar Computer Professionals Association (MCPA)",
      date: "Jun 2026 - Present",
      desc: "Actively support MCPA's initiatives and events by helping with projects, event coordination, and activities that promote IT professionals in Myanmar."
    },
    {
      title: "Fresher Welcome Event Organizer",
      org: "University of Information Technology Yangon(UIT)",
      date: "Dec 2024 - Nov 2025",
      desc: "Served as an Organizer for UIT Fresher Welcome 2024, helping with planning, coordination, and logistics to make one of the university's biggest student events a success."
    },
    {
      title: "UIT Fresher Welcome Event 2023 - Volunteer",
      org: "University of Information Technology Yangon (UIT)",
      date: "Dec 2023 - Jan 2024",
      desc: "Helped with event coordination and on-site activities for new students, gaining experience in teamwork and event management."
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 font-bold text-black"
          >
            Experience & <span className="text-gradient">Leadership</span>
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
            My professional journey and voluntary contributions.
          </motion.p>
        </div>

        <div className="relative max-w-[900px] mx-auto before:content-[''] before:absolute before:top-0 before:left-[15px] md:before:left-1/2 before:-ml-[2px] before:w-1 before:h-full before:bg-black/10 before:rounded-full">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`mb-12 relative w-full pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:left-0 md:pr-12' : 'md:left-1/2 md:pl-12'}`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black border-4 border-white shadow-[0_0_0_4px_rgba(0,0,0,0.1)] z-10 left-[7px] ${i % 2 === 0 ? 'md:left-auto md:-right-[10px]' : 'md:-left-[10px]'}`}></div>
              
              <div className="glass-card p-8 group text-center flex flex-col items-center">
                <h3 className="text-2xl mb-2 font-bold text-black group-hover:text-accent-secondary transition-colors">{exp.title}</h3>
                <span className="block mb-2 font-semibold text-gradient">
                  {exp.org}
                </span>
                <span className="flex items-center justify-center gap-2 text-sm text-accent-secondary mb-4">
                  <i className="ri-calendar-line"></i> {exp.date}
                </span>
                <p className="text-text-secondary leading-relaxed max-w-lg">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

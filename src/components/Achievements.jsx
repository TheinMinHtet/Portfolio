import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: "1st Place Winner",
      meta: "KBZPay : AppCube Developers Bootcamp & Hackathon (March 2026)",
      desc: "In March 2026, our team \"SwiftFix\" won 1st Place at the AppCube Developers Bootcamp & Hackathon. As Team Leader, I guided our team in building an innovative Mini App that stood out for its quality and functionality.",
      img: "/assets/images/miniapp.jpg",
      fallback: "https://via.placeholder.com/600x400/27187E/F7F7FF?text=Achievement+Award"
    },
    {
      title: "1st Place Winner",
      meta: "FITP Web Development Competition(September 2026)",
      desc: "Worked with Team J.A.R.V.I.S. to design and build a web app in an intense 8-hour competition. Our team won the Champion Prize by turning our ideas into a working solution through strong teamwork and time management.",
      img: "/assets/images/fitp-team.jpg",
      fallback: "https://via.placeholder.com/600x400/27187E/F7F7FF?text=Achievement+Award"
    },
    {
      title: "1st Runner-Up",
      meta: "Let's Tech Hackathon (Agentic Edition) — July 2026",
      desc: "In July 2026, I was Team Leader of Team J.A.R.V.I.S. and we won 1st Runner-Up at the Let's Tech Hackathon (Agentic Edition). During the 48-hour event, we built an AI-driven solution together, and I gained valuable experience in agentic AI, teamwork, and rapid development.",
      img: "/assets/images/IMG_3364.JPG",
      fallback: "https://via.placeholder.com/600x400/27187E/F7F7FF?text=Hackathon+Winner"
    },
    {
      title: "2nd Runner-Up",
      meta: "Technortal Hackathon: One Project, One Week (May 2026)",
      desc: "As Co-Team Leader, I helped my team win 2nd Runner-Up in the Technortal Hackathon: One Project, One Week. During this week-long event, we built a working prototype from scratch to solve a real-world problem, and I helped with planning, development tasks, and technical decisions.",
      img: "/assets/images/technortal.jpg",
      fallback: "https://via.placeholder.com/600x400/27187E/F7F7FF?text=Hackathon+Winner"
    },
    {
      title: "Top 10 National Finalist",
      meta: "ASEAN Data Science Explorers 2025",
      desc: "Recognized as a Top 10 National Finalist in the ASEAN Data Science Explorers 2025. Working with my team, I helped analyze data, develop insights, and create a data-driven presentation to propose solutions for real-world regional issues.",
      img: "/assets/images/adse2025.jpg",
      fallback: "https://via.placeholder.com/600x400/27187E/F7F7FF?text=Data+Science+Finalist"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 font-bold text-black"
          >
            Notable <span className="text-gradient">Achievements</span>
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
            A track record of hackathons, competitions, and technical excellence.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16">
          {achievements.map((ach, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex items-center gap-8 md:gap-12 glass-card p-6 md:p-12 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}
            >
              <div className="flex-1">
                <h3 className="text-3xl mb-3 font-bold text-black">{ach.title}</h3>
                <span className="inline-block mb-6 font-semibold text-lg text-gradient">
                  {ach.meta}
                </span>
                <p className="text-text-secondary leading-relaxed">{ach.desc}</p>
              </div>
              <div className="flex-1 rounded-none overflow-hidden relative shadow-2xl w-full border border-black/30 group-hover:border-accent/50 transition-colors duration-500">
                {/* Removed blue overlay so the image stays pure */}
                <img
                  src={ach.img}
                  alt={ach.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 aspect-[3/2]"
                  onError={(e) => { e.target.src = ach.fallback; }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

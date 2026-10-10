import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certs = [
    {
      title: "Fundamental Information Technology Engineer Examination(FE)",
      org: "Information Technology Professional Examination Council(ITPEC)",
      date: "Oct 2024",
      img: "/assets/images/3.jpg",
      fallback: "https://via.placeholder.com/400x250/27187E/F7F7FF?text=FE+Certificate"
    },
    {
      title: "Information Technology Passport Examination(IP)",
      org: "Information Technology Professional Examination Council(ITPEC)",
      date: "Oct 2023",
      img: "/assets/images/ip.jpg",
      fallback: "https://via.placeholder.com/400x250/27187E/F7F7FF?text=IP+Certificate"
    },
    {
      title: "Certificate of Participation in JENESYS Myanmar-Japan Japanese Language and Cultural Exchange (Online)",
      org: "Japan International Cooperation Center (JICE)",
      date: "Dec 2025",
      img: "/assets/images/jice.jpg",
      link: "https://walletapi.openbadge.net/api/public-credentials/share/0d717af6-8b01-8e5b-8933-019aecf93a5f",
      fallback: "https://via.placeholder.com/400x250/27187E/F7F7FF?text=JENESYS+Program"
    },
    {
      title: "Google Advanced Data Analytics Professional Certificate(v.2)",
      org: "Coursera",
      date: "May 2026",
      img: "/assets/images/advanced-data-analytics.png",
      link: "https://www.credly.com/badges/74431f2a-1648-4863-b0bb-b41fe0a15fc6",
      fallback: "https://via.placeholder.com/400x250/27187E/F7F7FF?text=Google+Analytics"
    },
    {
      title: "AI Ready ASEAN Youth Challenge 2026",
      org: "AI Singapore",
      date: "May 2026",
      img: "/assets/images/aiready-clear.png",
      link: "https://www.virtualbadge.io/certificate-validator?credential=823b3147-9b21-44c0-9c45-ae4b658178b1",
      fallback: "https://via.placeholder.com/400x250/27187E/F7F7FF?text=AI+Ready"
    },
    {
      title: "ASEAN AI Hackathon 2026",
      org: "Passage to ASEAN (P2A) Association",
      date: "Jun 2026",
      img: "/assets/images/aseanai-clear.png",
      fallback: "https://via.placeholder.com/400x250/27187E/F7F7FF?text=ASEAN+AI"
    }
  ];

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 font-bold text-black"
          >
            Professional <span className="text-gradient">Certifications</span>
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
            Continuous learning and skill validation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { delay: 0, duration: 0.3 } }}
              className="glass-card overflow-hidden flex flex-col h-full group"
            >
              <div className="h-64 overflow-hidden relative bg-black/20 flex items-center justify-center p-6 border-b border-black/5">
                <img
                  src={cert.img}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = cert.fallback; }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col relative z-20">
                <h4 className="text-lg font-bold mb-2 text-black group-hover:text-accent transition-colors">{cert.title}</h4>
                <p className="text-text-secondary text-sm mb-4 flex-1">{cert.org}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/30">
                   <span className="flex items-center gap-2 text-sm text-accent-secondary font-medium">
                     <i className="ri-calendar-line"></i> {cert.date}
                   </span>
                   {cert.link && (
                     <a href={cert.link} target="_blank" rel="noreferrer" className="text-sm font-bold text-black hover:underline underline-offset-4">
                       View Certificate
                     </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

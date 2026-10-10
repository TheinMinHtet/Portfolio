import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      label: "Personal Email",
      value: "theinminhtet712005@gmail.com",
      href: "mailto:theinminhtet712005@gmail.com",
      icon: "ri-mail-send-line"
    },
    {
      label: "University Email",
      value: "theinminhtet@uit.edu.mm",
      href: "mailto:theinminhtet@uit.edu.mm",
      icon: "ri-mail-line"
    },
    {
      label: "Phone Number",
      value: "+959954807078",
      href: "tel:+959954807078",
      icon: "ri-phone-line"
    },
    {
      label: "Telegram",
      value: "@thein_min_htet",
      href: "https://t.me/thein_min_htet",
      icon: "ri-telegram-line"
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-white">
      <div className="max-w-[1000px] mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-black/30 rounded-none shadow-sm p-10 md:p-14 text-center relative"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-black relative z-10">
            Let's build something amazing together.
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto mb-12 relative z-10">
            Open to discussions, project planning, and collaboration opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {contactMethods.map((method, index) => (
              <motion.a 
                key={index}
                href={method.href}
                target={method.label === "Telegram" ? "_blank" : "_self"}
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="glass-panel p-6 rounded-none flex items-center gap-5 group/item transition-colors hover:bg-white/[0.03] text-left"
              >
                <div className="w-12 h-12 rounded-none bg-black/5 flex justify-center items-center text-xl text-text-secondary group-hover/item:text-black transition-colors border border-black/5">
                  <i className={method.icon}></i>
                </div>
                <div className="flex-1 overflow-hidden">
                  <span className="block text-sm text-text-secondary mb-1">{method.label}</span>
                  <span className="font-semibold text-black truncate block w-full">{method.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

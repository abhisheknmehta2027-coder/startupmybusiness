import React from 'react';
import { motion } from 'framer-motion';

import vsnLogo from '../assets/vsn-ecpl.jpg';
import virtuationLogo from '../assets/virtuation-digital.jpg';
import miAniTuLogo from '../assets/mi-ani-tu.jpg';
import velnexLogo from '../assets/velnex.jpg';

const OurClients = () => {
  const clients = [
    { name: "VSN Electro Components Pvt. Ltd", logo: vsnLogo },
    { name: "Virtuation Digital", logo: virtuationLogo },
    { name: "MI ANI TU", logo: miAniTuLogo },
    { name: "VELNEX", logo: velnexLogo }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="our-clients" className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-slate-200"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-slate-400">
              Trusted By
            </span>
            <div className="w-10 h-px bg-slate-200"></div>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-blue-600 italic pr-2">Clients</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              // 🚀 MOBILE TOUCH FEEDBACK ADDED
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                scale: 1.05,
                y: -4,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group flex items-center justify-center p-4 bg-white rounded-xl border border-transparent hover:border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all duration-400 cursor-default"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                title={client.name}
                className="h-16 md:h-20 lg:h-25 w-auto object-contain transition-transform duration-700" 
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurClients;
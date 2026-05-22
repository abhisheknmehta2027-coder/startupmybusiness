import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { revealVariants } from '../constants/animations';

const WhyWe = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, controls] = useScrollReveal();

  const eliteReasons = [
    {
      number: "01",
      title: "Strategic Business Structuring",
      desc: "We help founders establish legally strong and growth-focused business foundations designed for long-term scalability and investor confidence."
    },
    {
      number: "02",
      title: "Compliance & Regulatory Excellence",
      desc: "Our proactive compliance approach ensures operational stability, regulatory clarity, and zero-compromise corporate governance for modern enterprises."
    },
    {
      number: "03",
      title: "Founder-Centric Advisory",
      desc: "We work closely with ambitious entrepreneurs to simplify legal complexity, protect business interests, and enable sustainable business expansion."
    },
    {
      number: "04",
      title: "Technology-Driven Professional Support",
      desc: "By combining modern digital workflows with strategic advisory expertise, we deliver responsive, secure, and seamless client experiences across India."
    }
  ];

  return (
    <motion.section 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={revealVariants}
      id="why-we" 
      className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-blue-600/30"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-blue-600">
              The Unfair Advantage
            </span>
            <div className="w-12 h-px bg-blue-600/30"></div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter max-w-5xl" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why the Most Ambitious Founders <br className="hidden md:block" />
            <span className="text-blue-600 italic px-2">Trust Only Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {eliteReasons.map((item, index) => (
            <motion.div 
              key={index} 
              variants={revealVariants}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(index)}
              // 🚀 MOBILE TOUCH FEEDBACK ADDED
              whileTap={{ scale: 0.98 }}
              className={`relative group pt-10 px-3 md:px-5 cursor-pointer transition-all duration-500 rounded-sm border ${
                activeIndex === index 
                  ? 'border-blue-600 shadow-xl shadow-blue-900/10 scale-105' 
                  : 'border-white hover:border-slate-200 hover:shadow-lg hover:shadow-blue-900/5'
              }`}
            >
              <span className={`absolute top-0 left-0 text-7xl md:text-8xl font-black transition-colors duration-500 select-none ${
                  activeIndex === index ? 'text-blue-600/15' : 'text-slate-50 group-hover:text-blue-600/10'
              }`}>
                {item.number}
              </span>
              
              <div className="relative z-10 pb-8">
                <h3 
                  className={`text-xl md:text-2xl font-black mb-5 tracking-tight uppercase transition-colors duration-500 ${
                    activeIndex === index ? 'text-blue-600' : 'text-slate-900'
                  }`} 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                
                <div className="w-12 h-px bg-blue-600 mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default WhyWe;
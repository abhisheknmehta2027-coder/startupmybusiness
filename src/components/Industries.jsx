import React from 'react';
import { Factory, Landmark, Monitor, Stethoscope, Shirt, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { revealVariants } from '../constants/animations';

const Industries = () => {
  const [ref, controls] = useScrollReveal();

  const industries = [
    {
      name: "Manufacturing",
      icon: <Factory size={32} strokeWidth={1.5} />,
      desc: "From factory setups to inventory control and excise laws, we provide robust compliance architectures for large-scale operations."
    },
    {
      name: "Banking & Finance",
      icon: <Landmark size={32} strokeWidth={1.5} />,
      desc: "Navigating complex RBI, SEBI, and NBFC frameworks with absolute precision and zero-defect regulatory compliance."
    },
    {
      name: "IT / Software",
      icon: <Monitor size={32} strokeWidth={1.5} />,
      desc: "Structuring export refunds, IP valuation, and strategic tax planning including 80IAC startup optimizations."
    },
    {
      name: "Pharma & Healthcare", 
      icon: <Stethoscope size={32} strokeWidth={1.5} />,
      desc: "Comprehensive regulatory structuring for hospitals, GST on pharmacy, and holistic wellness sector compliance."
    },
    {
      name: "E-Commerce & Digital Marketing", 
      icon: <Shirt size={32} strokeWidth={1.5} />,
      desc: "Providing company secretarial, regulatory compliance, trademark, GST and corporate governance support for modern e-commerce brands, digital businesses and fast-growing online enterprises."
    },
    {
      name: "Real Estate & Construction", 
      icon: <Building2 size={32} strokeWidth={1.5} />,
      desc: "Project accounting, RERA compliance, and rigorous GST implementation for large-scale contractors and developers."
    }
  ];

  return (
    <motion.section 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={revealVariants}
      id="industries" 
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#2563EB]/40"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#2563EB]">
              Sector Expertise
            </span>
            <div className="w-12 h-px bg-[#2563EB]/40"></div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.2] tracking-tight max-w-4xl" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Industries We <span className="text-[#2563EB] italic pr-2">Empower</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((item, index) => (
            <motion.div 
              key={index} 
              variants={revealVariants}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              // 🚀 MOBILE TOUCH FEEDBACK ADDED
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col h-full p-8 md:p-10 border border-slate-200 transition-all duration-500 hover:bg-[#0F172A] hover:border-[#0F172A] hover:shadow-2xl cursor-default"
            >
              <div className="w-16 h-16 bg-slate-50 group-hover:bg-[#2563EB] flex items-center justify-center transition-colors duration-500 mb-8 rounded-sm">
                <div className="text-[#2563EB] group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              <h3 
                className="text-xl md:text-2xl font-bold text-[#0F172A] group-hover:text-white mb-4 transition-colors duration-500 tracking-wide" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.name}
              </h3>

              <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed font-medium mb-10 transition-colors duration-500">
                {item.desc}
              </p>

              <div className="mt-auto h-5"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Industries;
import React from 'react';
import { motion } from 'framer-motion';
// 🚀 Importing the Animation Hook and Variants we created
import { useScrollReveal } from '../hooks/useScrollReveal';
import { revealVariants } from '../constants/animations';

import mehtaProfilePic from '../assets/csjitendramehta.jpg';

const About = () => {
  // 🚀 Initializing the Reveal Hook
  const [ref, controls] = useScrollReveal();

  return (
    <motion.section 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={revealVariants}
      id="about-us" 
      className="py-24 md:py-32 bg-white relative border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-8">
        
        {/* PART 1: THE HOOK (Header Section) */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-blue-600 opacity-40"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600">The Firm Profile</span>
            <div className="w-12 h-px bg-blue-600 opacity-40"></div>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ARCHITECTING THE FUTURE OF <br className="hidden md:block" />
            <span className="text-blue-600 italic pr-2">INDIAN BUSINESSES</span>
          </h2>
        </div>

        {/* PART 2: THE DETAILS (Executive Presentation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex justify-center w-full">
            <motion.div 
              className="relative group w-full max-w-md lg:max-w-none"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-blue-900/5 via-blue-600/10 to-slate-200/40 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-1000"></div>
              
              <div className="relative p-0.5 rounded-2xl bg-linear-to-br from-slate-300 via-blue-600 to-blue-900 shadow-2xl shadow-blue-900/10 group-hover:shadow-blue-900/20 transition-all duration-700">
                <div className="relative p-2.5 bg-white rounded-2xl">
                  <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                    <motion.img 
                      src={mehtaProfilePic} 
                      alt="CS Jitendra Mehta - Premium Corporate Compliance Advisor and Company Secretary in Pune"
                      className="w-full h-auto max-h-max object-cover object-top filter contrast-105"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col space-y-8 text-base md:text-lg text-slate-600 font-normal leading-relaxed lg:pl-4">
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Led by CS Jitendra Mehta, we go beyond traditional compliance.
              </h3>
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold tracking-widest uppercase text-blue-700">
                <span>Company Secretary</span>
                <span className="opacity-40 font-light">|</span>
                <span>CSR Certified Professional</span>
                <span className="opacity-40 font-light">|</span>
                <span>LLB</span>
                <span className="opacity-40 font-light">|</span>
                <span>B.Com</span>
              </div>
            </div>
            
            <div className="w-16 h-px bg-blue-600 opacity-30 my-2"></div>

            <div className="space-y-6 text-slate-600">
              <p>We are the <span className="text-slate-900 font-semibold">strategic architects</span> for visionary founders, ensuring your legal and financial foundation is impenetrable from day one.</p>
              <p>Our firm specializes in strategic business advisory for startups and enterprises, delivering <span className="text-blue-600 font-semibold">zero-defect compliance leadership</span> and innovative legal structuring.</p>
              <p>We operate at the intersection of founder ambition and enterprise-grade execution, ensuring <span className="text-slate-900 font-semibold">its credibility, stability, and full investor-readiness.</span></p>
              <p>From initial incorporation to sustained market leadership, we navigate regulatory complexity with refined, corporate advisory focused on securing your legacy.</p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;
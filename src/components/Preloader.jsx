import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const premiumEasing = [0.76, 0, 0.24, 1];

  // Animation variants for staggered reveal
  const revealVariant = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: premiumEasing }
    }
  };

  return (
    <motion.div
      // 💎 Pure Clean Matte Background (No heavy boxes)
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center overflow-hidden"
      exit={{ 
        y: "-100%", 
        transition: { duration: 1.1, ease: premiumEasing } 
      }}
    >
      {/* 🚀 ELITE BRANDING: Bada Format & Cinematic Reveal */}
      <div className="flex flex-col items-center text-center">
        
        <div className="overflow-hidden flex items-baseline justify-center space-x-3 md:space-x-5 mb-4">
          {/* Word 1: STARTUP */}
          <motion.span
            variants={revealVariant}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-7xl font-light tracking-tighter text-slate-900 leading-none uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            STARTUP
          </motion.span>

          {/* Word 2: MY (Royal Blue Accent) */}
          <motion.span
            variants={revealVariant}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-normal tracking-tighter text-blue-700 leading-none uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            MY
          </motion.span>

          {/* Word 3: BUSINESS */}
          <motion.span
            variants={revealVariant}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-light tracking-tighter text-slate-900 leading-none uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            BUSINESS
          </motion.span>
        </div>

        {/* Professional Minimalist Tagline with Fade-in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 text-xs md:text-sm tracking-widest text-slate-400 font-bold uppercase"
        >
          Structuring Business. Securing Growth.
        </motion.p>
      </div>

      {/* ⚡ High-End Fluid Progress Line */}
      <div className="absolute bottom-24 w-64 md:w-96 h-px bg-slate-100 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full h-full bg-blue-700"
        />
      </div>

      {/* Corporate Copyright Note */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 text-xs tracking-widest text-slate-300 uppercase font-medium"
      >
        © 2026 StartupMyBusiness | Elite Advisory
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
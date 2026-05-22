import React from 'react';
import { motion } from 'framer-motion';

import deepakPic from '../assets/CADEEPAKMEHTA.jpg';
import jitendraPic from '../assets/csjitendramehta.jpg';
import kishorPic from '../assets/Kishor-Joshi.jpg';

const OurTeam = () => {
  const team = [
    { name: "CA Deepak Mehta", photo: deepakPic },
    { name: "CS Jitendra Mehta", photo: jitendraPic },
    { name: "CA Kishor Joshi", photo: kishorPic }
  ];

  return (
    <section id="our-team" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              // Hover (Desktop) aur Tap (Mobile) dono ke liye animation
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white border border-slate-100 p-4 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden aspect-4/5 mb-6 bg-slate-100">
                <motion.img
                  src={member.photo}
                  alt={member.name}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
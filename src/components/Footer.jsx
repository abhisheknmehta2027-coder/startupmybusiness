import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion'; 

import logoImage from '../assets/startupmybusiness.in.jpg';

const Footer = () => {
  const whatsappNumber = "918087161706";
  const customMessage = "Hello CS Jitendra Mehta, I would like to book a Free Consultation for my business.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -10px 0px"
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.55 }
    }
  };

  const phraseVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="bg-white pt-20 text-slate-600 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8 pb-16">

        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            ref={headingRef}
            variants={containerVariants}
            initial="hidden"
            animate={isHeaderVisible ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 mb-6 tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <motion.span variants={phraseVariants} className="block">Ready</motion.span>
            <motion.span variants={phraseVariants} className="block">to Transform</motion.span>
            <motion.span variants={phraseVariants} className="text-blue-600 block">Your Business?</motion.span>
          </motion.h2>
          
          <p className="text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed mb-8">
            Empowering visionary enterprises with elite legal precision, seamless compliance, and investor-ready strategic architecture.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-950 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-blue-600 rounded-sm"
          >
            Book Free Consultation
            <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300 text-sm leading-none">→</span>
          </a>
        </div>

        <div className="w-full h-px bg-slate-200 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-12 items-start w-full">

          <div className="flex flex-col text-left h-full">
            <a 
              href="#home" 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 mb-5 group cursor-pointer w-fit"
            >
              <div className="flex items-center justify-center">
                <img
                  src={logoImage}
                  alt="StartupMyBusiness Footer Logo - CS Jitendra Mehta Pune"
                  className="w-16 h-16 object-contain transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-col" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-2xl font-black tracking-[0.15em] text-slate-900 uppercase leading-none transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-[1.02] origin-left">
                  Startup
                </span>
                <div className="flex justify-start w-full">
                  <span className="text-[10px] font-bold tracking-[0.45em] text-blue-600 uppercase mt-1 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:tracking-[0.55em]">
                    MyBusiness.IN
                  </span>
                </div>
              </div>
            </a>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mt-1">
              Led by CS Jitendra Mehta. We handle the complexity of compliance, allowing you to focus entirely on building your legacy with absolute confidence.
            </p>
          </div>

          <div className="flex flex-col text-left md:mx-auto w-full max-w-xs h-full">
            <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col space-y-4 text-sm text-slate-500">
              <a href="https://www.google.com/maps/search/?api=1&query=Office+No+317,+3rd+Floor,+City+Vista-+B-+Building,+Fountain+Road,+Ashoka+Nagar,+Kharadi,+Pune,+Maharashtra+411014" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-blue-600 transition-colors cursor-pointer group">
                <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Office No 317, 3rd Floor, City Vista- B- Building, Fountain Road, Ashoka Nagar, Kharadi, Pune, Maharashtra 411014</span>
              </a>
              <a href="mailto:csjitendramehta@gmail.com" className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer group">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>csjitendramehta@gmail.com</span>
              </a>
              <a href="tel:+918087161706" className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer group">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+91 80871 61706</span>
              </a>
              <a href="https://www.linkedin.com/in/cs-jitendra-mehta-108510172" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 text-sm font-semibold w-fit">
                <span className="text-blue-600 font-bold tracking-wider">in</span>
                <span>CS Jitendra Mehta</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col text-left md:ml-auto w-full max-w-70 h-full">
            <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-6">
              Office Hours
            </h4>
            <div className="flex flex-col space-y-3 text-sm text-slate-500 w-full">
              <div className="flex justify-between items-center gap-4">
                <span className="font-medium text-slate-400">Mon - Sat:</span>
                <span className="text-slate-900 font-semibold tracking-tight whitespace-nowrap">10:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-slate-50 py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase text-center md:text-left">
            © 2026 STARTUPMYBUSINESS.IN | CS JITENDRA MEHTA | ALL RIGHTS RESERVED
          </p>
          <a href="https://linkedin.com/in/abhishek-mehta-3137b9338" target="_blank" rel="noopener noreferrer" className="group flex items-center text-xs font-bold tracking-widest text-slate-500 uppercase transition-all duration-500 hover:text-blue-600">
            Website Developed by <span className="ml-1.5 text-slate-900 group-hover:text-blue-600 transition-colors duration-500">Abhishek Mehta</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/startupmybusiness.in.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { 
      name: 'ABOUT US', 
      href: '#about-us',
      subLinks: [
        { name: 'WHY WE', href: '#why-we' },
        { name: 'OUR CLIENTS', href: '#our-clients' }
      ]
    },
    { 
      name: 'SERVICES', 
      href: '#expertise',
      isMega: true,
      subLinks: [
        { name: 'Company Registration', href: '#expertise' },
        { name: 'LLP Registration', href: '#expertise' },
        { name: 'Section 8 Registration', href: '#expertise' },
        { name: 'Startup Registration', href: '#expertise' },
        { name: 'ISIN & Dematerialisation', href: '#expertise' },
        { name: 'Merger & Amalgamation', href: '#expertise' },
        { name: 'Trademark Registration', href: '#expertise' },
        { name: 'Legal Entity Identifier', href: '#expertise' },
        { name: 'ISO Registration', href: '#expertise' },
        { name: 'CSR Advisory', href: '#expertise' },
        { name: 'Income Tax & GST Services', href: '#expertise' },
        { name: 'Due Diligence & FEMA', href: '#expertise' },
        { name: 'IEPF Services', href: '#expertise' },
        { name: 'Loan Advisory', href: '#expertise' },
        { name: 'Subsidy Advisory', href: '#expertise' }
      ]
    },
    // 🚀 FIXED: Changed href from '#contact-us' to '#contact' to match Footer ID
    { name: 'CONTACT US', href: '#contact' }
  ];

  const handleSmoothScroll = (e, itemName, targetId) => {
    e.preventDefault();
    setActiveTab(itemName);
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Branding */}
        <a href="#home" onClick={(e) => handleSmoothScroll(e, 'HOME', '#home')} className="flex items-center gap-2 cursor-pointer">
          <img src={logoImage} alt="StartupMyBusiness Logo - Corporate Advisory & Registration Services" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
          <div className="flex flex-col" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-xl md:text-2xl font-black text-[#0F172A] uppercase leading-none">Startup</span>
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-[#2563EB] uppercase mt-0.5">MyBusiness</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.name, link.href)} 
                 className={`py-6 text-[11px] xl:text-xs font-extrabold tracking-[0.25em] uppercase transition-all duration-300 relative before:absolute before:bottom-4 before:left-0 before:h-px before:w-0 before:bg-blue-600 before:transition-all before:duration-500 hover:before:w-full ${activeTab === link.name ? 'text-blue-600 before:w-full' : 'text-slate-800 hover:text-blue-600'}`}>
                {link.name}
              </a>
              
              {link.subLinks && (
                <div className={`absolute top-[120%] bg-white border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-500 ease-[0.16,1,0.3,1] flex py-6 z-50 rounded-b-md ${
                  link.isMega 
                    ? 'w-225 -left-75 p-6' 
                    : 'w-56 left-0 flex-col py-3'
                }`}>
                  {/* 🚀 SCROLLABLE CONTAINER FOR 15 SERVICES */}
                  <div className={link.isMega ? 'grid grid-cols-3 gap-x-8 gap-y-3 max-h-[70vh] overflow-y-auto pr-2' : 'flex flex-col'}>
                    {link.subLinks.map(sub => (
                      <a key={sub.name} href={sub.href} onClick={(e) => handleSmoothScroll(e, sub.name, sub.href)}
                         className={`group/sub flex items-center px-4 py-2 text-[10px] font-bold tracking-widest text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors uppercase rounded-sm`}>
                        <span className="transform translate-x-0 group-hover/sub:translate-x-1 transition-transform duration-300">
                          {sub.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-slate-900"><Menu size={28}/></button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 overflow-y-auto">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-slate-900"><X size={32}/></button>
            <div className="flex flex-col gap-6 text-center w-full max-w-xs mt-16 mb-16">
              {navLinks.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-1">
                  <a href={item.href} onClick={(e) => handleSmoothScroll(e, item.name, item.href)} className="text-xl font-bold tracking-widest uppercase text-slate-900 py-3">
                    {item.name}
                  </a>
                  {item.subLinks && (
                    <div className="flex flex-col gap-1 w-full bg-slate-50/50 rounded-lg py-2">
                      {item.subLinks.map(sub => (
                        <a key={sub.name} href={sub.href} onClick={(e) => handleSmoothScroll(e, sub.name, sub.href)} className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 py-2 px-4 hover:text-blue-600 transition-colors block">
                          — {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
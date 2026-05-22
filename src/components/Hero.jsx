import React from 'react';
import { ShieldCheck, Building2, TrendingUp } from 'lucide-react';

const Hero = () => {
  // 🚀 WHATSAPP INTEGRATION LOGIC
  const whatsappNumber = "918087161706";
  const customMessage = "Hello CS Jitendra Mehta, I would like to book a Free Consultation for my business.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <section id="home" className="relative w-full bg-white pt-48 pb-32 flex flex-col items-center justify-center min-h-screen border-b border-slate-100">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 flex flex-col items-center text-center">

        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-slate-200"></div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-slate-400">
            Elite Corporate Advisory
          </span>
          <div className="w-10 h-px bg-slate-200"></div>
        </div>

        <h1 className="flex flex-col items-center justify-center w-full mb-16">
          <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-800 mb-3 tracking-tight">
            Start Your Business Journey Here...
          </span>
          <span 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-blue-600 italic tracking-tight leading-tight w-full md:whitespace-nowrap" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
           With a Trusted Legal Partner
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mb-16 px-2">
          <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-900">
            <div className="p-2 bg-blue-50 rounded-full">
              <ShieldCheck size={18} className="text-blue-600" />
            </div>
            Zero-Defect Compliance
          </div>
          <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-900">
            <div className="p-2 bg-blue-50 rounded-full">
              <Building2 size={18} className="text-blue-600" />
            </div>
            Strategic Structuring
          </div>
          <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-900">
            <div className="p-2 bg-blue-50 rounded-full">
              <TrendingUp size={18} className="text-blue-600" />
            </div>
            Investor-Ready
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto px-4 sm:px-0">
          {/* 🚀 UPDATED BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center px-8 md:px-10 py-4 bg-slate-950 text-white text-[11px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-blue-600 active:scale-95 rounded-sm"
          >
            Book Free Consultation
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#about-us"
            className="w-full sm:w-auto flex items-center justify-center px-8 md:px-10 py-4 bg-white text-slate-900 text-[11px] md:text-xs font-bold tracking-widest uppercase border border-slate-200 hover:border-slate-900 active:scale-95 transition-all duration-300 rounded-sm"
          >
            The Firm Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
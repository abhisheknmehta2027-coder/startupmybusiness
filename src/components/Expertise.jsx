import React from 'react';
import { 
  Building2, Users, Scale, Rocket, 
  BarChart3, GitMerge, ShieldCheck, Fingerprint, 
  Award, Leaf, Landmark, PiggyBank,
  FileSpreadsheet, Search, FileLock2 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { revealVariants } from '../constants/animations';

const Expertise = () => {
  const [ref, controls] = useScrollReveal();

  const services = [
    { title: "Company Registration", desc: "Flawless incorporation services ensuring a bulletproof legal foundation for private and public entities.", icon: <Building2 size={24} strokeWidth={1.5} /> },
    { title: "LLP Registration", desc: "Strategic drafting and registration of Limited Liability Partnerships for flexible corporate governance.", icon: <Users size={24} strokeWidth={1.5} /> },
    { title: "Section 8 Registration", desc: "Specialized compliance and advanced legal structuring for NGOs and non-profit organizations.", icon: <Scale size={24} strokeWidth={1.5} /> },
    { title: "Startup Registration", desc: "Complete advisory for DPIIT recognition, tax exemptions, and startup ecosystem compliance.", icon: <Rocket size={24} strokeWidth={1.5} /> },
    { title: "ISIN & Dematerialisation", desc: "Expert facilitation of ISIN generation and smooth transition of physical shares to digital format.", icon: <BarChart3 size={24} strokeWidth={1.5} /> },
    { title: "Merger & Amalgamation", desc: "End-to-end legal structuring for corporate consolidations, acquisitions, and strategic restructuring.", icon: <GitMerge size={24} strokeWidth={1.5} /> },
    { title: "Trademark Registration", desc: "Comprehensive brand protection, intellectual property audits, and secure trademark asset filing across jurisdictions.", icon: <ShieldCheck size={24} strokeWidth={1.5} /> },
    { title: "Legal Entity Identifier (LEI)", desc: "Seamless execution of global LEI codes ensuring compliance with regulatory bodies for institutional trade.", icon: <Fingerprint size={24} strokeWidth={1.5} /> },
    { title: "ISO Registration", desc: "Premium certification advisory to align your operational workflows with global quality benchmarks.", icon: <Award size={24} strokeWidth={1.5} /> },
    { title: "CSR Advisory", desc: "Strategic design and compliance tracking for Corporate Social Responsibility initiatives.", icon: <Leaf size={24} strokeWidth={1.5} /> },
    { title: "Income Tax & GST Services", desc: "End-to-end tax planning, seamless GST compliance, and strategic financial structuring for corporate entities.", icon: <FileSpreadsheet size={24} strokeWidth={1.5} /> },
    { title: "Due Diligence & FEMA", desc: "Rigorous legal audits, risk assessment, and expert navigation of Foreign Exchange Management Act regulations.", icon: <Search size={24} strokeWidth={1.5} /> },
    { title: "IEPF Services", desc: "Professional assistance in the recovery of shares, dividends, and seamless Investor Education and Protection Fund compliance.", icon: <FileLock2 size={24} strokeWidth={1.5} /> },
    { title: "Loan Advisory", desc: "Expert structuring, capital mapping, and seamless debt syndication support for commercial growth.", icon: <Landmark size={24} strokeWidth={1.5} /> },
    { title: "Subsidy Advisory", desc: "Comprehensive navigation of state and central government subsidies for industrialized setups.", icon: <PiggyBank size={24} strokeWidth={1.5} /> }
  ];

  return (
    <motion.section 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={revealVariants}
      id="expertise" 
      className="py-24 md:py-32 bg-white relative border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-slate-300"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-500">
              Comprehensive Advisory
            </span>
            <div className="w-10 h-px bg-slate-300"></div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            OUR <span className="text-blue-600 italic">SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              variants={revealVariants}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
              // 🚀 MOBILE TOUCH FEEDBACK ADDED
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col p-8 md:p-10 bg-white border border-slate-100 hover:border-blue-600 rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 mb-8">
                <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 
                className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 mb-4 transition-colors duration-300" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-10 grow">
                {item.desc}
              </p>

              <div className="mt-auto flex items-center text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                <span className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-2xl leading-none">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Expertise;
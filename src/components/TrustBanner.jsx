import React, { useState, useEffect, useRef } from 'react';
import { Building2, ShieldCheck, Globe, Award } from 'lucide-react';

const TrustBanner = () => {
  // 🚀 Scroll Detection Logic (100% UNTOUCHED)
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) observer.disconnect();
    };
  }, []);

  // 🚀 Smart Counter Component (100% UNTOUCHED)
  const AnimatedCounter = ({ end, suffix, text, isText }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible || isText) return;

      let startTime = null;
      const duration = 2500; 
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutProgress = progress * (2 - progress); 
        
        setCount(Math.floor(easeOutProgress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, isVisible, isText]);

    if (isText) return <span>{text}</span>;
    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={bannerRef} className="w-full bg-white py-14 md:py-20 border-b border-slate-100">
      <div className="max-w-360 mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-slate-100/80">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center w-full py-8 md:py-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2563EB]/5 mb-5 group">
              <Building2 size={24} className="text-[#2563EB]" strokeWidth={1.5} />
            </div>
            {/* 💎 DESIGN FIX: Playfair Display Serif font lagaya hai for Elite Editorial Look */}
            <h3 
              className="text-5xl md:text-[56px] font-bold text-[#0F172A] mb-3 leading-none tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <AnimatedCounter end={500} suffix="+" />
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">Trusted Businesses</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center w-full py-8 md:py-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2563EB]/5 mb-5 group">
              <ShieldCheck size={24} className="text-[#2563EB]" strokeWidth={1.5} />
            </div>
            <h3 
              className="text-5xl md:text-[56px] font-bold text-[#0F172A] mb-3 leading-none tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <AnimatedCounter end={100} suffix="%" />
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">Compliance Secured</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center w-full py-8 md:py-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2563EB]/5 mb-5 group">
              <Globe size={24} className="text-[#2563EB]" strokeWidth={1.5} />
            </div>
            <h3 
              className="text-5xl md:text-[56px] font-bold text-[#0F172A] mb-3 leading-none tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <AnimatedCounter isText={true} text="PAN India" />
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">India Presence</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center w-full py-8 md:py-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2563EB]/5 mb-5 group">
              <Award size={24} className="text-[#2563EB]" strokeWidth={1.5} />
            </div>
            <h3 
              className="text-5xl md:text-[56px] font-bold text-[#0F172A] mb-3 leading-none tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <AnimatedCounter end={10} suffix="+" />
            </h3>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">Years of Experience</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
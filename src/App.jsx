import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; 

import Preloader from './components/Preloader'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Industries from './components/Industries'; 
import About from './components/About';
import WhyWe from './components/WhyWe'; 
import Expertise from './components/Expertise'; 
import OurClients from './components/OurClients'; 
import Footer from './components/Footer'; 
import WhatsAppButton from './components/WhatsAppButton'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setStartCounters(true), 1100); 
    }, 2500); 
    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className="w-full">
        <Navbar />
        <main>
          <Hero />
          <TrustBanner startCounter={startCounters} />
          <Industries />
          <About />
          <WhyWe />
          <Expertise />
          {/* 🚀 Our Team has been completely removed from here */}
          <OurClients />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;
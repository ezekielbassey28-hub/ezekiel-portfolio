import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-light text-zinc-600 font-sans selection:bg-primary selection:text-white relative scroll-smooth overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-24 right-6 z-50 bg-zinc-800 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-primary hover:scale-110 transition-all duration-300 ${showBackToTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'py-4 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-extrabold text-dark tracking-tight">
          EB<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a></li>
          <li><a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a></li>
          <li><a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#contact" className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primaryHover hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
            Let's Talk
          </a>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden text-dark focus:outline-none">
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-white border-t border-zinc-100 shadow-xl py-4 px-6 flex flex-col space-y-4 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#about" onClick={toggleMobileMenu} className="text-base font-medium text-zinc-700 hover:text-primary">About</a>
        <a href="#services" onClick={toggleMobileMenu} className="text-base font-medium text-zinc-700 hover:text-primary">Services</a>
        <a href="#portfolio" onClick={toggleMobileMenu} className="text-base font-medium text-zinc-700 hover:text-primary">Portfolio</a>
        <a href="#contact" onClick={toggleMobileMenu} className="text-base font-medium text-zinc-700 hover:text-primary">Contact</a>
        <a href="#contact" onClick={toggleMobileMenu} className="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-primary rounded-lg">Let's Talk</a>
      </div>
    </nav>
  );
};

export default Navbar;
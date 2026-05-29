import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#09090b] text-zinc-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="text-2xl font-heading font-extrabold text-white tracking-tight block mb-4">
              EB<span className="text-primary">.</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Creating exceptional digital experiences that drive results and elevate brands globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-white/10"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/ezekiel-bassey-206b25395" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-white/10"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-white/10"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">My Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">My Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 Ezekiel Bassey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

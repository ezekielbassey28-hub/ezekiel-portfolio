import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gray-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* System Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-mono mb-8 border border-green-500/20">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          System Status: Online & Ready
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-gray-100">Architecting</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Digital Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          I build secure, scalable web applications and premium interfaces that transform complex ideas into seamless user experiences.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
            View Architecture
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors border border-gray-800">
            Initialize Contact
          </a>
        </div>

        {/* Technical Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-800">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white mb-1">100%</span>
            <span className="text-sm text-gray-400 font-mono tracking-tight">Custom Architecture</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white mb-1">99+</span>
            <span className="text-sm text-gray-400 font-mono tracking-tight">Lighthouse Scores</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white mb-1">Zero</span>
            <span className="text-sm text-gray-400 font-mono tracking-tight">Trust Security Focus</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white mb-1">Seamless</span>
            <span className="text-sm text-gray-400 font-mono tracking-tight">UI/UX Integration</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

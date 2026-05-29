import React from 'react';

const About = ({ profileImg = "https://via.placeholder.com/600x400" }) => {
  return (
    <section id="about" className="py-24 bg-gray-50 border-y border-zinc-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Bio Text & Link */}
          <div className="flex flex-col justify-center">
            <h4 className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-2">About Me</h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Dedicated <span className="whitespace-nowrap">Full-Stack</span> Developer
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              I am <span className="font-bold text-gray-900">Ezekiel Bassey</span>, a passionate full-stack web developer dedicated to creating exceptional digital experiences. With a focus on building secure, custom architecture from the ground up, I understand what it takes to build a successful online presence.
            </p>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              My approach combines robust engineering, strategic thinking, and modern technology to deliver solutions that not only look beautiful but also drive measurable results for your business.
            </p>
            
            <div>
              <a href="#contact" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group">
                Learn more about my process 
                <i className="fas fa-arrow-right ml-2 text-sm transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
          
          {/* RIGHT COLUMN: Photo + 2x2 Grid */}
          <div className="flex flex-col gap-8">
            
            {/* Professional Photo Section */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 h-64 md:h-72 rounded-3xl overflow-hidden border border-orange-500/30 shadow-[0_0_25px_rgba(249,115,22,0.15)] group">
              <img 
                src={profileImg} 
                alt="Ezekiel Bassey" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Optional: An inner gradient overlay for a premium polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* 4 Stat Cards (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="font-heading text-3xl font-bold text-gray-900 mb-1">10+</h4>
                <p className="text-xs md:text-sm font-medium text-zinc-500">Custom Projects</p>
              </div>
              
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-4">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4 className="font-heading text-3xl font-bold text-gray-900 mb-1">3+</h4>
                <p className="text-xs md:text-sm font-medium text-zinc-500">Years Experience</p>
              </div>
              
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center text-xl mb-4">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-1 truncate">Fluid</h4>
                <p className="text-xs md:text-sm font-medium text-zinc-500">UI/UX Integration</p>
              </div>
              
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center text-xl mb-4">
                  <i className="fas fa-star"></i>
                </div>
                <h4 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-1">Robust</h4>
                <p className="text-xs md:text-sm font-medium text-zinc-500">Backend System</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

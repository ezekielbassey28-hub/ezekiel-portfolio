import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-950 text-white py-24 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Label */}
        <h2 className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4">
          About Me
        </h2>
        
        {/* Main Heading */}
        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-gray-100">
          Your Dedicated Full-Stack Developer
        </h3>
        
        {/* Body Copy */}
        <div className="space-y-6 text-lg text-gray-400 leading-relaxed border-l-2 border-gray-800 pl-6">
          <p>
            I am <span className="text-white font-semibold">Ezekiel Bassey</span>, a passionate full-stack web developer dedicated to creating exceptional digital experiences. With a focus on building secure, custom architecture from the ground up, I understand what it takes to build a successful online presence.
          </p>
          <p>
            My approach combines robust engineering, strategic thinking, and modern technology to deliver solutions that not only look beautiful but also drive measurable results for your business.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;

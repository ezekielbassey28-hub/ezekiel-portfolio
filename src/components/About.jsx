import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-light border-y border-zinc-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">About Me</h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Your Dedicated Full-Stack Developer</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              I am <span className="font-bold text-dark">Ezekiel Bassey</span>, a passionate full-stack web developer dedicated to creating exceptional digital experiences. With a focus on building secure, custom architecture from the ground up, I understand what it takes to build a successful online presence.
            </p>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              My approach combines robust engineering, strategic thinking, and modern technology to deliver solutions that not only look beautiful but also drive measurable results for your business.
            </p>
            
            <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primaryHover transition-colors">
              Learn more about my process <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={cardVariants} className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h4 className="font-heading text-3xl font-bold text-dark mb-1">10+</h4>
              <p className="text-xs md:text-sm font-medium text-zinc-500">Custom Projects</p>
            </motion.div>
            
            <motion.div variants={cardVariants} className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-4">
                {/* Updated Icon for Experience */}
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4 className="font-heading text-3xl font-bold text-dark mb-1">3+</h4>
              <p className="text-xs md:text-sm font-medium text-zinc-500">Years Experience</p>
            </motion.div>
            
            <motion.div variants={cardVariants} className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center text-xl mb-4">
                <i className="fas fa-bolt"></i>
              </div>
              {/* Added responsive text sizing (text-2xl to text-3xl) */}
              <h4 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-1 truncate">Seamless</h4>
              <p className="text-xs md:text-sm font-medium text-zinc-500">UI/UX Integration</p>
            </motion.div>
            
            <motion.div variants={cardVariants} className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center text-xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              {/* Added responsive text sizing (text-2xl to text-3xl) */}
              <h4 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-1">Robust</h4>
              <p className="text-xs md:text-sm font-medium text-zinc-500">Backend System</p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

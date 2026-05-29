import React from 'react';
import { motion } from 'framer-motion';

// Parent container variant for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Time between each card popping up
    }
  }
};

// Individual card variant
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Animates when in view */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">My Services</h4>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Engineering & Architecture</h2>
          <p className="text-zinc-500 text-lg">I build secure, custom web applications and high-performance interfaces from the ground up, delivering end-to-end solutions designed to solve your specific business problems.</p>
        </motion.div>

        {/* The Grid controls the staggering of the cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters screen
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="font-heading text-xl font-bold text-dark mb-3">Web Development</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Custom, responsive websites built with modern technologies to meet your specific business requirements.</p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3 className="font-heading text-xl font-bold text-dark mb-3">E-commerce Solutions</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Powerful, secure online stores designed to perfectly showcase your products and drive massive conversions.</p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="font-heading text-xl font-bold text-dark mb-3">SEO Optimization</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Get your website to the top of search results and increase organic traffic with my proven, data-driven SEO strategies.</p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="font-heading text-xl font-bold text-dark mb-3">Mobile App Development</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Native and cross-platform mobile applications that deeply engage your users on both iOS and Android.</p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="font-heading text-xl font-bold text-dark mb-3">API & Backend</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Robust server-side architecture and custom API development to ensure your apps run smoothly and securely.</p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="font-heading text-xl font-bold text-dark mb-3">UI/UX Design</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Comprehensive visual branding solutions and user-centered design systems that make your business truly stand out.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

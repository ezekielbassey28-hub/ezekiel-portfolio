import React from 'react';
import { motion } from 'framer-motion';

// Import your local project images
import tamsakiImage from '../assets/tamsaki-project.jpg';
import westportImage from '../assets/westportng_project.JPG';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <>
      {/* TECHNOLOGY SECTION */}
      <section className="py-20 bg-light border-y border-zinc-200/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-3">Powered by Modern Technology</h2>
            <p className="text-zinc-500">I utilize the latest frameworks to build scalable, secure, and future-proof solutions and more.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: "fab fa-react text-cyan-400", name: "React" },
              { icon: "fab fa-node-js text-green-500", name: "Node.js" },
              { icon: "fab fa-python text-blue-500", name: "Python" },
              { icon: "fas fa-leaf text-emerald-600", name: "Django" },
              { icon: "fas fa-location-arrow text-teal-400", name: "Dart" },
              { icon: "fas fa-wind text-cyan-500", name: "Tailwind CSS" },
              { icon: "fab fa-js text-yellow-400", name: "JavaScript" },
              { icon: "fas fa-cube text-green-400", name: "GSAP" }
            ].map((tech, index) => (
              <motion.div key={index} variants={popIn} className="flex items-center gap-3 px-6 py-3 bg-white border border-zinc-200 rounded-full shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                <i className={`${tech.icon} text-xl`}></i>
                <span className="font-semibold text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Selected Work</h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">My Portfolio</h2>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:max-w-4xl lg:mx-auto gap-12"
          >
            {/* Project 1: Tamsaki */}
            <motion.div variants={fadeUp} className="group bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col">
              <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                <img 
                  src={tamsakiImage} 
                  alt="Concierge Web Design" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10 bg-white">
                <h3 className="font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors mb-4">Concierge Web Design</h3>
                <button className="text-sm font-semibold text-primary hover:text-primaryHover transition-colors flex items-center gap-2">
                  View Case Study <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </div>
            </motion.div>

            {/* Project 2: Westport */}
            <motion.div variants={fadeUp} className="group bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col">
              <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                <img 
                  src={westportImage} 
                  alt="Corporate Web Design" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10 bg-white">
                <h3 className="font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors mb-4">Corporate Web Design</h3>
                <button className="text-sm font-semibold text-primary hover:text-primaryHover transition-colors flex items-center gap-2">
                  View Case Study <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;

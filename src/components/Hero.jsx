import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:64px_64px] opacity-15 z-0"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary filter blur-[100px] opacity-40 z-0"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-rose-600 filter blur-[100px] opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN - TEXT */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-300 font-semibold text-xs mb-6 tracking-wide uppercase backdrop-blur-sm"
          >
            System Status: Online & Ready
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Digital Solutions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed"
          >
            I build secure, scalable web applications and premium interfaces that transform complex ideas into seamless user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="mailto:ezekielbassey28@gmail.com" className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primaryHover transition-all text-center shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:border-white/30 hover:bg-white/10 transition-all text-center backdrop-blur-sm flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-green-400"></i> WhatsApp
            </a>
          </motion.div>
        </div>
        
        {/* RIGHT COLUMN - CODE GRAPHIC */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="hidden lg:block relative h-[500px] w-full rounded-3xl bg-[#0d1117] border border-white/10 overflow-hidden shadow-2xl shadow-black/50 animate-float"
        >
          <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/10 flex items-center px-4 space-x-2 backdrop-blur-md">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="mx-auto text-xs text-zinc-500 font-mono">system_init.js</div>
          </div>
          
          <div className="p-8 pt-16 font-mono text-sm leading-relaxed text-zinc-300">
            <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
            <p className="ml-4">name: <span className="text-green-400">'Your Name'</span>,</p>
            <p className="ml-4">role: <span className="text-green-400">'Full-Stack Engineer'</span>,</p>
            <p className="ml-4">stack: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Tailwind'</span>],</p>
            <p className="ml-4">status: <span className="text-amber-400">true</span></p>
            <p>{'};'}</p>
            <br />
            <p><span className="text-purple-400">function</span> <span className="text-blue-400">buildProject</span>(<span className="text-orange-400">idea</span>) {'{'}</p>
            <p className="ml-4"><span className="text-purple-400">return</span> idea.<span className="text-blue-400">compile</span>().<span className="text-blue-400">deploy</span>();</p>
            <p>{'}'}</p>
            <p className="mt-4"><span className="text-primary font-bold animate-pulse">_</span></p>
          </div>

          <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg shadow-lg flex items-center gap-3 z-10">
            <i className="fab fa-react text-cyan-400 text-xl"></i>
            <i className="fab fa-js text-yellow-400 text-xl"></i>
            <i className="fab fa-node-js text-green-500 text-xl"></i>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.target);

    // Your private Web3Forms Access Key
    formData.append("access_key", "2349edbf-0cdc-4820-b77e-baea1cc14ef4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsModalOpen(true); // Trigger the satisfying pop-up
        event.target.reset(); // Clear the form
        
        // Optional: Auto-close the modal after 5 seconds
        setTimeout(() => {
          setIsModalOpen(false);
        }, 5000);
      } else {
        setIsSubmitting(false);
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Submission failed:", error);
      setResult("Error submitting form. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      
      {/* Satisfying Success Pop-up */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl max-w-sm w-full text-center relative"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Transmission Successful</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Thank you for reaching out. I have received your project details and will be in touch shortly to discuss the architecture.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold rounded-xl transition-all"
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600 rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-lg">
             Get in touch to discuss your custom infrastructure and full-stack development needs. Let's architect a secure, high-performance solution for your business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <p className="text-sm text-zinc-400 font-medium">Email Me</p>
                  <a href="mailto:ezekielbassey28@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">ezekielbassey28@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <i className="fab fa-whatsapp text-green-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-zinc-400 font-medium">WhatsApp</p>
                  <a href="https://wa.me/+2349066789052" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-green-400 transition-colors">09066789052</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">First Name</label>
                  <input type="text" name="first_name" required className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Last Name</label>
                  <input type="text" name="last_name" required className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Email Address</label>
                <input type="email" name="email" required className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primaryHover transition-colors shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Transmitting...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Error Message Display */}
              {result && !isModalOpen && (
                <p className="text-center text-sm font-medium text-rose-400 mt-4">
                  {result}
                </p>
              )}
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

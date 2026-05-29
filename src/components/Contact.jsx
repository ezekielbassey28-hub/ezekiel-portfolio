import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Transmitting message...");
    const formData = new FormData(event.target);

  
    formData.append("access_key", "2349edbf-0cdc-4820-b77e-baea1cc14ef4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("System message: Transmission successful. I will be in touch soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Error: Transmission failed. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* The New Architect CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Next Project?</h2>
          <p className="text-gray-400">
            Get in touch to discuss your custom infrastructure and full-stack development needs. Let's architect a secure, high-performance solution for your business.
          </p>
        </div>

        {/* The Functional Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Your Name" 
            className="p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
          />
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Your Email" 
            className="p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
          />
          <textarea 
            name="message" 
            required 
            rows="5" 
            placeholder="Project Details & Architecture Needs..." 
            className="p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
          ></textarea>
          
          <button 
            type="submit" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
          >
            Initialize Connection
          </button>
        </form>

        {/* Status Message Display */}
        <span className="block mt-6 text-center text-sm font-mono text-emerald-400">
          {result}
        </span>

      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="code-block p-5">
              <div className="mb-3 text-sm font-mono" style={{ color: 'var(--vs-green)' }}>
                // ContactInfo.js
              </div>
              <div className="font-mono text-sm">
                <p><span style={{ color: 'var(--vs-purple)' }}>const</span> <span style={{ color: 'var(--vs-yellow)' }}>contact</span> = <span style={{ color: 'var(--vs-orange)' }}>&#123;</span></p>
                <p className="ml-4"><span style={{ color: 'var(--vs-orange)' }}>email:</span> <span style={{ color: 'var(--vs-green)' }}>'manirohit221004@gmail.com'</span>,</p>
                <p className="ml-4"><span style={{ color: 'var(--vs-orange)' }}>phone:</span> <span style={{ color: 'var(--vs-green)' }}>'+91-7075812083'</span>,</p>
                <p className="ml-4"><span style={{ color: 'var(--vs-orange)' }}>github:</span> <span style={{ color: 'var(--vs-green)' }}>'github.com/manirht'</span>,</p>
                <p className="ml-4"><span style={{ color: 'var(--vs-orange)' }}>location:</span> <span style={{ color: 'var(--vs-green)' }}>'Lucknow, India'</span></p>
                <p><span style={{ color: 'var(--vs-orange)' }}>&#125;</span>;</p>
              </div>
            </div>
            
            <div className="mt-2 space-y-4">
              <a 
                href="mailto:manirohit221004@gmail.com" 
                className="flex items-center p-3 rounded-lg transition hover:bg-gray-700"
                style={{ 
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}
              >
                <FaEnvelope className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>manirohit221004@gmail.com</span>
              </a>
              
              <a 
                href="tel:+917075812083" 
                className="flex items-center p-3 rounded-lg transition hover:bg-gray-700"
                style={{ 
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}
              >
                <FaPhone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+91 7075812083</span>
              </a>
              
              <a 
                href="https://github.com/manirht" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg transition hover:bg-gray-700"
                style={{ 
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}
              >
                <FaGithub className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>github.com/manirht</span>
              </a>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <h3 className="text-xl mb-5 font-medium" style={{ color: 'var(--accent-primary)' }}>Send me a message</h3>
            
            {submitMessage && (
              <div className={`mb-5 p-3 rounded text-white ${
                submitMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'
              }`}>
                {submitMessage.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn px-6 py-3 flex items-center justify-center w-full transition hover:bg-blue-600 hover:text-white"
                style={{ 
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  backgroundColor: isSubmitting ? 'var(--bg-secondary)' : 'transparent'
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
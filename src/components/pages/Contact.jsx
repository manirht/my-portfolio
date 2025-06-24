import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
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
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-container">
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            {/* Code Block with VS Code Header */}
            <div className="code-block">
              <div className="code-header">
                <div className="window-controls">
                  <div className="control close"></div>
                  <div className="control minimize"></div>
                  <div className="control maximize"></div>
                </div>
                <div className="file-name">ContactInfo.js</div>
              </div>
              
              <div className="code-content">
                <p><span className="code-purple">const</span> <span className="code-yellow">contact</span> = <span className="code-orange">&#123;</span></p>
                <p className="indent"><span className="code-orange">email:</span> <span className="code-green">'manirohit221004@gmail.com'</span>,</p>
                <p className="indent"><span className="code-orange">phone:</span> <span className="code-green">'+91-7075812083'</span>,</p>
                <p className="indent"><span className="code-orange">github:</span> <span className="code-green">'github.com/manirht'</span>,</p>
                <p className="indent"><span className="code-orange">location:</span> <span className="code-green">'Lucknow, India'</span></p>
                <p><span className="code-orange">&#125;</span>;</p>
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="contact-cards">
              <a 
                href="mailto:manirohit221004@gmail.com" 
                className="contact-card"
              >
                <div className="card-icon">
                  <FaEnvelope className="icon" style={{ color: 'var(--vs-blue)' }} />
                </div>
                <div className="card-content">
                  <div className="card-label">Email</div>
                  <div className="card-value">manirohit221004@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+917075812083" 
                className="contact-card"
              >
                <div className="card-icon">
                  <FaPhone className="icon" style={{ color: 'var(--vs-green)' }} />
                </div>
                <div className="card-content">
                  <div className="card-label">Phone</div>
                  <div className="card-value">+91 7075812083</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/manirht" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="card-icon">
                  <FaGithub className="icon" style={{ color: 'var(--vs-purple)' }} />
                </div>
                <div className="card-content">
                  <div className="card-label">GitHub</div>
                  <div className="card-value">github.com/manirht</div>
                </div>
              </a>
              
              <div className="contact-card">
                <div className="card-icon">
                  <FaMapMarkerAlt className="icon" style={{ color: 'var(--vs-orange)' }} />
                </div>
                <div className="card-content">
                  <div className="card-label">Location</div>
                  <div className="card-value">Lucknow, India</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="contact-form">
            {/* Form Header */}
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>I'll respond within 24 hours</p>
            </div>
            
            {/* Form Content */}
            <div className="form-content">
              {submitMessage && (
                <div className={`form-message ${submitMessage.type === 'success' ? 'success' : 'error'}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="form-fields">
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && (
                    <p className="error-text">{errors.name}</p>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && (
                    <p className="error-text">{errors.email}</p>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:brij2308@gmail.com">brij2308@gmail.com</a></p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p><a href="tel:+17323932379">+1 (732) 393-2379</a></p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Jersey City, NJ</p>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/brijesh-gajjar-28700811/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              <a href="https://tinyurl.com/3bu6ac29" target="_blank" rel="noopener noreferrer" className="social-icon">Portfolio</a>
              <a href="#" className="social-icon">Instagram</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

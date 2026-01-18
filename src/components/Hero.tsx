import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Brijesh Gajjar</h1>
        <p className="hero-subtitle">Pre-Press & Graphic Designer | Print & Digital Specialist</p>
        <p style={{ fontSize: '1rem', color: 'var(--text-color)', marginBottom: '2rem', lineHeight: '1.8' }}>
          15+ years of experience designing impactful digital & print graphics. Expert in prepress production, print optimization, and creative solutions that elevate brand identity.
        </p>
        <div className="hero-buttons">
          <a href="#projects" style={{ textDecoration: 'none' }}><button className="btn btn-primary">View My Work</button></a>
          <a href="#contact" style={{ textDecoration: 'none' }}><button className="btn btn-secondary">Get In Touch</button></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-avatar">
          {!imageLoaded && (
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <circle cx="100" cy="100" r="100" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="70" r="30" fill="white" opacity="0.9" />
              <path d="M 60 140 Q 100 160 140 140" fill="white" opacity="0.9" />
            </svg>
          )}
          <img 
            src="/personal pic.jpg" 
            alt="Brijesh Gajjar" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: imageLoaded ? 'block' : 'none' }} 
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

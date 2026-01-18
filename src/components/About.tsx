import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              15+ years of experience designing impactful digital & print graphics, delivering creative solutions that elevated brand identity. Increased social media engagement by 45% through compelling visuals aligned with brand campaigns.
            </p>
            <p>
              Expert in Adobe Creative Suite and prepress production with proficiency in foil stamping, die cutting, offset, and digital printing. Proven collaborator who has partnered with cross-functional teams across 7+ platforms. Strong ability to manage 10+ concurrent projects, consistently meeting deadlines without sacrificing quality.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>250+</h3>
                <p>Print Files Optimized</p>
              </div>
              <div className="stat">
                <h3>30%</h3>
                <p>Error Reduction</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

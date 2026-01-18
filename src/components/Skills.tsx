import React from 'react';
import '../styles/Skills.css';

interface SkillCategory {
  category: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillsData: SkillCategory[] = [
    {
      category: 'Adobe Creative Suite',
      skills: ['Photoshop', 'Illustrator', 'InDesign', 'Adobe Acrobat', 'Kodak Workshop', 'Kodak Preps']
    },
    {
      category: 'Prepress & Production',
      skills: ['Pre-Flighting & Proofing', 'Foil Stamping', 'Die Cutting', 'Offset Printing', 'Digital Printing', 'Imposition', 'Trapping & Bleed Setup', 'RIP Software', 'Prinergy']
    },
    {
      category: 'Design & Technical',
      skills: ['Print Design', 'Digital Design', 'Magazine Layout', 'Cover Design', 'Typography', 'Branding & Identity', 'Infographics', 'Color Management', 'CMYK', 'Pantone']
    },
    {
      category: 'Professional Skills',
      skills: ['Quality Control', 'Customer Communication', 'Project Organization', 'Team Collaboration', 'File Preparation', 'MAC & PC Proficiency', 'Workflow Automation']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-progress"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

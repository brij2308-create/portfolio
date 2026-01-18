import React from 'react';
import '../styles/Experience.css';

interface Job {
  id: number;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Pre-Press Graphic Designer',
      company: 'PDQ PRINT CENTER',
      duration: '04/2025 - Current',
      responsibilities: [
        'Prepared and optimized 250+ print files for foil stamping, die cutting, offset, and digital presses',
        'Improved file processing efficiency by 25% by streamlining preflight and imposition workflows',
        'Collaborated with designers and clients to resolve 100+ file issues monthly',
        'Implemented standardized color profiles achieving consistent brand colors across substrates',
        'Decreased print production errors by 30%, saving time and material waste'
      ]
    },
    {
      id: 2,
      title: 'Pre-Press Graphic Designer',
      company: 'UNIVERSAL PRINTING COMPANY LLC',
      duration: '07/2024 - 01/2025',
      responsibilities: [
        'Optimized print production processes using Kodak Workshop, Enfocus Pitstop, and Prinergy',
        'Reduced print errors by 30% and optimized workflow efficiency',
        'Designed digital campaigns and branding assets across web and social media',
        'Boosted client brand visibility by 30% in 12 months',
        'Introduced modern design trends that reduced creative turnaround time by 20%'
      ]
    },
    {
      id: 3,
      title: 'Graphic Designer',
      company: 'NATIONAL GEOGRAPHIC TRAVELLER INDIA',
      duration: '04/2017 - 12/2022',
      responsibilities: [
        'Designed 200+ magazine issues including layouts, covers, and feature spreads',
        'Improved reader engagement by 30% through innovative design and visual storytelling',
        'Led rebranding initiative improving brand recognition by 25%',
        'Created engaging UI/UX assets enhancing app retention by 15%',
        'Produced high-impact marketing graphics contributing to 40% follower growth'
      ]
    },
    {
      id: 4,
      title: 'Graphic Designer',
      company: 'PAPRIKA MEDIA PVT. LTD.',
      duration: '10/2010 - 08/2014',
      responsibilities: [
        'Developed branding guidelines and asset libraries ensuring consistency across 100+ campaigns',
        'Designed and delivered print-ready materials supporting campaigns with 12% ROI increase',
        'Assisted senior designers executing cross-channel marketing campaigns',
        'Recognized as "Rising Talent" for exceeding design quality standards',
        'Gained hands-on expertise with fast-paced project cycles'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {jobs.map((job, index) => (
            <div key={job.id} className="experience-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== jobs.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <span className="duration">{job.duration}</span>
                </div>
                <ul className="responsibilities">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

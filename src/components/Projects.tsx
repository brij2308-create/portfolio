import React, { useState } from 'react';
import '../styles/Projects.css';

interface DesignCategory {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const designCategories: DesignCategory[] = [
    {
      id: 1,
      title: 'Packaging Design',
      description: 'Professional packaging and product box designs',
      images: [
        '/Packaging/Cylinders 2 [Converted]_Packaging.jpg',
        '/Packaging/Jonga Jeans_Box_2_01.jpg'
      ]
    },
    {
      id: 2,
      title: 'Labeling Design',
      description: 'Creative label and sticker designs',
      images: []
    },
    {
      id: 3,
      title: 'Flyers Designs',
      description: 'Professional flyer designs for various industries and campaigns',
      images: [
        '/Flyers/14199688_880872932049032_6251388957033861702_n.jpg',
        '/Flyers/14560199_899414883528170_6996376734785313455_o.jpg',
        '/Flyers/Banner-11-with-Hookfish-Logo.jpg',
        '/Flyers/EBS-Flyer.jpg',
        '/Flyers/ELS-Mailer.jpg',
        '/Flyers/fd1.jpg',
        '/Flyers/Flyer3.jpg',
        '/Flyers/PPL+ad2.jpg',
        '/Flyers/PPL+ad3.jpg',
        '/Flyers/PPL+ad4.jpg',
        '/Flyers/PPL+Offices+in+india+opt+1.jpg',
        '/Flyers/Whatsapp-Banner_Coffee.jpg',
        '/Flyers/Whatsapp-Banner_Yoga.jpg',
        '/Flyers/WNS_Talent-Management.jpg'
      ]
    },
    {
      id: 4,
      title: 'Brochure Designs',
      description: 'Comprehensive brochure and catalog designs',
      images: [
        '/Brochures/10-10-11+brochure+deisgn_Page_01.jpg',
        '/Brochures/10-10-11+brochure+deisgn_Page_02.jpg',
        '/Brochures/10-10-11+brochure+deisgn_Page_03.jpg',
        '/Brochures/10-10-11+brochure+deisgn_Page_04.jpg',
        '/Brochures/10-10-11+brochure+deisgn_Page_05.jpg',
        '/Brochures/10-10-11+brochure+deisgn_Page_06.jpg',
        '/Brochures/10-10-11+brochure+deisgn_Page_07.jpg',
        '/Brochures/vivanta+brochure_Page_1.jpg',
        '/Brochures/vivanta+brochure_Page_2.jpg',
        '/Brochures/vivanta+brochure_Page_3.jpg',
        '/Brochures/vivanta+brochure_Page_4.jpg',
        '/Brochures/vivanta+brochure_Page_5.jpg'
      ]
    },
    {
      id: 5,
      title: 'Social Media Designs',
      description: 'Eye-catching social media graphics and posts',
      images: [
        '/Social Media/11.jpg',
        '/Social Media/Ad1-01.jpg',
        '/Social Media/Ad4-01.jpg',
        '/Social Media/Airwings-Banner-[Recovered].jpg',
        '/Social Media/Airwings-Banner3.jpg',
        '/Social Media/DCAT-Meet-Post_New.jpg',
        '/Social Media/FB+Cover_3.jpg',
        '/Social Media/FB+Cover_6.jpg',
        '/Social Media/Harmony-Group-presentation_2.jpg',
        '/Social Media/Kodak#TRIVIA.jpg',
        '/Social Media/Monsoon-Offer.jpg'
      ]
    },
    {
      id: 6,
      title: 'Emailer Designs',
      description: 'Engaging email marketing templates and campaigns',
      images: [
        '/Emailers/2+Mailer+2.jpg',
        '/Emailers/2+Mailer+22.jpg',
        '/Emailers/2+Mailer+23.jpg',
        '/Emailers/2+Mailer+24.jpg',
        '/Emailers/dhaval_Mailer_30-9-16.jpg',
        '/Emailers/Gram+Samruddhi+Emailer.jpg',
        '/Emailers/Mailer_1.jpg',
        '/Emailers/Mailer_3.jpg',
        '/Emailers/Yamaha+Mailer.jpg'
      ]
    },
    {
      id: 7,
      title: 'Presentation Designs',
      description: 'Professional presentation decks and slide designs',
      images: [
        '/Presentations/Shamrock+ERP+Presentation1_Page_01.jpg',
        '/Presentations/Shamrock+ERP+Presentation1_Page_02.jpg',
        '/Presentations/Shamrock+ERP+Presentation1_Page_03.jpg',
        '/Presentations/Shamrock+ERP+Presentation1_Page_04.jpg',
        '/Presentations/Shamrock+ERP+Presentation1_Page_05.jpg',
        '/Presentations/Shamrock+ERP+Presentation1_Page_06.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_1.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_2.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_3.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_4.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_5.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_6.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_7.jpg',
        '/Presentations/Shamrock+NViro+PPT_Page_8.jpg'
      ]
    }
  ];

  const currentImages = designCategories[selectedCategory].images;

  const openImage = (image: string) => {
    setSelectedImage(image);
    setImageIndex(currentImages.indexOf(image));
  };

  const closeViewer = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (imageIndex < currentImages.length - 1) {
      const nextIdx = imageIndex + 1;
      setImageIndex(nextIdx);
      setSelectedImage(currentImages[nextIdx]);
    }
  };

  const prevImage = () => {
    if (imageIndex > 0) {
      const prevIdx = imageIndex - 1;
      setImageIndex(prevIdx);
      setSelectedImage(currentImages[prevIdx]);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, imageIndex, currentImages]);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Design Work</h2>
        <p className="section-subtitle">Explore my portfolio across different design categories</p>
        
        <div className="category-tabs">
          {designCategories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id - 1 ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id - 1)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="category-content">
          <h3>{designCategories[selectedCategory].title}</h3>
          <p>{designCategories[selectedCategory].description}</p>
          
          {designCategories[selectedCategory].images.length > 0 ? (
            <div className="gallery-grid">
              {designCategories[selectedCategory].images.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => openImage(image)}>
                  <img src={image} alt={`Design ${index + 1}`} />
                </div>
              ))}
            </div>
          ) : (
            <div className="coming-soon">
              <p>More designs coming soon...</p>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="image-viewer-overlay" onClick={closeViewer} onContextMenu={(e) => e.preventDefault()}>
          <div className="image-viewer-container" onClick={(e) => e.stopPropagation()} onContextMenu={(e) => e.preventDefault()}>
            <button className="close-btn" onClick={closeViewer}>✕</button>
            <button className="nav-btn prev-btn" onClick={prevImage} disabled={imageIndex === 0}>‹</button>
            <img src={selectedImage} alt="Full view" className="viewer-image" onContextMenu={(e) => e.preventDefault()} draggable={false} />
            <button className="nav-btn next-btn" onClick={nextImage} disabled={imageIndex === currentImages.length - 1}>›</button>
            <div className="image-counter">{imageIndex + 1} / {currentImages.length}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

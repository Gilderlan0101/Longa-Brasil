// src/components/AdBanner/AdBanner.jsx
import React from 'react';
import './Banner.css';

const AdBanner = ({ 
  type = 'small', // 'small', 'medium', 'large'
  position = 'right', // 'left', 'right', 'center'
  content = null 
}) => {
  const getAdSize = () => {
    switch (type) {
      case 'small': return { width: '300px', height: '250px' };
      case 'medium': return { width: '728px', height: '90px' };
      case 'large': return { width: '970px', height: '250px' };
      default: return { width: '300px', height: '250px' };
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case 'left': return 'ad-left';
      case 'right': return 'ad-right';
      case 'center': return 'ad-center';
      default: return '';
    }
  };

  const defaultContent = {
    title: 'Patrocinado',
    description: 'Anúncio',
    cta: 'Saiba Mais',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop'
  };

  const adContent = content || defaultContent;
  const size = getAdSize();
  const positionClass = getPositionClass();

  return (
    <div 
      className={`ad-banner ${positionClass}`}
      style={{ width: size.width, height: size.height }}
    >
      <div className="ad-label">Anúncio</div>
      
      <div className="ad-content">
        <div className="ad-image">
          <img src={adContent.imageUrl} alt={adContent.title} />
        </div>
        
        <div className="ad-text">
          <h4 className="ad-title">{adContent.title}</h4>
          {adContent.description && (
            <p className="ad-description">{adContent.description}</p>
          )}
        </div>
        
        <a 
          href={adContent.link} 
          className="ad-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {adContent.cta}
        </a>
      </div>
      
      <button className="ad-close" aria-label="Fechar anúncio">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default AdBanner;
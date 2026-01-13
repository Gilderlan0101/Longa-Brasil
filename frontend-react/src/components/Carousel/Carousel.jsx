// src/components/Carousel/Carousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items = [], autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleItemClick = (item) => {
    // This will be handled by parent component
    console.log('Carousel item clicked:', item);
    if (item.onClick) {
      item.onClick();
    }
  };

  useEffect(() => {
    if (!autoPlay || isPaused || items.length === 0) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, isPaused, items.length, interval]);

  if (!items || items.length === 0) {
    return (
      <div className="carousel-container">
        <div className="carousel-empty">
          <p>Nenhum banner disponível</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-slide">
        <img 
          src={items[currentIndex].imageUrl} 
          alt={items[currentIndex].title}
          className="carousel-image"
        />
        <div className="carousel-overlay">
          <div className="carousel-content">
            <h2 className="carousel-title">{items[currentIndex].title}</h2>
            <p className="carousel-description">{items[currentIndex].description}</p>
            <button 
              className="carousel-button"
              onClick={() => handleItemClick(items[currentIndex])}
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>

      <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
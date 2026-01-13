// src/components/MovieCard/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onClick }) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return '#4CAF50';
    if (rating >= 6) return '#FFC107';
    return '#F44336';
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <div className="movie-poster">
        <img src={movie.posterUrl} alt={movie.title} />
        <div className="movie-rating-badge" style={{ backgroundColor: getRatingColor(movie.rating) }}>
          {movie.rating.toFixed(1)}
        </div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-duration">{movie.duration}</span>
          <span className="movie-genre">{movie.genre}</span>
        </div>
        
        <div className="movie-director-section">
          <h4 className="section-label">Direção</h4>
          <p className="movie-director">{movie.director}</p>
        </div>
        
        <div className="movie-cast-section">
          <h4 className="section-label">Elenco Principal</h4>
          <div className="cast-container">
            {movie.cast.slice(0, 4).map((actor, index) => (
              <div key={index} className="cast-member">
                <img 
                  src={actor.photoUrl} 
                  alt={actor.name}
                  className="cast-photo"
                />
                <span className="cast-name">{actor.name}</span>
              </div>
            ))}
            {movie.cast.length > 4 && (
              <div className="cast-more">
                +{movie.cast.length - 4}
              </div>
            )}
          </div>
        </div>
        
        <div className="movie-tags">
          {movie.tags.map((tag, index) => (
            <span key={index} className="movie-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
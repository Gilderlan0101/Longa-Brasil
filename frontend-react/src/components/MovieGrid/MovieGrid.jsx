// src/components/MovieGrid/MovieGrid.jsx
import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movies = [], itemsPerPage = 12 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');

  const handleMovieClick = (movie) => {
    // This will be handled by parent component
    console.log('Movie clicked:', movie);
    // In a real app, this would navigate to movie detail page
  };

  const filteredMovies = filter === 'all' 
    ? movies 
    : movies.filter(movie => movie.genre.toLowerCase().includes(filter.toLowerCase()));

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const getUniqueGenres = () => {
    const genres = new Set();
    movies.forEach(movie => {
      movie.genre.split('/').forEach(g => genres.add(g.trim()));
    });
    return ['all', ...Array.from(genres)];
  };

  if (!movies || movies.length === 0) {
    return (
      <div className="movie-grid-empty">
        <i className="fas fa-film"></i>
        <h3>Nenhum filme disponível no momento</h3>
        <p>Volte em breve para conferir as novidades!</p>
      </div>
    );
  }

  return (
    <div className="movie-grid-container">
      <div className="movie-grid-filters">
        <h3 className="filter-title">Filtrar por Gênero:</h3>
        <div className="filter-buttons">
          {getUniqueGenres().map((genre, index) => (
            <button
              key={index}
              className={`filter-button ${filter === genre ? 'active' : ''}`}
              onClick={() => handleFilterChange(genre)}
            >
              {genre === 'all' ? 'Todos' : genre}
            </button>
          ))}
        </div>
      </div>

      <div className="movie-grid">
        {currentMovies.map((movie, index) => (
          <MovieCard 
            key={movie.id || index} 
            movie={movie}
            onClick={handleMovieClick}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNumber}
                className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
          
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  const navigateTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const searchTerm = e.target.value;
      // Search functionality will be implemented in parent component
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <i className="fas fa-film"></i>
          <h1>Longa Brasil</h1>
        </div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => navigateTo('home')}
              >
                Início
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => navigateTo('movies')}
              >
                Filmes
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => navigateTo('series')}
              >
                Séries
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => navigateTo('about')}
              >
                Sobre
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => navigateTo('contact')}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Buscar filmes, séries..." 
            onKeyPress={handleSearch}
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
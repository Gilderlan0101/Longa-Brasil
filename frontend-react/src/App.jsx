// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import MovieGrid from './components/MovieGrid/MovieGrid';
import AdBanner from './components/AdBanner/AdBanner';
import CookieConsent from './components/CookieConsent/CookieConsent';
import './App.css';

function App() {
  // Sample data for carousel
  const carouselItems = [
    {
      id: 1,
      title: "Cidade das Sombras",
      description: "Um suspense emocionante que explora os segredos de uma pequena cidade do interior brasileiro.",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      onClick: () => console.log('Navigating to movie 1')
    },
    {
      id: 2,
      title: "Samba na Alma",
      description: "A história de amor e superação de um dançarino que busca seu lugar no carnaval do Rio.",
      imageUrl: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      onClick: () => console.log('Navigating to movie 2')
    },
    {
      id: 3,
      title: "Herança Amazônica",
      description: "Uma aventura épica na floresta amazônica revelando segredos ancestrais.",
      imageUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      onClick: () => console.log('Navigating to movie 3')
    }
  ];

  // Sample data for movies | Add more movies here.
  const movies = [
    {
      id: 1,
      title: "Cidade das Sombras",
      year: "2023",
      duration: "2h 18min",
      genre: "Suspense/Drama",
      rating: 8.7,
      posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      director: "Ana Silva",
      cast: [
        { name: "Rodrigo Santoro", photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" },
        { name: "Taís Araújo", photoUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop" },
        { name: "Seu Jorge", photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
        { name: "Fernanda Montenegro", photoUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop" },
        { name: "Lázaro Ramos", photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" }
      ],
      tags: ["Suspense", "Drama", "Nacional", "2023"]
    },
    {
      id: 2,
      title: "Samba na Alma",
      year: "2022",
      duration: "1h 52min",
      genre: "Comédia/Romance",
      rating: 8.2,
      posterUrl: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      director: "Carlos Mendes",
      cast: [
        { name: "Lázaro Ramos", photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
        { name: "Paolla Oliveira", photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
        { name: "Bruno Gagliasso", photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
        { name: "Cris Vianna", photoUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop" }
      ],
      tags: ["Comédia", "Romance", "Musical", "Carnaval"]
    },
    // Add more movies as needed...
    {
      id: 3,
      title: "Depois do universo",
      year: "2022",
      duration: "2h 27min",
      genre: "Romance/Comédia",
      rating: 8.7,
      posterUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSE8ZcuRVKnqJisM_nlQ8fdFKA6l0Ti3V0-y3OEeVZiCkdwcR-P",
      director: "Diego Freitas",
      cast: [
        { name: "Henrique Zaga", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0p_sIDnpkUv6-w7UemNaPtCeH2mTYFFDibunosXR5Aynxv2Fv5yIdjA69eO5O8GzgFnVBqkD9XWpZnDl4teib8ClY8yjeZ4rLKb0nXW1ug&s=10" },
        { name: "Nathalia Nieman", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFuKOZdPICA2H3GRQdUshQfwn9-8DTkJt2iZrFwFMN4NX2RkP1flxbFDOzL96j8x0li7MUt5xdvXZaWy8koJ4oSrY6-Ds6FDd_5CWIb_z0Q&s=10" },
        { name: "Diego Freitas", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0n8xJ3O0p4c9Sr2Us-5flKPkcW4K1EsxAAKmQfba9ZCIBbaE34G5nX90m8E_K6kqWoY2TxBG3Ps7LjtRX3El_Ga_1ik5QNDSoPxLbo7p3&s=10" },
        { name: "João Miguel", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAn677zL_nVPHrNGSABvmnXfzk4OzNZ6aQ0toDmJx1VWHOk6eOr2NfzPigwihrxfMKl6tSh4X6JyIv3i3vb3UOUTKgolIAec7AlgrZSAknQ&s=10" },
        { name: "Giulia Be", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUU50EJQtkk67rBx_o1HQMIbVUTGpI-CKaz7G_N26EZ6MzmHBzoNVW9cPgZ86cQ19Vd6pr-xlWsjDCxN1pumoMSPGp7Kg7I4OmNEBQU9TGg&s=10" }
      ],
      tags: ["Romance", "Comédia", "Nacional", "2022"]
    },
  ];

  // Sample ad content | Add auto
  const adContent = {
    title: "Assista no Cinema Mais Próximo",
    description: "Sessões especiais com preços promocionais para membros Longa Brasil",
    cta: "Comprar Ingressos",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?w=400&h=250&fit=crop"
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section id="home" className="section">
          <div className="container">
            <Carousel items={carouselItems} autoPlay={true} interval={5000} />
          </div>
        </section>

        <section id="movies" className="section">
          <div className="container">
            <h2 className="section-title">Filmes em Destaque</h2>
            <div className="content-with-ad">
              <div className="main-content-area">
                <MovieGrid movies={movies} itemsPerPage={6} />
              </div>
              <div className="ad-sidebar">
                <AdBanner 
                  type="small"
                  position="right"
                  content={adContent}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="series" className="section">
          <div className="container">
            <h2 className="section-title">Séries Brasileiras</h2>
            <div className="content-with-ad">
              <div className="main-content-area">
                <MovieGrid movies={[]} itemsPerPage={6} />
              </div>
              <div className="ad-sidebar">
                <AdBanner 
                  type="small"
                  position="right"
                  content={{
                    title: "Assista na nossa Plataforma",
                    description: "Conteúdo exclusivo 24h por dia",
                    cta: "Experimente Grátis",
                    link: "#",
                    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=250&fit=crop"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Other sections can be added here */}
      </main>

      <CookieConsent />
    </div>
  );
}

export default App;
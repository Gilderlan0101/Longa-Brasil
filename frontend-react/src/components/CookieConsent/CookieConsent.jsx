// src/components/CookieConsent/CookieConsent.jsx
import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Show consent after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiesPreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setIsVisible(false);
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiesPreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setIsVisible(false);
  };

  const customizeCookies = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePreferenceChange = (type) => {
    const preferences = JSON.parse(localStorage.getItem('cookiesPreferences') || '{}');
    preferences[type] = !preferences[type];
    localStorage.setItem('cookiesPreferences', JSON.stringify(preferences));
  };

  const saveCustomPreferences = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-header">
          <i className="fas fa-cookie-bite cookie-icon"></i>
          <h3 className="cookie-title">Política de Cookies</h3>
        </div>
        
        <div className="cookie-message">
          <p>
            Utilizamos cookies para melhorar sua experiência, personalizar conteúdo 
            e anúncios, e analisar nosso tráfego. Ao continuar navegando, você concorda 
            com o uso de cookies.
          </p>
        </div>

        {isExpanded && (
          <div className="cookie-preferences">
            <div className="preference-item">
              <div className="preference-info">
                <h4>Cookies Necessários</h4>
                <p>Essenciais para o funcionamento do site</p>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  defaultChecked 
                  disabled
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="preference-item">
              <div className="preference-info">
                <h4>Cookies Analíticos</h4>
                <p>Nos ajudam a entender como você usa nosso site</p>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  defaultChecked={false}
                  onChange={() => handlePreferenceChange('analytics')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="preference-item">
              <div className="preference-info">
                <h4>Cookies de Marketing</h4>
                <p>Personalizam anúncios baseados em seus interesses</p>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  defaultChecked={false}
                  onChange={() => handlePreferenceChange('marketing')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        )}

        <div className="cookie-buttons">
          <button 
            className="cookie-button secondary"
            onClick={acceptNecessaryOnly}
          >
            Aceitar Necessários
          </button>
          
          <button 
            className="cookie-button customize"
            onClick={customizeCookies}
          >
            <i className={`fas fa-${isExpanded ? 'chevron-up' : 'chevron-down'}`}></i>
            Personalizar
          </button>
          
          <button 
            className="cookie-button primary"
            onClick={acceptAllCookies}
          >
            Aceitar Todos
          </button>
        </div>

        {isExpanded && (
          <div className="cookie-save">
            <button 
              className="cookie-button save"
              onClick={saveCustomPreferences}
            >
              Salvar Minhas Preferências
            </button>
          </div>
        )}
        
        <a href="/politica-privacidade" className="cookie-policy-link">
          Saiba mais sobre nossa política de privacidade
        </a>
      </div>
    </div>
  );
};

export default CookieConsent;
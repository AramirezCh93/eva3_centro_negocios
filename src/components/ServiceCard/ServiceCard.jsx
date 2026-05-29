import React from 'react';
import './ServiceCard.css';


const ServiceCard = ({ title, description, imageUrl, serviceId }) => {
  
  const handleContactClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      console.log(`Usuario quiere contactar sobre: ${title}`);
    }
  };

  return (
    
    <article className="service-card">
      <img 
        src={imageUrl} 
        alt={`Imagen representativa de ${title}`} 
        loading="lazy" 
        className="service-card__image" 
      />
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        
        {/* Botón accesible con aria-label */}
        <button 
          onClick={handleContactClick}
          className="service-card__btn"
          aria-label={`Solicitar información sobre ${title}`}
        >
          Contáctanos
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
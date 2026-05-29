import React, { useState } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  if (!testimonials || testimonials.length === 0) {
    return <p className="carousel-empty">No hay testimonios disponibles.</p>;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="testimonial-carousel" 
      aria-label="Testimonios de clientes"
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <h2 className="carousel-title">Lo que dicen nuestros clientes</h2>
      
      <div className="carousel-container">
        {/* Botón anterior */}
        <button 
          className="carousel-btn carousel-btn--prev" 
          onClick={prevSlide}
          aria-label="Testimonio anterior"
        >
          ‹
        </button>

        {/* Tarjeta del testimonio actual */}
        <article className="testimonial-card" role="region" aria-live="polite">
          <blockquote className="testimonial-text">
            "{currentTestimonial.text}"
          </blockquote>
          <div className="testimonial-author">
            <img 
              src={currentTestimonial.avatar} 
              alt={`Foto de ${currentTestimonial.name}`} 
              className="testimonial-avatar"
              loading="lazy"
            />
            <div>
              <p className="testimonial-name">{currentTestimonial.name}</p>
              <p className="testimonial-role">{currentTestimonial.role}</p>
            </div>
          </div>
        </article>

        {/* Botón siguiente */}
        <button 
          className="carousel-btn carousel-btn--next" 
          onClick={nextSlide}
          aria-label="Testimonio siguiente"
        >
          ›
        </button>
      </div>

      {/* Indicadores de posición */}
      <div className="carousel-dots" role="tablist" aria-label="Selección de testimonio">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al testimonio ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
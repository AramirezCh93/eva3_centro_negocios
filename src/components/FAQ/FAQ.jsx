import React, { useState } from 'react';
import useApi from '../../hooks/useApi';  // <--- CAMBIADO A ../../
import { faqAPI } from '../../services/api'; // <--- CAMBIADO A ../../
import './FAQ.css';


const FAQItem = ({ pregunta, respuesta }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {pregunta}
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{respuesta}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const { data: preguntas, loading, error } = useApi(() => faqAPI.getAll());

  if (loading) return <p>Cargando preguntas...</p>;
  if (error) return <p>Error al cargar preguntas.</p>;

  return (
    <section className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {preguntas && preguntas.map((item) => (
          <FAQItem key={item.id} pregunta={item.pregunta} respuesta={item.respuesta} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
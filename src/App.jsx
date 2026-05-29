import { useState, useEffect } from 'react';
import './App.css';
import ServiceCard from './components/ServiceCard/ServiceCard';
import TestimonialCarousel from './components/TestimonialCarousel/TestimonialCarousel';
import Nosotros from './components/Nosotros/Nosotros';
import FAQ from './components/FAQ/FAQ';
import useApi from './hooks/useApi';
import { serviciosAPI, testimoniosAPI } from './services/api';

function App() {
  // Consumo de endpoints
  const { data: servicios, loading: loadingServicios, error: errorServicios } = useApi(() => serviciosAPI.getAll());
  const { data: testimonios, loading: loadingTestimonios, error: errorTestimonios } = useApi(() => testimoniosAPI.getAll());

  // Error Handling
  const [appError, setAppError] = useState(null);
  useEffect(() => {
    if (errorServicios || errorTestimonios) {
      setAppError('Error al conectar con el servidor. Verifica que json-server esté corriendo en puerto 3001.');
    }
  }, [errorServicios, errorTestimonios]);

  // Loading State
  if (loadingServicios || loadingTestimonios) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>Cargando contenido...</div>;
  }

  if (appError) {
    return <div style={{ padding: '50px', color: 'red' }}>{appError}</div>;
  }

  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Centro de Negocios Santiago</h1>
        <p>Apoyo y acompañamiento a PyMEs</p>
      </header>

      {/* 1. Sección Nosotros */}
      <Nosotros />

      {/* 2. Sección Servicios */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center' }}>Nuestros Servicios</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {servicios && servicios.map((servicio) => (
            <ServiceCard 
              key={servicio.id}
              title={servicio.titulo}
              description={servicio.descripcion}
              imageUrl={servicio.imagen}
              serviceId={servicio.id}
            />
          ))}
        </div>
      </section>

      {/* 3. Sección Testimonios */}
      {testimonios && <TestimonialCarousel testimonials={testimonios} />}

      {/* 4. Sección FAQ */}
      <FAQ />

      {/* 5. Placeholder para Formulario de Contacto (Próximo paso) */}
      <section id="contacto" style={{ marginTop: '50px', padding: '20px', borderTop: '2px solid #ddd', textAlign: 'center' }}>
        <h2>Formulario de Contacto</h2>
        <p>Próximo paso: Implementación del formulario seguro.</p>
      </section>

      <footer style={{ marginTop: '60px', textAlign: 'center', color: '#888' }}>
        <p>© 2026 Centro de Negocios Santiago - Desarrollo Individual</p>
      </footer>
    </main>
  );
}

export default App;
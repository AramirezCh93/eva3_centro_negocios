import './App.css';
import ServiceCard from './components/ServiceCard/ServiceCard';
import TestimonialCarousel from './components/TestimonialCarousel/TestimonialCarousel';


const testimonialsData = [
  {
    id: 1,
    text: "El acompañamiento del Centro de Negocios fue clave para digitalizar mi tienda y aumentar mis ventas.",
    name: "María González",
    role: "Dueña de Tienda 'Moda Local'",
    avatar: "https://via.placeholder.com/60?text=MG"
  },
  {
    id: 2,
    text: "Gracias a la asesoría financiera logré optimizar mis costos y formalizar mi empresa en tiempo récord.",
    name: "Juan Pérez",
    role: "Emprendedor Textil",
    avatar: "https://via.placeholder.com/60?text=JP"
  },
  {
    id: 3,
    text: "La capacitación en marketing digital me permitió llegar a más clientes locales de manera efectiva.",
    name: "Ana Torres",
    role: "Fundadora de Cafetería 'El Aroma'",
    avatar: "https://via.placeholder.com/60?text=AT"
  }
];

function App() {
  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Servicios Centro de Negocios Santiago</h1>
        <p>Apoyando a las PyMEs en su crecimiento y sostenibilidad</p>
      </header>
      
      {/* Sección de Servicios */}
      <section className="services-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}>
        <ServiceCard 
          title="Asesoría Administrativa"
          description="Orientación y apoyo en áreas clave como administración y finanzas."
          imageUrl="https://via.placeholder.com/300x200?text=Admin"
          serviceId="1"
        />
        <ServiceCard 
          title="Marketing Digital"
          description="Estrategias para potenciar tu presencia en línea y ventas."
          imageUrl="https://via.placeholder.com/300x200?text=Marketing"
          serviceId="2"
        />
        <ServiceCard 
          title="Innovación Tecnológica"
          description="Incorporación de herramientas digitales para optimizar procesos."
          imageUrl="https://via.placeholder.com/300x200?text=Tech"
          serviceId="3"
        />
      </section>

      {/*  Integración del Componente Carrusel */}
      <TestimonialCarousel testimonials={testimonialsData} />
      
      {/* Sección de Contacto (Ancla) */}
      <section id="contacto" style={{ marginTop: '50px', padding: '20px', background: '#f4f4f4', borderRadius: '8px' }}>
        <h2>Formulario de Contacto</h2>
        <p>Aquí implementaremos el formulario seguro en el siguiente paso.</p>
      </section>
    </main>
  );
}

export default App;
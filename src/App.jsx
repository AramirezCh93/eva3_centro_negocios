import './App.css';
import ServiceCard from './components/ServiceCard/ServiceCard';

function App() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Servicios Centro de Negocios</h1>
      
      {/* Aquí demostramos la reutilización enviando props diferentes */}
      <section className="services-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        <ServiceCard 
          title="Asesoría Administrativa"
          description="Orientación y apoyo en áreas clave como administración y finanzas."
          imageUrl="https://via.placeholder.com/300x200?text=Admin" // Imagen temporal
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
      
      {/* Sección de contacto ancla para probar el botón */}
      <section id="contacto" style={{ marginTop: '50px', padding: '20px', background: '#f4f4f4' }}>
        <h2>Formulario de Contacto (Aquí irá el form)</h2>
      </section>
    </main>
  );
}

export default App;
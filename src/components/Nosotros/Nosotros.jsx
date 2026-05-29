import React from 'react';
import useApi from '../../hooks/useApi';  // <--- CAMBIADO A ../../
import { nosotrosAPI } from '../../services/api'; // <--- CAMBIADO A ../../
import './Nosotros.css';


const Nosotros = () => {
  const { data: nosotros, loading, error } = useApi(() => nosotrosAPI.get());

  if (loading) return <p>Cargando información...</p>;
  if (error) return <p>Error al cargar información.</p>;
  if (!nosotros) return null;

  return (
    <section className="nosotros-container">
      <h2>{nosotros.titulo}</h2>
      <p className="nosotros-description">{nosotros.descripcion}</p>
      <div className="nosotros-mision">
        <h3>🎯 Nuestra Misión</h3>
        <p>{nosotros.mision}</p>
      </div>
    </section>
  );
};

export default Nosotros;
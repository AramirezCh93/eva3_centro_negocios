import { useState, useEffect } from 'react';

/**
 * Custom hook para consumir APIs con manejo de estados
 * @param {Function} apiFunction - Función de la API a consumir
 * @param {Array} dependencies - Dependencias para re-ejecutar la consulta
 * @returns {Object} { data, loading, error, refetch }
 */
const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiFunction();
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Error al cargar los datos');
      console.error('Error en useApi:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error, refetch: fetchData };
};

export default useApi;
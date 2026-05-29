import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Exportamos los endpoints específicos
export const serviciosAPI = {
  getAll: () => api.get('/servicios'),
  getById: (id) => api.get(`/servicios/${id}`),
};

export const testimoniosAPI = {
  getAll: () => api.get('/testimonios'),
};

export const nosotrosAPI = {
  get: () => api.get('/nosotros'),
};

export const faqAPI = {
  getAll: () => api.get('/faq'),
};

export default api;
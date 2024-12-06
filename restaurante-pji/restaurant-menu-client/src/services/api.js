import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/items',
});

export const getItems = () => api.get('/');
export const createItem = (item) => api.post('/', item);
export const updateItem = (id, item) => api.put(`/${id}`, item);
export const deleteItem = (id) => api.delete(`/${id}`);

import axios from 'axios';

const api = axios.create({
  headers: {
    'x-api-key': 'reqres-free-v1',
  },
});

export const loginUser = async (email: string, password: string) => {
  const response = await api.post('https://reqres.in/api/login', {
    email,
    password,
  });
  return response.data;
};

export const fetchPosts = async () => {
  const response = await fetch('/posts.json');
  return response.json();
};

export default api;

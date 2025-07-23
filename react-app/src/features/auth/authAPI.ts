import axios from 'axios';

const BASE_URL = 'http://localhost:8081/auth';

export const registerUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/login`, userData);
  return response.data;
};

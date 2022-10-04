import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useAPI = () => ({
  validateToken: async (token) => {
    const response = await api.post("/login", { token });
    return response.data;
  },
  login: async (email, password) => {
    const response = await api.post("/login", { email, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.post("/");
    return response.data;
  },
});

// src/config/axios-client.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // for cookies
});

// REQUEST: attach token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE: auto logout on 401
axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

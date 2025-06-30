import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// --- Auth ---
export const register = (data: {
  username: string;
  password: string;
  email: string;
}) => api.post("/users/register/", data);

export const login = (data: { username: string; password: string }) =>
  api.post("/token/", data);

export const refreshToken = (refresh: string) =>
  api.post("/token/refresh/", { refresh });

// --- Trip Management ---
export const createTrip = (data: any) => api.post("/trips/", data);

export const getTrips = () => api.get("/trips/");

export const getTrip = (id: string | number) => api.get(`/trips/${id}/`);

export const planTrip = (id: string | number) => api.post(`/trips/${id}/plan/`);

// --- Log Management ---
export const generateLogs = (tripId: string | number) =>
  api.post("/logs/generate_logs/", { trip: tripId });

export const getLogs = () => api.get("/logs/");

export const getLog = (id: string | number) => api.get(`/logs/${id}/`);

export const getLogGrid = (id: string | number) =>
  api.get(`/logs/${id}/grid/`, { responseType: "blob" });

export default api;

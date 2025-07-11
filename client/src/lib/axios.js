import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.Node_ENV === "development"
      ? "http://localhost:3000/api"
      : "/api",
  withCredentials: true,
});

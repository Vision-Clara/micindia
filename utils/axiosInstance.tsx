import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;

import axios from "axios";
import store from "@/store";

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["X-token"] = "";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

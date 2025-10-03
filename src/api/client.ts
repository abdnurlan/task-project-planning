import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { getAccessToken } from "../utils/storage";
import { refreshTokens } from "./auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://api-candidates.hewart.az",
  withCredentials: false,
  timeout: 15000,
});

let isRefreshing = false;
let pendingQueue: {
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
  config: AxiosRequestConfig;
}[] = [];

async function processQueue(error: any, token: string | null) {
  pendingQueue.forEach(({ resolve, reject, config }) => {
    if (token) {
      (config.headers ||= {}).Authorization = `Bearer ${token}`;
      resolve(api(config));
    } else {
      reject(error);
    }
  });
  pendingQueue = [];
}

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as AxiosRequestConfig & { _retry?: boolean };
    const status = error.response?.status;

    if (status === 401 && !original?._retry) {
      original._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject, config: original });
        });
      }

      try {
        isRefreshing = true;
        const newAccessToken = await refreshTokens();
        await processQueue(null, newAccessToken);
        (original.headers ||= {}).Authorization = `Bearer ${newAccessToken}`;
        return api(original);
      } catch (e) {
        await processQueue(e, null);
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

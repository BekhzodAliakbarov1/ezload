import axios, { AxiosError } from 'axios';
import { getStorage } from '../utils/local-storage';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

request.interceptors.request.use(
  (config) => {
    const accessToken = getStorage('accessToken');
    if (accessToken) {
      if (config.headers) {
        config.headers.Authorization = accessToken;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);

export { request };

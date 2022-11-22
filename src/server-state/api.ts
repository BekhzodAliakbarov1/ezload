import axios, { AxiosError } from 'axios';
import { getStorage, removeStorage } from '../utils/local-storage';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

request.interceptors.request.use(
  (config) => {
    const accessToken = getStorage('accessToken');
    if (accessToken) {
      if (config.headers) {
        config.headers.Authorization = `Token ${accessToken}`;
        config.headers['Content-Language'] =
          localStorage.getItem('language') ?? 'en';
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (getStorage('accessToken')) {
        removeStorage('accessToken');
        removeStorage('refreshToken');
        removeStorage('userId');
        removeStorage('fcm_token');
        removeStorage('userType');
        window.location.reload();
      }
    }
    return Promise.reject(error);
  }
);

export { request };

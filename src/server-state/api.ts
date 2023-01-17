import axios, { AxiosError } from 'axios';
import { getStorage, removeStorage } from '../utils/local-storage';

const request = axios.create({
  baseURL: 'http://3.111.197.25/api/v1/',
});

request.interceptors.request.use(
  (config) => {
    const accessToken = getStorage('accessToken');
    if (accessToken) {
      if (config.headers) {
        config.headers.Authorization = `Token ${accessToken}`;
      }
    }
    if (config.headers) {
      config.headers['Content-Language'] = getStorage('language') ?? 'en';
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

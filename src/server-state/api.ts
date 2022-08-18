import axios, { AxiosError } from 'axios';
import { getStorage } from '../utils/local-storage';
import { getI18n } from 'react-i18next';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

request.interceptors.request.use(
  (config) => {
    const accessToken = getStorage('accessToken');
    const { language } = getI18n();

    if (accessToken) {
      if (config.headers) {
        config.headers.Authorization = `Token ${accessToken}`;
        config.headers['Content-Language'] = language;
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

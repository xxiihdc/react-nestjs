import axios from 'axios';

const AccessTokenStorage = {
  get: () => localStorage.getItem('access_token'),
  set: (token) => localStorage.setItem('access_token', token),
  remove: () => localStorage.removeItem('access_token'),
};

const AXIOS_CONFIG = {
  baseURL: "http://localhost:3001",
  timeout: 10 * 60 * 1000,
};

const instance = axios.create(AXIOS_CONFIG);

instance.interceptors.request.use((config) => {
  const token = AccessTokenStorage.get();
  if (token) {
    config.headers['X-Authorization'] = token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      AccessTokenStorage.remove();
      window.location.reload();
    } else if (error.response.status === 403) {
      console.error('Access denied');
    } else if (error.response.status === 404) {
      console.error('Resource not found');
    } else {
      console.error('An error occurred', error);
    }

    return Promise.reject(error);
  }
);

export const get = (url, config = {}) => instance.get(url, config);
export const post = (url, data, config = {}) => instance.post(url, data, config);
export const put = (url, data, config = {}) => instance.put(url, data, config);
export const del = (url, config = {}) => instance.delete(url, config);

export default instance

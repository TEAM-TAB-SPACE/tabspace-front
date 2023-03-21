import axios from 'axios';
import Config from '../../config/config.export';

export const axiosInstance = axios.create({
  baseURL: Config().baseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(config => {
//   config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem(
//       'access_token',
//     )}`;
//     return config;
//   },
//     error => {
//       return Promise.reject(error);
//     };
// });

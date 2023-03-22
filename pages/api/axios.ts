import axios, { Axios } from 'axios';
import Config from '../../config/config.export';

export const axiosInstance = axios.create({
  baseURL: Config().baseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAxiosAccessToken = (axiosInstance: Axios, access: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = access;
  return axiosInstance;
};

export const callGetApi =
  (axios: Axios) => async (url: string, payload: any) => {
    try {
      const { data } = payload
        ? await axios.get(url, { params: payload })
        : await axios.get(url);
      return data;
    } catch (error) {
      if (error instanceof Error) return error;
      return String(error);
    }
  };

export const callPostApi =
  (axios: Axios) => async (url: string, payload: any) => {
    try {
      const { data } = await axios.post(url, payload);
      return data;
    } catch (error) {
      if (error instanceof Error) return error;
      return String(error);
    }
  };

export const callDeleteApi =
  (axios: Axios) => async (url: string, payload: any) => {
    try {
      const { data } = await axios.delete(url, { data: payload });
      return data;
    } catch (error) {
      if (error instanceof Error) return error;
      return String(error);
    }
  };

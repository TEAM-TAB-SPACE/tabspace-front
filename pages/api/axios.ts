import { getCookie, setCookie } from 'cookies-next';

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
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${access}`;
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

export const callPutApi =
  (axios: Axios) => async (url: string, payload: any) => {
    try {
      const { data } = await axios.put(url, payload);
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

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async error => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401 || status === 403) {
      if (error.response.data.message === 'TokenExpiredError') {
        const originalRequest = config;
        const refreshToken = await getCookie('refreshToken');
        // token refresh 요청
        const { data } = await axiosInstance.post(
          `auth/token/refresh`, // token refresh api
          {
            refreshToken,
          },
        );
        // 새로운 토큰 저장
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          data;
        await setCookie('accessToken', data.tokens.access);
        setCookie('refreshToken', data.tokens.refresh);

        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

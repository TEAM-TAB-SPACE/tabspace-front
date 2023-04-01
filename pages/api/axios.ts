import { getCookie, removeCookies, setCookie } from 'cookies-next';
import axios, { Axios } from 'axios';
import Config, { isDevMode } from '../../config/config.export';
import { API_URL_AUTH } from './auth';

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

export const setAxiosInterCeptors = (axiosInstance: Axios) => {
  axiosInstance.interceptors.response.use(
    //success
    res => res,
    //error
    async err => {
      const {
        config,
        response: { status },
      } = err;

      //401이 아닐 경우
      if (
        config.url === API_URL_AUTH.REFRESH ||
        status !== 401 ||
        config.sent
      ) {
        return Promise.reject(err);
      }

      //401일 경우 새로운 accessToken 발급
      config.sent = true;
      const accessToken = await getNewAccessToken();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return axios(config);
    },
  );

  return axiosInstance;
};

const getNewAccessToken = async (): Promise<string | void> => {
  try {
    const refreshToken = getCookie('refresh');

    const { data } = await axiosInstance.post<{
      access: string;
    }>(API_URL_AUTH.REFRESH, { refreshToken });

    if (isDevMode) {
      setCookie('access', data.access);
    }

    return data.access;
  } catch (e) {
    //refreshToken도 만료일 경우 로그인 페이지로 이동

    removeCookies('access');
    removeCookies('refresh');

    window.location.href = isDevMode
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/login`
      : `${process.env.NEXT_PUBLIC_PROD_URL}/login`;
  }
};

export const callGetApi =
  (axios: Axios) => async (url: string, payload: unknown) => {
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
  (axios: Axios) => async (url: string, payload: unknown) => {
    try {
      const { data } = await axios.post(url, payload);
      return data;
    } catch (error) {
      if (error instanceof Error) return error;
      return String(error);
    }
  };
export const callPutApi =
  (axios: Axios) => async (url: string, payload: unknown) => {
    try {
      const { data } = await axios.put(url, payload);
      return data;
    } catch (error) {
      if (error instanceof Error) return error;
      return String(error);
    }
  };

export const callDeleteApi =
  (axios: Axios) => async (url: string, payload: unknown) => {
    try {
      const { data } = await axios.delete(url, { data: payload });
      return data;
    } catch (error) {
      if (error instanceof Error) return error;
      return String(error);
    }
  };

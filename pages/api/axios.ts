import axios from 'axios';
import Config from '../../config/config.export';

export const axiosInstance = axios.create({
  baseURL: Config().baseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const callGetApi = async (url: string, payload: any) => {
  try {
    const { data } = await axiosInstance.get(url, payload);
    return data;
  } catch (error) {
    if (error instanceof Error) return error;
    return String(error);
  }
};

export const callDeleteApi = async (url: string, payload: any) => {
  try {
    const { data } = await axiosInstance.delete(url, { data: payload });
    return data;
  } catch (error) {
    if (error instanceof Error) return error;
    return String(error);
  }
};

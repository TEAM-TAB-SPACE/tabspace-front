import { axiosInstance } from './axios';

export const API_URL_DASHBOARD = {
  LATEST: '/dashboards/latest',
  TODAY: '/dashboards/todaylectures',
};

export const callTodayLecturesApi = async () => {
  try {
    const { data } = await axiosInstance.get('/dashboards/todaylectures');
    return data;
  } catch (error) {
    if (error instanceof Error) return error;
    return String(error);
  }
};

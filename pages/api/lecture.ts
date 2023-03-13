import { axiosInstance } from './axios';

export const callPlaylistApi = async () => {
  try {
    const { data } = await axiosInstance.get('/lecturerooms');
    return data;
  } catch (error) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
};

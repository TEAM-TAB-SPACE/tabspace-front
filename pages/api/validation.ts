import { RegisterType } from '../register';
import { axiosInstance } from './axios';

export const validationApi = async (req: RegisterType) => {
  try {
    const { data } = await axiosInstance.post('/auth/register/validation', req);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

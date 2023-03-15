import axios from 'axios';
import { RegisterType } from '../register';

export const validationApi = async (req: RegisterType) => {
  try {
    const { data } = await axios.post(
      'http://127.0.0.1:8000/api/auth/register/validation',
      req,
    );
    return data;
  } catch (error) {
    return error;
  }
};

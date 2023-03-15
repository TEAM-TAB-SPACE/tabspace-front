import { useRouter } from 'next/router';
import axios from 'axios';

export const validationApi = async (res: Response, req: Request) => {
  const router = useRouter();

  try {
    const { data } = await axios.post(
      'http://127.0.0.1:8000/api/auth/register/validation',
    );
    if (res.status === 200) {
      router.push(
        `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`,
      );
    }
    return data;
  } catch (error) {
    console.log(error);
    alert('회원가입에 실패했습니다!');
  }
};

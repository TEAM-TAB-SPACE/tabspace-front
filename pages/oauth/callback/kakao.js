import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { useSetRecoilState } from 'recoil';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '../../api/axios';
import { userAtom } from '../../../store/user';
import { API_URL_AUTH } from '../../api/auth';

const RedirectHandler = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const setUser = useSetRecoilState(userAtom);

  const registerKaKao = async (code, inputData) => {
    return await axiosInstance.post(API_URL_AUTH.REGISTER, {
      code,
      ...inputData,
    });
  };

  useEffect(() => {
    (async () => {
      const inputData = sessionStorage.getItem('inputs');
      const inputPayload = JSON.parse(inputData);

      if (code) {
        const { data } = await registerKaKao(code, inputPayload);
        setCookie('accessToken', data.tokens.access);
        setCookie('refreshToken', data.tokens.refresh);
        setUser(data.user);

        router.push('/dashboard');
        sessionStorage.removeItem('inputs');
      }
    })();
  }, [code, router, setUser]);
};

export default RedirectHandler;

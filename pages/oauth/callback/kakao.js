import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '../../api/axios';
import { setCookie } from 'cookies-next';

const redirectHandler = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const inputData = sessionStorage.getItem('inputs');
    const inputPayload = JSON.parse(inputData);

    if (code) {
      registerKaKao(code, inputPayload);
      sessionStorage.removeItem('inputs');
      router.push('/dashboard');
    }
  }, [code]);

  const registerKaKao = async (code, inputData) => {
    await axiosInstance
      .post(`/auth/register`, { code, ...inputData })
      .then(({ data }) => {
        localStorage.setItem('realname', JSON.stringify(data.user.realname));
        localStorage.setItem('id', JSON.stringify(data.user.id));

        setCookie('accessToken', data.tokens.access);
        setCookie('refreshToken', data.tokens.refresh);
      })
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        } else if (error.req) {
          console.log('네트워크 에러!');
        } else {
          console.log(error);
        }
      });
  };
};

export default redirectHandler;

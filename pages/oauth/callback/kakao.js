import { useEffect, useState } from 'react';
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
      router.push('/');
    }
  }, [code]);

  const registerKaKao = async (code, inputData) => {
    await axiosInstance
      .post(`/auth/register`, { code, ...inputData })
      .then(res => {
        console.log(res.data);

        setCookie('refreshToken', res.data.tokens.refresh);
        setCookie('realname', res.data.user.realname);
        setCookie('id', res.data.user.id);
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

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

import axios from 'axios';

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
      // router.push('/dashboard');
    }
  }, [code]);

  const registerKaKao = async (code, inputData) => {
    await axios
      .post(`http://127.0.0.1:8000/api/auth/register`, { code, ...inputData })
      .then(res => {
        console.log(res.data);
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

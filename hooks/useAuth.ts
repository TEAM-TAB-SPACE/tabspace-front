import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import useFetch from './useFetch';
import { API_URL_AUTH } from '../pages/api/auth';

const useAuth = (loginState = false) => {
  const [isLogin, setIsLogin] = useState<boolean>(loginState);
  const client = useFetch();

  useEffect(() => {
    const refreshToken = getCookie('refreshToken');
    const getNewAccessToken = async () => {
      if (refreshToken) {
        const { access } = await client.post(API_URL_AUTH.REFRESH, {
          refresh: refreshToken,
        });
        setCookie('accessToken', access);
        setIsLogin(true);
      }
    };

    getNewAccessToken();
  }, []);
  return { isLogin };
};

export default useAuth;

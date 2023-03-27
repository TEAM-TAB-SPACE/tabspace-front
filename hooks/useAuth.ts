import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import useFetch from './useFetch';
import { API_URL_AUTH } from '../pages/api/auth';
import { isDevMode } from '../config/config.export';

const useAuth = (loginState = false) => {
  const [isLogin, setIsLogin] = useState<boolean>(loginState);
  const client = useFetch();

  useEffect(() => {
    const refreshToken = getCookie('refresh');
    const getNewAccessToken = () => {
      if (refreshToken) {
        client.post(API_URL_AUTH.REFRESH, {
          refresh: refreshToken,
        });

        if (isDevMode) {
          setCookie('access', '109832749182734');
        }

        setIsLogin(true);
      }
    };

    getNewAccessToken();
  }, []);
  return { isLogin };
};

export default useAuth;

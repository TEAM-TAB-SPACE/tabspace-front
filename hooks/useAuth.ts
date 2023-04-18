import { useCallback } from 'react';
import { deleteCookie, setCookie } from 'cookies-next';
import { isDevMode } from '../config/config.export';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import useFetch from './useFetch';
import { loginStateAtom, userAtom } from '../store/user';
import { API_URL_AUTH } from '../pages/api/auth';

interface LoginResponse {
  tokens?: { access: string; refresh: string };
  user: { id: number; realname: string };
}

function useAuth() {
  const router = useRouter();
  const client = useFetch();

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);
  const [user, setUser] = useRecoilState(userAtom);

  const setLoginState = useCallback(
    async ({ tokens, user }: LoginResponse) => {
      if (isDevMode && tokens) {
        setCookie('access', tokens.access);
        setCookie('refresh', tokens.access);
      }

      localStorage.setItem('AUTH_STATE', JSON.stringify(true));
      setIsLogin(true);
      setUser(user);

      router.push('/dashboard');
    },
    [router, setIsLogin, setUser],
  );

  // 로그아웃
  const logout = async () => {
    try {
      client.post(API_URL_AUTH.LOGOUT, null);

      deleteCookie('access');
      deleteCookie('refresh');
      localStorage.removeItem('AUTH_STATE');

      location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  return { isLogin, user, setLoginState, logout };
}

export default useAuth;

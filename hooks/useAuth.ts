import { useCallback } from 'react';
import { deleteCookie, setCookie } from 'cookies-next';
import { isDevMode } from '../config/config.export';
import { useRecoilState } from 'recoil';
import { loginStateAtom, userAtom } from '../store/user';
import { useRouter } from 'next/router';

const useAuth = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);
  const [user, setUser] = useRecoilState(userAtom);

  const setLoginState = useCallback(
    async ({
      tokens,
      user,
    }: {
      tokens?: { access: string; refresh: string };
      user: { id: number; realname: string };
    }) => {
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

  const setLogoutState = () => {
    deleteCookie('access');
    deleteCookie('refresh');
    localStorage.removeItem('AUTH_STATE');

    setIsLogin(false);
    setUser({ id: 0, realname: '' });
  };

  return { isLogin, user, setLoginState, setLogoutState };
};

export default useAuth;

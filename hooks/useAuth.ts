import { useCallback } from 'react';
import { setCookie } from 'cookies-next';
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
      tokens: { access: string; refresh: string };
      user: { id: number; realname: string };
    }) => {
      if (isDevMode) {
        setCookie('access', tokens.access);
        setCookie('refresh', tokens.access);
      }

      setIsLogin(true);
      setUser(user);

      router.push('/dashboard');
    },
    [router, setIsLogin, setUser],
  );

  return { isLogin, user, setLoginState };
};

export default useAuth;

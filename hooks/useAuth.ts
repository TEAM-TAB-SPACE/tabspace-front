import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';

import useFetch from './useFetch';

import { loginStateAtom, userAtom, User, isLoginFailedAtom } from 'store/user';

import { INTERNAL } from 'constants/urls';

import { API_URL_AUTH } from 'pages/api/auth';

//types
import { RegisterType } from 'pages/register';

function useAuth() {
  const router = useRouter();

  const client = useFetch();

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);

  const [isLoginFailed, setIsLoginFailed] = useRecoilState(isLoginFailedAtom);

  const [user, setUser] = useRecoilState(userAtom);

  const setLoginState = (user: User) => {
    setIsLogin(() => true);
    setUser(() => user);
  };

  //로그인 공통 로직
  const login = (loginData: { user: User }) => {
    if (loginData instanceof Error) {
      setIsLoginFailed(true);
      router.push(INTERNAL.login);
      return;
    }

    localStorage.setItem('AUTH_STATE', JSON.stringify(true));
    sessionStorage.removeItem('inputs');

    setLoginState(loginData.user);
    router.push(INTERNAL.dashboard);
  };

  //테스트 계정 로그인
  const loginTestUser = useCallback(async (mode?: number) => {
    const res = await client.post(API_URL_AUTH.TEST_LOGIN, {
      mode,
    });

    login(res);
  }, []);

  //카카오 소셜 인증 로그인 (로그인, 회원가입)
  const kakaoAuthLogin = useCallback(
    async (authCode: string, registerInput?: RegisterType) => {
      const res = await client.post(API_URL_AUTH.REGISTER, {
        code: authCode,
        ...registerInput,
      });

      login(res);
    },
    [],
  );

  // 로그아웃
  const logout = useCallback(async () => {
    await client.post(API_URL_AUTH.LOGOUT, null);

    deleteCookie('access');
    deleteCookie('refresh');
    localStorage.removeItem('AUTH_STATE');

    location.href = '/';
  }, []);

  return {
    isLogin,
    isLoginFailed,
    user,
    setLoginState,
    kakaoAuthLogin,
    loginTestUser,
    logout,
  };
}

export default useAuth;

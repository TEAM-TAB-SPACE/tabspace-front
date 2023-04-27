import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';

import useFetch from './useFetch';

import { loginStateAtom, userAtom, User } from 'store/user';

import { API_URL_AUTH } from 'pages/api/auth';

//types
import { RegisterType } from 'pages/register';

function useAuth() {
  const router = useRouter();

  const client = useFetch();

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);

  const [user, setUser] = useRecoilState(userAtom);

  const setLoginState = (user: User) => {
    setIsLogin(true);
    setUser(user);
  };

  //로그인 공통 로직
  const login = () => {
    localStorage.setItem('AUTH_STATE', JSON.stringify(true));
    sessionStorage.removeItem('inputs');

    router.push('/dashboard');
  };

  //테스트 계정 로그인
  const loginTestUser = async (mode?: number) => {
    try {
      const { user } = await client.post(API_URL_AUTH.TEST_LOGIN, {
        mode,
      });

      setLoginState(user);
      login();
    } catch (error) {
      console.log(error);
    }
  };

  //카카오 소셜 인증 로그인 (로그인, 회원가입)
  const kakaoAuthLogin = async (
    authCode: string,
    registerInput?: RegisterType,
  ) => {
    try {
      const { user } = await client.post(API_URL_AUTH.REGISTER, {
        code: authCode,
        ...registerInput,
      });

      setLoginState(user);
      login();
    } catch (error) {
      console.log(error);
    }
  };

  // 로그아웃
  const logout = async () => {
    try {
      await client.post(API_URL_AUTH.LOGOUT, null);

      deleteCookie('access');
      deleteCookie('refresh');
      localStorage.removeItem('AUTH_STATE');

      location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isLogin,
    user,
    setLoginState,
    kakaoAuthLogin,
    loginTestUser,
    logout,
  };
}

export default useAuth;

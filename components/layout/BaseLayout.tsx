import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getCookie, setCookie } from 'cookies-next';
import Header from './Header';
import Footer from './Footer';
import useFetch from '../../hooks/useFetch';
import { loginStateAtom, userAtom } from '../../store/user';
import { API_URL_OTHER } from '../../pages/api/other';

type BaseLayoutProps = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const fetch = useFetch();
  const setIsLogin = useSetRecoilState(loginStateAtom);
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    //사이트 접속 시 로그인 상태면 사용자 정보 get
    const getUserData = async () => {
      const refreshToken = getCookie('refreshToken');

      if (refreshToken) {
        const data = await fetch.get(API_URL_OTHER.USERNAME, '');
        setIsLogin(true);
        setUser(data);
      }
    };

    getUserData();
  }, [fetch, setIsLogin, setUser]);

  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

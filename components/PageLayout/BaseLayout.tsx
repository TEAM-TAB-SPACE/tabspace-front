import { useEffect } from 'react';
import Header from './header/Header';
import Footer from './Footer';
import useFetch from '../../hooks/useFetch';
import useAuth from '../../hooks/useAuth';
import { getCookie } from 'cookies-next';
import { API_URL_OTHER } from '../../pages/api/other';

type BaseLayoutProps = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const fetch = useFetch();
  const { setLoginState } = useAuth();

  //사이트 접속 시 로그인 상태면 사용자 정보 get
  useEffect(() => {
    (async () => {
      const authState = localStorage.getItem('AUTH_STATE');
      const accessToken = getCookie('access');

      if (accessToken && authState) {
        const userData = await fetch.get(API_URL_OTHER.USERNAME, '');
        setLoginState(userData);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <div style={{ paddingTop: '70px' }}>{children}</div>
      <Footer />
    </>
  );
}

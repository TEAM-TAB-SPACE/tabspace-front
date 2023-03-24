import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getCookie, setCookie } from 'cookies-next';
import Header from './Header';
import Footer from './Footer';
import useFetch from '../../hooks/useFetch';
import { loginStateAtom } from '../../store/user';
import { API_URL_AUTH } from '../../pages/api/auth';

type BaseLayoutProps = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const fetch = useFetch();
  const setIsLogin = useSetRecoilState(loginStateAtom);

  useEffect(() => {
    //사이트 접속 시 새로운 토큰 발행
    const getNewAccessToken = async () => {
      const refreshToken = getCookie('refreshToken');

      if (refreshToken) {
        const data = await fetch.post(API_URL_AUTH.REFRESH, {
          refresh: refreshToken,
        });
        setCookie('accessToken', data.access);
        setIsLogin(true);
      }
    };

    getNewAccessToken();
  }, [fetch, setIsLogin]);

  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

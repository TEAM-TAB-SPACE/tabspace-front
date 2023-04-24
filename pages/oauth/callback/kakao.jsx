import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

import { Skeleton } from 'antd';

import useFetch from 'hooks/useFetch';
import useAuth from 'hooks/useAuth';

function RedirectHandler() {
  const router = useRouter();
  const client = useFetch();

  const searchParams = useSearchParams();
  const authCode = searchParams.get('code');

  const { kakaoAuthLogin } = useAuth();

  useEffect(() => {
    const socialLogin = async () => {
      const registerInput = sessionStorage.getItem('inputs');
      if (authCode) kakaoAuthLogin(authCode, registerInput);
    };

    socialLogin();
  }, [authCode, client, kakaoAuthLogin, router]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className="kakao__redirect">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
      <style jsx global>{`
        .kakao__redirect {
          margin: 90px auto 40px;
          width: 80%;
          max-width: 1300px;

          .ant-skeleton-content {
            display: block;
            margin-bottom: 70px;
          }
        }
      `}</style>
    </>
  );
}

export default RedirectHandler;

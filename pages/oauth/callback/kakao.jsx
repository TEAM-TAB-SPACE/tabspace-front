import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Skeleton } from 'antd';
import { useSearchParams } from 'next/navigation';
import { API_URL_AUTH } from '../../api/auth';
import useFetch from '../../../hooks/useFetch';
import useAuth from '../../../hooks/useAuth';

const RedirectHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const client = useFetch();
  const { setLoginState } = useAuth();

  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      const inputData = sessionStorage.getItem('inputs');
      const inputPayload = JSON.parse(inputData);

      if (code) {
        const { tokens, user } = await client.post(API_URL_AUTH.REGISTER, {
          code,
          ...inputPayload,
        });

        setLoginState({ tokens, user });
        sessionStorage.removeItem('inputs');
      }
    })();
  }, [client, code, router, setLoginState]);

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
};

export default RedirectHandler;

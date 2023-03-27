import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Skeleton } from 'antd';
import { useSetRecoilState } from 'recoil';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '../../api/axios';
import { userAtom } from '../../../store/user';
import { API_URL_AUTH } from '../../api/auth';

const RedirectHandler = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const setUser = useSetRecoilState(userAtom);

  const registerKaKao = async (code, inputData) => {
    return await axiosInstance.post(API_URL_AUTH.REGISTER, {
      code,
      ...inputData,
    });
  };

  useEffect(() => {
    (async () => {
      const inputData = sessionStorage.getItem('inputs');
      const inputPayload = JSON.parse(inputData);

      if (code) {
        const { data } = await registerKaKao(code, inputPayload);
        setUser(data.user);

        router.push('/dashboard');
        sessionStorage.removeItem('inputs');
      }
    })();
  }, [code, router, setUser]);

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

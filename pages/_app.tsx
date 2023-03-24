import '../styles/globals.css';
import { Reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import BaseLayout from '../components/layout/BaseLayout';
import locale from 'antd/lib/locale/ko_KR';
import useFetch from '../hooks/useFetch';
import { ConfigProvider } from 'antd';
import { getCookie, setCookie } from 'cookies-next';
import { isDevMode } from '../config/config.export';
import { API_URL_AUTH } from './api/auth';

if (isDevMode && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

// 전역에서 kakao 선언
declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const fetch = useFetch();

  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());
  }

  useEffect(() => {
    //사이트 접속 시 새로운 토큰 발행
    const getNewAccessToken = async () => {
      const refreshToken = getCookie('refreshToken');

      if (refreshToken) {
        const data = await fetch.post(API_URL_AUTH.REFRESH, {
          refresh: refreshToken,
        });
        setCookie('accessToken', data.access);
      }
    };

    getNewAccessToken();
  }, [fetch]);

  return (
    <>
      <RecoilRoot>
        <ConfigProvider locale={locale}>
          <Head>
            <title>TAP SPACE</title>
          </Head>
          <Script
            src="https://developers.kakao.com/sdk/js/kakao.js"
            onLoad={kakaoInit}
          ></Script>
          <Reset />
          <BaseLayout>
            <Component {...{ ...pageProps }} />
          </BaseLayout>
        </ConfigProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

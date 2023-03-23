import '../styles/globals.css';
import { Reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import BaseLayout from '../components/layout/BaseLayout';
import locale from 'antd/lib/locale/ko_KR';
import { isDevMode } from '../config/config.export';
import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());
  }

  useEffect(() => {
    const tokens = getCookie('refreshToken');
    if (!tokens) {
      router.push('/login');
    }
  }, []);

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

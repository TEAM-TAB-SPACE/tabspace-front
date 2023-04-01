import '../styles/globals.scss';
import '../styles/chatbot.scss';
import { Reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';
import { isDevMode } from '../config/config.export';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import BaseLayout from '../components/layout/BaseLayout';
import locale from 'antd/lib/locale/ko_KR';

if (isDevMode) {
  import('../mocks');
}

// 전역에서 kakao 선언
declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
  }

  return (
    <>
      <RecoilRoot>
        <ConfigProvider locale={locale}>
          <Head>
            <title>TAP SPACE</title>
            <link rel="icon" href="/images/favicon.ico" />
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

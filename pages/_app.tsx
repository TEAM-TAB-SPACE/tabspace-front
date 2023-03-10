import '../styles/globals.css';
import { Reset } from 'styled-reset';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import Script from 'next/script';

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   import('../mocks');
// }

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
    console.log(window.Kakao.isInitialized());
  }

  return (
    <>
      <Head>
        <title>TAP SPACE</title>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        ></Script>
      </Head>
      <Reset />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { Reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';

import { isDevMode } from 'config/config.export';

import Head from 'next/head';
import Script from 'next/script';
import BaseLayout from 'components/pageLayout/BaseLayout';
import withTheme from 'theme';

import 'styles/globals.scss';
import 'styles/chatbot.scss';

//types
import type { AppProps } from 'next/app';

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
        <Head>
          <title>TAP SPACE | 새로운 커리어의 시작</title>
          <meta
            name="google-site-verification"
            content="HHMIKThf1Cj4TcAYqUgHF9lljY1Z0EoubPQdXkVdOOE"
          />
          <meta
            name="description"
            content="새로운 커리어의 시작 코딩 교육 10년 경험을 가진 탭스페이스와 함께하세요"
          />
          <meta property="og:title" content="탭스페이스" />
          <meta property="og:url" content="https://tab.tabspace.site/" />
          <meta property="og:image" content="/assets/images/og_image.png" />
          <meta property="og:image:alt" content="탭스페이스 로고" />
          <meta
            property="og:description"
            content="새로운 커리어의 시작 탭스페이스"
          />
          <link rel="icon" href="/assets/images/favicon.ico" />
        </Head>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        ></Script>
        <Reset />
        {withTheme(
          <BaseLayout>
            <Component {...{ ...pageProps }} />
          </BaseLayout>,
        )}
      </RecoilRoot>
    </>
  );
}

export default MyApp;

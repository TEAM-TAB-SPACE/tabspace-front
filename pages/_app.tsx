import '../styles/globals.css';
import { Reset } from 'styled-reset';
import type { AppProps } from 'next/app';
import Head from 'next/head';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TAP SPACE</title>
      </Head>
      <Reset />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

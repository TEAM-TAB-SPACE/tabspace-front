import '../styles/globals.css';
import { Reset } from 'styled-reset';
import type { AppProps } from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const redirectHandler = () => {
  // const code = new URL(window.location.href).searchParams.get('code'); // 인가코드 추출
  // console.log(code);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  console.log(code);

  const kakaoLogin = (code: any) => {
    axios
      .post(`http://localhost:3000/oauth/callback/kakao`, { code: code })
      .then(res => {
        console.log(res); // 토큰이 넘어올 것임

        alert('login 완료');
      })
      .catch(err => {
        console.log('소셜로그인 에러', err);
        window.alert('로그인에 실패하였습니다.');
      });
  };

  // 인가코드

  useEffect(() => {
    kakaoLogin(code);
  }, []);
};

export default redirectHandler;

// export async function getCode() {
//   const request: any = await fetch(
//     `http://localhost:3000/oauth/callback/kakao?code=${code}`,
//   );
//   const response = await request.json();
//   const code = response;

//   return {
//     code,
//   };
// }

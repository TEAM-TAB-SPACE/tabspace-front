import css from 'styled-jsx/css';

import Link from 'next/link';
import Kakao from '../public/assets/kakaotalk.svg';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

  useEffect(() => {}, []);
  return (
    <div className="login__container">
      <div className="login__wrap">
        <p>안녕하세요!</p>
        <p>탭스페이스 수강장에</p>
        <p>오신걸 환영합니다.</p>
      </div>
      <div className="login__kakaoBtn">
        <Kakao />
        <Link href={KAKAO_AUTH_URL}>카카오로그인</Link>
      </div>
      <div className="login__register">
        <p>회원이 아니신가요?</p>
        <Link href="/register">회원가입</Link>
      </div>
      <style global jsx>{`
        a {
          text-decoration: none;
          color: #722ed1;
          font-size: 0.8rem;
          padding-left: 5px;
        }
      `}</style>
      <style jsx>{login}</style>
    </div>
  );
}

const login = css`
  .login__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
    background: #ffffff;
    border: 1px solid #a1aebf;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 200px;
    height: 240px;
    position: relative;
    margin: 0 auto;
    top: 200px;
    .login__wrap {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 1.3rem;
        font-weight: 700;
        padding: 5px;
      }
    }
    .login__kakaoBtn {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 180px;
      background: #722ed1;
      color: #ffffff;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        width: 187px;
        height: 38px;
        color: #ffffff;
        background: #722ed1;
        border: none;
        border-radius: 2px;
        p {
          margin-left: 10px;
        }
      }
    }
    .login__register {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 270px;
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

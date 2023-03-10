import css from 'styled-jsx/css';
import Image from 'next/image';
import Kakao from '../public/assets/kakaotalk.png';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Register() {
  // const handleKakaoLogin = () => {
  //   const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
  //   window.location.href = KAKAO_LOGIN_URL;
  // };

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
  // const code = new URL(window.location.href).searchParams.get('code');

  const searchParams = useSearchParams();

  const code = searchParams.get('code');
  console.log(code);
  // let code = params.get('code');

  // console.log(router.query);
  // const { code } = router.query;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ name, email, phone, secretKey });

    const data = {
      realname: name,
      email: email,
      phone: phone,
      secret_key: secretKey,
    };

    await axios
      .post(`http://127.0.0.1:8000/api/auth/register`, data)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        if (error.res) {
          console.log(error.res);
          console.log('res ERROR!!');
        } else if (error.req) {
          console.log('네트워크 에러!');
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="register__container">
      <div className="register__wrap">
        <p>탭스페이스와 함께</p>
        <p>꿈을 키우세요.</p>
      </div>
      <div className="register__form">
        <form onSubmit={handleSubmit}>
          <div className="register__input">
            <label htmlFor="name">
              이름
              <input
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                placeholder="이름을 입력해주세요"
              />
            </label>
          </div>
          <div className="register__input">
            <label htmlFor="email">
              이메일
              <input
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="메일을 입력해주세요"
              />
            </label>
          </div>
          <div className="register__input">
            <label htmlFor="phone">
              전화번호
              <input
                type="number"
                name="phone"
                onChange={e => setPhone(e.target.value)}
                placeholder="전화번호를 입력해주세요"
              />
            </label>
          </div>
          <div className="register__input">
            <label htmlFor="code">
              인증번호
              <input
                type="number"
                name="secretKey"
                onChange={e => setSecretKey(e.target.value)}
                placeholder="인증코드를 입력해주세요"
              />
            </label>
          </div>

          <button type="submit" className="register__kakaoBtn">
            카카오 회원가입하기
            <Image src={Kakao} alt="kakao" />
            <Link href={KAKAO_AUTH_URL} className="kakaoBtn">
              카카오로 회원가입하기
            </Link>
          </button>
        </form>
      </div>

      <div className="register__login">
        <p>이미 회원이라면?</p>
        <Link href="/login" style={{ fontSize: '0.8rem' }}>
          로그인
        </Link>
      </div>

      <style global jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
      <style jsx>{register}</style>
    </div>
  );
}

const register = css`
  .register__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
    background: #ffffff;
    border: 1px solid #a1aebf;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 300px;
    height: 440px;
    position: relative;
    margin: 0 auto;
    top: 100px;
    .register__wrap {
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
    .register__form {
      position: absolute;
      display: flex;
      max-width: 260px;
      top: 130px;
      form {
        display: flex;
        flex-direction: column;
        .register__input {
          padding: 8px;
          label {
            font-size: 0.8rem;
            input {
              width: 100%;
              height: 30px;
              border-radius: 5px;
              border: 1px solid gray;
            }
          }
        }
      }
    }
    .register__kakaoBtn {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      position: absolute;
      background: #722ed1;
      border: none;
      border-radius: 2px;
      width: 187px;
      height: 38px;
      top: 410px;
      .kakaoBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        padding-left: 5px;
        p {
          margin-left: 10px;
        }
      }
    }
    .register__login {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 470px;
      p {
        font-size: 0.8rem;
        padding-right: 5px;
      }
    }
  }
`;

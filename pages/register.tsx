import css from 'styled-jsx/css';
import Image from 'next/image';
import Kakao from '../public/assets/kakaotalk.png';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Register() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

  const [inputs, setInputs] = useState({
    realname: '',
    email: '',
    phone: '',
    secret_key: '',
  });
  // 비구조화 할당으로 값 추출
  const { realname, email, phone, secret_key } = inputs;

  useEffect(() => {
    sessionStorage.setItem('inputs', JSON.stringify(inputs));
  }, [inputs]);

  const onChange = (e: any) => {
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="register__container">
      <div className="register__wrap">
        <p>탭스페이스와 함께</p>
        <p>꿈을 키우세요.</p>
      </div>
      <div className="register__form">
        <form>
          <div className="register__input">
            <label htmlFor="realname">
              이름
              <input
                type="text"
                name="realname"
                value={realname}
                onChange={onChange}
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
                value={email}
                onChange={onChange}
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
                value={phone}
                onChange={onChange}
                placeholder="전화번호를 입력해주세요"
              />
            </label>
          </div>
          <div className="register__input">
            <label htmlFor="secretKey">
              인증번호
              <input
                type="number"
                name="secret_key"
                value={secret_key}
                onChange={onChange}
                placeholder="인증코드를 입력해주세요"
              />
            </label>
          </div>

          <Link href={KAKAO_AUTH_URL} className="kakaoBtn">
            카카오회원가입
          </Link>
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
    .kakaoBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      padding-left: 5px;
      height: 300px;
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

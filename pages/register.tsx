import css from 'styled-jsx/css';
import Link from 'next/link';
import { message } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { validationApi } from './api/validation';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

export interface RegisterType {
  realname: string;
  email: string;
  phone: string;
  secret_key: string;
  msg_agree: boolean;
}

export default function Register() {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [inputs, setInputs] = useState<RegisterType>({
    realname: '',
    email: '',
    phone: '',
    secret_key: '',
    msg_agree: true,
  });
  // 비구조화 할당으로 값 추출
  const { realname, email, phone, secret_key } = inputs;

  const onChange = (e: any) => {
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const data = await validationApi(inputs);

    if (data instanceof Error) {
      messageApi.error('인증번호가 유효하지 않습니다.');
    } else {
      sessionStorage.setItem('inputs', JSON.stringify(inputs));
      router.push(KAKAO_AUTH_URL);
      router.push('/dashboard');
    }
  };

  return (
    <>
      {contextHolder}
      <div className="register__container">
        <div className="register__wrap">
          <p>탭스페이스와 함께</p>
          <p>꿈을 키우세요.</p>
        </div>
        <div className="register__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="register__input">
              <label htmlFor="realname">
                이름
                <input
                  {...register('realname', { required: true })}
                  type="text"
                  name="realname"
                  value={realname}
                  onChange={onChange}
                  placeholder="실명을 입력해주세요."
                />
                <p>
                  {errors.realname?.type === 'required' &&
                    '이름을 입력해주세요.'}
                </p>
              </label>
            </div>
            <div className="register__input">
              <label htmlFor="email">
                이메일
                <input
                  {...register('email', { required: true })}
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="메일을 입력해주세요."
                />
                <p>
                  {errors.email?.type === 'required' &&
                    '이메일을 입력해주세요.'}
                </p>
              </label>
            </div>
            <div className="register__input">
              <label htmlFor="phone">
                전화번호
                <input
                  {...register('phone', { required: true })}
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  placeholder="휴대전화를 입력해주세요."
                />
                <p>
                  {errors.phone?.type === 'required' &&
                    '휴대전화를 입력해주세요.'}
                </p>
              </label>
            </div>
            <div className="register__input">
              <label htmlFor="secretKey">
                인증번호
                <input
                  {...register('secret_key', { required: true })}
                  type="text"
                  name="secret_key"
                  value={secret_key}
                  onChange={onChange}
                  placeholder="인증번호 입력해주세요."
                />
                <p>
                  {errors.secret_key?.type === 'required' &&
                    '인증번호 입력해주세요.'}
                </p>
              </label>
            </div>
            <div className="input__marketing">
              <label htmlFor="msg_agree">
                <input
                  type="checkbox"
                  {...register('msg_agree')}
                  name="msg_agree"
                  onChange={onChange}
                />
                광고성 정보 수신 동의
              </label>
            </div>

            <div className="register__btn">
              <input
                type="submit"
                className="kakaoBtn"
                value="카카오로 회원가입하기"
              />
            </div>
          </form>
        </div>

        <div className="register__login">
          <p>이미 회원이라면?</p>
          <Link href="/login" style={{ fontSize: '0.8rem' }}>
            로그인
          </Link>
        </div>

        <style global jsx>{`
          .kakaoBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 30px;
            color: #ffffff;
            background-color: #722ed1;
            font-size: 0.8rem;
            border-radius: 5px;
            p {
              padding-left: 5px;
            }
          }
          a {
            text-decoration: none;
          }
        `}</style>
        <style jsx>{registerStyle}</style>
      </div>
    </>
  );
}

const registerStyle = css`
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
    height: 470px;
    position: relative;
    margin: 100px auto 170px;
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
          padding-bottom: 5px;
          label {
            font-size: 0.8rem;
            input {
              width: 100%;
              height: 30px;
              border-radius: 5px;
              border: 1px solid gray;
            }
            p {
              font-size: 0.7rem;
              padding-top: 7px;
              color: red;
            }
          }
        }
      }
    }
    .input__marketing {
      label {
        display: flex;
        justify-content: center;
        font-size: 0.8rem;
        align-items: center;
        text-align: center;
        padding: 10px 0;
      }
    }
    .register__btn {
      display: flex;
      flex-direction: row;
      .kakaoBtn {
        border: none;
      }
    }
    .register__login {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 500px;
      p {
        font-size: 0.8rem;
        padding-right: 5px;
      }
    }
  }

  @media (max-width: 667px) {
    .register__container {
      top: 60px;
    }
  }
`;

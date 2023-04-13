import css from 'styled-jsx/css';
import Link from 'next/link';
import { message } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { validationApi } from './api/validation';
import { KAKAO_AUTH_URL } from '../constant/authUrl';
import variables from '../styles/variables.module.scss';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [target.name]: target.value,
      };
    });
  };

  const onSubmit = async () => {
    const data = await validationApi(inputs);

    if (data instanceof Error) {
      messageApi.error('인증번호가 유효하지 않습니다.');
    } else {
      sessionStorage.setItem('inputs', JSON.stringify(inputs));
      router.push(KAKAO_AUTH_URL);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="register__container">
        <div className="register__wrap">
          <p>
            탭스페이스와 함께
            <br />
            꿈을 키우세요.
          </p>
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

            <input
              type="submit"
              className="kakaoBtn"
              value="카카오로 회원가입하기"
            />
          </form>
        </div>

        <div className="register__login">
          <span>이미 회원이라면?</span>
          <Link href="/login" style={{ fontSize: '0.8rem' }}>
            로그인
          </Link>
        </div>
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
    width: 300px;
    margin: 150px auto;
    padding: 50px 30px;
    background: ${variables.white};
    border-radius: 15px;
    border: 1px solid #a1aebf;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);

    .register__wrap {
      padding-bottom: 15px;
      text-align: center;
      font-size: 1.3rem;
      line-height: 140%;
      font-weight: 700;
    }

    .register__form {
      display: flex;

      .register__input {
        padding-bottom: 10px;
        font-size: 0.8rem;

        input {
          margin-top: 5px;
          width: 100%;
          height: 30px;
          border-radius: 5px;
          border: 1px solid gray;
        }
      }
    }
    .input__marketing {
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        font-size: 0.8rem;
      }
    }

    .kakaoBtn {
      width: 100%;
      height: 30px;
      color: ${variables.white};
      background-color: ${variables.primary};
      font-size: 0.8rem;
      border-radius: 5px;
      border: none;
    }

    .register__login {
      padding-top: 20px;
      font-size: 0.8rem;
    }
  }
`;

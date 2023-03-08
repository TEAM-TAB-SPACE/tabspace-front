import css from 'styled-jsx/css';
import Image from 'next/image';
import Kakao from '../public/assets/kakaotalk.png';
import Link from 'next/link';
import { Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const formTailLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 8, offset: 4 },
};

export default function Register() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
  const [form] = Form.useForm();
  const [checkAd, setCheckAd] = useState(false);

  useEffect(() => {
    form.validateFields(['msg_agree']);
  }, [checkAd, form]);

  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setCheckAd(e.target.checked);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="register__container">
      <div className="register__wrap">
        <p>탭스페이스와 함께</p>
        <p>꿈을 키우세요.</p>
      </div>
      <div className="register__form">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 260 }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="이름"
            rules={[
              {
                required: true,
                message: '이름을 입력해주세요!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="이메일"
            rules={[
              {
                type: 'email',
                message: '이메일을 입력해주세요!',
              },
              {
                required: true,
                message: '이메일을 확인해주세요!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="전화번호"
            rules={[{ required: true, message: '전화번호를 입력해주세요!' }]}
          >
            <Input style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="name"
            label="인증코드"
            rules={[
              {
                required: true,
                message: '인증코드를 입력해주세요!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...formTailLayout} style={{ marginLeft: '30px' }}>
            <Checkbox
              checked={checkAd}
              onChange={onCheckboxChange}
              style={{ width: '230px', fontSize: '0.8rem' }}
            >
              광고성 수신 동의
            </Checkbox>
          </Form.Item>
        </Form>
      </div>
      <div className="register__kakaoBtn">
        <Image src={Kakao} alt="kakao" />
        <a href={KAKAO_AUTH_URL} onClick={handleClick} className="kakaoBtn">
          카카오로 로그인하기
        </a>
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
      top: 130px;
    }
    .register__kakaoBtn {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 370px;

      .kakaoBtn {
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

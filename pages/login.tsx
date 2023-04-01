import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import Kakao from '../public/assets/kakaotalk.svg';
import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';
import layout from '../styles/layout.module.scss';
import { API_URL_AUTH } from './api/auth';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

export default function Login() {
  const router = useRouter();
  const client = useFetch();
  const { setLoginState } = useAuth();

  const loginTestUser = async (mode?: number) => {
    const { tokens, user } = await client.post(API_URL_AUTH.TEST_LOGIN, {
      mode,
    });
    setLoginState({ tokens, user });
  };

  const loginOnclick = () => {
    if (sessionStorage !== null) {
      router.push(KAKAO_AUTH_URL);
    }
  };

  return (
    <>
      <div className="login__container">
        <p className="login__greeting">
          안녕하세요! <br />
          탭스페이스 강의장에 <br />
          오신걸 환영합니다.
        </p>
        <div className="login__buttons">
          <Button
            type="primary"
            size="large"
            className="login__button rupy"
            onClick={() => loginTestUser(1)}
          >
            모범생 루피 계정 로그인
          </Button>
          <Button
            type="primary"
            size="large"
            className="login__button pororo"
            onClick={() => loginTestUser(2)}
          >
            노는게 제일 좋은 뽀로로 계정 로그인
          </Button>
          <Button
            type="primary"
            size="large"
            className={`${layout.flex_center} login__button`}
            icon={<Kakao style={{ marginRight: '5px' }} />}
            onClick={loginOnclick}
          >
            카카오 로그인
          </Button>
        </div>
        <div className="login__noAccount">
          <span>회원이 아니신가요?</span>
          <Link href="/register">회원가입</Link>
        </div>
      </div>
      <style global jsx>
        {`
          .login__container {
            margin: 150px auto;
            padding: 50px 30px;
            width: 290px;
            text-align: center;
            border: 1px solid #a1aebf;
            border-radius: 15px;
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);

            .login__greeting {
              font-size: 1.3rem;
              font-weight: 700;
              line-height: 130%;
            }

            .login__buttons {
              margin: 30px 0 30px;

              .login__button {
                width: 100%;
              }

              .login__button:not(:last-child) {
                margin-bottom: 10px;
              }

              .rupy {
                background-color: #e57d8f;
              }

              .pororo {
                background-color: #0075eb;
                letter-spacing: -1.5px;
              }
            }

            .login__noAccount {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </>
  );
}

import { Button } from 'antd';
import { useRouter } from 'next/router';

import useAuth from 'hooks/useAuth';

import { EXTERNAL } from 'constants/urls';

import layout from 'styles/layout.module.scss';

//asssets
import Kakao from 'public/assets/kakaotalk.svg';

function LoginButtons() {
  const router = useRouter();

  const { loginTestUser } = useAuth();

  const onClickSocialLoginButton = () => {
    if (sessionStorage !== null) {
      router.push(EXTERNAL.KAKAO_AUTH);
    }
  };

  return (
    <>
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
        onClick={onClickSocialLoginButton}
      >
        카카오 로그인
      </Button>

      <style global jsx>{`
        .login__buttons {
          margin: 30px 0 30px;

          .login__button {
            width: 100%;
          }

          .login__button:not(:last-child) {
            margin-bottom: 10px;
          }

          .rupy,
          .rupy:hover {
            background-color: #e57d8f;
          }

          .pororo,
          .pororo:hover {
            background-color: #0075eb;
            letter-spacing: -1.5px;
          }
        }
      `}</style>
    </>
  );
}

export default LoginButtons;

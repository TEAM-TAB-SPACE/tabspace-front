import { useEffect } from 'react';

import Link from 'next/link';

import LoginButtons from 'components/login/LoginButtons';

import useMessage from 'hooks/useMessage';
import useAuth from 'hooks/useAuth';

import { INTERNAL } from 'constants/urls';
import { LOGIN_FAIL_MESSAGE } from 'constants/messages';

export default function Login() {
  const { contextHolder, error } = useMessage();

  const { isLoginFailed } = useAuth();

  useEffect(() => {
    if (isLoginFailed) error(LOGIN_FAIL_MESSAGE);
  }, [error, isLoginFailed]);

  return (
    <>
      {contextHolder}
      <div className="login__container">
        <p className="login__greeting">
          안녕하세요! <br />
          탭스페이스 강의장에 <br />
          오신걸 환영합니다.
        </p>
        <div className="login__buttons">
          <LoginButtons />
        </div>
        <div className="login__noAccount">
          <span>회원이 아니신가요?</span>
          <Link href={INTERNAL.register}>회원가입</Link>
        </div>
      </div>
      <style global jsx>{`
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

          .login__noAccount {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}

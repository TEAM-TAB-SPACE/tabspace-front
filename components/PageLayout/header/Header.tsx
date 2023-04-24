import { useRouter } from 'next/router';
import css from 'styled-jsx/css';

import Link from 'next/link';

import LoginContent from './LoginContent';

import useAuth from 'hooks/useAuth';

import { INTERNAL } from 'constant/urls';

import layout from 'styles/layout.module.scss';
import variables from 'styles/variables.module.scss';

//assets
import Logo from 'public/assets/mainLogo.svg';

export default function Header() {
  const router = useRouter();
  const { isLogin, user, logout } = useAuth();

  return (
    <>
      <header className={`${layout.flex_a_center_j_between} header__container`}>
        <Link href={INTERNAL.home}>
          <Logo />
        </Link>
        {!isLogin ? (
          <div className="header__auth">
            <div className="header__login">
              <Link href={INTERNAL.login}>로그인</Link>
            </div>
            <div className="header__register">
              <Link href={INTERNAL.register}>회원가입</Link>
            </div>
          </div>
        ) : (
          <LoginContent
            user={user}
            onClickLoginout={logout}
            onClickDashboard={() => {
              router.push(INTERNAL.dashboard);
            }}
          />
        )}
      </header>
      <style jsx>{header}</style>
    </>
  );
}

const header = css`
  .header__container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    background-color: ${variables.white};
    padding: 15px 70px;
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  }
  .header__auth {
    display: flex;
    flex-direction: row;
  }

  .header__login,
  .header__register {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    .header__container {
      padding: 16px;
    }
  }
`;

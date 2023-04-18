import { useRouter } from 'next/router';
import Link from 'next/link';
import css from 'styled-jsx/css';
import Logo from '../../../public/assets/mainLogo.svg';
import LoginContent from './LoginContent';
import useAuth from '../../../hooks/useAuth';
import variables from '../../../styles/variables.module.scss';

export default function Header() {
  const router = useRouter();
  const { isLogin, user, logout } = useAuth();

  return (
    <>
      <header className="header__container">
        <Link href="/">
          <Logo />
        </Link>
        {!isLogin ? (
          <div className="header__auth">
            <div className="header__login">
              <Link href="/login">로그인</Link>
            </div>
            <div className="header__register">
              <Link href="/register">회원가입</Link>
            </div>
          </div>
        ) : (
          <LoginContent
            user={user}
            onClickLoginout={logout}
            onClickDashboard={() => {
              router.push('/dashboard');
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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

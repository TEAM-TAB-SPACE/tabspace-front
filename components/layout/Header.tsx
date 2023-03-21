import Link from 'next/link';
import Image from 'next/image';
import css from 'styled-jsx/css';
import Logo from '../../public/assets/mainLogo.svg';
import { useRouter } from 'next/router';

import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();

  const user = getCookie('realname');
  const Logout = () => {
    router.push('/');
  };
  // const isLogged = localStorage.getItem('access');
  // const user = localStorage.getItem('realname');
  // const Logout = () => {
  //   localStorage.removeItem('accessToken');
  //   router.push('/');
  // };
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if ((getCookie('refresh'), getCookie('realname'))) {
      setIsLogin(!isLogin);
    } else {
      setIsLogin(false);
    }
  }, [getCookie('refresh'), getCookie('realname')]);

  return (
    <header className="header__container">
      <Logo />
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
        <div>
          <p>{user}님 환영합니다!</p>
          <button onClick={Logout}>로그아웃</button>
        </div>
      )}

      <style jsx>{header}</style>
      <style global jsx>{`
        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </header>
  );
}

const header = css`
  .header__container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 24px 70px;
    align-items: center;
  }
  .header__auth {
    display: flex;
    flex-direction: row;
  }
  .header__login {
    padding: 0 10px;
  }
  .header__register {
    padding: 0 10px;
  }
`;

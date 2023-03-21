import Link from 'next/link';
import Image from 'next/image';
import css from 'styled-jsx/css';
import Logo from '../../public/assets/mainLogo.svg';
import { useRouter } from 'next/router';

import { getCookie, removeCookies } from 'cookies-next';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../pages/api/axios';

export default function Header() {
  const router = useRouter();
  const user = getCookie('realname');
  const Logout = async (token: any) => {
    await axiosInstance
      .post(`/auth/logout`, token)
      .then(res => {
        console.log(res.data);
        console.log('로그아웃 성공');
        removeCookies('refreshToken');
        removeCookies('realname');
        router.push('/');
      })
      .catch(err => {
        console.log(err);
        console.log('로그아웃 실패');
      });
  };

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

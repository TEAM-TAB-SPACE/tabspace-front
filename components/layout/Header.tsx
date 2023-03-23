import Link from 'next/link';
import css from 'styled-jsx/css';
import Logo from '../../public/assets/mainLogo.svg';
import { useRouter } from 'next/router';

import { deleteCookie, getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../pages/api/axios';

export default function Header() {
  const router = useRouter();
  const [username, setUsername] = useState(''); //realname
  const [isLogin, setIsLogin] = useState(false); // refresh

  // 로그아웃
  const Logout = async () => {
    const token = getCookie('accessToken');
    try {
      const response = await axiosInstance.post(`/auth/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('로그아웃성공');
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (getCookie('accessToken')) {
      setIsLogin(!isLogin);
    } else {
      setIsLogin(false);
    }
  }, [getCookie('accessToken')]);

  // 로컬스토리지에서 realname
  useEffect(() => {
    const username = localStorage.getItem('realname');
    if (username) setUsername(username);
  }, []);

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
        <div className="username__div">
          <p>{username}님 환영합니다!</p>
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

  .username__div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 34px;
    p {
      padding-right: 10px;
    }
    button {
      width: 100px;
      height: 34px;
      border: none;
      border-radius: 5px;

      color: #ffffff;
      background-color: #722ed1;
    }
  }
`;

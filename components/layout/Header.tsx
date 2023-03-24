import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LogoutOutlined, NotificationOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import { axiosInstance } from '../../pages/api/axios';
import { deleteCookie, getCookie } from 'cookies-next';
import Link from 'next/link';
import css from 'styled-jsx/css';
import Logo from '../../public/assets/mainLogo.svg';
import { API_URL_AUTH } from '../../pages/api/auth';

export default function Header() {
  const router = useRouter();
  const accessToken = getCookie('accessToken');

  const [username, setUserName] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('realname');
    if (username) setUserName(username);
  }, []);

  // 로그아웃
  const Logout = () => {
    const token = accessToken;
    try {
      axiosInstance.post(API_URL_AUTH.LOGOUT, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      localStorage.removeItem('realname');
      localStorage.removeItem('id');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header__container">
      <Link href="/">
        <Logo />
      </Link>
      {!username ? (
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
          <p>{username}님</p>
          <Button size="middle" type="text" style={{ padding: '4px 2px' }}>
            <Badge dot>
              <NotificationOutlined style={{ fontSize: 16 }} />
            </Badge>
          </Button>
          <Button
            size="middle"
            type="text"
            onClick={Logout}
            style={{ padding: '4px 2px' }}
          >
            <LogoutOutlined style={{ fontSize: 16 }} />
          </Button>
          <Button
            href="/dashboard"
            size="large"
            style={{ height: '30px', padding: '2px 10px 0' }}
          >
            대시보드
          </Button>
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
    padding: 24px 70px;
    align-items: center;
  }
  .header__auth {
    display: flex;
    flex-direction: row;
  }
  .header__login,
  .header__register {
    padding: 0 10px;
  }
  .username__div {
    display: flex;
    align-items: center;
    gap: 23px;
    height: 34px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    .header__container {
      padding: 16px;
    }
  }
`;

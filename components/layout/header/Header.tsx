import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { axiosInstance, setAxiosInterCeptors } from '../../../pages/api/axios';
import { deleteCookie, getCookie } from 'cookies-next';
import Link from 'next/link';
import css from 'styled-jsx/css';
import Logo from '../../../public/assets/mainLogo.svg';
import LoginContent from './LoginContent';
import { loginStateAtom, userAtom } from '../../../store/user';
import { API_URL_AUTH } from '../../../pages/api/auth';

export default function Header() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);
  const user = useRecoilValue(userAtom);

  setAxiosInterCeptors(axiosInstance);

  // 로그아웃
  const Logout = () => {
    try {
      const accessToken = getCookie('accessToken');

      axiosInstance.post(API_URL_AUTH.LOGOUT, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      deleteCookie('accessToken');
      deleteCookie('refreshToken');

      router.push('/');
      setIsLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

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
            onclickLoginout={Logout}
            onClickDashboard={() => {
              router.push('/dashboard');
            }}
          />
        )}
      </header>
      <style jsx>{header}</style>
      <style global jsx>{`
        .header__container a {
          text-decoration: none;
          color: black;
        }
      `}</style>
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
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px 70px;
    align-items: center;
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

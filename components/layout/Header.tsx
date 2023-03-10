import Link from 'next/link';
import Image from 'next/image';
import css from 'styled-jsx/css';
import Logo from '../../public/assets/logo.png';

export default function Header() {
  return (
    <header className="header__container">
      <Image src={Logo} alt="logo" />
      <div className="header__auth">
        <div className="header__login">
          <Link href="/login">로그인</Link>
        </div>
        <div className="header__register">
          <Link href="/register">회원가입</Link>
        </div>
      </div>
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

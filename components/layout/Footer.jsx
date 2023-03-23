import Image from 'next/image';
import footerimg1 from 'public/images/footer1.jpg';
import footerimg2 from 'public/images/footer2.jpg';
import footerimg3 from 'public/images/footer3.jpg';
import footerimg4 from 'public/images/footer4.jpg';

import css from 'styled-jsx/css';

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_first_box">
        <p className="footer_title">Locate Us</p>
        <p className="footer_text">
          3 Birrel Avenue, Sabo.<br></br>
          Yaba, Lagos State,<br></br>
          Nigeria
        </p>
      </div>
      <div className="footer_second_box">
        <p className="footer_title">Contact Us</p>
        <p className="footer_text">
          hello@hng.tech<br></br>
          +234 (0) 812 345 6789
        </p>
      </div>
      <div className="footer_third_box">
        <p className="footer_text">
          To follow our latest news, training<br></br>with the community,chat
          with us<br></br>find us on our networks!
        </p>
        <div className="footerimg_container">
          <Image src={footerimg1} alt="footerimg1" />
          <Image src={footerimg2} alt="footerimg2" />
          <Image src={footerimg3} alt="footerimg3" />
          <Image src={footerimg4} alt="footerimg4" />
        </div>
      </div>
      <style jsx>{footer}</style>
    </div>
  );
}

const footer = css`
  .footer_container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 30px 70px;
    background-color: #330b52;
    align-items: center;
  }
  .footer_title {
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .footer_text {
    color: white;
    font-size: 14px;
    line-height: 22px;
    margin-top: 10px;
  }
  .footerimg_container {
    margin: 20px auto 0;
    width: 134px;
    height: 24px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    .footer_container {
      display: block;
      text-align: center;
    }
    .footer_second_box,
    .footer_third_box {
      margin-top: 50px;
    }
  }
`;

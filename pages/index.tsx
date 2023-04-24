import css from 'styled-jsx/css';

import Image from 'next/image';

import Course from 'components/home/Course';
import Carousel from 'components/home/Carousel';
import Slider from 'components/home/Slider';
import FixedSection from 'components/home/FixedSection';
import ChatbotFloatButton from 'components/home/ChatbotFloatButton';

import 'react-chatbot-kit/build/main.css';
import variables from 'styles/variables.module.scss';

//assets
import Mainimg from 'public/assets/images/img1.jpg';
import Mainimg2 from 'public/assets/images/img2.jpg';

export default function Home() {
  return (
    <>
      <ChatbotFloatButton />
      <main className="index_wrapper">
        <section className="index_mainimg">
          <span className="mainimg">
            <Image src={Mainimg} alt="mainimg" className="mainimg" />
          </span>
          <span className="mainimg2">
            <Image src={Mainimg2} alt="mainimg2" className="mainimg2" />
          </span>
        </section>
        <section className="index_course">
          <Course />
        </section>
        <section className="index_carousel">
          <Carousel />
        </section>
        <section className="index_slider">
          <Slider />
        </section>
        <div className="index_fixedsection">
          <FixedSection />
        </div>
      </main>
      <style jsx>{index}</style>
      <style global jsx>{`
        .mainimg,
        .mainimg2 {
          width: 100%;
          height: 100%;
        }

        .logo {
          height: 70px;
        }
      `}</style>
    </>
  );
}

const index = css`
  .index_wrapper {
    padding: 0 70px;
  }

  @media (min-width: 501px) {
    .mainimg {
      display: block;
    }

    .mainimg2 {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .index_wrapper {
      padding: 0 16px;
    }

    .mainimg {
      display: none;
    }

    .mainimg2 {
      display: block;
    }
  }

  .index_top {
    width: 1440px;
    height: 568px;
  }

  .index_top_title {
    font-weight: bold;
    font-size: 40px;
    margin-top: 80px;
    text-align: center;
  }

  .index_top_text {
    margin-top: 24px;
    text-align: center;
    line-height: 25px;
    font-size: 24px;
  }

  .index_topbox {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }

  .index_topbox_front {
    width: 280px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: rgba(255, 133, 192, 0.07);
    border-radius: 10px;
    margin-right: 32px;
    padding: 40px;
  }

  .index_topbox_backend {
    width: 280px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: rgba(82, 196, 26, 0.07);
    border-radius: 10px;
    margin-right: 32px;
    padding: 40px;
  }

  .index_topbox_ux {
    width: 280px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: rgba(250, 140, 22, 0.07);
    border-radius: 10px;
    padding: 40px;
  }

  .index_topbox_badge {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    width: 48px;
    height: 17px;
    background: ${variables.purple};
    border-radius: 100px;
    color: ${variables.white};
    font-size: 12px;
  }

  .index_topbox_backend_badge {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    width: 58px;
    height: 17px;
    background: ${variables.purple};
    border-radius: 100px;
    color: ${variables.white};
    font-size: 12px;
  }

  .index_topbox_title {
    font-size: 28px;
    line-height: 140%;
    font-weight: 700;
  }

  .index_topbox_text {
    font-weight: 300;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.02em;
  }

  .index_mid {
    width: 1440px;
    height: 516px;
  }

  .index_text {
    font-weight: 400;
    font-size: 24px;
    margin-left: 70px;
  }

  .index_title {
    font-weight: 700;
    font-size: 40px;
    margin-left: 70px;
    margin-top: 24px;
  }

  .swiper_container {
    display: flex;
    width: 1017px;
    height: 126px;
    margin-top: 56px;
    justify-content: center;
  }

  .swiper_slide {
    border: 1px solid #a1aebf;
    border-radius: 4px;
    width: 307px;
    height: 266px;
  }

  .index_profile {
    border-radius: 50%;
  }
`;

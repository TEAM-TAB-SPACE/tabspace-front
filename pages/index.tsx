import BaseLayout from '../components/layout/BaseLayout';
import Image from 'next/image';
import Mainimg from '../public/images/img1.jpg';
import Course from '../components/layout/Course';
import Carousel from '../components/layout/Carousel';
import Slider from '../components/layout/Slider';
import FixedSection from '../components/layout/FixedSection';
import css from 'styled-jsx/css';

export default function Home() {
  return (
    <>
      <BaseLayout>
        <div className="index_wrapper">
          <div className="index_mainimg">
            <Image src={Mainimg} alt="mainimg" className="mainimg" />
          </div>
          <div className="index_course">
            <Course />
          </div>
          <div className="index_carousel">
            <Carousel />
          </div>
          <div className="index_slider">
            <Slider />
          </div>
          <div className="index_fixedsection">
            <FixedSection />
          </div>
        </div>
      </BaseLayout>
      <style jsx>{index}</style>
      <style global jsx>{`
        .mainimg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

const index = css`
  .index_wrapper {
    padding: 0 70px;
  }
  @media (max-width: 500px) {
    .index_wrapper {
      padding: 0 16px;
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
    background: #722ed1;
    border-radius: 100px;
    color: #ffffff;
    font-size: 12px;
  }
  .index_topbox_backend_badge {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    width: 58px;
    height: 17px;
    background: #722ed1;
    border-radius: 100px;
    color: #ffffff;
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

import React, { Component } from 'react';
import Image from 'next/image';
import Profileimg from 'public/images/profile.jpeg';
import Rightbtn from 'public/images/btn-right.jpg';
import Leftbtn from 'public/images/btn-left.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from 'styled-jsx/css';
import { createGlobalStyle } from 'styled-components';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{ position: 'absolute', top: -110, right: 0 }}
      className="rightbtn"
    >
      <Image
        src={Rightbtn}
        width={50}
        height={50}
        className="rightbtn"
        onClick={onClick}
        alt={'오른쪽 버튼'}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{ position: 'absolute', top: -110, right: 70 }}
      className="leftbtn"
    >
      <Image
        src={Leftbtn}
        width={50}
        height={50}
        className="leftbtn"
        onClick={onClick}
        alt={'왼쪽 버튼'}
      />
    </div>
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      accessibility: true,
      responsive: [
        {
          breakpoint: 834,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="carousel_container">
        <div className="carousel_box">
          <p className="carousel_text">탭스페이스의 교육을 경험한</p>
          <p className="carousel_title">졸업생 후기</p>
        </div>
        <div className="carousel_slider_container">
          <Global />
          <Slider {...settings}>
            <div className="carousel_long_slide" style={{ width: 250 }}>
              <div className="carousel_mid_profile_title">
                <Image
                  src={Profileimg}
                  alt="profileimg"
                  width="48"
                  height="48"
                  style={{ borderRadius: '50%' }}
                />
                <p className="carousel_mid_title">
                  &quot;내가 선택한 자율에 대한 책임을 키우는 곳&quot;
                </p>
              </div>
              <p className="carousel_mid_text">
                모든 배움은 선택에 의해 이루어집니다. 정해진 기간 내에 어떤
                규칙을 따를지, 무엇을 학습할지 스스로 선택하고 이행하기 때문에
                그 결과에 대한 책임 또한 자신이 지게 됩니다. 이는 과정을
                수행하는 동안 굉장한 몰입감과 만족감을 주었고 후회없는 경험을
                선물로 받았습니다.
              </p>
            </div>
            <div className="carousel_shot_slide" style={{ width: 250 }}>
              <div className="carousel_mid_profile_title">
                <Image
                  src={Profileimg}
                  alt="profileimg"
                  width="48"
                  height="48"
                  style={{ borderRadius: '50%' }}
                />
                <p className="carousel_mid_title">
                  &quot;동료를 존중하며 함께 자라는 방법을 배울 수
                  있습니다&quot;
                </p>
              </div>
              <p className="carousel_mid_text">
                같이 일하고 싶은 개발자가 되고 싶으신 예비 개발자들 분들께
                탭스페이스를 추천합니다
              </p>
            </div>
            <div className="carousel_long_slide" style={{ width: 250 }}>
              <div className="carousel_mid_profile_title">
                <Image
                  src={Profileimg}
                  alt="profileimg"
                  width="48"
                  height="48"
                  style={{ borderRadius: '50%' }}
                />
                <p className="carousel_mid_title">
                  &quot;모든 커리큘럼이 개발자로서의 성장에 큰 도움이
                  됐습니다&quot;
                </p>
              </div>
              <p className="carousel_mid_text">
                혼자가 아니라 함께였기에 더 많은 것들을 배울 수 있었습니다.
                각자의 방식으로 구현한 과제를 통해 서로가 서로의 성장에 자양분이
                되는 환경이 단기간에 빠른 성장을 하는 계기가 되었습니다. 만약
                혼자 공부했다면 이렇게 빠르게 성장하지 못했을거에요.
              </p>
            </div>
            <div className="carousel_shot_slide" style={{ width: 250 }}>
              <div className="carousel_mid_profile_title">
                <Image
                  src={Profileimg}
                  alt="profileimg"
                  width="48"
                  height="48"
                  style={{ borderRadius: '50%' }}
                />
                <p className="carousel_mid_title">
                  &quot;다양한 경험과 지식을 얻을 수 있는 부트캠프&quot;
                </p>
              </div>
              <p className="carousel_mid_text">
                앞으로 어떤 방향으로 나아가야 할지 알게 해주는 교육과정이
                있었기에 개발자가 될 수 있었습니다.
              </p>
            </div>
          </Slider>
        </div>
        <style jsx>{carousel}</style>
      </div>
    );
  }
}
const Global = createGlobalStyle`
  .slick-slide {
      margin-right: 30px;
  }
  .carousel_container {
    .slick-track {
      width: 5000px;
      height: 400px;
      overflow: hidden;
    }  
    @media (max-width: 500px) {
      .rightbtn {
          left: 75%;
          transform: translateX(-50%);
          margin-top: 240px; 
      }
      .leftbtn {
        left: 50%;
        transform: translateX(-40%);
        margin-top: 240px; 
      }
    }
  }
`;

const carousel = css`
  .carousel_box {
    margin-bottom: 56px;
  }
  .carousel_text {
    font-weight: 400;
    font-size: 24px;
    margin-top: 150px;
  }
  .carousel_title {
    font-weight: 700;
    font-size: 40px;
    margin-top: 24px;
  }
  .carousel_long_slide {
    border: 1px solid #a1aebf;
    border-radius: 4px;
    padding: 20px;
  }
  .carousel_shot_slide {
    border: 1px solid #a1aebf;
    border-radius: 4px;
    padding: 20px;
  }
  .carousel_mid_profile_title {
    display: flex;
    align-items: center;
  }
  .carousel_mid_title {
    margin-left: 10px;
    font-weight: bold;
    line-height: 120%;
  }
  .carousel_mid_text {
    margin-top: 16px;
    letter-spacing: 0.02em;
    line-height: 150%;
  }
`;

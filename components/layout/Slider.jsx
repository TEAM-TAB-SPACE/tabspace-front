import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Logo1 from 'public/images/Logo1.jpg';
import Logo2 from 'public/images/Logo2.jpg';
import Logo3 from 'public/images/Logo3.jpg';
import Logo4 from 'public/images/Logo4.jpg';
import Logo5 from 'public/images/Logo5.jpg';
import Logo6 from 'public/images/Logo6.jpg';
import css from 'styled-jsx/css';

export default class Sliders extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 834,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: 'linear',
          },
        },
        {
          breakpoint: 500,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: 'linear',
          },
        },
      ],
    };

    return (
      <div className="slider_container">
        <div className="slider_box">
          <p className="slider_text">탭스페이스와 함께하는</p>
          <p className="slider_title">연계 기업</p>
        </div>
        <div className="slider_slidecontainer">
          <Slider {...settings}>
            <div>
              <Image src={Logo1} alt="logo1" style={{ width: 250 }} />
            </div>
            <div>
              <Image src={Logo2} alt="logo2" style={{ width: 250 }} />
            </div>
            <div>
              <Image src={Logo3} alt="logo3" style={{ width: 250 }} />
            </div>
            <div>
              <Image src={Logo4} alt="logo4" style={{ width: 250 }} />
            </div>
            <div>
              <Image src={Logo5} alt="logo5" style={{ width: 250 }} />
            </div>
            <div>
              <Image src={Logo6} alt="logo6" style={{ width: 250 }} />
            </div>
          </Slider>
        </div>
        <style jsx>{slider}</style>
      </div>
    );
  }
}
const slider = css`
  .slider_container {
    margin-bottom: 64px;
  }
  .slider_box {
    margin-bottom: 64px;
  }
  .slider_text {
    font-weight: 400;
    font-size: 24px;
    margin-left: 70px;
    margin-top: 150px;
  }
  .slider_title {
    font-weight: 700;
    font-size: 40px;
    margin-left: 70px;
    margin-top: 24px;
  }
  @media (max-width: 500px) {
    .slider_box {
      margin-left: -30px;
    }
  }

`;
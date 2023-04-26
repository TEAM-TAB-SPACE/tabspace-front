import React, { Component } from 'react';
import css from 'styled-jsx/css';

import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Sliders extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      centerMode: true,
      draggable: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 834,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            draggable: false,
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
            speed: 2000,
            autoplaySpeed: 2000,
            draggable: false,
            cssEase: 'linear',
          },
        },
      ],
    };

    return (
      <div className="slider_container">
        <div className="slider_box">
          <p className="slider_text">탭스페이스와 함께하는</p>
          <h3 className="slider_title">연계 기업</h3>
        </div>
        <div className="slider_slidecontainer">
          <Slider {...settings}>
            <div>
              <Image
                src="/assets/images/Logo1.jpg"
                width={185}
                height={70}
                alt="logo1"
                className="logo"
              />
            </div>
            <div>
              <Image
                src="/assets/images/Logo2.jpg"
                width={185}
                height={70}
                alt="logo2"
                style={{ width: 185 }}
                className="logo"
              />
            </div>
            <div>
              <Image
                src="/assets/images/Logo3.jpg"
                width={185}
                height={70}
                alt="logo3"
                style={{ width: 185 }}
                className="logo"
              />
            </div>
            <div>
              <Image
                src="/assets/images/Logo4.jpg"
                width={185}
                height={70}
                alt="logo4"
                style={{ width: 185 }}
                className="logo"
              />
            </div>
            <div>
              <Image
                src="/assets/images/Logo5.jpg"
                width={185}
                height={70}
                alt="logo5"
                style={{ width: 185 }}
                className="logo"
              />
            </div>
            <div>
              <Image
                src="/assets/images/Logo6.jpg"
                width={185}
                height={70}
                alt="logo6"
                style={{ width: 185 }}
                className="logo"
              />
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
    margin-bottom: 120px;
  }

  .slider_box {
    margin-bottom: 64px;
  }

  .slider_text {
    font-weight: 400;
    font-size: 22px;
    margin-top: 80px;
  }

  .slider_title {
    font-weight: 700;
    font-size: 35px;
    margin-top: 20px;
  }

  .logo {
    height: 100px;
  }
`;

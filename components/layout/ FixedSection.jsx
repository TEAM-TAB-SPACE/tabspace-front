import React, { useState, useRef } from 'react';
import css from 'styled-jsx/css';

export default function FixedSection() {
  const [num, setNum] = useState('');
  const phoneRef = useRef();

  // 휴대폰 번호 입력 함수
  const handlePhone = e => {
    const value = phoneRef.current.value.replace(/\D+/g, '');
    const numberLength = 11;

    let result;
    result = '';

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += '-';
          break;
        case 7:
          result += '-';
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setNum(e.target.value);
  };

  return (
    <div>
      <div className="fixedsection_container">
        <select className="fixedsection_selectbtn">
          <option value="fixedsection_front">프론트엔드 과정</option>
          <option value="fixedsection_backend">백엔드 과정</option>
          <option value="fixedsection_ux/ui">UX/UI기확자 과정</option>
        </select>
        <div>
          <input
            className="fixedsection_telnumber"
            value={num}
            ref={phoneRef}
            onChange={handlePhone}
            type="tel"
          />
        </div>
        <button className="fixedsection_button" type="submit">
          사전 알림 신청받기
        </button>
      </div>
      <style jsx>{fixedsection}</style>
    </div>
  );
}

const fixedsection = css`
  .fixedsection_container {
    display: flex;
    align-items: center;
    width: 700px;
    bottom: 10px;
    border: 1px solid #a1aebf;
    padding: 15px 30px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    justify-content: space-evenly;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
  .fixedsection_selectbtn {
    width: 140px;
    height: 30px;
    border-radius: 2px;
    border: 1px solid #40a9ff;
    text-align: center;
  }
  .fixedsection_telnumber {
    width: 243px;
    height: 30px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
  .fixedsection_button {
    border-radius: 2px;
    background: #722ed1;
    border: 1px solid #722ed1;
    width: 231px;
    height: 36.8px;
    color: white;
    font-size: 16px;
    line-height: 140%;
    font-weight: 700;
  }
  @media (max-width: 834px) {
  }
  @media (max-width: 500px) {
    .fixedsection_container {
      width: 288px;
      height: 114.8px;
      display: flex;
      flex-wrap: wrap;
      bottom: 10px;
      position: fixed;
    }
    .fixedsection_selectbtn {
      width: 93px;
      height: 30px;
    }
    .fixedsection_telnumber {
      width: 140px;
      height: 38px;
    }
    .fixedsection_button {
      width: 243px;
      height: 36.8px;
    }
  }
`;

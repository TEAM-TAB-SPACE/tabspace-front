import React, { useState } from 'react';
import css from 'styled-jsx/css';
import { axiosInstance } from '../../pages/api/axios';

export default function FixedSection() {
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('F');

  // 휴대폰 번호 입력 함수
  const handlePhone = e => {
    setPhone(e.target.value);
  };

  const handleSelect = e => {
    setCategory(e.target.value);
  };

  const handleClick = () => {
    let result = '';

    for (let i = 0; i < phone.length && i < phone.length; i++) {
      if (phone[i] === '-') continue;
      result += phone[i];
    }

    axiosInstance.post(`/appliers/info`, { category, phone: result });
  };

  return (
    <>
      <div className="fixedsection_container">
        <select
          className="fixedsection_selectbtn"
          onChange={handleSelect}
          value={category}
        >
          <option value="F">프론트엔드 과정</option>
          <option value="B">백엔드 과정</option>
          <option value="U">UX/UI기획자 과정</option>
        </select>
        <div>
          <input
            className="fixedsection_telnumber"
            value={phone}
            onChange={handlePhone}
            type="tel"
          />
        </div>
        <button
          className="fixedsection_button"
          type="submit"
          onClick={handleClick}
        >
          사전 알림 신청받기
        </button>
      </div>
      <style jsx>{fixedsection}</style>
    </>
  );
}

const fixedsection = css`
  .fixedsection_container {
    position: fixed;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 550px;
    bottom: 30px;
    border: 1px solid #a1aebf;
    padding: 15px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    justify-content: space-evenly;
    left: 50%;
    transform: translateX(-50%);
  }
  .fixedsection_selectbtn {
    height: 36px;
    border-radius: 5px;
    text-align: center;
  }
  .fixedsection_telnumber {
    height: 36px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
  .fixedsection_button {
    border-radius: 2px;
    background: #722ed1;
    border: 1px solid #722ed1;
    padding: 0 30px;
    height: 36px;
    color: white;
    font-size: 16px;
    line-height: 140%;
    font-weight: 700;
    border-radius: 5px;
  }
  @media (max-width: 570px) {
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

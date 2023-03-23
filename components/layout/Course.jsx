import css from 'styled-jsx/css';

export default function Course() {
  return (
    <div>
      <div className="coures_container">
        <p className="coures_title">내게 맞는 코스를 찾아보세요</p>
        <p className="coures_text">
          탭하우스만의 교육 노하우로 IT 취업에 특화된 과정을 소개합니다.
        </p>
        <div className="coures_box">
          <div className="coures_front">
            <p className="coures_badge">진행중</p>
            <p className="coures_box_title">프론트엔드 코스</p>
            <p className="coures_box_text">
              사용자 친화적 웹 서비스 개발 능력을 갖푼 프론트엔드 개발자 과정
            </p>
          </div>
          <div className="coures_backend">
            <p className="coures_backend_badge">모집예정</p>
            <h1 className="coures_box_title">백엔드 코스</h1>
            <p className="coures_box_text">
              안정적인 웹 서비스를 효율적으로 구축하는 백엔드 개발자 양성 과정
            </p>
          </div>
          <div className="coures_ux">
            <p className="coures_badge">진행중</p>
            <h1 className="coures_box_title">UX/UI 기획자 코스</h1>
            <p className="coures_box_text">
              기획부터 디자인까지, UX/UI 커리어 입문을 위한 과정
            </p>
          </div>
        </div>
      </div>
      <style jsx>{index}</style>
    </div>
  );
}

const index = css`
  .coures_title {
    font-weight: bold;
    font-size: 40px;
    margin-top: 80px;
    text-align: center;
  }
  .coures_text {
    margin-top: 24px;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
  }
  .coures_box {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  .coures_front {
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
  .coures_backend {
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
  .coures_ux {
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
  .coures_badge {
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
  .coures_backend_badge {
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
  .coures_box_title {
    font-size: 28px;
    line-height: 140%;
    font-weight: 700;
  }
  .coures_box_text {
    font-weight: 300;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.02em;
  }
  @media (max-width: 834px) {
    .coures_box {
    }
    .coures_front {
      width: 212px;
      height: 200px;
    }
    .coures_backend {
      width: 212px;
      height: 200px;
    }
    .coures_ux {
      width: 212px;
      height: 200px;
    }
    @media (max-width: 500px) {
      .coures_box {
        display: flex;
        flex-direction: column;
      }
      .coures_front {
        width: 280px;
        height: 120px;
        margin-bottom: 32px;
      }
      .coures_backend {
        width: 280px;
        height: 120px;
        margin-bottom: 32px;
      }
      .coures_ux {
        width: 280px;
        height: 120px;
      }
    }
  }
`;

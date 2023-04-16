import css from 'styled-jsx/css';
import variables from '../../styles/variables.module.scss';

export default function Course() {
  return (
    <>
      <div className="coures_container">
        <h1 className="coures_title">내게 맞는 코스를 찾아보세요</h1>
        <p className="coures_text">
          탭하우스만의 교육 노하우로 IT 취업에 특화된 과정을 소개합니다.
        </p>
        <div className="coures_box">
          <div className="coures_front">
            <p className="coures_badge">진행중</p>
            <h2 className="coures_box_title">프론트엔드 코스</h2>
            <p className="coures_box_text">
              사용자 친화적 웹 서비스 개발 능력을 갖푼 프론트엔드 개발자 과정
            </p>
          </div>
          <div className="coures_backend">
            <p className="coures_badge">모집예정</p>
            <h2 className="coures_box_title">백엔드 코스</h2>
            <p className="coures_box_text">
              안정적인 웹 서비스를 효율적으로 구축하는 백엔드 개발자 양성 과정
            </p>
          </div>
          <div className="coures_ux">
            <p className="coures_badge">진행중</p>
            <h2 className="coures_box_title">UX/UI 기획자 코스</h2>
            <p className="coures_box_text">
              기획부터 디자인까지, UX/UI 커리어 입문을 위한 과정
            </p>
          </div>
        </div>
      </div>
      <style jsx>{index}</style>
    </>
  );
}

const index = css`
  .coures_title {
    font-weight: bold;
    font-size: 35px;
    margin-top: 80px;
    text-align: center;
    line-height: 140%;
  }
  .coures_text {
    margin-top: 15px;
    text-align: center;
    line-height: 40px;
    font-size: 22px;
    line-height: 130%;
  }
  .coures_box {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 32px;
  }
  .coures_front {
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: rgba(255, 133, 192, 0.07);
    border-radius: 10px;
    padding: 40px;
  }
  .coures_backend {
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: rgba(82, 196, 26, 0.07);
    border-radius: 10px;
    padding: 40px;
  }
  .coures_ux {
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background: rgba(250, 140, 22, 0.07);
    border-radius: 10px;
    padding: 40px;
  }
  .coures_badge {
    padding: 6px 8px 3px;
    background: ${variables.primary};
    border-radius: 100px;
    color: ${variables.white};
    font-size: 12px;
    font-weight: 500;
  }
  .coures_box_title {
    font-size: 25px;
    line-height: 140%;
    font-weight: 700;
  }
  .coures_box_text {
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.02em;
  }
  @media (max-width: 700px) {
    .coures_box {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }
`;

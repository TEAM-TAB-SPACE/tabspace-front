import BaseLayout from '../components/layout/BaseLayout';
import Image from 'next/image';
import Mainimg from '../public/images/img1.jpg';
import Profileimg1 from '../public/images/profile1.jpeg';
import Profileimg2 from '../public/images/profile2.jpeg';
import Profileimg3 from '../public/images/profile3.jpeg';
import Profileimg4 from '../public/images/profile4.jpeg';

import css from 'styled-jsx/css';
import cookies from 'next-cookies';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <BaseLayout>
      <Image src={Mainimg} alt="mainimg" width={1440} height={798} />
      <div className="index_top">
        <p className="index_top_title">내게 맞는 코스를 찾아보세요</p>
        <p className="index_top_text">
          탭하우스만의 교육 노하우로<br></br>IT 취업에 특화된 과정을 소개합니다.
        </p>
        <div className="index_topbox">
          <div className="index_topbox_front">
            <p className="index_topbox_badge">진행중</p>
            <p className="index_topbox_title">프론트엔드 코스</p>
            <p className="index_topbox_text">
              사용자 친화적 웹 서비스 개발
              <br />
              능력을 갖푼 프론트엔드 개발자 과정
            </p>
          </div>
          <div className="index_topbox_backend">
            <p className="index_topbox_backend_badge">모집예정</p>
            <h1 className="index_topbox_title">백엔드 코스</h1>
            <p className="index_topbox_text">
              안정적인 웹 서비스를 효율적으로
              <br />
              구축하는 백엔드 개발자 양성 과정
            </p>
          </div>
          <div className="index_topbox_ux">
            <p className="index_topbox_badge">진행중</p>
            <h1 className="index_topbox_title">UX/UI 기획자 코스</h1>
            <p className="index_topbox_text">
              기획부터 디자인까지,
              <br />
              UX/UI 커리어 입문을 위한 과정
            </p>
          </div>
        </div>
      </div>
      <div className="index_mid">
        <p className="index_text">탭스페이스의 교육을 경험한</p>
        <p className="index_title">졸업생 후기</p>
        <div className="swiper_container">
          <div className="swiper_slide">
            <Image src={Profileimg1} alt="mainimg" width={48} height={48} />
            <p>"내가 선택한 자율에 대한 책임을 키우는 곳"</p>
            <p>
              모든 배움은 선택에 의해 이루어집니다. 정해진 기간 내에 어떤 규칙을
              따를지, 무엇을 학습할지 스스로 선택하고 이행하기 때문에 그 결과에
              대한 책임 또한 자신이 지게 됩니다. 이는 과정을 수행하는 동안
              굉장한 몰입감과 만족감을 주었고 후회없는 경험을 선물로 받았습니다.
            </p>
          </div>
          <div className="swiper_slide">
            <Image src={Profileimg2} alt="mainimg" width={48} height={48} />
            <p>"동료를 존중하며 함께 자라는 방법을 배울 수 있습니다"</p>
            <p>
              같이 일하고 싶은 개발자가 되고 싶으신 예비 개발자들 분들께
              코드스쿼드 마스터즈 코스를 추천합니다
            </p>
          </div>
          <div className="swiper_slide">
            <Image src={Profileimg3} alt="mainimg" width={48} height={48} />
            <p>“모든 커리큘럼이 개발자로서의 성장에 큰 도움이 됐습니다”</p>
            <p>
              혼자가 아니라 함께였기에 더 많은 것들을 배울 수 있었습니다. 각자의
              방식으로 구현한 과제를 통해 서로가 서로의 성장에 자양분이 되는
              환경이 단기간에 빠른 성장을 하는 계기가 되었습니다. 만약 혼자
              공부했다면 이렇게 빠르게 성장하지 못했을거에요.
            </p>
          </div>
          <div className="swiper_slide">
            <Image src={Profileimg4} alt="mainimg" width={48} height={48} />
            <p>“다양한 경험과 지식을 얻을 수 있는 부트캠프”</p>
            <p>
              앞으로 어떤 방향으로 나아가야 할지 알게 해주는 교육과정이 있었기에
              개발자가 될 수 있었습니다.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{index}</style>
    </BaseLayout>
  );
}

const index = css`
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

// Home.getInitialProps = (ctx: NextPageContext) => {
//   // const router = useRouter();
//   const { tokens } = cookies(ctx);

//   if (!tokens || tokens === '') {
//     if (ctx.req && ctx.res) {
//       ctx.res.writeHead(302, { Location: '/login' });
//       ctx.res.end();
//     } else {
//       // router.push('/login');
//       console.log('test');
//     }
//   }

//   return { tokens };
// };

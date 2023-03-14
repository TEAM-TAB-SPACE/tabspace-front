import Link from 'next/link';
import variables from '../../styles/variables.module.scss';
import layout from '../../styles/layout.module.scss';

function DashboardLatest() {
  const videoId = 'FBNlr2RMf1k';

  return (
    <>
      <div className="dashboard__latest">
        <div className="latest__wrapper">
          <Link
            href={`/lecture/${videoId}`}
            className={`latest__link ${layout.flex_center}`}
          >
            이어보기
          </Link>
          <div className="latest__img"></div>
        </div>
      </div>
      <style jsx global>{`
        .dashboard__latest {
          position: relative;
          padding-bottom: 56.25%;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .latest {
          &__wrapper {
            display: block;
            width: 100%;
            height: 100%;
          }

          &__img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            color: ${variables.white};
            background: url(${`http://img.youtube.com/vi/${videoId}/0.jpg`})
              no-repeat;
            background-size: cover;
            background-position: center center;
            filter: brightness(70%);
          }

          &__link {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-weight: 700;
            color: ${variables.white};

            &:hover {
              color: ${variables.white};
            }
          }

          &__link:hover + &__img {
            transform: scale(1.1);
            transition: transform 0.5s, filter 0.5s;
            filter: brightness(45%);
          }
        }
      `}</style>
    </>
  );
}

export default DashboardLatest;

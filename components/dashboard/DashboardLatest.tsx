import Link from 'next/link';
import variables from '../../styles/variables.module.scss';
import layout from '../../styles/layout.module.scss';
import SpinCircle from '../common/SpinCircle';
import useFetch from '../../hooks/useFetch';
import { API_URL_DASHBOARD } from '../../pages/api/dashboard';

function DashboardLatest() {
  const { isLoading, data } = useFetch({ url: API_URL_DASHBOARD.LATEST });
  const { videoId } = data ? data : { videoId: '' };

  if (isLoading)
    return <SpinCircle style={{ width: '100%', height: '250px' }} />;

  if (!videoId)
    return (
      <div
        className={`${layout.flex_center} latest__notFound`}
        style={{
          width: '100%',
          height: '250px',
          color: variables.textSecondaryColor,
        }}
      >
        최근 수강 강의가 없습니다.
      </div>
    );

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
          width: 100%;
          max-width: 400px;
          overflow: hidden;
        }

        .latest {
          &__wrapper {
            position: relative;
            padding-bottom: 56.25%;
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

          &__notFound {
            background-color: red;
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}

export default DashboardLatest;
